import React from 'react';
interface ActionSheetFooterProps {
    /** Колбэк по клику на «Отмена» */
    onClick?: () => void;
    /** Блокирует кнопку «Отмена»
     * @default false */
    isDisabled?: boolean;
    /** Показывает спиннер и блокирует кнопку
     * @default false */
    isLoading?: boolean;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Подвал `ActionSheet` с кнопкой «Отмена».
 * Поддерживает состояния загрузки и блокировки.
 */
export declare const ActionSheetFooter: React.FC<ActionSheetFooterProps>;
export {};
