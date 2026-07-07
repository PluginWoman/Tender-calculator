import React from 'react';
import './contextual-notification.css';
export interface ContextualNotificationProps {
    /** Текст сообщения */
    text: React.ReactNode;
    /** Заголовок */
    title?: React.ReactNode;
    /** Показывать заголовок
     * @default true */
    hasTitle?: boolean;
    /** Показывать иконку закрытия
     * @default true */
    hasCloseIcon?: boolean;
    /** Колбэк по клику на крестик */
    onClose?: () => void;
    /** Показывать блок действия
     * @default false */
    hasAction?: boolean;
    /** Текст кнопки действия */
    actionLabel?: React.ReactNode;
    /** Показывать спиннер рядом с действием
     * @default false */
    hasSpinner?: boolean;
    /** Колбэк по клику на действие */
    onActionClick?: () => void;
    /** Тип левого аксессуара
     * @default 'icon' */
    accessory?: 'icon' | 'avatar';
    /** Иконка (когда accessory='icon') */
    icon?: React.ReactNode;
    /** Аватар (когда accessory='avatar') */
    avatar?: React.ReactNode;
    /** Размер компонента
     * @default 's' */
    size?: 's' | 'm';
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Контекстное уведомление — компактный блок с иконкой или аватаром,
 * текстом, опциональным заголовком, кнопкой закрытия и действием.
 */
export declare const ContextualNotification: React.FC<ContextualNotificationProps>;
