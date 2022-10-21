import {Box, Paper, Button, Input } from '@mui/material';
import React from 'react'

import { Typography } from '@mui/material';

import PetsIcon from '@mui/icons-material/Pets';

import { socket } from '../socket.js'

import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Divider from '@mui/material/Divider';




function Cadastro() {

    const [raca, setRaca] = React.useState()

function handleChange(evt) {

    setRaca(evt.target.value)
}

function enviar() {

    let requestMsg = {

        nome: document.querySelector('#pNome').value,
        sobrenome: document.querySelector('#sobrenome').value,
        cpf: document.querySelector('#cpf').value,
        rua: document.querySelector('#rua').value,
        bairro: document.querySelector('#bairro').value,
        numero_residencia: document.querySelector('#numero').value,
        raca: raca,
        celular: document.querySelector('#celular').value
    }
    
    socket.emit('cadastro', requestMsg)
}

React.useEffect(() => {
    socket.on('respostaCadastro', (p) => {
      alert(p)
      if (p == 'Cadastro realizado com sucesso') {
        window.location.reload()
      }
      
    })

    return () => {socket.off('respostaCadastro')}
  }, [])



  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '50%'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignCenter: 'center'}}>

                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '12vh'}}>
                    <Typography sx={{textAlign: "center"}} variant='h3'>Acolher Com Confiança</Typography> <PetsIcon />
                </Box>

                <Typography sx={{marginTop: 2, textAlign: "center"}} variant='h5'>Faça seu cadastro e veja os Pets disponíveis em sua região</Typography>
                <Paper sx={{marginTop: 2, padding: 2}} elevation={5}>
                   
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <TextField sx={{marginRight: 2}} id="pNome" label="Primeiro Nome" variant="filled" />
                            <TextField sx={{marginRight: 2}}  id="sobrenome" label="Sobrenome" variant="filled" />
                            <TextField id="cpf" label="CPF" variant="filled" />
                        </Box>

                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 2}}>
                            <TextField sx={{marginRight: 2}} id="rua" label="Rua" variant="outlined" />
                            <TextField sx={{marginRight: 2}}  id="bairro" label="Bairro" variant="outlined" />
                            <TextField id="numero" label="Numero" variant="outlined" />
                        </Box>

                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 2}}>
                            <Button onClick={()=>{enviar()}} variant='outlined' sx={{marginRight: 2}}>Enviar Cadastro</Button>
                            <TextField sx={{marginRight: 2}} id="celular" label="Celular" variant="outlined" />
                            <Box sx={{ minWidth: 200, marginRight: 5 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Raça Desejada</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={raca}
                                    label="Raça Desejada"
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={'gr'}>Golden Retriever</MenuItem>
                                    <MenuItem value={'hs'}>Husky Siberiano</MenuItem>
                                    <MenuItem value={'l'}>Labrador</MenuItem>
                                    <MenuItem value={'pa'}>Pastor Alemão</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                          
                        </Box>

                </Paper>

                <Paper sx={{marginTop: 2, padding: 2}} elevation={5}>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Button sx={{marginRight: 0}}>Ja possuo conta</Button>
                        <Divider sx={{marginRight: 1, marginLeft: 1}} orientation="vertical" flexItem />
                        <Button sx={{marginRight: 0}}>Conheça mais sobre nós</Button>
                        <Divider sx={{marginRight: 1, marginLeft: 1}} orientation="vertical" flexItem />
                        <Button sx={{marginRight: 0}}>Canis Parceiros</Button>
                        <Divider sx={{marginRight: 1, marginLeft: 1}} orientation="vertical" flexItem />
                        <Button sx={{marginRight: 0}}>FAQ</Button>
                    </Box>

                </Paper>


            </Box>
        
      </Box>

  );
}

export default Cadastro;
