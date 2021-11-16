import './Button.css';

export const Button =({className, buttonText})=> { return (
    <button className={className}>
            <span className="button__text">{buttonText}</span>
    </button>
) }