import React from 'react';
import './chip.css';
interface ChipProps {
    /** Текст чипа */
    children: React.ReactNode;
    /** Тип чипа: базовый выбор, таб, дропдаун или действие
     * @default "chip" */
    variant?: 'chip' | 'tab' | 'dropdown' | 'action';
    /** Выбранное состояние
     * @default false */
    isSelected?: boolean;
    /** Блокирует чип
     * @default false */
    isDisabled?: boolean;
    /** Колбэк по клику */
    onClick?: () => void;
    /** Колбэк при удалении для варианта `action` */
    onClose?: (e: React.MouseEvent) => void;
    /** Левый аксессуар */
    leftAccessory?: 'icon' | 'logo' | 'logo-stack';
    /** Иконка для варианта `leftAccessory="icon"`
     * @default Circle */
    leftIcon?: React.ReactNode;
    /** Бейдж справа (только для варианта `tab`) */
    badge?: number | string;
    /** Открытое состояние для варианта `dropdown`
     * @default false */
    isOpen?: boolean;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
    /** Контент выпадающего попапа для варианта `dropdown` */
    popupContent?: React.ReactNode;
    /** Выбранное значение, отображаемое в тексте дропдауна */
    value?: string;
    /** Включает поле поиска в попапе дропдауна
     * @default false */
    hasSearch?: boolean;
    /** Плейсхолдер поля поиска в попапе
     * @default "Поиск" */
    searchPlaceholder?: string;
    /** Колбэк при изменении поискового запроса */
    onSearchChange?: (q: string) => void;
    /** Показывает спиннер в попапе
     * @default false */
    isLoading?: boolean;
    /** Показывает пустое состояние в попапе
     * @default false */
    isEmpty?: boolean;
    /** Текст пустого состояния в попапе
     * @default "Ничего не найдено" */
    emptyText?: string;
}
/**
 * Компонент для одиночного или множественного выбора.
 * Часто применяется для фильтрации контента в списках. Обычно используется в виде группы.
 *
 * - `chip` — базовый вариант для множественного выбора
 * - `tab` — для переключения контента на странице
 * - `dropdown` — для фильтрации с выбором из списка
 * - `action` — для вызова действия в списке чипов
 */
export declare const Chip: React.FC<ChipProps>;
export {};
