import React from 'react';
import './action-form-cell.css';
interface ActionFormCellProps {
    /** Основной текст ячейки */
    title: string;
    /** Дополнительный текст под заголовком */
    description?: string;
    /** Левый аксессуар (иконка 24px) */
    left?: React.ReactNode;
    /** Правый аксессуар (спиннер) */
    right?: React.ReactNode;
    /** Расположение ячейки: отдельная или позиция в группе
     * @default "single" */
    variant?: 'single' | 'stack-top' | 'stack-middle' | 'stack-bottom';
    /** Колбэк по клику */
    onClick?: () => void;
    /** Блокирует ячейку
     * @default false */
    isDisabled?: boolean;
}
/**
 * Интерактивный элемент действия для форм и списков.
 * Используется как самостоятельный элемент или в сгруппированном стеке.
 */
export declare const ActionFormCell: React.FC<ActionFormCellProps>;
export {};
