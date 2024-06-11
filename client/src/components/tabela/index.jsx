import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    // TableCaption,
    Button,
    TableContainer,
  } from '@chakra-ui/react'
import axios from 'axios'
import styles from "./Tabela.module.css"

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tabela = ({
  talentos,
  setTalentos, 
  setIdEdit, 
  idTalentoAdd,
  idEdit,
  setIdTalentoAdd,
  idEditTalento,
  setIdEditTalento
  }) => {

  const handleExcluirPolicial = async (id) => {
      await axios.delete("http://localhost:8803/"+id)
        .then( ({data}) => {
          setTalentos(talentos) 
          toast.success("Exclusão do talento")
        })
        .catch( ({data}) => toast.error("Erro ao exluir o talento"+data) )
  }

  const handleExcluirTalento = async (id) => {
    await axios.delete("http://localhost:8803/talento/"+id)
      .then( ({data}) => {
        setTalentos(talentos) 
        toast.success("Exclusão do Policial")
      })
      .catch( ({data}) =>{
        console.log("Ocorreu um erro:"+data)
        toast.error("Exclusão do Policial")
      }  )
}
  //console.log("id talento:"+idEditTalento)
  
  return (
    <TableContainer margin="0 auto" w="95%" >
    <Table size='lg'w="100%"  >
      {/* <TableCaption>Tabela de talentos</TableCaption> */}
      <Thead>
          <Tr textAlign="left" backgroundColor="green"  >
          <Th textAlign="left" color="white" >Ações Policial </Th>
          <Th textAlign="left" color="white" >Talento</Th>
          <Th textAlign="left" color="white" display={["none","none","inline-block","inline-block"]} >Formado</Th>
          <Th textAlign="left" color="white" >Telefone</Th>
          <Th textAlign="left" color="white" textDecorationLine="none" display={["none","none","inline-block","inline-block"]} isNumeric>Matricula</Th>
          <Th textAlign="left" color="white" display={["none","none","inline-block","inline-block"]} >Graduação</Th>
          <Th textAlign="left" color="white" display={["none","none","inline-block","inline-block"]} >nome</Th>
          <Th textAlign="left" color="white" display={["none","none","inline-block","inline-block"]} >Batalhão</Th>     
          <Th 
            textAlign="left"
            color="white" 
            display={["none","none","inline-block","inline-block"]}
          >Descrição Talento</Th>
        </Tr>
      </Thead>
      <Tbody  >
        {talentos.map( (talento, i) => (
          <Tr key={i} >
          <Td display="flex" gap="0.5rem"  > 
            <Button 
              colorScheme='red' 
              onClick={() => handleExcluirPolicial(talento.id)} 
            >Excluir </Button> 
            <Button 
              colorScheme='yellow' 
              color="white" 
              onClick={() => setIdEdit(talento.id)}
            >Editar</Button>
            <Button 
                colorScheme='blue' 
                color="white" 
                onClick={() => setIdTalentoAdd(talento.id)}
              >Adicionar Talento</Button>
              <Button 
                colorScheme='red' 
                color="white" 
                onClick={() => handleExcluirTalento(talento.id_talento)}
              >Remover Talento</Button> 
              <Button 
                colorScheme='yellow' 
                color="white" 
                onClick={() => setIdEditTalento(talento.id_talento)}
              >Editar Talento</Button>
          </Td>
          

          <Td>{talento.talento}</Td>
          
          <Td  textAlign="left" display={["none","none","inline-block","inline-block"]} >{talento.formado}</Td>
          <Td textAlign="left" >{talento.telefone}</Td>
          <Td textAlign="left" display={["none","none","inline","inline"]} isNumeric>{talento.matricula}</Td>
          <Td textAlign="left" display={["none","none","inline","inline"]} >{talento.graduacao}</Td>
          <Td textAlign="left" display={["none","none","inline","inline"]} >{talento.nome}</Td>
          <Td textAlign="left" display={["none","none","inline","inline"]} >{talento.batalhao}</Td>
          <Td textAlign="left"  display={["none","none","inline-block","inline-block"]}> {talento.descricao_talento} </Td>
        </Tr>
        ))} 
        
      </Tbody>
      
    </Table>
    </TableContainer>
  )
}

export default Tabela