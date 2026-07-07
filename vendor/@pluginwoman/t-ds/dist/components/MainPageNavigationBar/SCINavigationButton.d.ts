import React from 'react';
export interface SCINavigationButtonProps {
    /** Активное состояние — подсвечивает пункт навигации
     * @default false */
    isActive?: boolean;
    /** Текст пункта навигации */
    label: string;
    /** Колбэк по клику */
    onClick?: () => void;
}
/**
 * Кнопка пункта навигации для `MainPageNavigationBar`.
 */
export declare const SCINavigationButton: React.FC<SCINavigationButtonProps>;
