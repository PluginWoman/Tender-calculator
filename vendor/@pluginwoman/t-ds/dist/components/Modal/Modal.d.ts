import React from 'react';
import './modal.css';
interface ModalProps {
    /** Открывает или скрывает окно */
    isOpen: boolean;
    /** Колбэк при закрытии (Escape или клик по оверлею) */
    onClose?: () => void;
    /** Шапка окна, обычно `ModalHeader` */
    header?: React.ReactNode;
    /** Подвал окна, обычно `ModalFooter` */
    footer?: React.ReactNode;
    /** Прокручиваемый контент окна */
    children?: React.ReactNode;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
    /** Разрешает закрытие по клику на оверлей
     * @default true */
    isOverlayCloseEnabled?: boolean;
    /** На мобильном (≤ 640px) показывает панель снизу (шторка) вместо fullscreen
     * @default false */
    isSheet?: boolean;
}
/**
 * Всплывающее окно с затемнённым оверлеем, показывающееся поверх контента страницы.
 * Обычно используется для отображения дополнительной информации или интерактивных элементов.
 * Собирается из `ModalHeader`, зоны контента и `ModalFooter`.
 */
export declare const Modal: React.FC<ModalProps>;
export {};
