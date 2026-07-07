import React from 'react';
import './icon-button.css';
export interface IconButtonProps {
    /** Иконка кнопки */
    icon: React.ReactNode;
    /** Aria-метка для доступности */
    ariaLabel: string;
    /** Визуальный стиль кнопки
     * @default "primary" */
    variant?: 'primary' | 'secondary' | 'transparent' | 'white';
    /** Размер кнопки
     * @default "m" */
    size?: 'xl' | 'l' | 'm' | 's' | 'xs';
    /** Показывает спиннер и блокирует кнопку
     * @default false */
    isLoading?: boolean;
    /** Блокирует кнопку
     * @default false */
    isDisabled?: boolean;
    /** Колбэк по клику */
    onClick?: () => void;
    /** HTML-тип кнопки
     * @default "button" */
    type?: 'button' | 'submit' | 'reset';
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Квадратная кнопка с одной иконкой без текста.
 * Используется там, где нужно компактное действие без подписи.
 */
export declare const IconButton: React.FC<IconButtonProps>;
