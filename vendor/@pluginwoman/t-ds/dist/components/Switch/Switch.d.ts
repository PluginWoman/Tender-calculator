import React from 'react';
import './switch.css';
interface SwitchProps {
    /** Переводит переключатель во включённое состояние
     * @default false */
    isSelected?: boolean;
    /** Блокирует переключатель
     * @default false */
    isDisabled?: boolean;
    /** Колбэк при переключении, передаёт новое значение */
    onChange?: (isSelected: boolean) => void;
    /** Aria-метка для доступности */
    label?: string;
    /** Инлайн-стили для кастомизации */
    style?: React.CSSProperties;
}
/**
 * Компонент для быстрого переключения между двумя возможными состояниями.
 */
export declare const Switch: React.FC<SwitchProps>;
export {};
