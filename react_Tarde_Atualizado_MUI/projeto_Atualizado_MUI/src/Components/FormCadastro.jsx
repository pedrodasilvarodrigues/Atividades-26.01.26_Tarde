import { Container, TextField, Button, Stack, Typography} from "@mui/material";


function FormCadastro() {
 function validarEmail(email) {
let erro = false;
if (email === ""){
    erro = true;
}
      return erro;
    }
    

  return (
<Container  className='container-form' sx={{mt: 4,}}>

        <Typography variant="h5">Cadastro de Usuário</Typography>

        <Stack spacing={3} sx={{ mt: 2 }}>
            <TextField 
            label="Nome Completo" 
            variant="outlined" 
            fullWidth 
            />

            <TextField
            label= "E-Mail"
            type="email"
            error={validarEmail("")}
            helperText="O campo de e-mail é obrigatório." 
            variant="outlined"
            fullWidth
            
            />
            <Button variant="contained" size="large" >
                Finalizar Cadastro

            </Button>
        </Stack>
    </Container>            
  )
}

export default FormCadastro
