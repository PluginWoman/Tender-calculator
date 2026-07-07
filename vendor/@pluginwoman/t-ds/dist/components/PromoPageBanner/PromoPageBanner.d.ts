import React from 'react';
import './promo-page-banner.css';
export interface PromoPageBannerProps {
    /** Заголовок в десктопной версии
     * @default "Text 5XL" */
    title?: React.ReactNode;
    /** Заголовок в адаптивной версии
     * @default "Text 3XL" */
    adaptiveTitle?: React.ReactNode;
    /** Описание в десктопной версии
     * @default "Text XL" */
    description?: React.ReactNode;
    /** Описание в адаптивной версии
     * @default "Text M" */
    adaptiveDescription?: React.ReactNode;
    /** Текст кнопки действия
     * @default "Text M" */
    buttonLabel?: React.ReactNode;
    /** Произвольный элемент-изображение */
    image?: React.ReactNode;
    /** URL изображения (имеет приоритет над `image`) */
    imageSrc?: string;
    /** Alt-текст изображения
     * @default "" */
    imageAlt?: string;
    /** Показывает блок с изображением
     * @default true */
    hasImage?: boolean;
    /** Показывает описание
     * @default true */
    hasDescription?: boolean;
    /** Показывает кнопку действия
     * @default true */
    hasButton?: boolean;
    /** Колбэк при нажатии на кнопку */
    onButtonClick?: () => void;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Крупный визуальный блок, выполняющий роль хедера для промо-страниц, онбордингов и других
 * контекстных страниц банка. Предназначен для создания первого впечатления и донесения главного сообщения.
 */
export declare const PromoPageBanner: React.FC<PromoPageBannerProps>;
