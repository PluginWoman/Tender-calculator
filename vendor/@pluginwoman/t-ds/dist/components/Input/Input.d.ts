import React from 'react';
import './input.css';
interface InputProps {
    /** Подпись над полем */
    label?: string;
    /** Вспомогательный текст под полем */
    description?: string;
    /** Текст ошибки (заменяет `description` при `isError=true`) */
    errorMessage?: string;
    /** Текст-заглушка при пустом поле */
    placeholder?: string;
    /** Управляемое значение. Если передан — компонент переходит в controlled mode */
    value?: string;
    /** Колбэк при изменении значения */
    onChange?: (value: string) => void;
    /** Блокирует поле
     * @default false */
    isDisabled?: boolean;
    /** Переводит поле в состояние ошибки
     * @default false */
    isError?: boolean;
    /** Произвольный элемент слева от поля ввода */
    left?: React.ReactNode;
    /** Произвольный элемент справа от поля ввода */
    right?: React.ReactNode;
    /** Показывает иконку-подсказку рядом с подписью
     * @default false */
    hasHelpIcon?: boolean;
    /** Текст тултипа при наведении на иконку-подсказку */
    helpText?: React.ReactNode;
}
/**
 * Текстовое поле ввода с поддержкой подписи, подсказки, сообщения об ошибке и боковых аксессуаров.
 */
export declare const Input: React.FC<InputProps>;
export {};
