import { Fragment, useRef, useEffect, useCallback, useState } from 'react'
import { Widget, Input, Dropdown, Cell, CellLeftAccessory, CellRightAccessory, Table, TableCell, ActionFormCell, ContextualNotification } from '@pluginwoman/t-ds'
import { Plus, Trash, Checkmark } from '@pluginwoman/t-ds/icons'
import { InformationCircle } from '@pluginwoman/t-ds/icons/20/Filled'
import { ChevronDown as ChevronDownFilled } from '@pluginwoman/t-ds/icons/12/Filled'
import type { CalculatorState, Specialist, GoodsItem } from '../../hooks/useCalculator'
import styles from './CalculatorForm.module.css'

interface Props {
  state: CalculatorState
  update: (partial: Partial<CalculatorState>) => void
  addSpecialist: () => void
  removeSpecialist: (id: string) => void
  updateSpecialist: (id: string, partial: Partial<Omit<Specialist, 'id'>>) => void
  addGoodsItem: () => void
  removeGoodsItem: (id: string) => void
  updateGoodsItem: (id: string, partial: Partial<Omit<GoodsItem, 'id'>>) => void
}


import { ARTICLE_CONFIG, CATEGORY_OPTIONS, OVERHEAD_NORMS, PURCHASE_TYPE_OPTIONS, RESERVE_HINTS, TAX_OPTIONS, type ArticleKey } from '../../constants/calculator'

const MENU_CELL_H = 40
const MENU_MAX_H = 280

