import React from 'react';
import './flow-result-view.css';
export interface FlowResultViewItem {
    /** Заголовок кнопки-ссылки */
    title: string;
    /** Описание под заголовком */
    description?: string;
    /** Иконка слева. По умолчанию — Circle */
    icon?: React.ReactNode;
    /** Показывает спиннер */
    isLoading?: boolean;
    /** Колбэк по клику */
    onClick?: () => void;
}
export interface FlowResultViewProps {
    /** Управляет видимостью */
    isOpen: boolean;
    /** Клик по кнопке «Готово» в футере — единственный способ закрыть экран */
    onDone?: () => void;
    /** Состояние экрана: нейтральное, ошибка, успех
     * @default "neutral" */
    state?: 'neutral' | 'success' | 'error';
    /** Заголовок экрана */
    title: string;
    /** Основной текст. Принимает ReactNode для нескольких абзацев */
    text: React.ReactNode;
    /** Список дополнительных действий (0–5) */
    items?: FlowResultViewItem[];
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Экран результата завершения пользовательского сценария.
 * Показывает успех, ошибку или нейтральный статус.
 * На десктопе — модальное окно, на мобильном (≤640px) — полноэкранный режим.
 * Закрывается только по кнопке «Готово» в футере.
 */
export declare const FlowResultView: React.FC<FlowResultViewProps>;
