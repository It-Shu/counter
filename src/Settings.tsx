import React from 'react';
import Button from "./Button";
import {NavLink} from "react-router-dom";
import Input from "./Input";


type SettingsType = {
    setApply: () => void
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    disabledSet: boolean
}

const Settings = (props: SettingsType) => {

    return (
        <div>
            <div>
                <div>
                    MaxValue
                    <Input
                        value={props.maxValue}
                        setValue={props.setMaxValue}
                    />
                </div>
                <div>
                    StartValue
                    <Input
                        value={props.startValue}
                        setValue={props.setStartValue}
                    />
                </div>
            </div>
            <div>
                <NavLink to='/'>
                    <Button
                        title='APPLY'
                        setApply={props.setApply}
                        disabled={props.disabledSet}
                    />
                </NavLink>
            </div>
        </div>
    );
};

export default Settings;