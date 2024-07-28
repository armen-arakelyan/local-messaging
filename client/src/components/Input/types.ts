import {ChangeEvent, KeyboardEvent, HTMLInputTypeAttribute} from 'react';

export interface InputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    type?: HTMLInputTypeAttribute;
}
