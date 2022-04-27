import React from "react";
import Flexbox from 'flexbox-react';

import "react-datepicker/dist/react-datepicker.css";
import {Header} from "../dispatchChartPageComponents/header"
import {Detail} from "../dispatchChartPageComponents/detail"

export const ChartPage: React.FC = () =>{
  
    return(
    <Flexbox flexDirection="column" width="700px">
      <div>
        <Header/>
      </div>
      <div>
        <Detail/>
      </div>
     </Flexbox> 
    )
   
}