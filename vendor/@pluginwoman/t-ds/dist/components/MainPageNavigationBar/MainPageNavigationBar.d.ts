import React from 'react';
import './main-page-navigation-bar.css';
export type MainPageNavigationBarActiveItem = 'main' | 'payments' | 'services';
export interface MainPageNavigationBarProps {
    /** Активный пункт навигации */
    activeNavItem?: MainPageNavigationBarActiveItem;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
    /** Название компании клиента
     * @default "ООО Ромашка" */
    customer?: string;
    /** Показывает индикатор «В ЭФИРЕ» рядом с логотипом
     * @default false */
    hasLive?: boolean;
    /** Показывает индикатор новых уведомлений на кнопке колокольчика
     * @default true */
    hasNewPush?: boolean;
    /** Показывает кнопку переключения клиента (шеврон)
     * @default true */
    hasSelect?: boolean;
    /** Показывает логотип Tochka Plus во второй строке (требует `isSecondLine` и `tochkaPlusUrl`)
     * @default true */
    hasSubscription?: boolean;
    /** Показывает ИНН во второй строке (требует `isSecondLine`)
     * @default true */
    hasTin?: boolean;
    /** Показывает вторую строку с подпиской и ИНН
     * @default false */
    isSecondLine?: boolean;
    /** ИНН клиента
     * @default "ИНН 4827 1359 64" */
    tin?: string;
    /** URL логотипа банка (по умолчанию — встроенный SVG) */
    logoUrl?: string;
    /** URL логотипа Tochka Plus */
    tochkaPlusUrl?: string;
    /** URL изображения аватара клиента */
    avatarUrl?: string;
    /** Инициалы для аватара, если не передан `avatarUrl`
     * @default "НО" */
    avatarInitials?: string;
    /** Колбэк при клике на имя клиента */
    onCustomerClick?: () => void;
    /** Колбэк при клике на уведомления */
    onNotificationsClick?: () => void;
    /** Колбэк при клике на подарки */
    onGiftClick?: () => void;
    /** Колбэк при клике на настройки */
    onSettingsClick?: () => void;
    /** Колбэк при клике на выход */
    onLogoutClick?: () => void;
    /** Колбэк при клике на «Главная» */
    onNavMainClick?: () => void;
    /** Колбэк при клике на «Платежи» */
    onNavPaymentsClick?: () => void;
    /** Колбэк при клике на «Сервисы» */
    onNavServicesClick?: () => void;
}
/**
 * Главная навигационная панель сайта.
 * Содержит логотип, навигацию по разделам, информацию о клиенте и кнопки быстрых действий.
 * Адаптивна: на мобильных скрывает навигацию и показывает упрощённый вид.
 */
export declare const MainPageNavigationBar: React.FC<MainPageNavigationBarProps>;
