import './Formulario.css';

export default function Formulario() {
  return (
    <section className="formcontato">
      <div id="contato" className="formcontato__contacto">
        <div className="formcontato--esquerda">
          <h2 className="formcontato__title">Contact</h2>
          <ul className="formcontato__network">

            <li className="formcontato__network__item"><a href="https://www.facebook.com/edicarlos.silva.5205622" target="_blank" title="facebook" rel="noreferrer">Facebook</a></li>
            <li className="formcontato__network__item"><a href="https://github.com/ediCarlosSilva" target="_blank"
              title="github" rel="noreferrer">Github</a></li>
            <li className="formcontato__network__item"><a href="https://www.instagram.com/edi.carlos.silva/" target="_blank"
              title="Instagram" rel="noreferrer">Instagram</a></li>
            <li className="formcontato__network__item"><a href="https://www.linkedin.com/in/edicarlossilva/" target="_blank"
              title="Linkedin" rel="noreferrer">Linkedin</a></li>
          </ul>
        </div>
        <div className="formcontato__text">
          <form className="formcontato__form" id="my-form" action="https://formspree.io/f/xrgvozjb" method="POST">
            <div className="input-container">
              <input name="nome" id="nome" className="formcontato__input" type="text" placeholder="Nome" required maxlength="51" />
              <label for="nome" className="input-label" id="inputLabelNome">Name</label>
              <span className="mensagem-erro-nome">Please, only 50 letters.</span>
            </div>

            <div className="input-container">
              <input name="email" id="email" className="formcontato__input" type="email" placeholder="Email" required pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$" />
              <label for="email" className="input-label" id="input__label--email">Email</label>
              <span className="mensagem-erro-email">Invalid E-mail format.</span>
            </div>

            <div className="input-container">
              <input name="assunto" id="assunto" className="formcontato__input" type="text" placeholder="Assunto" required maxlength="51" />
              <label for="assunto" className="input-label" id="inputLabelAssunto">Subject</label>
              <span className="mensagem-erro-assunto">Please, only 50 letters.</span>
            </div>

            <div className="input-container">
              <textarea name="mensagem" id="mensagem" className="formcontato__textarea" rows="5" cols="40" placeholder="Sua mensagem" required maxlength="301"></textarea>
              <label for="mensagem" className="input-label" id="labelTextareaMensagem">Message</label>
              <span className="mensagem-erro-textarea">Please, only 300 letters.</span>
            </div>

            <button className="formcontato__botao" id="my-form-status">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}