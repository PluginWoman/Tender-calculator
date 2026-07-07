import React from 'react';
import './header-button.css';
interface HeaderButtonProps {
    /** Текст кнопки */
    children: React.ReactNode;
    /** Иконка слева от текста */
    icon?: React.ReactNode;
    /** Визуальный стиль: основное, второстепенное или деструктивное действие
     * @default "primary" */
    variant?: 'primary' | 'secondary' | 'danger';
    /** Блокирует кнопку
     * @default false */
    isDisabled?: boolean;
    /** Показывает спиннер и блокирует кнопку
     * @default false */
    isLoading?: boolean;
    /** Колбэк при нажатии */
    onClick?: () => void;
}
/**
 * Кнопка или группа кнопок, располагается в верхней части экрана под заголовком.
 * Используется для совершения основных или востребованных в контексте экрана действий.
 */
export declare const HeaderButton: React.FC<HeaderButtonProps>;
export {};
