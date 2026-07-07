import React from 'react';
import './tag.css';
interface TagProps {
    /** Текст метки */
    children: React.ReactNode;
    /** Форма: скруглённая или квадратная
     * @default "square" */
    shape?: 'circle' | 'square';
    /** Стиль: заливка или обводка
     * @default "filled" */
    variant?: 'filled' | 'outlined';
    /** Размер метки
     * @default "s" */
    size?: 'xl' | 'l' | 'm' | 's';
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Компонент, показывающий статус чего-либо или метку.
 */
export declare const Tag: React.FC<TagProps>;
export {};
