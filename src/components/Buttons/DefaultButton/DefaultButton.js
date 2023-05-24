import './btn-style.scss';

export const DefaultButton = ({type, label, handleClick, className}) => {
    return (
        <button className={`btn ${className || ''}`} type={type} onClick={handleClick}>
            {label}
        </button>
    )
};