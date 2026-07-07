import React from 'react';
import './drawer-header.css';
interface DrawerHeaderProps {
    /** Заголовок шапки */
    title?: React.ReactNode;
    /** Размер заголовка
     * @default "text-m" */
    titleVariant?: 'text-m' | 'text-l';
    /** Произвольный элемент слева. При отсутствии и `hasDefaultBackArrow=true` — стрелка назад */
    leftAccessory?: React.ReactNode;
    /** Показывает стрелку назад слева (если не передан `leftAccessory`)
     * @default false */
    hasDefaultBackArrow?: boolean;
    /** Колбэк по клику на левый элемент */
    onLeftAccessoryClick?: () => void;
    /** Колбэк по клику на кнопку закрытия. При наличии показывает крестик справа */
    onClose?: () => void;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Шапка `Drawer` с заголовком, левым аксессуаром и кнопкой закрытия.
 */
export declare const DrawerHeader: React.FC<DrawerHeaderProps>;
export {};
