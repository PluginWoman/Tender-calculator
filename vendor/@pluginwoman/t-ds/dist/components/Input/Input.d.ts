import React from 'react';
import './input.css';
export interface InputProps {
    /** Подпись над полем */
    label?: string;
    /** Вспомогательный текст под полем */
    description?: string;
    /** Текст ошибки (заменяет `description` при `isError=true`) */
    errorMessage?: string;
    /** Текст-заглушка при пустом поле */
    placeholder?: string;
    /** Управляемое значение. Если передан — компонент переходит в controlled mode */
    value?: string | number | null;
    /** Колбэк при изменении строкового значения (без format) */
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
    /** Включает числовой режим с форматированием */
    format?: 'number' | 'currency' | 'percent';
    /** Суффикс (переопределяет дефолт формата) */
    suffix?: string;
    /** Количество знаков после запятой (переопределяет дефолт формата) */
    decimalScale?: number;
    /** Разрешить отрицательные числа
     * @default false */
    allowNegative?: boolean;
    /** Колбэк с числовым значением без суффикса (только при format) */
    onValueChange?: (value: number | null) => void;
}
/**
 * Текстовое поле ввода с поддержкой подписи, подсказки, сообщения об ошибке и боковых аксессуаров.
 */
export declare const Input: React.FC<InputProps>;
