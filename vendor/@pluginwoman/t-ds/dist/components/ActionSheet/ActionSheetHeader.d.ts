import React from 'react';
interface ActionSheetHeaderProps {
    /** Заголовок шапки */
    title?: React.ReactNode;
    /** Дополнительный текст под заголовком */
    description?: React.ReactNode;
    /** Показывает контент шапки. При `false` рендерится пустой разделитель
     * @default true */
    hasContent?: boolean;
    /** Дополнительный CSS-класс
     * @default "" */
    className?: string;
}
/**
 * Шапка `ActionSheet` с заголовком.
 * При `hasContent={false}` рендерится как пустой визуальный разделитель.
 */
export declare const ActionSheetHeader: React.FC<ActionSheetHeaderProps>;
export {};
