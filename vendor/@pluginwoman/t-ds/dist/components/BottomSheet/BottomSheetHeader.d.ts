import React from 'react';
import './bottom-sheet-header.css';
interface BottomSheetHeaderProps {
    /** Заголовок шапки */
    title?: React.ReactNode;
    /** Элемент справа (иконка, кнопка и т.п.) */
    rightAccessory?: React.ReactNode;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Шапка `BottomSheet` с заголовком.
 * Drag handle рендерится самим `BottomSheet` выше этого компонента.
 */
export declare const BottomSheetHeader: React.FC<BottomSheetHeaderProps>;
export {};
