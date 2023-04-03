import React, { useCallback, useState } from 'react';
import { PasswordInput } from '../PasswordInput';

export function PasswordCheck(props) {
    const [value, setValue] = useState('');

    const handleClick = useCallback(() => {
        // props.onSearch(searchValue);

        // eslint-disable-next-line
    }, [props.onSearch, value]);

    const handleChange = useCallback(
        (nextValue) => {
            if (!nextValue) {
                // props.onSearch(nextValue);
            }

            setValue(nextValue);
        }, // eslint-disable-next-line
        [props.onSearch]
    );

    return (
        <div className='searchBar-container'>
            <div className='searchInput-container'>
                <PasswordInput
                    onChange={handleChange}
                    value={value}
                    id='password'
                    type='text'
                />
            </div>


        </div>
    );
}