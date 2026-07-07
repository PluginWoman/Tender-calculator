import React from 'react';
import './cell-left-accessory.css';
export type CellLeftAccessoryVariant = 'avatar' | 'icon-30' | 'icon-24' | 'icon-18' | 'card-preview' | 'avatar-checkbox' | 'add-button' | 'custom';
interface CellLeftAccessoryProps {
    /** Вариант аксессуара
     * @default "avatar" */
    variant?: CellLeftAccessoryVariant;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
    /** Произвольный контент. При наличии имеет приоритет над `variant` */
    content?: React.ReactNode;
    /** Иконка для вариантов `icon-*` и `add-button`
     * @default Circle */
    icon?: React.ReactNode;
    /** Инициалы для варианта `avatar`
     * @default "AA" */
    avatarLabel?: string;
    /** Состояние чекбокса для варианта `avatar-checkbox`
     * @default false */
    isChecked?: boolean;
    /** Колбэк по клику для варианта `add-button` */
    onClick?: () => void;
}
/**
 * Набор готовых вариантов левого аксессуара для ячеек.
 * Применяется в ячейках списков, формах и других компонентах,
 * где нужен стандартизированный элемент слева: аватар, иконка, превью карточки или кнопка добавления.
 */
export declare const CellLeftAccessory: React.FC<CellLeftAccessoryProps>;
export {};
