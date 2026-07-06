export const fmtMoney = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0,
})

export const fmtPercent = (n: number) => n.toFixed(2) + '%'
