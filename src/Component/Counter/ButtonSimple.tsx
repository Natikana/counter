import React from 'react';

export type ButtonSimpleProps = {
    title: string
    disabled: boolean
    onClickIncButton: () => void
    changeCounterNull: () => void
    onClickHandlerSet: () => void
}

export const ButtonSimple: React.FC<ButtonSimpleProps> = ({
                                                              title,
                                                              disabled,
                                                              onClickIncButton,
                                                              onClickHandlerSet,
                                                              changeCounterNull
                                                          }) => {
    const onClickHandlerButton = () => {
        onClickIncButton()
        changeCounterNull()
        onClickHandlerSet()
    }
    return (
        <button onClick={onClickHandlerButton}>
            {title}
        </button>
    );
};

