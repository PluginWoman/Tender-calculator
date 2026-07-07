import React from 'react';
import './badge.css';
export interface BadgeProps {
    /** Числовое значение. Значения больше 99 отображаются как `99+` */
    value: number;
    /** Цвет фона
     * @default "var(--primitive-neutral-4)" */
    color?: string;
    /** Цвет текста
     * @default "var(--primitive-default)" */
    textColor?: string;
    /** Размер бейджа
     * @default "m" */
    size?: 'm' | 's' | 'xs';
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Компонент, показывающий индикатор или счётчик.
 * Обычно используется для отображения статуса или уведомления о новых событиях.
 * Используется поверх иконок, в списках и аксессуарах.
 */
export declare const Badge: React.FC<BadgeProps>;
