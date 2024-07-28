import {ButtonProps} from './types.ts';
import './styles.css';

const Button = ({ handleClick, title }: ButtonProps) => (
    <button className="button" type="button" onClick={handleClick}>{title}</button>
);

export default Button;