function ArticlePickerCell({
  value,
  options,
  onChange,
}: {
  value: ArticleKey
  options: { value: ArticleKey; label: string }[]
  onChange: (v: ArticleKey) => void
}) {
  const [open, setOpen] = useState(false)
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0, width: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)
  const label = ARTICLE_CONFIG.find(a => a.key === value)!.label

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    const menuH = Math.min(options.length * MENU_CELL_H, MENU_MAX_H)
    const fitsBelow = rect.bottom + menuH <= window.innerHeight
    setMenuPos({
      top: fitsBelow ? rect.bottom : rect.top - menuH,
      left: rect.left,
      width: rect.width,
    })
  }, [options.length])

  const handleToggle = () => {
    if (!open) updatePosition()
    setOpen(o => !o)
  }

  useEffect(() => {
    if (!open) return
    const handleOutside = (e: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [open, updatePosition])

  return (
    <div ref={triggerRef} className={styles.articlePickerCell}>
      <div style={{ cursor: 'pointer', height: '100%' }} onClick={handleToggle}>
        <TableCell
          title={label}
          hasRightAccessory
          rightAccessory={
            <span className="ds-icon ds-icon--12" style={{ color: 'var(--primitive-neutral-4)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>
              <ChevronDownFilled />
            </span>
          }
        />
      </div>
      {open && (
        <div className="ds-scroll-area" style={{
          position: 'fixed',
          top: menuPos.top,
          left: menuPos.left,
          width: menuPos.width,
          zIndex: 1000,
          background: 'var(--popup-primary)',
          borderRadius: 'var(--rounding-3x)',
          boxShadow: 'var(--Popout)',
          padding: 'var(--spacing-3x) var(--spacing-5x)',
          maxHeight: '280px',
          overflowY: 'auto',
          overscrollBehavior: 'contain',
        }}>
          {options.map(opt => (
            <Cell
              key={opt.value}
              title={opt.label}
              titleClassName="ts-400-m"
              hasLeftAccessory={false}
              hasRightAccessory
              rightAccessory={
                opt.value === value
                  ? <span className="dropdown-popup__checkmark"><Checkmark /></span>
                  : <span style={{ display: 'block', width: 24 }} />
              }
              onClick={() => { onChange(opt.value); setOpen(false) }}
            />
          ))}
        </div>
      )}
    </div>
  )
}


function SelectDropdown<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: { value: T; label: string }[]
  onChange: (v: T) => void
}) {
  const currentLabel = options.find((o) => o.value === value)?.label ?? ''
  return (
    <Dropdown label={label} value={currentLabel} hasHelpIcon={false}>
      {options.map((opt) => (
        <Cell
          key={opt.value}
          title={opt.label}
          titleClassName="ts-400-m"
          hasLeftAccessory={false}
          hasRightAccessory={opt.value === value}
          rightAccessory={
            opt.value === value ? (
              <CellRightAccessory
                variant="icon-24"
                icon={<Checkmark />}
                className={styles.successIcon}
              />
            ) : undefined
          }
          onClick={() => onChange(opt.value)}
        />
      ))}
    </Dropdown>
  )
}

function FormBlock({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Widget title={title} hasChevron={false} hasRightAccessory={false} minContentHeight={0}>
      <div className={styles.blockContent}>{children}</div>
    </Widget>
  )
}

function FormRow({ children }: { children: React.ReactNode }) {
  return <div className={styles.formRow}>{children}</div>
}


export default function CalculatorForm({
  state,
  update,
  addSpecialist,
  removeSpecialist,
  updateSpecialist,
  addGoodsItem,
  removeGoodsItem,
  updateGoodsItem,
}: Props) {
  const tableRef = useRef<HTMLDivElement>(null)
  const goodsTableRef = useRef<HTMLDivElement>(null)
  const prevSpecCountRef = useRef(state.specialists.length)
  const prevGoodsCountRef = useRef(state.goods.length)

  useEffect(() => {
    if (state.specialists.length > prevSpecCountRef.current && tableRef.current) {
      const inputs = tableRef.current.querySelectorAll<HTMLInputElement>('input')
      const idx = (state.specialists.length - 1) * 4
      inputs[idx]?.focus()
    }
    prevSpecCountRef.current = state.specialists.length
  }, [state.specialists.length])

  useEffect(() => {
    if (state.goods.length > prevGoodsCountRef.current && goodsTableRef.current) {
      const inputs = goodsTableRef.current.querySelectorAll<HTMLInputElement>('input')
      const idx = (state.goods.length - 1) * 6
      inputs[idx]?.focus()
    }
    prevGoodsCountRef.current = state.goods.length
  }, [state.goods.length])

  const handleAddSpecialist = useCallback(() => {
    addSpecialist()
  }, [addSpecialist])

  const [showEisNotification, setShowEisNotification] = useState(true)

  const [activeArticles, setActiveArticles] = useState<ArticleKey[]>(() =>
    ARTICLE_CONFIG
      .filter(a => (state[a.stateKey] as number) > 0)
      .map(a => a.key)
  )

  const handleAddArticle = useCallback(() => {
    const next = ARTICLE_CONFIG.find(a => !activeArticles.includes(a.key))
    if (!next) return
    setActiveArticles(prev => [...prev, next.key])
  }, [activeArticles])

  const handleRemoveArticle = useCallback((key: ArticleKey) => {
    const cfg = ARTICLE_CONFIG.find(a => a.key === key)!
    update({ [cfg.stateKey]: 0 })
    setActiveArticles(prev => prev.filter(k => k !== key))
  }, [update])

  const handleChangeArticle = useCallback((oldKey: ArticleKey, newKey: ArticleKey) => {
    const oldCfg = ARTICLE_CONFIG.find(a => a.key === oldKey)!
    update({ [oldCfg.stateKey]: 0 })
    setActiveArticles(prev => prev.map(k => k === oldKey ? newKey : k))
  }, [update])

  return (
    <>
      {/* Block 0: Identification */}
      <FormBlock title="Идентификация закупки">
        <div className={styles.costGroupsContainer}>
          <div className={styles.blockContent}>
            <p className="ts-500-s">Закупка</p>
            <FormRow>
              <Input
                label="Название закупки"
                value={state.purchaseName}
                placeholder="Введите название закупки"
                onChange={(v) => update({ purchaseName: v })}
              />
              <Input
                label="Номер в ЕИС"
                value={state.purchaseNumber}
                placeholder="03732000..."
                onChange={(v) => update({ purchaseNumber: v })}
              />
            </FormRow>
            {showEisNotification && (
              <ContextualNotification
                title="Не знаете номер ЕИС?"
                text="Найдите закупку бесплатно в Точка Закупки."
                hasAction
                icon={<span className="ds-icon ds-icon--m" style={{ color: 'var(--primitive-brand)' }}><InformationCircle /></span>}
                actionLabel="Найти тендер"
                onActionClick={() => window.open('https://zakupki.tochka.com/search/', '_blank')}
                hasCloseIcon
                onClose={() => setShowEisNotification(false)}
                size='m'
              />
            )}
            <FormRow>
              <SelectDropdown
                label="Тип предмета закупки"
                value={state.purchaseType}
                options={PURCHASE_TYPE_OPTIONS}
                onChange={(v) => {
                  update({
                    purchaseType: v as 'goods' | 'service',
                    category: v === 'goods' ? 'goods' : 'other',
                    overheadPercent: v === 'goods' ? 12.5 : 20,
                  })
                }}
              />
              <SelectDropdown
                label="Категория (для нормативов)"
                value={state.category}
                options={CATEGORY_OPTIONS}
                onChange={(v) => {
                  const n = OVERHEAD_NORMS[v]
                  update({ category: v as 'goods' | 'it' | 'construction' | 'medical' | 'other', overheadPercent: (n.min + n.max) / 2 })
                }}
              />
              <div />
            </FormRow>
          </div>
          <div className={styles.blockContent}>
            <p className="ts-500-s">Параметры расчёта</p>
            <FormRow>
              <Input
                label="НМЦК заказчика"
                hasHelpIcon
                format="currency"
                value={state.nmcc || null}
                placeholder="Введите НМЦК из ЕИС"
                onValueChange={(v) => update({ nmcc: v ?? 0 })}
                helpText="Начальная (максимальная) цена контракта, указанная в документации закупки"
              />
              <Input
                  label="Целевая рентабельность"
                  format="percent"
                  value={state.profitPercent || null}
                  placeholder="Рекомендуем 10–20%"
                  onValueChange={(v) => update({ profitPercent: v ?? 0 })}
                />
            </FormRow>
              <SelectDropdown
                label="Система налогообложения"
                value={state.taxSystem}
                options={TAX_OPTIONS}
                onChange={(v) => update({ taxSystem: v as 'osno' | 'usn_income' | 'usn_expense' })}
              />
          </div>
        </div>
      </FormBlock>

      {/* Block 1A: Goods */}
      {state.purchaseType === 'goods' && (
        <FormBlock title="Прямые затраты">
          <div className={styles.costGroupsContainer}>
            <div className={styles.blockContent}> 
              <p className="ts-500-s">Товары</p>
              {state.goods.length > 0 && (
                <div ref={goodsTableRef}>
                  <Table gridTemplateColumns="2fr 80px 124px 124px 124px 124px 64px">
                    <TableCell title="Название" titleStyle="600" backgroundColor="var(--bg-neutral-1)" />
                    <TableCell title="Ед." titleStyle="600" backgroundColor="var(--bg-neutral-1)" className={styles.rateCell} />
                    <TableCell title="Цена" titleStyle="600" backgroundColor="var(--bg-neutral-1)" className={styles.rateCell} />
                    <TableCell title="Таможня" titleStyle="600" backgroundColor="var(--bg-neutral-1)" className={styles.rateCell} />
                    <TableCell title="Транспорт" titleStyle="600" backgroundColor="var(--bg-neutral-1)" className={styles.rateCell} />
                    <TableCell title="Упаковка" titleStyle="600" backgroundColor="var(--bg-neutral-1)" className={styles.rateCell} />
                    <TableCell title="" backgroundColor="var(--bg-neutral-1)" />
                    {state.goods.map((g) => (
                      <Fragment key={g.id}>
                        <TableCell isEdit title={g.name} placeholder="Название товара" onTitleChange={(v) => updateGoodsItem(g.id, { name: v })} />
                        <TableCell isEdit editFormat="number" title={String(g.qty || '')} className={styles.rateCell} placeholder="1" onEditValueChange={(v) => updateGoodsItem(g.id, { qty: v ?? 1 })} />
                        <TableCell
                          isEdit editFormat="currency" title={String(g.price || '')} placeholder="0" className={styles.rateCell}
                          onEditValueChange={(v) => updateGoodsItem(g.id, { price: v ?? 0 })}
                        />
                        <TableCell
                          isEdit editFormat="currency" title={String(g.customs || '')} placeholder="0" className={styles.rateCell}
                          onEditValueChange={(v) => updateGoodsItem(g.id, { customs: v ?? 0 })}
                        />
                        <TableCell
                          isEdit editFormat="currency" title={String(g.logistics || '')} placeholder="0" className={styles.rateCell}
                          onEditValueChange={(v) => updateGoodsItem(g.id, { logistics: v ?? 0 })}
                        />
                        <TableCell
                          isEdit editFormat="currency" title={String(g.pack || '')} placeholder="0" className={styles.rateCell}
                          onEditValueChange={(v) => updateGoodsItem(g.id, { pack: v ?? 0 })}
                        />
                        <TableCell hasTitle={false} hasRightAccessory className={styles.deleteCell}
                          rightAccessory={
                            <span className="ds-icon ds-icon--m hoverOpacity" style={{ color: 'var(--primitive-neutral-4)', cursor: 'pointer' }} onClick={() => removeGoodsItem(g.id)}>
                              <Trash />
                            </span>
                          }
                        />
                      </Fragment>
                    ))}
                  </Table>
                </div>
              )}
              <ActionFormCell
                title="Добавить товар"
                left={<span className="ds-icon ds-icon--m" style={{ color: 'var(--primitive-brand)' }}><Plus /></span>}
                onClick={addGoodsItem}
              />
            </div>

            <div className={styles.blockContent}>
              <p className="ts-500-s">Прочие затраты</p>
              {activeArticles.length > 0 && (
                <div>
                  <Table gridTemplateColumns="1fr 160px 64px">
                    <TableCell title="Статья" titleStyle="600" backgroundColor="var(--bg-neutral-1)" />
                    <TableCell title="Сумма" titleStyle="600" backgroundColor="var(--bg-neutral-1)" className={styles.rateCell} />
                    <TableCell title="" backgroundColor="var(--bg-neutral-1)" />
                    {activeArticles.map((key) => {
                      const cfg = ARTICLE_CONFIG.find(a => a.key === key)!
                      const opts = ARTICLE_CONFIG
                        .filter(a => a.key === key || !activeArticles.includes(a.key))
                        .map(a => ({ value: a.key, label: a.label }))
                      return (
                        <Fragment key={key}>
                          <ArticlePickerCell value={key} options={opts} onChange={(v) => handleChangeArticle(key, v)} />
                          <TableCell
                            isEdit
                            editFormat="currency"
                            title={String((state[cfg.stateKey] as number) || '')}
                            placeholder="0"
                            className={styles.rateCell}
                            onEditValueChange={(v) => update({ [cfg.stateKey]: v ?? 0 })}
                          />
                          <TableCell hasTitle={false} hasRightAccessory className={styles.deleteCell}
                            rightAccessory={
                              <span className="ds-icon ds-icon--m hoverOpacity" style={{ color: 'var(--primitive-neutral-4)', cursor: 'pointer' }} onClick={() => handleRemoveArticle(key)}>
                                <Trash />
                              </span>
                            }
                          />
                        </Fragment>
                      )
                    })}
                  </Table>
                </div>
              )}
              {activeArticles.length < ARTICLE_CONFIG.length && (
                <ActionFormCell
                  title="Добавить статью"
                  left={<span className="ds-icon ds-icon--m" style={{ color: 'var(--primitive-brand)' }}><Plus /></span>}
                  onClick={handleAddArticle}
                />
              )}
            </div>
          </div>
        </FormBlock>
      )}

      {/* Block 1B: Services */}
      {state.purchaseType === 'service' && (
        <FormBlock title="Прямые затраты">
          <div className={styles.costGroupsContainer}>

            <div className={styles.blockContent}>
              <p className="ts-500-s">Трудозатраты (ФОТ)</p>
              {state.specialists.length > 0 && (
                <div ref={tableRef}>
                  <Table gridTemplateColumns="1fr 96px 96px 160px 64px">
                    <TableCell title="Профессия / Роль" titleStyle="600" backgroundColor="var(--bg-neutral-1)" />
                    <TableCell title="Чел." titleStyle="600" backgroundColor="var(--bg-neutral-1)" className={styles.rateCell} />
                    <TableCell title="Часов" titleStyle="600" backgroundColor="var(--bg-neutral-1)" className={styles.rateCell} />
                    <TableCell title="Ставка ₽/час" titleStyle="600" backgroundColor="var(--bg-neutral-1)" className={styles.rateCell} />
                    <TableCell title="" backgroundColor="var(--bg-neutral-1)" />
                    {state.specialists.map((s) => (
                      <Fragment key={s.id}>
                        <TableCell isEdit title={s.role} placeholder="Должность" onTitleChange={(v) => updateSpecialist(s.id, { role: v })} />
                        <TableCell isEdit editFormat="number" title={String(s.qty || '')} className={styles.rateCell} placeholder="1" onEditValueChange={(v) => updateSpecialist(s.id, { qty: v ?? 1 })} />
                        <TableCell isEdit editFormat="number" title={String(s.hours || '')} className={styles.rateCell} placeholder="1" onEditValueChange={(v) => updateSpecialist(s.id, { hours: v ?? 1 })} />
                        <TableCell
                          isEdit editFormat="currency" title={String(s.rate || '')} placeholder="0" className={styles.rateCell}
                          onEditValueChange={(v) => updateSpecialist(s.id, { rate: v ?? 0 })}
                        />
                        <TableCell hasTitle={false} hasRightAccessory className={styles.deleteCell}
                          rightAccessory={
                            <span className="ds-icon ds-icon--m hoverOpacity" style={{ color: 'var(--primitive-neutral-4)', cursor: 'pointer' }} onClick={() => removeSpecialist(s.id)}>
                              <Trash />
                            </span>
                          }
                        />
                      </Fragment>
                    ))}
                  </Table>
                </div>
              )}
              <ActionFormCell
                title="Добавить специалиста"
                left={<span className="ds-icon ds-icon--m" style={{ color: 'var(--primitive-brand)' }}><Plus /></span>}
                onClick={handleAddSpecialist}
              />
            </div>

            <div className={styles.blockContent}>
              <p className="ts-500-s">Прочие затраты</p>
              {activeArticles.length > 0 && (
                <div>
                  <Table gridTemplateColumns="1fr 160px 64px">
                    <TableCell title="Статья" titleStyle="600" backgroundColor="var(--bg-neutral-1)" />
                    <TableCell title="Сумма" titleStyle="600" backgroundColor="var(--bg-neutral-1)" className={styles.rateCell} />
                    <TableCell title="" backgroundColor="var(--bg-neutral-1)" />
                    {activeArticles.map((key) => {
                      const cfg = ARTICLE_CONFIG.find(a => a.key === key)!
                      const opts = ARTICLE_CONFIG
                        .filter(a => a.key === key || !activeArticles.includes(a.key))
                        .map(a => ({ value: a.key, label: a.label }))
                      return (
                        <Fragment key={key}>
                          <ArticlePickerCell value={key} options={opts} onChange={(v) => handleChangeArticle(key, v)} />
                          <TableCell
                            isEdit
                            editFormat="currency"
                            title={String((state[cfg.stateKey] as number) || '')}
                            placeholder="0"
                            className={styles.rateCell}
                            onEditValueChange={(v) => update({ [cfg.stateKey]: v ?? 0 })}
                          />
                          <TableCell hasTitle={false} hasRightAccessory className={styles.deleteCell}
                            rightAccessory={
                              <span className="ds-icon ds-icon--m hoverOpacity" style={{ color: 'var(--primitive-neutral-4)', cursor: 'pointer' }} onClick={() => handleRemoveArticle(key)}>
                                <Trash />
                              </span>
                            }
                          />
                        </Fragment>
                      )
                    })}
                  </Table>
                </div>
              )}
              {activeArticles.length < ARTICLE_CONFIG.length && (
                <ActionFormCell
                  title="Добавить статью"
                  left={<span className="ds-icon ds-icon--m" style={{ color: 'var(--primitive-brand)' }}><Plus /></span>}
                  onClick={handleAddArticle}
                />
              )}
            </div>

          </div>
        </FormBlock>
      )}

      {/* Block 3: Overhead */}
      <FormBlock title="Накладные расходы">
        <Input
          label="Коэффициент"
          hasHelpIcon
          helpText={
            <>
              <p>Это административные и организационные расходы, не связанные напрямую с выполнением конкретного контракта: аренда, бухгалтерия, связь и т.д.</p>
              <p style={{ marginTop: '8px' }}>
                {state.purchaseType === 'goods'
                  ? 'Коэффициент рассчитывается от суммы прямых затрат по контракту.'
                  : 'Коэффициент рассчитывается от ФОТ специалистов.'}
              </p>
            </>
          }
          format="percent"
          value={state.overheadPercent || null}
          onValueChange={(v) => update({ overheadPercent: v ?? 0 })}
          description={`Для категории ${CATEGORY_OPTIONS.find(o => o.value === state.category)?.label} рекомендуем: ${OVERHEAD_NORMS[state.category].min}–${OVERHEAD_NORMS[state.category].max}%`}
        />
      </FormBlock>

      {/* Block 4: Specifics */}
      <FormBlock title="Специфические затраты и риски">
        <FormRow>
          <Input
            label="Обеспечение заявки"
            placeholder="0 ₽"
            format="currency"
            value={state.bidSecurityAmount || null}
            onValueChange={(v) => update({ bidSecurityAmount: v ?? 0 })}
          />
          <Input
            label="Срок заморозки"
            format="number"
            suffix=" дней"
            value={state.bidSecurityDays || null}
            onValueChange={(v) => update({ bidSecurityDays: v ?? 0 })}
          />
        </FormRow>
        <FormRow>
          <Input
            label="Обеспечение контракта"
            placeholder="0 ₽"
            format="currency"
            value={state.contractSecurityAmount || null}
            onValueChange={(v) => update({ contractSecurityAmount: v ?? 0 })}
          />
          <Input
            label="Срок контракта"
            format="number"
            suffix=" дней"
            value={state.contractDurationDays || null}
            onValueChange={(v) => update({ contractDurationDays: v ?? 0 })}
          />
        </FormRow>
          <Input
            label="Отсрочка платежа"
            placeholder="Введите количество дней"
            format="number"
            suffix=" дней"
            value={state.paymentDelayDays || null}
            onValueChange={(v) => update({ paymentDelayDays: v ?? 0 })}
          />

        <FormRow>
          <Input
            label="Резерв на непредвиденные расходы"
            placeholder="0%"
            format="percent"
            description={RESERVE_HINTS[state.category]?.risk}
            value={state.riskReservePercent || null}
            onValueChange={(v) => update({ riskReservePercent: v ?? 0 })}
          />
          <Input
            label="Резерв на гарантийные обязательства"
            hasHelpIcon
            helpText="Деньги на устранение дефектов в течение гарантийного периода"
            placeholder="0 ₽"
            format="currency"
            description={RESERVE_HINTS[state.category]?.warranty}
            value={state.warrantyReserve || null}
            onValueChange={(v) => update({ warrantyReserve: v ?? 0 })}
          />
        </FormRow>
          <Input
            label="Тендерный менеджмент"
            placeholder="0 ₽"
            format="currency"
            value={state.tenderMgmt || null}
            onValueChange={(v) => update({ tenderMgmt: v ?? 0 })}
          />
      </FormBlock>
      <Cell
        title="Загрузить файлы"
        description="PDF, XLSX, PNG — до 10 МБ"
        hasLeftAccessory
        leftAccessory={<CellLeftAccessory variant="add-button" icon={<Plus />} />}
        hasRightAccessory={false}
      />



    </>
  )
}
