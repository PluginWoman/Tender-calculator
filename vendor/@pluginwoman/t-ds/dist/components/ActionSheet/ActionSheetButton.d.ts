import React from 'react';
interface ActionSheetButtonProps {
    /** Текст кнопки */
    title: React.ReactNode;
    /** Дополнительный текст под заголовком */
    description?: React.ReactNode;
    /** Показывает `description` (только если он передан)
     * @default false */
    hasDescription?: boolean;
    /** Иконка 30px слева */
    icon?: React.ReactNode;
    /** Показывает иконку (только если она передана)
     * @default true */
    hasIcon?: boolean;
    /** Визуальный стиль: обычный или деструктивный
     * @default "default" */
    variant?: 'default' | 'danger';
    /** Блокирует кнопку
     * @default false */
    isDisabled?: boolean;
    /** Показывает спиннер и блокирует кнопку
     * @default false */
    isLoading?: boolean;
    /** Колбэк по клику */
    onClick?: () => void;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Кнопка действия внутри `ActionSheet`.
 * Поддерживает иконку, описание, варианты внешнего вида и состояние загрузки.
 */
export declare const ActionSheetButton: React.FC<ActionSheetButtonProps>;
export {};
