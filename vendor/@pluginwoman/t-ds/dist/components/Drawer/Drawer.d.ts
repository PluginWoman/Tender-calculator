import React from 'react';
import './drawer.css';
interface DrawerProps {
    /** Управляет видимостью панели */
    isOpen: boolean;
    /** Колбэк при закрытии (клавиша Escape) */
    onClose?: () => void;
    /** Шапка панели, обычно `DrawerHeader` */
    header?: React.ReactNode;
    /** Подвал панели, обычно `DrawerFooter` */
    footer?: React.ReactNode;
    /** Основной контент панели */
    children?: React.ReactNode;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Боковая панель, выезжающая поверх контента.
 * Используется для отображения дополнительной информации или форм без перехода на новую страницу.
 *
 * Компонент составной: собирается из `Drawer`, `DrawerHeader`, `DrawerHeaderTitle` и `DrawerFooter`.
 */
export declare const Drawer: React.FC<DrawerProps>;
export {};
