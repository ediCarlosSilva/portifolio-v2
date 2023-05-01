import { useState } from 'react';
import './Formulario.css';
import { Button, Container, TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import validator from 'validator';

export default function Formulario() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erroNome, setErroNome] = useState({nome: {valido: true, texto: ""}});
  const [erroEmail, setErroEmail] = useState({email: {valido: true, texto: ""}});
  const [erroAssunto, setErroAssunto] = useState({assunto: {valido: true, texto: ""}});
  const [erroMensagem, setErroMensagem] = useState({mensagem: {valido: true, texto: ""}});

  const atualizaNome = (evento) => {
    let tempNome = evento.target.value;

    if (tempNome.length > 50) {
      setErroNome({ nome: {valido: false, texto: "Sorry, only 50 letters."}})
    } else {
      setNome(tempNome);
      setErroNome({nome: {valido: true, texto: ""}})
    }
  }

  function atualizaEmail(evento) {
    setEmail(evento.target.value)
  }

  function validaEmail(evento) {
    let tempEmail = evento.target.value;

    if (validator.isEmail(tempEmail)) {
      setErroEmail({email: {valido: true, texto: ""}})
    } else if (validator.isEmpty(tempEmail)) {
      setErroEmail({email: {valido: true, texto: ""}})
    } else {
      setErroEmail({email: {valido: false, texto: "Enter a valid e-mail, please"}})
    }

  }

  function atualizaAssunto(evento) {
    let tempAssunto = evento.target.value;

    if (tempAssunto.length > 50) {
      setErroAssunto({ assunto: {valido: false, texto: "Sorry, only 50 letters."}})
    } else {
      setAssunto(tempAssunto);
      setErroAssunto({assunto: {valido: true, texto: ""}})
    }
  }

  function atualizaMensagem(evento) {
    let tempMensagem = evento.target.value;

    if (tempMensagem.length > 300) {
      setErroMensagem({mensagem: {valido: false, texto: "Sorry, only 300 letters."}})
    } else {
      setMensagem(tempMensagem);
      setErroMensagem({mensagem: {valido: true, texto: ""}})
    }
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

            <TextField 
              value={nome} 
              onChange={atualizaNome} 
              name="nome" 
              variant='outlined' 
              error={!erroNome.nome.valido} 
              helperText={erroNome.nome.texto} 
              fullWidth 
              label="Nome" 
              margin="normal" 
              sx={{input: {background: "white"}}} 
            />

            <TextField 
              variant='outlined'
              value={email}
              name={email}
              onChange={atualizaEmail}
              onBlur={validaEmail}
              error={!erroEmail.email.valido}
              helperText={erroEmail.email.texto}
              fullWidth 
              label="Email" 
              margin="normal" 
              sx={{input: {background: "white"}}} 
            />

            <TextField 
              value={assunto}
              onChange={atualizaAssunto}
              error={!erroAssunto.assunto.valido}
              helperText={erroAssunto.assunto.texto}
              name={assunto}
              variant='outlined' 
              fullWidth 
              label="Assunto" 
              margin="normal" 
              sx={{input: {background: "white"}}} 
            />

            <TextField 
              value={mensagem}
              onChange={atualizaMensagem}
              error={!erroMensagem.mensagem.valido}
              helperText={erroMensagem.mensagem.texto}
              name={mensagem}
              variant='outlined' 
              fullWidth 
              multiline 
              rows={4} 
              label="Mensagem" 
              inputProps={{ maxLength: 301 }} 
              margin="normal"
              sx={{input: {background: "white"}, textarea: {background: "white"} }} 
            />

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