import React from 'react';
import './drawer-header-title.css';
interface DrawerHeaderTitleProps {
    /** Текст заголовка */
    children: React.ReactNode;
    /** Размер текста
     * @default "text-m" */
    variant?: 'text-m' | 'text-l';
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Компонент заголовка для шапки `Drawer`.
 * Поддерживает два визуальных размера.
 */
export declare const DrawerHeaderTitle: React.FC<DrawerHeaderTitleProps>;
export {};
