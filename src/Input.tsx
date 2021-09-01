import React, {ChangeEvent} from 'react';

type InputType = {
    value: number
    setValue: (value: number) => void
    error?: boolean
}

const Input = (props: InputType) => {

    const SetValue = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        props.setValue(value)
    }

    return (
        <div>
            <input value={props.value} onChange={SetValue} type="number"/>
        </div>
    );
};

export default Input;