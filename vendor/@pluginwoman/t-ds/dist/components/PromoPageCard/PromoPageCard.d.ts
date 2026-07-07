import React from 'react';
import './promo-page-card.css';
export interface PromoPageCardProps {
    /** Заголовок карточки
     * @default "Text XL" */
    title?: React.ReactNode;
    /** Описание под заголовком
     * @default "Text M" */
    description?: React.ReactNode;
    /** Произвольный аватар (по умолчанию — иконка с брендовым фоном) */
    avatar?: React.ReactNode;
    /** Произвольный элемент-изображение */
    image?: React.ReactNode;
    /** URL изображения (имеет приоритет над `image`) */
    imageSrc?: string;
    /** Alt-текст изображения
     * @default "" */
    imageAlt?: string;
    /** Показывает аватар
     * @default true */
    hasAvatar?: boolean;
    /** Показывает изображение
     * @default true */
    hasImage?: boolean;
    /** Показывает описание
     * @default true */
    hasDescription?: boolean;
    /** Горизонтальная компоновка: аватар и текст в ряд, изображение скрыто
     * @default false */
    isHorizontal?: boolean;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Карточка для контентного наполнения промо-страниц, онбордингов и других контекстных страниц банка.
 * Предназначена для структурированного представления ключевой информации, преимуществ продукта или этапов процесса.
 */
export declare const PromoPageCard: React.FC<PromoPageCardProps>;
