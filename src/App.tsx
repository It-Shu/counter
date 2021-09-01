import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import Counter from "./Counter";
import {DecAC, IncAC, SetApplyAC, SetMaxValueAC, SetStartValueAC} from "./state/counter-reducer";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./Settings";


function App() {

    //redux
    const value = useSelector<AppRootStateType, number>(state => state.count.value)
    const maxValueRedux = useSelector<AppRootStateType, number>(state => state.count.setMaxValue)
    const startValueRedux = useSelector<AppRootStateType, number>(state => state.count.setStartValue)
    const disabledIncRedux = useSelector<AppRootStateType, boolean>(state => state.count.disabledInc)
    const disabledDecRedux = useSelector<AppRootStateType, boolean>(state => state.count.disabledDec)
    const disabledSetRedux = useSelector<AppRootStateType, boolean>(state => state.count.disabledSet)
    const dispatch = useDispatch()

    // localState
    // let [state, setState] = useState(0)
    // const [maxValue, setMaxValue] = useState<number>(0)
    // const [startValue, setStartValue] = useState<number>(0)
    // Disabled State
    // const [disabledInc, setDisabledInc] = useState<boolean>(false)
    // const [disabledDec, setDisabledDec] = useState<boolean>(false)
    // const [disabledSet, setDisabledSet] = useState<boolean>(false)

    const IncFunction = () => {
        // let result = state
        // result = result + 1
        // if (result === maxValue) {
        //     setDisabledInc(true)
        //     setDisabledDec(false)
        //     setState(result)
        // } else {
        //     setDisabledInc(false)
        //     setDisabledDec(false)
        //     setState(result)
        // }

        dispatch(IncAC())

    }

    const DecFunction = () => {
        // let decrement = startValue
        // setState(decrement)
        // if (decrement === startValue) {
        //     setDisabledDec(true)
        //     setDisabledInc(false)
        //     setState(decrement)
        // } else {
        //     setDisabledDec(false)
        //     setDisabledInc(true)
        //     setState(decrement)
        // }
        dispatch(DecAC())
    }

    // Settings Values
    const SetStartValueFunction = (value: number) => {
        // setLogic(maxValue, value)
        // if (startValue <= 0) {
        //     setStartValue(value)
        // } else {
        //     setStartValue(value)
        // }
        // setStartValue(value)
        dispatch(SetStartValueAC(value))
    }

    const SetMaxValueFunction = (value: number) => {
        // setLogic(value, startValue)
        // if (maxValue <= 0) {
        //     setMaxValue(value)
        // } else {
        //     setMaxValue(value)
        // }
        // setMaxValue(value)
        dispatch(SetMaxValueAC(value))
    }

    const SetApply = () => {
        // setState(startValue)
        dispatch(SetApplyAC())
    }

    // function setLogic(startValue: number, maxValue: number) {
    //
    //     if (maxValue <= 0 && startValue <= 0) {
    //         setDisabledSet(true)
    //     } else if (startValue >= maxValue) {
    //         setDisabledSet(true)
    //     } else {
    //         setDisabledSet(false)
    //     }
    // }


    return (
        <BrowserRouter>
            <div>
                <div>
                    <Route path={'/'} exact render={() =>
                        <Counter
                            state={value}
                            inc={IncFunction}
                            dec={DecFunction}
                            disabledDec={disabledDecRedux}
                            disabledInc={disabledIncRedux}
                        />
                    }/>

                </div>
                <div>
                    <Route path='/set' render={() =>
                        <Settings
                            startValue={startValueRedux}
                            maxValue={maxValueRedux}
                            setStartValue={SetStartValueFunction}
                            setMaxValue={SetMaxValueFunction}
                            setApply={SetApply}
                            disabledSet={disabledSetRedux}
                        />
                    }/>

                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
