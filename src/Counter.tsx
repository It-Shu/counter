import React from 'react';
import Display from "./Display";
import Button from "./Button";
import {NavLink} from "react-router-dom";

type CounterType = {
    state: number
    inc: () => void
    dec: () => void
    disabledInc: boolean
    disabledDec: boolean
}

const Counter = (props: CounterType) => {


    return (
        <div>
            <div>
                <Display state={props.state}/>
            </div>
            <div>
                <Button
                    title='INC'
                    function={props.inc}
                    disabled={props.disabledInc}
                />
                <Button
                    title='DEC'
                    function={props.dec}
                    disabled={props.disabledDec}
                />
                <NavLink to='set'>
                    <Button
                        title='SET'
                    />
                </NavLink>

            </div>

        </div>
    );
};

export default Counter;