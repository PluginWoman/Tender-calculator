import React from 'react';
import './text-area.css';
interface TextAreaProps {
    /** Подпись над полем */
    label?: string;
    /** Вспомогательный текст под полем */
    description?: string;
    /** Текст ошибки (заменяет `description` при `isError=true`) */
    errorMessage?: string;
    /** Текст-заглушка при пустом поле */
    placeholder?: string;
    /** Управляемое значение
     * @default "" */
    value?: string;
    /** Колбэк при изменении значения */
    onChange?: (value: string) => void;
    /** Блокирует поле
     * @default false */
    isDisabled?: boolean;
    /** Переводит поле в состояние ошибки
     * @default false */
    isError?: boolean;
    /** Максимальное количество символов; включает счётчик над полем */
    maxLength?: number;
    /** Показывает иконку-подсказку рядом с подписью
     * @default false */
    hasHelpIcon?: boolean;
    /** Текст тултипа при наведении на иконку-подсказку */
    helpText?: React.ReactNode;
}
/**
 * Многострочное поле ввода с автоматическим расширением.
 * Поддерживает подпись, подсказку, счётчик символов и состояние ошибки.
 */
export declare const TextArea: React.FC<TextAreaProps>;
export {};
