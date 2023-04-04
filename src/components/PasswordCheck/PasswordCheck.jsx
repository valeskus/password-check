import React, { useCallback, useState } from 'react';
import './PasswordCheck.style.css'
import { ColorSection } from '../ColorSection/ColorSection';
import { PasswordInput } from '../PasswordInput';

export function PasswordCheck(props) {
    const [value, setValue] = useState('');
    const [easyColor, setEasyColor] = useState('');
    const [mediumColor, setMediumColor] = useState('');
    const [strongColor, setStrongColor] = useState('');

    const letters = /[a-zA-Z]+/;
    const numbers = /[0-9]+/;
    const symbols = /[$-/:-?{-~!"^_`[\]]+/;
    const lettersAndNumbers = (v) => { return letters.test(v) && numbers.test(v) }
    const lettersAndSymbols = (v) => { return letters.test(v) && symbols.test(v) }
    const numbersAndSymbols = (v) => { return numbers.test(v) && symbols.test(v) }


    const handleChange = useCallback(
        (nextValue) => {
            if (!nextValue) {
                // props.onSearch(nextValue);
            }

            setValue(nextValue);
            changeIndicator(nextValue)
        }, // eslint-disable-next-line
        []
    );

    const changeIndicator = useCallback(
        (nextValue) => {
            if (letters.test(nextValue) && numbers.test(nextValue) && symbols.test(nextValue)) {
                setEasyColor('greenColor')
                setMediumColor('greenColor')
                return setStrongColor('greenColor')

            } else if (lettersAndNumbers(nextValue) || lettersAndSymbols(nextValue) || numbersAndSymbols(nextValue)) {
                setStrongColor()
                setEasyColor('yellowColor')
                return setMediumColor('yellowColor')
            } else if (letters.test(nextValue) || numbers.test(nextValue) || symbols.test(nextValue)) {
                setMediumColor()
                setStrongColor()
                return setEasyColor('redColor')
            }
            setEasyColor()
            setMediumColor()
            setStrongColor()

        }, // eslint-disable-next-line
        []
    );

    return (
        <div className='passwordCheck-container'>
            <PasswordInput
                onChange={handleChange}
                value={value}
            />
            <div className='indicator-container'>
                <ColorSection color={`${easyColor && easyColor}`} />
                <ColorSection color={`${mediumColor && mediumColor}`} />
                <ColorSection color={`${strongColor && strongColor}`} />
            </div>

        </div>
    );
}