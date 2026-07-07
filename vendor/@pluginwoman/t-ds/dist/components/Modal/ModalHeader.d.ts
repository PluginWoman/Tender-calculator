import React from 'react';
import './modal-header.css';
interface ModalHeaderProps {
    /** Заголовок окна */
    title?: React.ReactNode;
    /** Произвольный элемент слева (заменяет стрелку назад) */
    leftAccessory?: React.ReactNode;
    /** Показывает стрелку «назад» слева, если не передан `leftAccessory`
     * @default false */
    hasDefaultBackArrow?: boolean;
    /** Колбэк при клике на левый элемент */
    onLeftAccessoryClick?: () => void;
    /** Колбэк при клике на кнопку закрытия (×) */
    onClose?: () => void;
    /** Вариант шапки:
     * - `default` — стандартная шапка с навигацией и кнопкой закрытия
     * - `empty` — пустой спейсер (десктоп 30px, адаптив 64px)
     * @default "default" */
    variant?: 'default' | 'empty';
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Шапка `Modal` с заголовком, левым аксессуаром и кнопкой закрытия.
 * При скролле контента переключается в компактный режим.
 */
export declare const ModalHeader: React.FC<ModalHeaderProps>;
export {};
