import React from 'react';
import './context-menu.css';
export interface ContextMenuItem {
    /** Уникальный идентификатор элемента */
    key: string;
    /** Текст действия */
    label: React.ReactNode;
    /** Иконка 24px слева от текста */
    icon?: React.ReactNode;
    /** Визуальный стиль: обычный или деструктивный
     * @default "default" */
    variant?: 'default' | 'danger';
    /** Колбэк по клику на элемент */
    onClick?: () => void;
    /** Блокирует элемент меню */
    isDisabled?: boolean;
}
export interface ContextMenuProps {
    /** Элемент, по клику на который открывается меню */
    trigger: React.ReactNode;
    /** Управляет видимостью меню */
    isOpen: boolean;
    /** Колбэк при закрытии (выбор действия или клик вне меню) */
    onClose?: () => void;
    /** Сторона, в которую раскрывается меню относительно триггера
     * @default "right" */
    placement?: 'right' | 'left';
    /** Список действий в меню */
    items: ContextMenuItem[];
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Всплывающее меню с набором действий, которое появляется рядом с элементом по клику или тапу.
 * Используется для вызова контекстных действий без перехода на другой экран.
 */
export declare const ContextMenu: React.FC<ContextMenuProps>;
