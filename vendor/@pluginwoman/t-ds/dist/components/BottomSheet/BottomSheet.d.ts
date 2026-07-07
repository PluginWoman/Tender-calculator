import React from 'react';
import './bottom-sheet.css';
interface BottomSheetProps {
    /** Управляет видимостью панели */
    isOpen: boolean;
    /** Колбэк при закрытии (оверлей, Escape, свайп вниз) */
    onClose?: () => void;
    /** Шапка панели, обычно `BottomSheetHeader` */
    header?: React.ReactNode;
    /** Подвал панели */
    footer?: React.ReactNode;
    /** Основной контент */
    children?: React.ReactNode;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
    /** Разрешает закрытие по клику на оверлей
     * @default true */
    isOverlayCloseEnabled?: boolean;
}
export declare const BottomSheet: React.FC<BottomSheetProps>;
export {};
