import React from 'react';
import './feedback-banner.css';
export interface FeedbackBannerAction {
    /** Текст кнопки */
    label: React.ReactNode;
    /** Колбэк по клику */
    onClick?: () => void;
    /** Блокирует кнопку */
    isDisabled?: boolean;
}
export interface FeedbackBannerProps {
    /** Текст баннера */
    children: React.ReactNode;
    /** Основная кнопка действия */
    primaryAction?: FeedbackBannerAction;
    /** Дополнительная кнопка действия */
    secondaryAction?: FeedbackBannerAction;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Компонент для сбора расширенной обратной связи.
 * По клику на кнопку может открываться модальное окно.
 */
export declare const FeedbackBanner: React.FC<FeedbackBannerProps>;
