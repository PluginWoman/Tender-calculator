import React from 'react';
import './promo-page-horizontal-card.css';
export type PromoPageHorizontalCardVariant = 'default' | 'accent';
export interface PromoPageHorizontalCardProps {
    /** Заголовок карточки
     * @default "Text 2XL" */
    title?: React.ReactNode;
    /** Описание под заголовком
     * @default "Text L" */
    description?: React.ReactNode;
    /** Текст кнопки действия (только для варианта `accent`)
     * @default "Text M" */
    buttonLabel?: React.ReactNode;
    /** Произвольный элемент-изображение */
    image?: React.ReactNode;
    /** URL изображения (имеет приоритет над `image`) */
    imageSrc?: string;
    /** Alt-текст изображения
     * @default "" */
    imageAlt?: string;
    /** Визуальный стиль: стандартный или акцентный с кнопкой
     * @default "default" */
    variant?: PromoPageHorizontalCardVariant;
    /** Показывает описание
     * @default true */
    hasDescription?: boolean;
    /** Показывает кнопку (только в варианте `accent`)
     * @default true */
    hasButton?: boolean;
    /** Колбэк при нажатии на кнопку */
    onButtonClick?: () => void;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Горизонтальная карточка, занимающая всю ширину контентной области.
 * Предназначена для эффектного представления информации на промо-страницах, сочетая
 * текстовое описание с крупным визуальным акцентом в виде изображения.
 */
export declare const PromoPageHorizontalCard: React.FC<PromoPageHorizontalCardProps>;
