import React, { useState } from 'react';
import './style.scss';

export const InputText = ({label, register, errors}) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (e) => {
        let validationValue = e.target.value;
        setInputValue(validationValue);
    }

    return (
        <div className='field'>
            <label className='field__label' htmlFor={register.name}>
                {label}
            </label>
            <div className='field__input-wrapper'>
                <input
                    className='field__input'
                    {...register}
                    type="text"
                    onChange={handleChange}
                    value={inputValue}
                />
            </div>
            {errors &&
                <div className='field__error'>
                    {errors.type === 'currentLength' && (
                        <p>current lenght(not {inputValue.length})</p>
                    )
                    }    
                    {errors.type === "min" && (
                        <p>minimum</p>
                    )}
                    {errors.type === "required" && (
                        <p>obyazatelno</p>
                    )}
                </div>
            }
        </div>
    );
};