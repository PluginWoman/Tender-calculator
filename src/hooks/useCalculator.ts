import { useState, useEffect, useCallback } from 'react'

const INSURANCE_RATE = 0.30
const BANK_GUARANTEE_RATE = 0.03
const ALT_YIELD_RATE = 0.15
const DAYS_IN_YEAR = 365

const OVERHEAD_NORMS = {
  goods: { base: 'cost' },
  construction: { base: 'cost' },
  it: { base: 'payroll' },
  medical: { base: 'cost' },
  other: { base: 'payroll' },
} as const

export interface Specialist {
  id: string
  role: string
  qty: number
  hours: number
  rate: number
}

export interface CalculatorState {
  purchaseName: string
  purchaseNumber: string
  calcDate: string
  purchaseType: 'goods' | 'service'
  taxSystem: 'osno' | 'usn_income' | 'usn_expense'
  category: 'it' | 'construction' | 'medical' | 'other' | 'goods'
  goodsQty: number
  goodsPrice: number
  goodsCustoms: number
  goodsLogistics: number
  goodsPack: number
  specialists: Specialist[]
  serviceMaterials: number
  serviceRent: number
  serviceLicenses: number
  contractDelivery: number
  contractInstall: number
  contractTravel: number
  contractCert: number
  contractInsurance: number
  contractDocs: number
  overheadPercent: number
  bidSecurityAmount: number
  bidSecurityDays: number
  contractSecurityAmount: number
  contractDurationDays: number
  paymentDelayDays: number
  riskReservePercent: number
  tenderMgmt: number
  warrantyReserve: number
  profitPercent: number
  nmcc: number
}

export interface CalculatorResults {
  directCosts: number
  contractCosts: number
  overheadTotal: number
  specificCosts: number
  fullCost: number
  profitAmount: number
  taxAmount: number
  finalPrice: number
  nmccDiff: number
  nmccDiffPercent: number
  verdict: 'success' | 'caution' | 'danger' | null
  bidSecCost: number
  contSecCost: number
  delayCost: number
  riskAmount: number
}

const DEFAULT_STATE: CalculatorState = {
  purchaseName: '',
  purchaseNumber: '',
  calcDate: new Date().toISOString().split('T')[0],
  purchaseType: 'service',
  taxSystem: 'osno',
  category: 'it',
  goodsQty: 1,
  goodsPrice: 0,
  goodsCustoms: 0,
  goodsLogistics: 0,
  goodsPack: 0,
  specialists: [
    { id: '1', role: 'Руководитель проекта', qty: 1, hours: 1, rate: 2500 },
    { id: '2', role: 'Специалист (Исполнитель)', qty: 1, hours: 1, rate: 1500 },
  ],
  serviceMaterials: 0,
  serviceRent: 0,
  serviceLicenses: 0,
  contractDelivery: 0,
  contractInstall: 0,
  contractTravel: 0,
  contractCert: 0,
  contractInsurance: 0,
  contractDocs: 0,
  overheadPercent: 85,
  bidSecurityAmount: 0,
  bidSecurityDays: 30,
  contractSecurityAmount: 0,
  contractDurationDays: 90,
  paymentDelayDays: 30,
  riskReservePercent: 3,
  tenderMgmt: 0,
  warrantyReserve: 0,
  profitPercent: 15,
  nmcc: 0,
}

