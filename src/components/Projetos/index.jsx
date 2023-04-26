import './Projetos.css';
import { Link } from 'react-router-dom';

export default function Projetos() {
    return (
      <section className="projetos">
      <div className="projetos__section--title">
        <h2 className="projetos__section__title" id="projetos">Top 3 Projects</h2>
        <img className="projetos__section--imagem" src="assets/direita-esquerda.png"
          alt="Seta para direita e esquerda indicando mais projetos." />
        <Link to="/projetos" className="projeto__section--mais">More Projects</Link>
      </div>

      <div className="projetos__content">
        <div className="projeto" title="Saiba Mais">
          <div className="projeto--imagem"><img src="assets/blog.png" alt="Projeto Decodificador." />
          </div>
          <div className="projeto--conteudo">
            <h2 className="projeto--titulo">Blog</h2>
            <p className="projeto--descricao">In this project, React is used to consume a Rest API and display blog posts, as well as their comments.</p>
          </div>
 
          <div className="projeto__description">
            <span className="projeto__repo">
              <a href="https://github.com/ediCarlosSilva/blogWithRest">
                <button className="projeto__botao--repo">Repository</button>
              </a>
            </span>
            <span className="projeto__demo">
              <a href="https://edicarlossilva.github.io/blogWithRest/">
                <button className="projeto__botao--demo">Deploy</button>
              </a>
            </span>
          </div>


        </div>

        <div className="projeto">
          <div className="projeto--imagem"><img src="assets/decodificador.jpg" alt="Projeto Decodificador." />
          </div>
          <div className="projeto--conteudo">
            <h2 className="projeto--titulo">Decoder</h2>
            <p className="projeto--descricao">A project that encrypts and decrypts text using javascript.</p>
          </div>

          <div className="projeto__description">

            <span className="projeto__repo"><a href="https://github.com/ediCarlosSilva/challenge01-decodificador"><button
                  className="projeto__botao--repo">Repository</button></a></span>
            <span className="projeto__demo"><a href="https://edicarlossilva.github.io/challenge01-decodificador/"><button
                  className="projeto__botao--demo">Deploy</button></a></span>
          </div>

        </div>

        <div className="projeto">
          <div className="projeto--imagem"><img src="assets/siteResponsivo.png" alt="Projeto Utilizando flexbox css." />
          </div>
          <div className="projeto--conteudo">
            <h2 className="projeto--titulo">Responsive website with flexbox</h2>
            <p className="projeto--descricao">Responsive website design using css flexbox property.</p>
          </div>

          <div className="projeto__description">
            
            <span className="projeto__repo"><a href="https://github.com/ediCarlosSilva/flexbox-2023"><button
                  className="projeto__botao--repo">Repository</button></a></span>
            <span className="projeto__demo"><a href="https://edicarlossilva.github.io/flexbox-2023/"><button
                  className="projeto__botao--demo">Deploy</button></a></span>
          </div>
        </div>
      </div>

    </section>
    )
}