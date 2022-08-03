import React, {ChangeEvent, Dispatch, SetStateAction, useEffect} from 'react';
import cl from './Counter.module.css'
import {NavLink} from "react-router-dom";

export type SetButtonProps = {
    minValue: number
    maxValue: number
    setMaxValue: Dispatch<SetStateAction<number>>
    setMinValue: Dispatch<SetStateAction<number>>
    onClickMaxInput: () => void
    onClickMinInput: () => void
    onClickSetInput: () => void
    setCount: Dispatch<SetStateAction<number>>


}
export const SetButton: React.FC<SetButtonProps> = ({
                                                        onClickSetInput,
                                                        minValue,
                                                        maxValue,
                                                        setMaxValue,
                                                        setMinValue,
                                                        setCount
                                                    }) => {
    const onClickMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(JSON.parse(e.currentTarget.value))
    }

    const onClickMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(JSON.parse(e.currentTarget.value))
    }

    const onClickSet = () => {
        setCount(minValue)
        onClickSetInput()
    }
    return (
        <div>Counter Progress
            <div><h3>max value:</h3>
                <input onChange={onClickMax} type='number' value={maxValue}
                       className={maxValue <= minValue ? cl.error : cl.input}/>
            </div>
            <div><h3>min value:</h3>
                <input onChange={onClickMin} type='number' value={minValue}
                       className={maxValue <= minValue ? cl.error : cl.input}/>
            </div>
            <NavLink to={"/"}>
                <button onClick={onClickSet}>set</button>
            </NavLink>
        </div>
    );
};

