import React from 'react';

export function PasswordInput(props) {
    return (
        <form >
            <label>
                Password:
                <input onChange={(e) => {
                    props.onChange(e.target.value);
                }}
                    value={props.value}
                    type={props.type}
                    id={props.id}
                    className='input'
                    placeholder={'Enter your password'} />
            </label>
        </form>
    );
}