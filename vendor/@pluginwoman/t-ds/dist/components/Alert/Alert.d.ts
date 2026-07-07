import React from 'react';
import './alert.css';
export type AlertType = 'success' | 'error' | 'neutral';
export type AlertTextAlign = 'left' | 'center';
export interface AlertProps {
    /** Тип уведомления
     * @default 'success' */
    type?: AlertType;
    /** Выравнивание текста
     * @default 'left' */
    textAlign?: AlertTextAlign;
    /** Текст уведомления */
    children: React.ReactNode;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
    /** Вызывается после завершения анимации скрытия */
    onHide?: () => void;
}
/**
 * Короткое текстовое уведомление.
 * Используется для показа сообщения об успехе, ошибке или нейтральном статусе,
 * когда отдельный экран кажется для этого избыточным.
 */
export declare const Alert: React.FC<AlertProps>;
