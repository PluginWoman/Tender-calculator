import React from 'react';
import './avatar.css';
interface AvatarProps {
    /** Текст внутри аватара (инициалы). Отображается если не передан `imageUrl` и `icon` */
    label?: string;
    /** URL изображения. При наличии имеет наивысший приоритет отображения */
    imageUrl?: string;
    /** Иконка внутри аватара. Отображается если не передан `imageUrl` */
    icon?: React.ReactNode;
    /** Размер аватара
     * @default "m" */
    size?: '2xl' | 'xl' | 'l' | 'm' | 's' | 'xs' | '2xs' | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 120;
    /** Форма аватара
     * @default "superellipse" */
    shape?: 'circle' | 'superellipse' | 'square';
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
    /** Инлайн-стили */
    style?: React.CSSProperties;
}
/**
 * Аватар — контейнер с изображением, иконкой или текстом.
 * Обычно показывает логотип компании, фотографию человека, инициалы, обложку проекта или сервиса.
 * Используется в списках, шапках, ячейках и аксессуарах.
 */
export declare const Avatar: React.FC<AvatarProps>;
export {};
