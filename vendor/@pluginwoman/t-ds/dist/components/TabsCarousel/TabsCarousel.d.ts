import React from 'react';
import './tabs-carousel.css';
export interface TabsCarouselTab {
    /** Текст таба */
    label: string;
    /** Бейдж-аксессуар слева от текста (фон --primitive-brand) */
    badge?: number;
    /** Контент, отображаемый при активном табе */
    content?: React.ReactNode;
}
export interface TabsCarouselProps {
    /** Список табов */
    tabs: TabsCarouselTab[];
    /** Размер текста табов
     * @default "xl" */
    size?: 'xl' | '2xl';
    /** Показать кнопку действия справа
     * @default false */
    hasAction?: boolean;
    /** Текст кнопки действия (скрывается в адаптиве) */
    actionLabel?: string;
    /** Иконка кнопки действия */
    actionIcon?: React.ReactNode;
    /** Колбэк клика по кнопке действия */
    onActionClick?: () => void;
    /** Начальный выбранный таб (uncontrolled)
     * @default 0 */
    defaultSelectedIndex?: number;
    /** Выбранный таб (controlled) */
    selectedIndex?: number;
    /** Колбэк при переключении таба */
    onTabChange?: (index: number) => void;
    /** Дополнительный CSS-класс */
    className?: string;
}
export declare const TabsCarousel: React.FC<TabsCarouselProps>;
