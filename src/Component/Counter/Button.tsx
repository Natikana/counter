import React from 'react';

export type ButtonProps = {
    disabled?: boolean
    title: string
    callBackButton: () => void
}
export const Button: React.FC<ButtonProps> = ({
                                                  disabled,
                                                  title,
                                                  callBackButton
                                              }) => {
    const onClickHandlerButton = () => {
        callBackButton()
    }
    return (
        <div>
            <button onClick={onClickHandlerButton} disabled={disabled}>{title}</button>
        </div>
    );
};

