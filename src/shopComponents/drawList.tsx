import React from "react";
import Flexbox from 'flexbox-react';
import { MyContext} from "../Contextos";

interface PictureInfo {
    id: string,
    picUrl: any,
    title: string,
    selected:boolean,
    price:number
}

interface Props {
    pictureList: PictureInfo[]
   }

export const DrawList: React.FC <Props>  = (props: Props) =>{
    const mycontext = React.useContext(MyContext)
    const handleChange = (value:boolean,chid:string,emptc:boolean,price:number) => {
        mycontext.setList(mycontext.chartList(mycontext.lista,value,chid,emptc,price))
    }


return(
    <Flexbox style={{justifyContent:"space-between",width:"100%", padding:"20px"}}>
    {props.pictureList.map(cat=>(
        <div key={cat.id} >
                <div>{cat.id}</div>
                <div><img  src={cat.picUrl} height="100px" width="100px" ></img></div>
                <div>{cat.title}</div>
                <input type="checkbox" checked={mycontext.lista.map(el=>el.idss).includes(cat.id)} onChange={e => handleChange(e.target.checked,cat.id,false,cat.price)}/>       
            </div>
    ))}
    </Flexbox> 
)
}
