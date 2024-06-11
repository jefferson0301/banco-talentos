import { FormControl, FormLabel,Input,Button } from "@chakra-ui/react"
import axios from "axios"
import { useState } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
    

const FormPesquisar = ({talentos,setTalentos}) => {
    //talento
    const [inputTalento, setInputTalento] = useState("")
    const handleInputChangeTalento = (e) => setInputTalento(e.target.value)

    //formado
    const [inputFormado, setInputFormado] = useState("")
    const handleInputChangeFormado = (e) => setInputFormado(e.target.value)

    const pesquisar = async () => {
      if(inputTalento !== "" && inputFormado === ""){
        const res = await axios.get("http://localhost:8803/query/"+inputTalento)
          .then( ({data}) => setTalentos(data) )
          .catch( ({data}) => console.log(data) )
      }
      if(inputTalento === "" && inputFormado !== ""){
        const res = await axios.get("http://localhost:8803/queryformado/"+inputFormado)
          .then( ({data}) => setTalentos(data) )
          .catch( ({data}) => console.log(data) )
      }
      if(inputTalento !== "" && inputFormado !== ""){
        const res = await axios.get("http://localhost:8803/query/"+inputTalento+"&"+inputFormado)
          .then( ({data}) => {
            toast.success("Pesquisa feita com sucesso")
            setTalentos(data) 
          })
          .catch( ({data}) =>{
            toast.error("Erro ao fazer a pesquisa")
            console.log(data)
          }  )
      }
        
    }
    const  handleSubmitPesquisar = (e) => {
      e.preventDefault()
      pesquisar()
      setInputTalento("")
      setInputFormado("")
    }

  return (
    <FormControl onSubmit={handleSubmitPesquisar} >
        <FormControl >
          <FormLabel>Talento</FormLabel>
          <Input type="text" value={inputTalento} onChange={handleInputChangeTalento} />
        </FormControl>
        <FormControl >
          <FormLabel>Formado</FormLabel>
          <Input type="text" value={inputFormado} onChange={handleInputChangeFormado} />
        </FormControl>
        <Button marginTop="1rem" colorScheme='green' onClick={handleSubmitPesquisar} >Pesquisar</Button>

    </FormControl>
  )
}

export default FormPesquisar