import React from 'react';

type ButtonType = {
    title: string
    disabled?: boolean
    function?: () => void
    setApply?: () => void
}

const Button = (props: ButtonType) => {

    let onClickFunction = () => {
        props.function && props.function()
        props.setApply && props.setApply()
    }


    return (
        <div>
            <button onClick={onClickFunction} disabled={props.disabled}>{props.title}</button>
        </div>
    );
};

export default Button;