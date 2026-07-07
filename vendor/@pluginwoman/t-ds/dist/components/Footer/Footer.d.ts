import React from 'react';
import './footer.css';
export type FooterLayout = '1-button' | '2-buttons-in-line' | '3-buttons' | 'page-control-button' | 'stepper-button';
export interface FooterAction {
    /** Текст кнопки */
    label: string;
    /** Колбэк по клику */
    onClick?: () => void;
    /** Блокирует кнопку */
    isDisabled?: boolean;
    /** Показывает спиннер */
    isLoading?: boolean;
}
export interface FooterIconAction {
    /** Иконка кнопки
     * @default Circle */
    icon?: React.ReactNode;
    /** Aria-метка для доступности */
    ariaLabel: string;
    /** Колбэк по клику */
    onClick?: () => void;
    /** Блокирует кнопку */
    isDisabled?: boolean;
}
export interface FooterProps {
    /** Вариант компоновки футера
     * @default "1-button" */
    layout?: FooterLayout;
    /** Текст над кнопками (только для `1-button`, `2-buttons-in-line`, `3-buttons`) */
    description?: React.ReactNode;
    /** Основная кнопка
     * @default { label: 'Действие' } */
    primaryAction?: FooterAction;
    /** Вторичная кнопка (для `2-buttons-in-line` и `3-buttons`)
     * @default { label: 'Действие' } */
    secondaryAction?: FooterAction;
    /** Иконочная кнопка слева (только для `3-buttons`) */
    iconAction?: FooterIconAction;
    /** Значение степпера (только для `stepper-button`)
     * @default "00" */
    stepperValue?: React.ReactNode;
    /** Колбэк при нажатии кнопки уменьшения степпера */
    onStepperDecrease?: () => void;
    /** Колбэк при нажатии кнопки увеличения степпера */
    onStepperIncrease?: () => void;
    /** Блокирует кнопку уменьшения степпера
     * @default false */
    isStepperDecreaseDisabled?: boolean;
    /** Блокирует кнопку увеличения степпера
     * @default false */
    isStepperIncreaseDisabled?: boolean;
    /** Количество точек пагинации (только для `page-control-button`)
     * @default 3 */
    pageControlCount?: number;
    /** Активная точка пагинации (только для `page-control-button`)
     * @default 0 */
    pageControlValue?: number;
    /** Колбэк при переключении страницы пагинации */
    onPageControlChange?: (index: number) => void;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
export interface FooterIconButtonProps {
    /** Иконка кнопки
     * @default Circle */
    icon?: React.ReactNode;
    /** Aria-метка для доступности */
    ariaLabel: string;
    /** Колбэк по клику */
    onClick?: () => void;
    /** Блокирует кнопку
     * @default false */
    isDisabled?: boolean;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Иконочная кнопка для использования в `Footer` с вариантом `3-buttons`.
 */
export declare const FooterIconButton: React.FC<FooterIconButtonProps>;
/**
 * Фиксированный подвал страницы с кнопками основного действия.
 * Поддерживает варианты с одной или двумя кнопками, иконочной кнопкой, степпером или пагинацией.
 */
export declare const Footer: React.FC<FooterProps>;
