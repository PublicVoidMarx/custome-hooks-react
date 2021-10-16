import { useEffect, useState } from "react";

export default function useFetch(url:string){
    
    const [state, setState] = useState({data:null,cargando:true,error:null})

    useEffect(() => {        
        fetch(url)
            .then(res=>res.json())
            .then(data=>{setState({data:data,cargando:false,error:null})})
    }, [url])

    return state
}