import React from 'react';
import './table.css';
export interface ColumnDef {
    /** Режим определения ширины */
    mode: 'fixed' | 'content' | 'fluid';
    /** Фиксированная ширина в пикселях. Используется при mode: 'fixed'. */
    width?: number;
    /** Минимальная ширина колонки в пикселях */
    minWidth?: number;
    /** Максимальная ширина колонки в пикселях */
    maxWidth?: number;
}
export interface TableProps {
    children: React.ReactNode;
    /** Число колонок (→ repeat(n, 1fr)) или массив дефиниций колонок. @default 1 */
    columns?: number | ColumnDef[];
    /** CSS grid-template-columns (переопределяет columns) */
    gridTemplateColumns?: string;
    className?: string;
}
export declare const Table: React.FC<TableProps>;
