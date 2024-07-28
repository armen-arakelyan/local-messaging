import React from 'react';
import './styles.css';
import {InputProps} from './types.ts';

const Input: React.FC<InputProps> = ({ value, onChange, onKeyDown, type = 'text' }) => {
    return (
        <input
            type={type}
            className="input"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};

export default Input;
