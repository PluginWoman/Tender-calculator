import React from 'react';
import './form-cell.css';
interface FormCellProps {
    /** Дополнительный контент под ячейкой */
    children?: React.ReactNode;
    /** Основной текст ячейки */
    title: string;
    /** Подзаголовок, отображается перед основным текстом */
    subtitle?: string;
    /** Дополнительное описание под основным текстом */
    description?: string;
    /** Левый слот (например Avatar) */
    left?: React.ReactNode;
    /** Правый слот для управляющего элемента (Switch, Checkbox, Radio) */
    right?: React.ReactNode;
    /** Тип отображения ячейки: отдельная или позиция в группе
     * @default "single" */
    variant?: 'single' | 'stack-top' | 'stack-middle' | 'stack-bottom';
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Интерактивный элемент для использования свитчера, чекбоксов и радио на странице с формой.
 */
export declare const FormCell: React.FC<FormCellProps>;
export {};
