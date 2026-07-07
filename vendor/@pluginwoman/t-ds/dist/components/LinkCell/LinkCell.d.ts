import React from 'react';
import './link-cell.css';
export interface LinkCellProps {
    /** Заголовок ячейки */
    title: string;
    /** Описание под заголовком */
    description?: string;
    /** Иконка слева. По умолчанию — Circle */
    icon?: React.ReactNode;
    /** Размер: L — иконка 30px, текст ts-500-l; M — иконка 24px, текст ts-500-m
     * @default "l" */
    size?: 'l' | 'm';
    /** Показывает спиннер справа */
    isLoading?: boolean;
    /** Колбэк по клику. При наличии ячейка становится интерактивной */
    onClick?: () => void;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Навигационная строка с иконкой и заголовком в brand-цвете.
 * Используется для дополнительных действий на экране результата флоу.
 */
export declare const LinkCell: React.FC<LinkCellProps>;
