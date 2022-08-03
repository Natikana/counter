import React from 'react';

export type ButtonProps = {
    nickName:string
    callBack:()=>void
}
export const ButtonDop = (props:ButtonProps) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickButtonHandler}>{props.nickName}</button>
    );
};

