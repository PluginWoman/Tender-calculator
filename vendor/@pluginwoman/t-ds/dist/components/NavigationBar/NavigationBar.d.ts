import React from 'react';
import './navigation-bar.css';
type NavigationBarItemKey = string | number;
interface NavigationBarBaseItem {
    key?: NavigationBarItemKey;
    label: React.ReactNode;
}
export interface NavigationBarLinkItem extends NavigationBarBaseItem {
    kind: 'link';
    /** URL для перехода */
    href?: string;
    /** Колбэк по клику */
    onClick?: () => void;
    /** Блокирует элемент */
    isDisabled?: boolean;
}
export interface NavigationBarStepItem extends NavigationBarBaseItem {
    kind: 'step';
    /** Состояние шага */
    state?: 'current' | 'upcoming' | 'completed';
    /** Колбэк по клику (доступен только для завершённых шагов) */
    onClick?: () => void;
}
export type NavigationBarItem = NavigationBarLinkItem | NavigationBarStepItem;
export interface NavigationBarAdaptiveProgress {
    /** Текущее значение прогресса */
    value: number;
    /** Общее количество шагов (для `step-progress`) */
    maxSteps?: number;
    /** Aria-метка для доступности */
    ariaLabel?: string;
}
export interface NavigationBarProps {
    /** Основной заголовок панели */
    title?: React.ReactNode;
    /** Вспомогательный текст под заголовком */
    description?: React.ReactNode;
    /** Текст верхней breadcrumb-ссылки */
    rootLinkLabel?: React.ReactNode;
    /** Массив элементов навигации: ссылки (`link`) или шаги (`step`)
     * @default [] */
    items?: NavigationBarItem[];
    /** Показывает кнопку «Назад»
     * @default true */
    hasBackButton?: boolean;
    /** Показывает кнопку действия
     * @default true */
    hasActionButton?: boolean;
    /** Показывает breadcrumb-ссылку
     * @default true */
    hasRootLink?: boolean;
    /** Показывает описание
     * @default true */
    hasDescription?: boolean;
    /** Aria-метка кнопки «Назад»
     * @default "Go back" */
    backButtonLabel?: string;
    /** Aria-метка кнопки действия
     * @default "Clear" */
    actionButtonLabel?: string;
    /** Иконка кнопки «Назад»
     * @default ArrowLeft */
    backButtonIcon?: React.ReactNode;
    /** Иконка кнопки действия
     * @default Broom */
    actionButtonIcon?: React.ReactNode;
    /** Колбэк при клике на кнопку «Назад» */
    onBackClick?: () => void;
    /** Колбэк при клике на кнопку действия */
    onActionClick?: () => void;
    /** Колбэк при клике на breadcrumb-ссылку */
    onRootLinkClick?: () => void;
    /** Инвертирует цвета: текст и иконки становятся белыми
     * @default false */
    isInverted?: boolean;
    /** Вариант центральной зоны в адаптивном режиме
     * @default "title" */
    titleVariant?: 'none' | 'title' | 'title-description' | 'step-progress' | 'percent-progress' | 'image';
    /** Логотип (для варианта `image`) */
    logo?: React.ReactNode;
    /** Настройки прогресса (для `step-progress` и `percent-progress`) */
    progress?: NavigationBarAdaptiveProgress;
    /** Иконка левой кнопки в адаптивном режиме
     * @default ArrowLeft */
    leftIcon?: React.ReactNode;
    /** Aria-метка левой кнопки в адаптивном режиме
     * @default "Go back" */
    leftAriaLabel?: string;
    /** Колбэк при клике на левую кнопку в адаптивном режиме */
    onLeftClick?: () => void;
    /** Вариант правой зоны в адаптивном режиме
     * @default "icon" */
    rightAccessoryVariant?: 'none' | 'icon' | 'icon-icon' | 'icon-badge' | 'action';
    /** Иконка правой кнопки в адаптивном режиме
     * @default Broom */
    rightIcon?: React.ReactNode;
    /** Иконка второй правой кнопки (для варианта `icon-icon`) */
    secondaryRightIcon?: React.ReactNode;
    /** Aria-метка правой кнопки
     * @default "Action" */
    rightAriaLabel?: string;
    /** Aria-метка второй правой кнопки
     * @default "Secondary action" */
    secondaryRightAriaLabel?: string;
    /** Колбэк при клике на правую кнопку */
    onRightClick?: () => void;
    /** Колбэк при клике на вторую правую кнопку */
    onSecondaryRightClick?: () => void;
    /** Текст кнопки-ссылки (для варианта `action`)
     * @default "Text M" */
    actionLabel?: React.ReactNode;
    /** Значение бейджа (для варианта `icon-badge`)
     * @default 0 */
    badgeValue?: number;
    /** Дополнительный CSS-класс (применяется к обоим вариантам)
     * @default "" */
    className?: string;
    /** Фиксирует панель при скролле (`position: sticky; top: 0`)
     * @default false */
    isSticky?: boolean;
}
/**
 * Навигационная панель страницы с заголовком.
 * Автоматически переключается между десктопным и адаптивным вариантом по брейкпоинту:
 * **> 1023px** — десктоп, **≤ 1023px** — адаптив.
 */
export declare const NavigationBar: React.FC<NavigationBarProps>;
export {};
