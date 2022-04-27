import React from "react";
import Flexbox from 'flexbox-react';
import "react-datepicker/dist/react-datepicker.css";
import Alert from '@mui/material/Alert';
import {MySendChartContext} from "../Contextos";


interface ob {
    type:string,
    payload?:string
}

interface initialState {
    allConfirmed: boolean,
    isUserCodeCorrect: boolean,
    isAlertVisible:boolean,
    errorTrue:boolean,
  };

interface Props{
    dispatch:(f:ob)=> void,
    state:initialState,
    buttonColor:string
}

export const HeaderB : React.FC <Props>= (props: Props) => {
    const mySendChartContext =  React.useContext(MySendChartContext)

    const sendProducts = () =>{
        if((props.state.isUserCodeCorrect)&&(props.state.allConfirmed)&&(!props.state.isAlertVisible)){
          props.dispatch({type:'ALERT_VISIBLE'})
          props.dispatch({type:'ERROR_FALSE'})
        }else if((props.state.isUserCodeCorrect)&&(props.state.allConfirmed)&&(props.state.isAlertVisible)){
          props.dispatch({type:'ALERT_NO_VISIBLE'})
          props.dispatch({type:'ERROR_FALSE'})
        }else{
          props.dispatch({type:'ERROR_TRUE'})
        }
      }

    return( 
        <div>
         <Flexbox padding="10px" justifyContent="space-between">
           <input type={"text"} value={`${mySendChartContext.precio}€`}></input>
           <progress max="100" value={mySendChartContext.statuss}></progress>
           <button onClick={sendProducts} style={{backgroundColor:props.buttonColor}}>Send</button> 
         </Flexbox>   
         {props.state.errorTrue && <Alert variant="outlined" severity="error">User code should be correct and all products should be picked! — check it out!</Alert>}
         {props.state.isAlertVisible && <Alert variant="outlined" severity="success">PO created! — check it out!</Alert>}
         </div>
    )   
}