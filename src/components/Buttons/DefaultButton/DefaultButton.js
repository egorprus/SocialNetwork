import './btn-style.scss';

export const DefaultButton = ({type, text}) => {
    return (
        <button className='btn' type={type}>
            {text}
        </button>
    )
};