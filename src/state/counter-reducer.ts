type StateType = {
    value: number
    setStartValue: number
    setMaxValue: number
    disabledInc: boolean
    disabledDec: boolean
    disabledSet: boolean
}

const initialState: StateType = {
    value: 0,
    setStartValue: 0,
    setMaxValue: 0,
    disabledInc: false,
    disabledDec: false,
    disabledSet: false
}

type ActionType = IncType | DecType | SetType | SetMaxValueType | SetStartValueType

export const counterReducer = (state = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "INCREMENT-VALUE": {
            let copyState = {...state}
            let increment = copyState.value + 1
            copyState.value = increment
            if (increment === copyState.setMaxValue) {
                copyState.disabledInc = true
                copyState.disabledDec = false
            } else {
                copyState.disabledDec = false
            }
            return copyState
        }

        case "DECREMENT-VALUE": {
            let copyState = {...state}
            let decrement = copyState.setStartValue
            copyState.value = decrement
            if (decrement === copyState.setStartValue) {
                copyState.disabledDec = true
                copyState.disabledInc = false
            } else {
                copyState.disabledInc = false
            }
            return copyState
        }

        case "SETTINGS": {
            let copyState = {...state}
            copyState.value = copyState.setStartValue
            return copyState
        }
        case "SET-MAX-VALUE": {
            let copyState = {...state}
            copyState.setMaxValue = action.maxValue
            copyState.value = copyState.setMaxValue
            copyState.disabledSet = copyState.setMaxValue <= 0 || copyState.setMaxValue <= copyState.setStartValue;
            // if (copyState.setMaxValue <= 0) {
            //     copyState.disabledSet = true
            // } else {
            //     copyState.disabledSet = false
            // }
            return copyState
        }
        case "SET-START-VALUE": {
            let copyState = {...state}
            copyState.setStartValue = action.startValue
            copyState.value = copyState.setStartValue
            copyState.disabledSet = copyState.setStartValue >= copyState.setMaxValue || copyState.setStartValue < 0
            return copyState
        }
    }
    return state
}


type IncType = ReturnType<typeof IncAC>
type DecType = ReturnType<typeof DecAC>
type SetType = ReturnType<typeof SetApplyAC>
type SetMaxValueType = ReturnType<typeof SetMaxValueAC>
type SetStartValueType = ReturnType<typeof SetStartValueAC>

export const IncAC = () => {
    return {type: 'INCREMENT-VALUE'} as const
}

export const DecAC = () => {
    return {type: 'DECREMENT-VALUE'} as const
}

export const SetApplyAC = () => {
    return {type: 'SETTINGS'} as const
}

export const SetMaxValueAC = (maxValue: number) => {
    return {type: 'SET-MAX-VALUE', maxValue} as const
}

export const SetStartValueAC = (startValue: number) => {
    return {type: 'SET-START-VALUE', startValue} as const
}