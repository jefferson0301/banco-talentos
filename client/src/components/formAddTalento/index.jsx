import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Textarea,
  } from '@chakra-ui/react'

  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

import axios from 'axios'
import { useState } from 'react'


const FormAddTalento = ({idTalentoAdd}) => {

    //talento
    const [inputTalento, setInputTalento] = useState("")
    const handleInputChangeTalento = (e) => setInputTalento(e.target.value)
    const isErrorTalento = inputTalento === ''
    //desTalento
    const [inputDesTalento, setInputDesTalento] = useState("")
    const handleInputChangeDesTalento = (e) => setInputDesTalento(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(inputTalento,inputDesTalento,idTalentoAdd)

        const res = await axios.post("http://localhost:8803/talento/"+idTalentoAdd , {
          talento: inputTalento,
          descricao_talento: inputDesTalento,
          policial_id: idTalentoAdd
          })
          .then( ({data}) => toast.success("Talento Adicionado com sucesso") )
          .catch( ({data}) => toast.error("Erro ao adicionar o talento") )
    }

  return (
    <FormControl 
            margin="1rem auto" 
            display="flex" 
            flexDir={["column","column","column","row"]} 
            w="90%" 
            gap={"1rem"} 
            onSubmit={handleSubmit} 
    >
        <FormControl  isInvalid={isErrorTalento}>
                    <FormLabel>Talento</FormLabel>
                    <Input type="text" value={inputTalento} onChange={handleInputChangeTalento} />
                    {!isErrorTalento ? (
                    <FormHelperText>
                        Informe o Talento
                    </FormHelperText>
                    ) : (
                    <FormErrorMessage>Talento é obridatório.</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl>
                  <FormLabel >Descrição Talento</FormLabel>
                  <Textarea
                      value={inputDesTalento}
                      onChange={handleInputChangeDesTalento}
                      placeholder='Here is a sample placeholder'
                      w="100%"
                      h="60%"
                      //size='lg'
                      //resize={resize}
                  />
                </FormControl>
        <Button w="20%" marginTop="1rem" colorScheme='green' onClick={handleSubmit} >Adicionar</Button>
    </FormControl>
  )
}

export default FormAddTalento