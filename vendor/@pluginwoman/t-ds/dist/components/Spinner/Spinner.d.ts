import React from 'react';
import './spinner.css';
interface SpinnerProps {
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
    /** Инлайн-стили для кастомизации размера и цвета */
    style?: React.CSSProperties;
}
/**
 * Анимированный индикатор, отображающий процесс загрузки или выполнения действия.
 */
export declare const Spinner: React.FC<SpinnerProps>;
export {};
