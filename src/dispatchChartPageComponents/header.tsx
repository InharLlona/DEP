import React from "react";
import Flexbox from 'flexbox-react';
import {MySendChartContext} from "../Contextos";
import "react-datepicker/dist/react-datepicker.css";
import { HeaderB} from "./headerBottom";
import { HeaderT } from "./headerTop";
import {initialState,confirmationReducer} from "./reducer"

export const Header:React.FC = () => {

    const mySendChartContext =  React.useContext(MySendChartContext)

    const [state, dispatch] = React.useReducer(confirmationReducer, initialState);
    const [buttonColor,setbuttonColor] = React.useState("");

    React.useEffect(() => {    
         if((state.isUserCodeCorrect)&&(state.allConfirmed)){setbuttonColor("#b2f4bc")}
         else{setbuttonColor("#f4bbc0")}
     },[state.isUserCodeCorrect,state.allConfirmed]);

    React.useEffect(() => {
           dispatch({type:'ERROR_FALSE'})
           dispatch({type:'ALERT_NO_VISIBLE'})
           if(mySendChartContext.statuss==100){dispatch({type:'PO_CONFIRMATION_SUCCESS'})}
           else{dispatch({type:'PO_CONFIRMATION_FAILED'})}
    },[mySendChartContext.statuss]);

    return(
      <div style={{border:"1px solid", borderRadius:"5px", borderColor:"#d1d4d2"}}>
       <Flexbox flexDirection="column">
         <h4>Pedido a proveedor</h4>
         <HeaderT dispatch={dispatch} state={state}></HeaderT>
         <HeaderB dispatch={dispatch} state={state} buttonColor={buttonColor}></HeaderB>
     </Flexbox>
     </div>
    )
}