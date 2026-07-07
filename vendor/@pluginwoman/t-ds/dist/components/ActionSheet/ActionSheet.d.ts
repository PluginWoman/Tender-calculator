import React from 'react';
import './action-sheet.css';
interface ActionSheetProps {
    /** Управляет видимостью панели */
    isOpen: boolean;
    /** Колбэк при закрытии (клик по оверлею или Escape) */
    onClose?: () => void;
    /** Шапка панели, обычно `ActionSheetHeader` */
    header?: React.ReactNode;
    /** Подвал панели, обычно `ActionSheetFooter` */
    footer?: React.ReactNode;
    /** Список действий, обычно `ActionSheetButton` */
    children?: React.ReactNode;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
    /** Разрешает закрытие по клику на оверлей
     * @default true */
    isOverlayCloseEnabled?: boolean;
}
/**
 * Всплывающая панель снизу экрана со списком действий, связанных с текущим контекстом.
 * Может содержать от одного до нескольких вариантов действий. Используется для подтверждения
 * действия или для выбора на развилке сценария.
 *
 * Компонент составной: собирается из `ActionSheet`, `ActionSheetHeader`, `ActionSheetButton` и `ActionSheetFooter`.
 */
export declare const ActionSheet: React.FC<ActionSheetProps>;
export {};
