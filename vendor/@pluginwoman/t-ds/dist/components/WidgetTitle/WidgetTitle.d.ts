import React from 'react';
import './widget-title.css';
export type WidgetTitleAccessoryVariant = 'icon' | 'link' | 'link-icon' | 'icon-icon' | 'description' | 'editing-mode' | 'none' | 'custom';
export interface WidgetTitleAccessoryProps {
    /** Вариант аксессуара
     * @default "icon" */
    variant?: WidgetTitleAccessoryVariant;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
    /** Произвольный контент (имеет приоритет над `variant`) */
    content?: React.ReactNode;
    /** Текст аксессуара (для `link`, `link-icon`, `description`) */
    text?: React.ReactNode;
    /** Иконка аксессуара
     * @default Circle */
    icon?: React.ReactNode;
    /** Вторая иконка (для `icon-icon`, `editing-mode`)
     * @default MinusCircle */
    secondaryIcon?: React.ReactNode;
    /** Колбэк по клику (для интерактивных вариантов) */
    onClick?: () => void;
}
export interface WidgetTitleProps {
    /** Заголовок */
    title: React.ReactNode;
    /** Описание под заголовком */
    description?: React.ReactNode;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
    /** Показывает описание под заголовком
     * @default true */
    hasDescription?: boolean;
    /** Показывает шеврон рядом с заголовком
     * @default true */
    hasChevron?: boolean;
    /** Показывает правый аксессуар
     * @default true */
    hasRightAccessory?: boolean;
    /** Иконка шеврона рядом с заголовком
     * @default ChevronRight */
    chevron?: React.ReactNode;
    /** Произвольный правый аксессуар (заменяет `rightAccessoryVariant`) */
    rightAccessory?: React.ReactNode;
    /** Вариант правого аксессуара
     * @default "icon" */
    rightAccessoryVariant?: WidgetTitleAccessoryVariant;
    /** Текст аксессуара (для `link`, `link-icon`, `description`) */
    rightAccessoryText?: React.ReactNode;
    /** Иконка аксессуара
     * @default Circle */
    rightAccessoryIcon?: React.ReactNode;
    /** Вторая иконка (для `icon-icon`, `editing-mode`)
     * @default MinusCircle */
    rightAccessorySecondaryIcon?: React.ReactNode;
    /** Колбэк при клике на правый аксессуар */
    onRightAccessoryClick?: () => void;
}
/**
 * Правый аксессуар для `WidgetTitle`. Поддерживает несколько вариантов отображения:
 * иконки, текстовые ссылки, описания и режим редактирования.
 */
export declare const WidgetTitleAccessory: React.FC<WidgetTitleAccessoryProps>;
/**
 * Шапка виджета с кликабельным заголовком и правым аксессуаром.
 * Используется внутри `Widget`, но может применяться самостоятельно.
 */
export declare const WidgetTitle: React.FC<WidgetTitleProps>;
