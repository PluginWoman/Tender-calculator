import React from 'react';
import './linear-progress.css';
interface LinearProgressProps {
    /** Режим отображения: непрерывный прогресс в % или дискретные шаги
     * @default "percent" */
    variant?: 'percent' | 'steps';
    /** Текущее значение прогресса. В режиме `percent` — от 0 до 100, в режиме `steps` — количество выполненных шагов */
    value: number;
    /** Общее количество шагов (только для `steps`)
     * @default 5 */
    maxSteps?: number;
    /** Цвет заполненной части
     * @default "var(--bg-brand)" */
    progressColor?: string;
    /** Цвет фоновой дорожки
     * @default "var(--container-transparent-2)" */
    trackColor?: string;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
    /** Aria-метка для доступности */
    ariaLabel?: string;
}
/**
 * Компонент для отображения информации о продолжительности и ходе процесса.
 * Например, шаги заполнения формы, процесс загрузки или лимиты.
 */
export declare const LinearProgress: React.FC<LinearProgressProps>;
export {};
