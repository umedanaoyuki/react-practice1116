import {useReducer} from "react";

type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

const reducer = (currentCount: number, action: Action) => {
    switch (action) {
        case 'DECREMENT':
            return currentCount - 1
        case "INCREMENT":
            return currentCount + 1
        case "DOUBLE":
            return currentCount * 2
        case "RESET":
            return 0
        default:
            return currentCount
    }
}


type CounterProps = {
    initialValue: number
}
export const Counter2 = (props: CounterProps) => {

    const {initialValue} = props;
    const [count, dispatch] = useReducer(reducer, initialValue)



    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch("DECREMENT")}>DECREMENT</button>
            <button onClick={() => dispatch("DOUBLE")}>DOUBLE</button>
            <button onClick={() => dispatch("RESET")}>RESET</button>
            <button onClick={() => dispatch("INCREMENT")}>INCREMENT</button>
        </div>
    )
}
