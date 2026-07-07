import React from 'react';
import './cell-right-accessory.css';
export type CellRightAccessoryVariant = 'avatar-m' | 'avatar-s' | 'icon-30' | 'icon-24' | 'icon-18' | 'spinner-34-avatar-s' | 'spinner-24' | 'checkbox' | 'radio' | 'switch' | 'disclosure' | 'text-l-disclosure' | 'text-s-disclosure' | 'badge-disclosure' | 'badge' | 'notification-indicator' | 'text-l' | 'text-m' | 'text-s' | 'text-m-text-xs' | 'table-text-m-text-m' | 'table-text-s-text-s' | 'icon-24-icon-24' | 'text-m-icon-30' | 'text-m-icon-24' | 'text-m-icon-18' | 'stepper' | 'custom';
interface CellRightAccessoryProps {
    /** Вариант аксессуара
     * @default "disclosure" */
    variant?: CellRightAccessoryVariant;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
    /** Произвольный контент. При наличии имеет приоритет над `variant` */
    content?: React.ReactNode;
    /** Основная иконка для иконочных и составных вариантов
     * @default Circle */
    icon?: React.ReactNode;
    /** Вторая иконка для варианта `icon-24-icon-24`
     * @default Circle */
    secondaryIcon?: React.ReactNode;
    /** Основной текст для текстовых вариантов
     * @default "Text" */
    text?: string;
    /** Вторичный текст для составных вариантов
     * @default "Text XS" */
    secondaryText?: string;
    /** Числовое значение для `badge`, `badge-disclosure`, `stepper`
     * @default 0 */
    value?: number;
    /** Состояние для вариантов `checkbox`, `radio`, `switch`
     * @default false */
    isChecked?: boolean;
    /** Блокирует интерактивные варианты
     * @default false */
    isDisabled?: boolean;
    /** Инициалы для вариантов `avatar-m` и `avatar-s`
     * @default "AA" */
    avatarLabel?: string;
    /** Колбэк при изменении для `checkbox`, `radio`, `switch` */
    onCheckedChange?: (next: boolean) => void;
    /** Колбэк при изменении значения для `stepper` */
    onStep?: (delta: number) => void;
}
/**
 * Набор готовых вариантов правого аксессуара для ячеек.
 * Применяется в ячейках списков, формах и других компонентах,
 * где нужен стандартизированный элемент справа: текст, иконка, чекбокс, переключатель, бейдж, стрелка и другие.
 */
export declare const CellRightAccessory: React.FC<CellRightAccessoryProps>;
export {};
