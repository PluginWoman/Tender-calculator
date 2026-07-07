import React from 'react';
import './bottom-sheet-search.css';
interface BottomSheetSearchProps {
    /** Значение поля */
    value?: string;
    /** Колбэк при изменении */
    onChange?: (value: string) => void;
    /** Плейсхолдер
     * @default "Поиск" */
    placeholder?: string;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Поле поиска для использования в `BottomSheet` (передаётся в слот `header`).
 */
export declare const BottomSheetSearch: React.FC<BottomSheetSearchProps>;
export {};
