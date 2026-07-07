import React from 'react';
import './dropdown-popup.css';
interface DropdownPopupProps {
    /** Управляет видимостью попапа */
    isOpen: boolean;
    /** Колбэк при закрытии (клик вне или Escape) */
    onClose: () => void;
    /** Ref на триггер — используется для позиционирования в десктопном режиме */
    triggerRef: React.RefObject<HTMLElement | null>;
    /** Заголовок, отображаемый в мобильном шите */
    label?: string;
    /** Текущее выбранное значение — отмечается галочкой */
    value?: string;
    /** Включает поле поиска
     * @default false */
    hasSearch?: boolean;
    /** Плейсхолдер поля поиска
     * @default "Поиск" */
    searchPlaceholder?: string;
    /** Колбэк при изменении поискового запроса */
    onSearchChange?: (q: string) => void;
    /** Показывает спиннер вместо списка
     * @default false */
    isLoading?: boolean;
    /** Показывает пустое состояние вместо списка
     * @default false */
    isEmpty?: boolean;
    /** Текст пустого состояния
     * @default "Ничего не найдено" */
    emptyText?: string;
    /** Список вариантов */
    children?: React.ReactNode;
}
/**
 * Внутренний попап для `Dropdown` и `Chip` с вариантом `dropdown`.
 * На мобильных устройствах отображается как `BottomSheet`, на десктопе — как позиционированная панель.
 * Рендерится через портал в `document.body`.
 */
export declare const DropdownPopup: React.FC<DropdownPopupProps>;
export {};
