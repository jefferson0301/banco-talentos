import { Heading } from "@chakra-ui/react"
import MenuAcoes from "./components/menuAcoes"
import Tabela from "./components/tabela"
import { useEffect, useState } from "react"
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
 
  const [talentos, setTalentos] = useState([])
  const [idEdit, setIdEdit] = useState(null)
  const [idEditTalento, setIdEditTalento] = useState(null)
  const [idTalentoAdd, setIdTalentoAdd] = useState(null)
  const [idTalentoRemove, setIdTalentoRemove] = useState(null)

  const getTalentos = async () =>{
    try {
      const res = await axios.get("http://localhost:8803/")
      setTalentos(res.data)
      //.sort((a, b) => (a.talento > b.talento ? 1 : -1))
      toast.success("Banco Carregado com sucesso")
      
    } catch (error) {
      console.log(error)
      toast.error("Problema interno:"+error)
    }
  }

  useEffect( () => {
    getTalentos()
  },[setTalentos] )
  
  

  return (
   <>
    <Heading 
      textAlign="center" 
      backgroundColor="green" 
      color="white" 
      padding="1rem"
    >Banco de Talentos</Heading>
    <MenuAcoes 
      talentos={talentos} 
      setTalentos={setTalentos} 
      idEdit={idEdit} 
      setIdEdit={setIdEdit} 
      idTalentoAdd={idTalentoAdd}
      setIdTalentoAdd={setIdTalentoAdd}
      idEditTalento={idEditTalento}
    />
    <Tabela 
      talentos={talentos} 
      setTalentos={setTalentos}
      idEdit={idEdit} 
      setIdEdit={setIdEdit} 
      idTalentoAdd={idTalentoAdd}
      setIdTalentoAdd={setIdTalentoAdd}
      idTalentoRemove={idTalentoRemove}
      setIdTalentoRemove={setIdTalentoRemove}
      idEditTalento={idEditTalento}
      setIdEditTalento={setIdEditTalento}
    />
    <ToastContainer autoClose={2500}  />
    
   </>
  )
}

export default App
