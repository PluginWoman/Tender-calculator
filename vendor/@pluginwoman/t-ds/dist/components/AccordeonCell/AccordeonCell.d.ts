import React from 'react';
import './accordeon-cell.css';
import type { CellRightAccessoryVariant } from '../CellRightAccessory/CellRightAccessory';
export type AccordeonCellSize = 'xl' | '2xl';
export type AccordeonCellChevronPosition = 'title' | 'edge';
export type AccordeonCellSpacing = '0' | '0-5x' | '1x' | '2x' | '4x' | '6x';
export interface AccordeonCellProps {
    /** Заголовок секции */
    title: React.ReactNode;
    /** Подзаголовок под заголовком */
    description?: React.ReactNode;
    /** Контент, который показывается при раскрытии */
    children?: React.ReactNode;
    /** Размер заголовка
     * @default "xl" */
    size?: AccordeonCellSize;
    /** Положение иконки: рядом с заголовком или по правому краю
     * @default "title" */
    chevronPosition?: AccordeonCellChevronPosition;
    /** Показывает подзаголовок (только если передан `description`)
     * @default true */
    hasDescription?: boolean;
    /** Показывает правый аксессуар (только при `chevronPosition="title"`)
     * @default true */
    hasRightAccessory?: boolean;
    /** Произвольный элемент справа от заголовка */
    rightAccessory?: React.ReactNode;
    /** Вариант дефолтного правого аксессуара (используется если `rightAccessory` не передан)
     * @default "text-m" */
    rightAccessoryVariant?: CellRightAccessoryVariant;
    /** Текст дефолтного правого аксессуара
     * @default "Text M" */
    rightAccessoryText?: string;
    /** Начальное состояние при неуправляемом режиме
     * @default false */
    defaultOpen?: boolean;
    /** Управляемое состояние открытия. Если передан — компонент переходит в controlled mode */
    isOpen?: boolean;
    /** Колбэк при изменении состояния */
    onOpenChange?: (isOpen: boolean) => void;
    /** Отступ между заголовком и раскрытым контентом
     * @default "4x" */
    contentSpacing?: AccordeonCellSpacing;
    /** Отступы между элементами внутри раскрытого контента
     * @default "2x" */
    listSpacing?: AccordeonCellSpacing;
    /** Дополнительный CSS-класс на корневом элементе
     * @default "" */
    className?: string;
}
/**
 * Секция с заголовком, которая разворачивается по клику и показывает скрытый контент.
 * Используется для организации списков, настроек и любого контента, который нужно скрыть по умолчанию.
 */
export declare const AccordeonCell: React.FC<AccordeonCellProps>;
