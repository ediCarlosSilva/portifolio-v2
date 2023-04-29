import { useState } from 'react';
import './Formulario.css';
import { Button, Container, TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function Formulario() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const erros = {
    nome: {
      valido: true,
      texto: ""
    }
  }

  const atualizaNome = (evento) => {
    let tempNome = evento.target.value;

    if (tempNome > 50) {

    }

    setNome(tempNome);
  }

  function atualizaEmail(evento) {
    setEmail(evento.target.value)
  }

  function atualizaAssunto(evento) {
    setAssunto(evento.target.value)
  }

  function atualizaMensagem(evento) {
    setMensagem(evento.target.value);
  }

  function enviarForm(evento) {
    evento.preventDefault();
    console.log(nome, email, assunto, mensagem);
  }

  return (
    <Container component="section" maxWidth="lg" sx={{ mb: 3, mt: 3 }}>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} sm={12} md={12} lg={5} display="flex" alignItems="center" justifyContent="center" sx={{ flexDirection: 'column' }}>

          <Grid2 xs={12} md={12} lg={12} >
            <Typography variant='h4'>Contact</Typography>
          </Grid2>

          <Grid2 xs={12} sm={12} md={12} lg={12}>
            <ul className="formcontato__network">

              <li className="formcontato__network__item"><a href="https://www.facebook.com/edicarlos.silva.5205622" target="_blank" title="facebook" rel="noreferrer">Facebook</a></li>
              <li className="formcontato__network__item"><a href="https://github.com/ediCarlosSilva" target="_blank"
                title="github" rel="noreferrer">Github</a></li>
              <li className="formcontato__network__item"><a href="https://www.instagram.com/edi.carlos.silva/" target="_blank"
                title="Instagram" rel="noreferrer">Instagram</a></li>
              <li className="formcontato__network__item"><a href="https://www.linkedin.com/in/edicarlossilva/" target="_blank"
                title="Linkedin" rel="noreferrer">Linkedin</a></li>
            </ul>
          </Grid2>
        </Grid2>
        <Grid2 xs={12} sm={12} md={12} lg={7}>

          <form onSubmit={enviarForm} id="my-form" action="https://formspree.io/f/xrgvozjb" method="POST">

            <TextField variant='outlined' error={!erros.nome.valido} helperText={erros.nome.texto} fullWidth label="Nome" margin="normal" sx={{input: {background: "white"}}} />

            <TextField variant='outlined' fullWidth label="Email" margin="normal" className='input-label' sx={{input: {background: "white"}}} />

            <TextField variant='outlined' fullWidth label="Assunto" margin="normal" className='input-label' sx={{input: {background: "white"}}} />

            <TextField variant='outlined' fullWidth multiline rows={4} label="Mensagem" inputProps={{ maxLength: 301 }} margin="normal" className='input-label' sx={{input: {background: "white"}}} />

            <Typography align="center" mt={2}>
              <Button type="submit" variant="contained">Send Message</Button>
            </Typography>

            {/* <div className="input-container">
              <input value={nome} onChange={atualizaNome} name="nome" id="nome" className="formcontato__input" type="text" placeholder="Nome" required maxLength="51" />
              <label htmlFor="nome" className="input-label" id="inputLabelNome">Name</label>
              <span className="mensagem-erro-nome">Please, only 50 letters.</span>
            </div> */}

            {/* <div className="input-container">
              <input value={email} onChange={atualizaEmail} name="email" id="email" className="formcontato__input" type="email" placeholder="Email" required pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$" />
              <label htmlFor="email" className="input-label" id="input__label--email">Email</label>
              <span className="mensagem-erro-email">Invalid E-mail format.</span>
            </div> */}

            {/* <div className="input-container">
              <input value={assunto} onChange={atualizaAssunto} name="assunto" id="assunto" className="formcontato__input" type="text" placeholder="Assunto" required maxLength="51" />
              <label htmlFor="assunto" className="input-label" id="inputLabelAssunto">Subject</label>
              <span className="mensagem-erro-assunto">Please, only 50 letters.</span>
            </div> */}

            {/* <div className="input-container">
              <textarea value={mensagem} onChange={atualizaMensagem} name="mensagem" id="mensagem" className="formcontato__textarea" rows="5" cols="40" placeholder="Sua mensagem" required maxLength="301" ></textarea>
              <label htmlFor="mensagem" className="input-label" id="labelTextareaMensagem">Message</label>
              <span className="mensagem-erro-textarea">Please, only 300 letters.</span>
            </div> */}

            {/* <Button className="formcontato__botao" id="my-form-status" type="submit">Send Message</Button> */}
          </form>

        </Grid2>
      </Grid2>
    </Container>
  )
}