import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
   
  } from '@chakra-ui/react'
import Form from '../form'
import FormPesquisar from '../formPesquisar'
import FormEditar from '../formEditar'
import FormAddTalento from '../formAddTalento'
import FormEditarTalento from '../formEditarTalento'

const MenuAcoes = ({talentos,setTalentos, idEdit,idTalentoAdd,setIdTalentoAdd, idEditTalento}) => {
  return (
    <Accordion margin="1rem auto" w="90%" allowToggle>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Adicionar usuário
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Form/>
        </AccordionPanel>
      </AccordionItem>
      
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
            Adicionar Talento
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <FormAddTalento idTalentoAdd={idTalentoAdd} />
          
        </AccordionPanel>
        
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Pesquisar Talento
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <FormPesquisar talentos={talentos} setTalentos={setTalentos} />
        </AccordionPanel>
        
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Editar Policial
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <FormEditar idEdit={idEdit} />
          
        </AccordionPanel>
        
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Editar Talento
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          
          <FormEditarTalento idEditTalento={idEditTalento} idEdit={idEdit} />
          
        </AccordionPanel>
        
      </AccordionItem>

    </Accordion>
  )
}

export default MenuAcoes