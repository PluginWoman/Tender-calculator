import React from 'react';
import './page-action.css';
interface PageActionProps {
    /** Основной текст */
    title: React.ReactNode;
    /** Дополнительный текст под заголовком */
    description?: React.ReactNode;
    /** Левый аксессуар, ожидается иконка 30px */
    leftAccessory?: React.ReactNode;
    /** Визуальный стиль: стандартный или деструктивный
     * @default "default" */
    variant?: 'default' | 'danger';
    /** Скрывает описание, даже если `description` передан
     * @default true */
    hasDescription?: boolean;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
    /** Колбэк при нажатии */
    onClick?: () => void;
    /** Блокирует кнопку
     * @default false */
    isDisabled?: boolean;
}
/**
 * Компонент предназначен для совершения действий, переходов во внутренние разделы,
 * получения дополнительной информации.
 */
export declare const PageAction: React.FC<PageActionProps>;
export {};
