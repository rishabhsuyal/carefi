import { createContext,useState } from "react"
export const Modal=createContext();

const Context=({children})=>{

    const [Open,setOpen]=useState(false);
    const [Mdata,setMdata]=useState({});
    const [Ddata,setDdata]=useState([]); 
    const [index,setindex]=useState(0);
    const [auth,setAuth]=useState(false);


    return <Modal.Provider value={{auth,setAuth,Open,setOpen,Mdata,setMdata,Ddata,setDdata,index,setindex}}>
        {children}
    </Modal.Provider>
}

export default Context 