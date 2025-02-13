import {useReducer} from 'react';

const reducer = (state, action) =>{
    if(action.type === 'ride') {
        if(state.fuel>10) return {money: state.money+10, fuel: state.fuel-10, error:""};
        return {...state, error:"need more fuel"};
    }
    if(action.type === 'fuel') {
        if(state.fuel>200) return {...state, error:"tank is full"};
        if(state.money>50) return {money: state.money-50, fuel: state.fuel+100, error: ""};
        return {...state, error:"need more money"};
    };
    return new Error();
}

function ExReducer(){
    const initialState = {money: 100, fuel:0};
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <>
            <h1>Wallet : {state.money}</h1>
            <h2>Fuel : {state.fuel}</h2>
            <h3>{state.error}</h3>
            <div>
                <button onClick={() => dispatch({type:"ride"})}>Ride</button>
                <button onClick={() => dispatch({type:"fuel"})}>Fuel</button>
            </div>
        </>
    )
}

export default ExReducer;