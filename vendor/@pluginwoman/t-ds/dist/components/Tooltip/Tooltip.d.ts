import React from 'react';
import './tooltip.css';
export interface TooltipProps {
    /** Элемент-триггер, при наведении или фокусе на который появляется подсказка */
    trigger: React.ReactNode;
    /** Содержимое подсказки */
    children: React.ReactNode;
    /** Положение подсказки относительно триггера
     * @default "right" */
    placement?: 'right' | 'left';
    /** Контролируемое состояние видимости. Если передан — компонент переходит в controlled mode */
    isOpen?: boolean;
    /** Начальное состояние для неконтролируемого режима
     * @default false */
    defaultOpen?: boolean;
    /** Колбэк при изменении видимости */
    onOpenChange?: (isOpen: boolean) => void;
    /** Дополнительный CSS-класс для обёртки
     * @default "" */
    className?: string;
}
/**
 * Всплывающая подсказка, появляющаяся при наведении или фокусе на элемент-триггер.
 * Применяется для отображения дополнительной информации.
 */
export declare const Tooltip: React.FC<TooltipProps>;
