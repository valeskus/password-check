import React from 'react';
import './PasswordInput.style.css'

export function PasswordInput(props) {
    return (
        <form >
            <label className='inputLable'>
                Password
                <input onChange={(e) => {
                    props.onChange(e.target.value);
                }}
                    value={props.value}
                    className='input'
                    placeholder={'Enter your password'} />
            </label>
        </form>
    );
}