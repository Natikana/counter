import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import cl from "./Counter.module.css";
import {SetButton} from "./SetButton";
import {Button} from "./Button";
import { NavLink, Route, Routes} from "react-router-dom";

type CounterPropsType = {
    maxValue: number
    minValue: number
    count: number
    error: string
    incAmount: () => void
    resetAmount: () => void
    onClickSetInput: () => void
    setMaxValue: Dispatch<SetStateAction<number>>
    setMinValue: Dispatch<SetStateAction<number>>
    onClickMaxInput: () => void
    onClickMinInput: () => void
    setCount: Dispatch<SetStateAction<number>>

}

export const Counter: React.FC<CounterPropsType> = ({
                                                        maxValue,
                                                        minValue,
                                                        count,
                                                        resetAmount,
                                                        incAmount,
                                                        error,
                                                        onClickSetInput,
                                                        setMaxValue,
                                                        setMinValue,
                                                        onClickMaxInput,
                                                        onClickMinInput, setCount
                                                    }) => {
    return (
        <Routes>
            <Route path={'/'} element={
                <div className={cl.counter1}>
                    <h3 className={count === maxValue ? cl.red : ''}>{count}</h3>
                    <Button
                        callBackButton={incAmount}
                        disabled={count === maxValue}
                        title={'inc'}
                    />
                    <Button
                        title={'reset'}
                        callBackButton={resetAmount}
                    />
                    <NavLink to={'/counterProgress'}>
                        <Button
                        title={'set'}
                        callBackButton={onClickSetInput}
                        />
                    </NavLink>
                </div>
            }
            />
            <Route path={'counterProgress'} element={
                <SetButton
                    setMaxValue={setMaxValue}
                    setMinValue={setMinValue}
                    maxValue={maxValue}
                    minValue={minValue}
                    onClickSetInput={onClickSetInput}
                    onClickMaxInput={onClickMaxInput}
                    onClickMinInput={onClickMinInput}
                    setCount={setCount}
                />}
            />
        </Routes>

    );
};
