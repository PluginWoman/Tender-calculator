import React from 'react';
import './page-layout.css';
export interface PageLayoutProps {
    /** Размер макета страницы. Определяет максимальную ширину контентной зоны */
    size: 's' | 'm' | 'l';
    /** Навигационная панель, обычно `NavigationBar` */
    navigationBar: React.ReactNode;
    /** Правая панель (отображается только при `size="s"`) */
    rightPanel?: React.ReactNode;
    /** Основной контент страницы */
    children: React.ReactNode;
    /** Высота фиксированного хедера над PageLayout (например MainPageNavigationBar = 74).
     *  Сдвигает sticky/fixed-элементы вниз и корректирует min-height.
     * @default 0 */
    topOffset?: number;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Базовый макет страницы с навигационной панелью и опциональной правой панелью.
 * Используется как корневая обёртка для стандартных страниц приложения.
 */
export declare const PageLayout: React.FC<PageLayoutProps>;