function calculate(state: CalculatorState): CalculatorResults {
  let directCosts = 0
  let payrollBase = 0

  if (state.purchaseType === 'goods') {
    directCosts =
      state.goodsQty * state.goodsPrice +
      state.goodsCustoms +
      state.goodsLogistics +
      state.goodsPack
    payrollBase = directCosts
  } else {
    let fop = 0
    state.specialists.forEach((s) => {
      fop += s.qty * s.hours * s.rate
    })
    directCosts = fop * (1 + INSURANCE_RATE) + state.serviceMaterials + state.serviceRent + state.serviceLicenses
    payrollBase = fop
  }

  const contractCosts =
    state.contractDelivery +
    state.contractInstall +
    state.contractTravel +
    state.contractCert +
    state.contractInsurance +
    state.contractDocs

  const usePayroll = OVERHEAD_NORMS[state.category].base === 'payroll'
  const overheadBase = usePayroll ? payrollBase : directCosts
  const overheadTotal = overheadBase * (state.overheadPercent / 100)

  const bidSecCost =
    state.bidSecurityAmount * (ALT_YIELD_RATE * (state.bidSecurityDays / DAYS_IN_YEAR))
  const contSecCost =
    state.contractSecurityAmount * (BANK_GUARANTEE_RATE * (state.contractDurationDays / DAYS_IN_YEAR))

  const costBeforeDelay = directCosts + contractCosts + overheadTotal + bidSecCost + contSecCost
  const delayCost = costBeforeDelay * (ALT_YIELD_RATE * (state.paymentDelayDays / DAYS_IN_YEAR))

  const costForRisk = costBeforeDelay + delayCost
  const riskAmount = costForRisk * (state.riskReservePercent / 100)

  const specificCosts =
    bidSecCost + contSecCost + delayCost + riskAmount + state.tenderMgmt + state.warrantyReserve

  const fullCost = directCosts + contractCosts + overheadTotal + specificCosts
  const profitAmount = fullCost * (state.profitPercent / 100)
  const priceBeforeTax = fullCost + profitAmount

  let taxAmount = 0
  let finalPrice = 0

  if (state.taxSystem === 'osno') {
    taxAmount = priceBeforeTax * 0.2
    finalPrice = priceBeforeTax + taxAmount
  } else if (state.taxSystem === 'usn_income') {
    finalPrice = priceBeforeTax / 0.94
    taxAmount = finalPrice - priceBeforeTax
  } else {
    taxAmount = profitAmount * 0.15
    finalPrice = priceBeforeTax + taxAmount
  }

  let nmccDiff = 0
  let nmccDiffPercent = 0
  let verdict: 'success' | 'caution' | 'danger' | null = null

  if (state.nmcc > 0) {
    nmccDiff = state.nmcc - finalPrice
    nmccDiffPercent = (nmccDiff / state.nmcc) * 100
    verdict = nmccDiff >= 0 ? (nmccDiffPercent > 5 ? 'success' : 'caution') : 'danger'
  }

  return {
    directCosts,
    contractCosts,
    overheadTotal,
    specificCosts,
    fullCost,
    profitAmount,
    taxAmount,
    finalPrice,
    nmccDiff,
    nmccDiffPercent,
    verdict,
    bidSecCost,
    contSecCost,
    delayCost,
    riskAmount,
  }
}

const STORAGE_KEY = 'tender-calculator-state'

function loadState(): CalculatorState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...DEFAULT_STATE, ...JSON.parse(raw) }
  } catch {}
  return DEFAULT_STATE
}

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>(loadState)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {}
  }, [state])

  const update = useCallback((partial: Partial<CalculatorState>) => {
    setState((prev) => ({ ...prev, ...partial }))
  }, [])

  const addSpecialist = useCallback(() => {
    setState((prev) => ({
      ...prev,
      specialists: [
        ...prev.specialists,
        { id: String(Date.now()), role: '', qty: 1, hours: 1, rate: 0 },
      ],
    }))
  }, [])

  const removeSpecialist = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      specialists: prev.specialists.filter((s) => s.id !== id),
    }))
  }, [])

  const updateSpecialist = useCallback(
    (id: string, partial: Partial<Omit<Specialist, 'id'>>) => {
      setState((prev) => ({
        ...prev,
        specialists: prev.specialists.map((s) =>
          s.id === id ? { ...s, ...partial } : s
        ),
      }))
    },
    []
  )

  return {
    state,
    results: calculate(state),
    update,
    addSpecialist,
    removeSpecialist,
    updateSpecialist,
  }
}
