import './Title.css';

export default function Title() {
  return (
    <section className="title">
      <div className="title__div">
        <img className="title__profile" src="./assets/profile.png" alt="Imagem de Perfil"/>
        <div className="title__container">
          <h2 className="title__bio">Hello! My name is <span className="title__bio--front">Edi Carlos</span>. I am a <span
            className="title__bio--front">systems analyst and developer</span> with skills of <br/><span className="title__bio--front">front-end
              developer</span> and other things.</h2>
          <h3 className="title__subsection">I am currently participating in the <a className="title__subsection--links" href="https://www.oracle.com/br/education/oracle-next-education/">oracle ONE</a> project with <a className="title__subsection--links" href="https://www.alura.com.br/">Alura</a> (Online study platform focused on IT development technologies).</h3>
          <div className="title__network--box">
            <ul className="title__network">
              <li className="title__network__item"><a href="https://www.facebook.com/edicarlos.silva.5205622"
                target="_blank" title="facebook" rel="noreferrer">Facebook</a></li>
              <li className="title__network--name">Facebook</li>
            </ul>
            <ul className="title__network">
              <li className="title__network__item"><a href="https://github.com/ediCarlosSilva" target="_blank"
                title="github" rel="noreferrer">Github</a></li>
              <li className="title__network--name">Github</li>
            </ul>

            <ul className="title__network">
              <li className="title__network__item"><a href="https://www.instagram.com/edi.carlos.silva/" target="_blank"
                title="Instagram" rel="noreferrer">Instagram</a></li>
              <li className="title__network--name">Instagram</li>
            </ul>

            <ul className="title__network">
              <li className="title__network__item"><a href="https://www.linkedin.com/in/edicarlossilva/" target="_blank"
                title="Linkedin" rel="noreferrer">Linkedin</a></li>
              <li className="title__network--name">Linkedin</li>
            </ul>

            <ul className="title__network">
              <li className="title__network__item"><a href="https://edicarlossilva.github.io/edi-carlos-resume.pdf" target="_blank"
                title="Resume" rel="noreferrer">Resume (pdf)</a></li>
              <li className="title__network--name">Resume (pdf)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}