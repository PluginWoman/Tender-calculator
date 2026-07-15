import type { CalculatorState } from '../hooks/useCalculator'

export type ArticleKey = 'materials' | 'rent' | 'licenses' | 'delivery' | 'install' | 'travel' | 'cert' | 'insurance' | 'docs'
export type ArticleStateKey = keyof Pick<CalculatorState,
  'serviceMaterials' | 'serviceRent' | 'serviceLicenses' |
  'contractDelivery' | 'contractInstall' | 'contractTravel' |
  'contractCert' | 'contractInsurance' | 'contractDocs'
>

export const ARTICLE_CONFIG: { key: ArticleKey; label: string; stateKey: ArticleStateKey }[] = [
  { key: 'materials', label: 'Материалы',               stateKey: 'serviceMaterials'  },
  { key: 'rent',      label: 'Аренда оборудования',     stateKey: 'serviceRent'       },
  { key: 'licenses',  label: 'Лицензии на ПО',          stateKey: 'serviceLicenses'   },
  { key: 'delivery',  label: 'Доставка до заказчика',   stateKey: 'contractDelivery'  },
  { key: 'install',   label: 'Монтаж / Пусконаладка',   stateKey: 'contractInstall'   },
  { key: 'travel',    label: 'Командировочные расходы',  stateKey: 'contractTravel'    },
  { key: 'cert',      label: 'Сертификация / Испытания', stateKey: 'contractCert'      },
  { key: 'insurance', label: 'Страхование',              stateKey: 'contractInsurance' },
  { key: 'docs',      label: 'Оформление документации', stateKey: 'contractDocs'      },
]

export const PURCHASE_TYPE_OPTIONS = [
  { value: 'goods',   label: 'Товар (Поставка)' },
  { value: 'service', label: 'Работа / Услуга'  },
]

export const TAX_OPTIONS = [
  { value: 'osno',        label: 'ОСНО (НДС 20%)'             },
  { value: 'usn_income',  label: 'УСН «Доходы» (6%)'          },
  { value: 'usn_expense', label: 'УСН «Доходы-Расходы» (15%)' },
]

export const CATEGORY_OPTIONS = [
  { value: 'it',           label: 'IT-услуги'               },
  { value: 'construction', label: 'Строительство / Ремонт'  },
  { value: 'medical',      label: 'Медицина / Оборудование' },
  { value: 'other',        label: 'Прочие услуги'           },
  { value: 'goods',        label: 'Товары'                  },
]

export const RESERVE_HINTS: Record<string, { risk: string; warranty: string }> = {
  construction: { risk: 'Рекомендуемый диапазон: 3–10%', warranty: 'Рекомендуемый диапазон: 2–5%' },
  it:           { risk: 'Рекомендуемый диапазон: 3–5%',  warranty: 'Обычно не требуется' },
  other:        { risk: 'Рекомендуемый диапазон: 2–5%',  warranty: 'Рекомендуемый диапазон: 1–3%' },
  goods:        { risk: 'Рекомендуемый диапазон: 1–3%',  warranty: 'Рекомендуемый диапазон: 0–1%' },
  medical:      { risk: 'Рекомендуемый диапазон: 2–5%',  warranty: 'Рекомендуемый диапазон: 1–3%' },
}

export const OVERHEAD_NORMS: Record<string, { min: number; max: number; base: string }> = {
  goods:        { min: 10, max: 15,  base: 'Прямые затраты'      },
  construction: { min: 15, max: 25,  base: 'Прямые затраты'      },
  it:           { min: 70, max: 100, base: 'ФОТ (Трудозатраты)'  },
  medical:      { min: 20, max: 30,  base: 'Прямые затраты'      },
  other:        { min: 15, max: 25,  base: 'ФОТ (Трудозатраты)'  },
}
