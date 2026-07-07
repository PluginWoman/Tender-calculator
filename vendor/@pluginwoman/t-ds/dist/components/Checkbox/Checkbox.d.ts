import React from 'react';
import './checkbox.css';
interface CheckboxProps {
    /** Отмечен ли чекбокс
     * @default false */
    isChecked?: boolean;
    /** Промежуточное состояние (частичный выбор)
     * @default false */
    isIndeterminate?: boolean;
    /** Блокирует чекбокс
     * @default false */
    isDisabled?: boolean;
    /** Колбэк при изменении состояния */
    onChange?: (checked: boolean) => void;
    /** Aria-метка для доступности */
    label?: string;
    /** Инлайн-стили */
    style?: React.CSSProperties;
}
/**
 * Элемент выбора, который позволяет отметить один или несколько вариантов из списка.
 * Используется в формах, фильтрах и настройках, а также для подтверждения согласия с условиями.
 */
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
