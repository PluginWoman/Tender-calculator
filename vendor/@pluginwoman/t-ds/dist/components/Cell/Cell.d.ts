import React from 'react';
import './cell.css';
interface CellProps {
    /** Заголовок ячейки */
    title: React.ReactNode;
    /** Подзаголовок над заголовком */
    subtitle?: React.ReactNode;
    /** Описание под заголовком */
    description?: React.ReactNode;
    /** Элемент слева. По умолчанию — `Avatar` */
    leftAccessory?: React.ReactNode;
    /** Элемент справа. По умолчанию — иконка `ChevronRight` */
    rightAccessory?: React.ReactNode;
    /** Показывает левый аксессуар
     * @default true */
    hasLeftAccessory?: boolean;
    /** Показывает правый аксессуар
     * @default true */
    hasRightAccessory?: boolean;
    /** Верхний и нижний паддинг ячейки
     * @default "none" */
    verticalPadding?: 'none' | '2x' | '3x' | '4x';
    /** CSS-класс заголовка. Принимает классы типографики DS: `ts-500-m`, `ts-400-s` и т.д.
     * @default "ts-500-m" */
    titleClassName?: string;
    /** CSS-класс подзаголовка
     * @default "ts-400-s" */
    subtitleClassName?: string;
    /** CSS-класс описания
     * @default "ts-400-s" */
    descriptionClassName?: string;
    /** Цвет заголовка
     * @default "var(--primitive-primary)" */
    titleColor?: string;
    /** Цвет подзаголовка
     * @default "var(--primitive-secondary)" */
    subtitleColor?: string;
    /** Цвет описания
     * @default "var(--primitive-secondary)" */
    descriptionColor?: string;
    /** Дополнительный CSS-класс корневого элемента
     * @default "" */
    className?: string;
    /** Колбэк по клику. При наличии ячейка становится интерактивной */
    onClick?: () => void;
}
/**
 * Универсальная строка списка с заголовком, опциональным описанием, левым и правым аксессуарами.
 * Используется для отображения данных, настроек, навигации и любых структурированных списков.
 *
 * Для стандартных паттернов рекомендуется использовать `CellLeftAccessory` и `CellRightAccessory`.
 */
export declare const Cell: React.FC<CellProps>;
export {};
