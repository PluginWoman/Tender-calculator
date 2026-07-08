import { pdf } from '@react-pdf/renderer'
import { createElement } from 'react'
import type { CalculatorState, CalculatorResults } from '../../hooks/useCalculator'
import TenderReport from './TenderReport'

function makeSlug(state: CalculatorState): string {
  const raw = (state.purchaseName || state.purchaseNumber || 'без_названия').trim()
  return raw
    .replace(/[^\p{L}\p{N}]+/gu, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 40) || 'без_названия'
}

export async function generatePdf(state: CalculatorState, results: CalculatorResults): Promise<void> {
  const doc = createElement(TenderReport, { state, results })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blob = await pdf(doc as any).toBlob()
  const slug = makeSlug(state)
  const filename = `Расчёт_тендера_${slug}_${state.calcDate}.pdf`
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
