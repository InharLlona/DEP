import React from "react";
import Flexbox from 'flexbox-react';
import { MyContext,MyChartContext } from "../Contextos";
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';

export const Chart : React.FC= () =>{
    const mycontext = React.useContext(MyContext)
    const mychartcontext = React.useContext(MyChartContext)
    const handleChange = (value:boolean,chid:string,emptc:boolean) => {
        mycontext.setList(mycontext.chartList(mycontext.lista,value,chid,emptc))
    }
    return (
        <div>
                <Flexbox style={{ borderLeft:"1px solid", justifyContent:"space-between", padding:"10px"}}>    
                    {mychartcontext.show && <div>
                        {mycontext.lista.map(cat=>(
                            <div key={cat.idss}>
                                <Flexbox style={{justifyContent:"space-between", padding:"10px"}}>{cat.idss} <DeleteIcon onClick={e => handleChange(false,cat.idss,false)}></DeleteIcon></Flexbox>
                            </div>
                        ))} 
                    <Flexbox style={{flexDirection:"column", padding:"10px", minWidth:"300px" }}>
                            <Link to="/chartPage"style={{backgroundColor:"blue", margin:"5px"}} ><button style={{backgroundColor:"yellow", width:"100%"}}>Process Order</button></Link> 
                            <button style={{ margin:"5px"}} onClick={e => handleChange(false,"a",true)}>Empty Chart</button>
                    </Flexbox>
                    </div>}
                </Flexbox>
        </div>
    )
}