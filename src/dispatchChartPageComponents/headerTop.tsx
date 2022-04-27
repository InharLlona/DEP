import React from "react";
import Flexbox from 'flexbox-react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

interface initialState {
    allConfirmed: boolean,
    isUserCodeCorrect: boolean,
    isAlertVisible:boolean,
    errorTrue:boolean,
};

interface ob {
    type:string,
    payload?:string
}

interface Props{
    dispatch:(f:ob)=> void,
    state:initialState,
}

export const HeaderT : React.FC <Props>= (props:Props) => {

    const [inputColor,setinputColor] = React.useState("");
    const [startDate, setStartDate] = React.useState(new Date());
    const workerIds = "12345";

    const onWorkerChange = (e) => {
        props.dispatch({type:'ERROR_FALSE'})
        props.dispatch({type:'ALERT_NO_VISIBLE'})
          if(e.target.value==workerIds){
            setinputColor("#b2f4bc")
            props.dispatch({type:'WORKER_CONFIRMATION_SUCCESS'})
          }
          else{
            setinputColor("#f4bbc0")
            props.dispatch({type:'WORKER_CONFIRMATION_FAILED'})
          }
      }

return( 
    <div>
         <Flexbox padding="10px" justifyContent="space-between">
           <input type={"number"} title="WW" placeholder="Worker ID" onChange={onWorkerChange} style={{backgroundColor:inputColor}}></input>
           <input type={"text"} placeholder="Client"></input>
              <div> 
              <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} placeholderText="Sending date" />
              </div> 
         </Flexbox>
    </div>
)   
}