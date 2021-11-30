import './Button.css';

export const Button =({className, buttonText, onClick})=> { return (
    <button onClick={onClick} className={className}>
            <span className="button__text" >{buttonText}</span>
    </button>
) }