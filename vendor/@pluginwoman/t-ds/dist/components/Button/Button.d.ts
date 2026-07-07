import React from 'react';
import './button.css';
interface ButtonProps {
    /** Текст или содержимое кнопки */
    children: React.ReactNode;
    /** Визуальный стиль кнопки
     * @default "primary" */
    variant?: 'primary' | 'secondary' | 'transparent' | 'white';
    /** Размер кнопки
     * @default "m" */
    size?: 'xl' | 'l' | 'm' | 's' | 'xs';
    /** Ширина по содержимому вместо фиксированной
     * @default false */
    isHugWidth?: boolean;
    /** Иконка или элемент слева от текста */
    leftAccessory?: React.ReactNode;
    /** Иконка или элемент справа от текста */
    rightAccessory?: React.ReactNode;
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
 * Кнопка — основной интерактивный элемент для запуска действий.
 * Используется во всех сценариях, где пользователю нужно совершить действие:
 * отправить форму, подтвердить операцию, перейти к следующему шагу.
 */
export declare const Button: React.FC<ButtonProps>;
export {};
