import React from 'react';
interface NumericInputProps {
    className: string;
    value?: number | null;
    onValueChange?: (value: number | null) => void;
    suffix?: string;
    decimalScale?: number;
    allowNegative?: boolean;
    placeholder?: string;
    disabled?: boolean;
    inputRef?: React.Ref<HTMLInputElement>;
}
export declare const NumericInput: React.FC<NumericInputProps>;
export {};
