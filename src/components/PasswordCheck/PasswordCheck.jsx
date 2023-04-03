import React, { useCallback, useState } from 'react';
import './PasswordCheck.style.css'
import { ColorSection } from '../ColorSection/ColorSection';
import { PasswordInput } from '../PasswordInput';

export function PasswordCheck(props) {
    const [value, setValue] = useState('');
    const [easyColor, setEasyColor] = useState(false);
    // const [mediumColor, setMediumColor] = useState('');
    // const [strongColor, setStrongColor] = useState('');

const letters =/[a-zA-Z]+/;
const numbers = /[0-9]+/;
const symbols = /[$-/:-?{-~!"^_`[\]]+/;
const lettersAndNumbers = (v)=>{return letters.test(v)&& numbers.test(v)}
const lettersAndSymbols = (v)=>{return letters.test(v) && symbols.test(v)}
const numbersAndSymbols = (v)=>{return numbers.test(v) && symbols.test(v)}


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
            if (letters.test(nextValue)&& numbers.test(nextValue) && symbols.test(nextValue)) {
                console.log('all')

            } else if (lettersAndNumbers(nextValue) || lettersAndSymbols(nextValue) || numbersAndSymbols(nextValue)) {
                console.log(1)
            }
           
            else if(letters.test(nextValue) || numbers.test(nextValue) || symbols.test(nextValue)) {
                console.log('letters')
                setEasyColor(true)
            }
          



        }, // eslint-disable-next-line
        []
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
            <ColorSection color={`${easyColor ? "redColor" : ""}`} />
            <ColorSection  />
            <ColorSection/>
        </div>
    );
}