import React from 'react';
import './search.css';
interface SearchProps {
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
 * Поле поиска с иконкой, hover/focus состояниями и кнопкой очистки.
 */
export declare const Search: React.FC<SearchProps>;
export {};
