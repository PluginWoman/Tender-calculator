import React from 'react';
import './drawer-footer.css';
export type DrawerFooterLayout = '1-button' | '2-buttons' | '2-horizontal-buttons' | 'empty';
interface DrawerFooterAction {
    /** Текст кнопки */
    label: string;
    /** Колбэк по клику */
    onClick?: () => void;
    /** Блокирует кнопку */
    isDisabled?: boolean;
    /** Показывает спиннер */
    isLoading?: boolean;
    /** Использует вариант `primary` вместо `secondary` */
    isSelected?: boolean;
}
interface DrawerFooterProps {
    /** Расположение кнопок в подвале
     * @default "1-button" */
    layout?: DrawerFooterLayout;
    /** Текст над кнопками */
    description?: React.ReactNode;
    /** Основная кнопка */
    primaryAction?: DrawerFooterAction;
    /** Вторичная кнопка (только для `2-buttons` и `2-horizontal-buttons`) */
    secondaryAction?: DrawerFooterAction;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Подвал `Drawer` с кнопками действий.
 * Поддерживает различные раскладки: одна кнопка, две вертикально или горизонтально.
 */
export declare const DrawerFooter: React.FC<DrawerFooterProps>;
export {};
