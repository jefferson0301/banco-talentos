import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Textarea,
    Select,
    // RadioGroup,
    // Radio,
    // Stack,
  } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const  FormEditar = ({idEdit}) => {
    
    //graduacao
    const [inputGraduacao, setInputGraduacao] = useState("")
    const handleInputChangeGraduacao = (e) => setInputGraduacao(e.target.value)
    //matricula
    const [inputMatricula, setInputMatricula] = useState("")
    const handleInputChangeMatricula = (e) => setInputMatricula(e.target.value)
    const isErrorMatricula = inputMatricula === ''
    //numeral
    const [inputNumeral, setInputNumeral] = useState("")
    const handleInputChangeNumeral = (e) => setInputNumeral(e.target.value)
    const isErrorNumeral = inputNumeral === ''
    //nome
    const [inputNome, setInputNome] = useState("")
    const handleInputChangeNome = (e) => setInputNome(e.target.value)
    const isErrorNome = inputNome === ''
    //formado
    const [inputFormado, setInputFormado] = useState("")
    const handleInputChangeFormado = (e) => setInputFormado(e.target.value)
    const isErrorFormado = inputFormado === ''
    //telefone
    const [inputTelefone, setInputTelefone] = useState("")
    const handleInputChangeTelefone = (e) => setInputTelefone(e.target.value)
    const isErrorTelefone = inputTelefone === ''
    //batalhao
    const [inputBatalhao, setInputBatalhao] = useState("")
    const handleInputChangeBatalhao = (e) => setInputBatalhao(e.target.value)
    const isErrorBatalhao = inputBatalhao === ''

    const editTalento = async (
        inputNome,
        inputNumeral,
        inputGraduacao,
        inputTelefone,
        inputFormado,
        inputBatalhao,
        inputMatricula,
        ) => {
        
        const res = await axios.put("http://localhost:8803/" +idEdit, {
            nome: inputNome,
            numeral: inputNumeral,
            graduacao: inputGraduacao,
            telefone: inputTelefone,
            formado: inputFormado,
            batalhao: inputBatalhao,
            matricula: inputMatricula,
            })
            .then( ({data}) => toast.success("Atualização feita com sucesso") )
            .catch( ({data}) => toast.error("Erro ao atualizar"+data) )
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        editTalento( 
            inputNome,
            inputNumeral,
            inputGraduacao,
            inputTelefone,
            inputFormado,
            inputBatalhao,
            inputMatricula)
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
        <div> 
            <FormControl  isInvalid={isErrorMatricula}>
                <FormLabel>Matrícula</FormLabel>
                <Input type="number" value={inputMatricula} onChange={handleInputChangeMatricula} />
                {!isErrorMatricula ? (
                <FormHelperText>
                    Informe a matrícula
                </FormHelperText>
                ) : (
                <FormErrorMessage>Matrícula é obridatória.</FormErrorMessage>
                )}
            </FormControl>
            <FormControl  isInvalid={isErrorNome}>
                <FormLabel>Nome</FormLabel>
                <Input type="text" value={inputNome} onChange={handleInputChangeNome} />
                {!isErrorNome ? (
                <FormHelperText>
                    Informe o Nome
                </FormHelperText>
                ) : (
                <FormErrorMessage>Nome é obridatório.</FormErrorMessage>
                )}
            </FormControl>
        </div>
        <div>
            <FormControl  isInvalid={isErrorFormado}>
                <FormLabel>Formação</FormLabel>
                <Input type="text" value={inputFormado} onChange={handleInputChangeFormado} />
                {!isErrorFormado ? (
                <FormHelperText>
                    Informe a Formação
                </FormHelperText>
                ) : (
                <FormErrorMessage>Formado é obridatória.</FormErrorMessage>
                )}
            </FormControl>
            <FormControl  isInvalid={isErrorTelefone}>
                <FormLabel>Telefone</FormLabel>
                <Input type="tel" value={inputTelefone} onChange={handleInputChangeTelefone} />
                {!isErrorTelefone ? (
                <FormHelperText>
                    Informe o Telefone
                </FormHelperText>
                ) : (
                <FormErrorMessage>Telefone é obridatório.</FormErrorMessage>
                )}
            </FormControl>
        </div>
        
        <div>
            <FormControl isInvalid={isErrorBatalhao}>
                <FormLabel>Batalhao</FormLabel>
                <Input type="text" value={inputBatalhao} onChange={handleInputChangeBatalhao} />
                {!isErrorBatalhao ? (
                <FormHelperText>
                    Informe o Batalhao
                </FormHelperText>
                ) : (
                <FormErrorMessage>Batalhao é obridatório.</FormErrorMessage>
                )}
            </FormControl>
            
            <FormControl isInvalid={isErrorBatalhao}>
                <FormLabel>Numeral</FormLabel>
                <Input type="number" value={inputNumeral} onChange={handleInputChangeNumeral} />
                {!isErrorNumeral ? (
                <FormHelperText>
                    Informe o Numeral
                </FormHelperText>
                ) : (
                <FormErrorMessage>Numeral é obridatório.</FormErrorMessage>
                )}
            </FormControl>
        
        </div>

        <div>
            <FormLabel >Graduação</FormLabel>
            <Select value={inputGraduacao} onChange={handleInputChangeGraduacao} placeholder='Selecione a graduação'>
                <option value='soldado'>soldado</option>
                <option value='cabo'>cabo</option>
                <option value='3 sargento'>3 sargento</option>
                <option value='2 sargento'>2 sargento</option>
                <option value='1 sargento'>1 sargento</option>
                <option value='sub tenente'>sub tenente</option>
                <option value='2 tenente'>2 tenente</option>
                <option value='1 tenente'>1 tenente</option>
                <option value='capitão'>capitão</option>
                <option value='major'>major</option>
                <option value='tenente coronel'>tenente coronel</option>
                <option value='coronel'>coronel</option>
            </Select>
            <Button marginTop="1rem" colorScheme='green' onClick={handleSubmit} >Adicionar</Button>
        </div>
    </FormControl>
    )
  }

export default FormEditar