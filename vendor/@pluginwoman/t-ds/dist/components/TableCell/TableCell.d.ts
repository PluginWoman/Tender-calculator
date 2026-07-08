import React from 'react';
import './table-cell.css';
export interface TableCellProps {
    /** Показать заголовок @default true */
    hasTitle?: boolean;
    /** Основной текст (в режиме isEdit — value для input) */
    title?: string;
    /** Показать описание @default false */
    hasDescription?: boolean;
    /** Текст под заголовком */
    description?: React.ReactNode;
    /** Показать тег @default false */
    hasTag?: boolean;
    /** Содержимое тега */
    tag?: React.ReactNode;
    /** Показать левый аксессуар @default false */
    hasLeftAccessory?: boolean;
    /** Avatar или Icon 24 */
    leftAccessory?: React.ReactNode;
    /** Показать правый аксессуар (скрывается при isError) @default false */
    hasRightAccessory?: boolean;
    /** Icon 24 или другой элемент */
    rightAccessory?: React.ReactNode;
    /** Стиль шрифта заголовка @default '400' */
    titleStyle?: '400' | '500' | '600';
    /** Редактируемый заголовок: title рендерится как input, клик по всей ячейке фокусирует поле @default false */
    isEdit?: boolean;
    /** Плейсхолдер для input (только при isEdit=true) */
    placeholder?: string;
    /** Колбэк при изменении значения input (только при isEdit=true) */
    onTitleChange?: (value: string) => void;
    /** Включает числовой режим в isEdit */
    editFormat?: 'number' | 'currency' | 'percent';
    /** Суффикс для числового режима (переопределяет дефолт формата) */
    editSuffix?: string;
    /** Количество знаков после запятой (переопределяет дефолт формата) */
    editDecimalScale?: number;
    /** Колбэк с числовым значением без суффикса */
    onEditValueChange?: (value: number | null) => void;
    /** Задизейбленное состояние @default false */
    isDisabled?: boolean;
    /** Ошибка — правый слот заменяется иконкой Info Circle 20px @default false */
    isError?: boolean;
    /** CSS-значение для переопределения цвета фона */
    backgroundColor?: string;
    /** Инлайн-стили корневого элемента (width, minWidth, maxWidth и т.д.) */
    style?: React.CSSProperties;
    className?: string;
    onClick?: () => void;
}
export declare const TableCell: React.FC<TableCellProps>;
