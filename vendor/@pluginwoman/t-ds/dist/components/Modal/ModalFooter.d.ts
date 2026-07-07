import React from 'react';
import './modal-footer.css';
export type ModalFooterLayout = '1-button' | '2-buttons' | '2-horizontal-buttons' | 'empty';
interface ModalFooterAction {
    /** Текст кнопки */
    label: string;
    /** Колбэк по клику */
    onClick?: () => void;
    /** Блокирует кнопку */
    isDisabled?: boolean;
    /** Показывает спиннер */
    isLoading?: boolean;
    /** Отображает кнопку как `primary` */
    isSelected?: boolean;
}
interface ModalFooterProps {
    /** Компоновка кнопок: одна, две вертикально, две горизонтально или пустой подвал
     * @default "1-button" */
    layout?: ModalFooterLayout;
    /** Вспомогательный текст над кнопками */
    description?: React.ReactNode;
    /** Основная кнопка */
    primaryAction?: ModalFooterAction;
    /** Вторичная кнопка (для `2-buttons` и `2-horizontal-buttons`) */
    secondaryAction?: ModalFooterAction;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Подвал `Modal` с кнопками действий.
 * Поддерживает различные раскладки: одна кнопка, две вертикально или горизонтально.
 */
export declare const ModalFooter: React.FC<ModalFooterProps>;
export {};
