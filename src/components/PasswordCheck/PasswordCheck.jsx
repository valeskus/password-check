import React, { useCallback, useState } from 'react';
import './PasswordCheck.style.css'
import { ColorSection } from '../ColorSection/ColorSection';
import { PasswordInput } from '../PasswordInput';

const letters = /[a-zA-Z]+/;
const numbers = /[0-9]+/;
const symbols = /[$-/:-?{-~!"^_`[\]]+/;
const lettersAndNumbers = (v) => { return letters.test(v) && numbers.test(v) }
const lettersAndSymbols = (v) => { return letters.test(v) && symbols.test(v) }
const numbersAndSymbols = (v) => { return numbers.test(v) && symbols.test(v) }

const LEVELS = {
    NONE: "NONE",
    LOW: "LOW",
    MID: "MID",
    HIGH: "HIGH"
};

const checkPasswordLevel = (password) => {
    const isStrongPassword = letters.test(password) && numbers.test(password) && symbols.test(password);

    const isMidPassword = lettersAndNumbers(password) || lettersAndSymbols(password) || numbersAndSymbols(password);

    const isEasyPassword = letters.test(password) || numbers.test(password) || symbols.test(password);

    if (isStrongPassword) {
        return LEVELS.HIGH;
    }

    if (isMidPassword) {
        return LEVELS.MID;
    }

    if (isEasyPassword) {
        return LEVELS.LOW;
    }
}

const LEVEL_COLOR = {
    [LEVELS.NONE]: '#808080',
    [LEVELS.LOW]: '#ff0000',
    [LEVELS.MID]: '#ffdf00',
    [LEVELS.HIGH]: '#0dce0d'
};

export function PasswordCheck() {
    const [value, setValue] = useState('');
    const [colors, setColors] = useState({
        easy: LEVEL_COLOR.NONE,
        medium: LEVEL_COLOR.NONE,
        strong: LEVEL_COLOR.NONE,
    });

    const handleChange = useCallback(
        (nextValue) => {
            setValue(nextValue);
            changeIndicator(nextValue)
        }, // eslint-disable-next-line
        []
    );

    const changeIndicator = useCallback(
        (nextValue) => {
            const passwordLevel = checkPasswordLevel(nextValue);

            switch (passwordLevel) {
                case LEVELS.HIGH: {
                    setColors({
                        easy: LEVEL_COLOR.HIGH,
                        medium: LEVEL_COLOR.HIGH,
                        strong: LEVEL_COLOR.HIGH,
                    });
                    break;
                }
                case LEVELS.MID: {
                    setColors({
                        easy: LEVEL_COLOR.MID,
                        medium: LEVEL_COLOR.MID,
                        strong: LEVEL_COLOR.NONE,
                    });
                    break;
                }
                case LEVELS.LOW: {
                    setColors({
                        easy: LEVEL_COLOR.LOW,
                        medium: LEVEL_COLOR.NONE,
                        strong: LEVEL_COLOR.NONE,
                    });
                    break;
                }
                default: {
                    setColors({
                        easy: LEVEL_COLOR.NONE,
                        medium: LEVEL_COLOR.NONE,
                        strong: LEVEL_COLOR.NONE,
                    });

                }
            }
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
                <ColorSection color={colors.easy} />
                <ColorSection color={colors.medium} />
                <ColorSection color={colors.strong} />
            </div>

        </div>
    );
}