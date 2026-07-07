import React from 'react';
import './table.css';
export interface TableProps {
    children: React.ReactNode;
    /** Число колонок @default 1 */
    columns?: number;
    /** CSS grid-template-columns (переопределяет columns) */
    gridTemplateColumns?: string;
    className?: string;
}
export declare const Table: React.FC<TableProps>;
