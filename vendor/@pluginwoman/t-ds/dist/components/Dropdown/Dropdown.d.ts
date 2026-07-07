import React from 'react';
import './dropdown.css';
interface DropdownProps {
    /** Подпись над полем */
    label?: string;
    /** Вспомогательный текст под полем */
    description?: string;
    /** Текст ошибки (заменяет `description` при `isError=true`) */
    errorMessage?: string;
    /** Управляемое значение. Если передан — компонент переходит в controlled mode */
    value?: string;
    /** Колбэк при выборе значения */
    onChange?: (value: string) => void;
    /** Блокирует поле
     * @default false */
    isDisabled?: boolean;
    /** Переводит поле в состояние ошибки
     * @default false */
    isError?: boolean;
    /** Текст-заглушка до выбора значения
     * @default "Выберите вариант" */
    placeholder?: string;
    /** Произвольный элемент справа, перед шевроном */
    right?: React.ReactNode;
    /** Показывает иконку ChevronDown справа
     * @default true */
    hasChevron?: boolean;
    /** Показывает иконку подсказки рядом с `label`
     * @default false */
    hasHelpIcon?: boolean;
    /** Текст тултипа при наведении на иконку-подсказку */
    helpText?: React.ReactNode;
    /** Список вариантов, обычно компоненты `Cell` */
    children?: React.ReactNode;
    /** Включает поле поиска в попапе
     * @default false */
    hasSearch?: boolean;
    /** Плейсхолдер поля поиска
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
    /** Текст пустого состояния
     * @default "Ничего не найдено" */
    emptyText?: string;
}
/**
 * Поле выбора из раскрывающегося списка.
 * Используется в формах, когда нужно выбрать одно значение из заранее заданного набора вариантов.
 */
export declare const Dropdown: React.FC<DropdownProps>;
export {};
