import { useState } from "react"

export default function useForm(initialState:any={}){
    
    const [valores, setValores] = useState(initialState)
    
    const reset = ()=>{
        setValores(initialState)
    }

    const handleInputChange = ({target}:any) =>{              
        setValores({
            ...valores,
            [target.name]:target.value
        })
    }

    return[valores,handleInputChange,reset]
}
