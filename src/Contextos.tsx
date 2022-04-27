import React from 'react'

interface PictureInfo {
    id:number,
    idss: string,
    state: string,
    price: number
}

interface PictureContext {
    lista:PictureInfo[],
    setList:React.Dispatch<React.SetStateAction<PictureInfo[]>>
    chartList : (lista:PictureInfo[], action:boolean, ix:string, emptyc:boolean,pricenew?:number) => PictureInfo[]
}

export const MyContext = React.createContext<PictureContext>(null)
   
export const MyContextProvider:React.FC = (props) => {

        const [lista, setList] = React.useState<PictureInfo[]>([])
        
        const arraycontrols = (listain:PictureInfo[], action:boolean, ix:string,emptyc:boolean,pricenew:number) => {    
            var f : PictureInfo = {
                id:0,
                idss: "",
                state: "pending",
                price:0
            }
            let s : number;
            switch(action){
                case true:
                    f  = listain.find(element => element.idss == ix)
                    s = listain.length;
                    if(f==undefined){listain = [...listain, {id:s+1,idss:ix,price:pricenew,state:"pending"}]}
                    else if(f.idss!==ix){listain = [...listain, {idss:ix,price:pricenew,state:"pending",id:s+1}]}
                break;
                case false:
                    if(emptyc == false){
                        listain = listain.filter( element =>  element.idss != ix)}
                    else{
                        listain = []
                    } 
                break;
            }
            setList(listain);
            return listain;
        }
        return(
            <MyContext.Provider value={{lista,setList, chartList : arraycontrols}}>
                {props.children}
            </MyContext.Provider>
        )
}


interface ChartContext {
    show:boolean,
    setShow:(value:boolean)=>{}
}

export const MyChartContext = React.createContext({
    show : true,
    setShow : (value)=>{},
})

export const MyChartContextProvider:React.FC = (props) => {

    const [show, setShow] = React.useState(true)
    
    return(
        <MyChartContext.Provider value={{show, setShow}}>
            {props.children}
        </MyChartContext.Provider>
    )
}

interface sendChartContext {
    precio:number,
    setPrecio:(value:boolean)=>{},
    statuss:number,
    setStatus:(value:number)=>{}
}

export const MySendChartContext = React.createContext({
    precio : 0,
    setPrecio : (value:number)=>{},
    statuss:0,
    setStatus:(value:number)=>{}
})

export const MySendChartContextProvider:React.FC = (props) => {

    const [precio, setPrecio] = React.useState(0);
    const [statuss, setStatus] = React.useState(0);

    return(
        <MySendChartContext.Provider value={{precio, setPrecio, statuss, setStatus}}>
            {props.children}
        </MySendChartContext.Provider>
    )
}