import './ProjectCard.css';
import { Link } from 'react-router-dom';
import React from 'react';

export default function ProjectCard({projeto}) {

  // console.log(projeto);

  return (
    <div className="projeto" title="Saiba Mais">
      <div className="projeto--imagem">
        <img src={projeto.imagem} alt={`Imagem do projeto: ${projeto.titulo}`} />
      </div>
      <div className="projeto--conteudo">
        <h2 className="projeto--titulo">{projeto.titulo}</h2>
        <div className='projeto--motivo'>
          <table>
            <thead>
              <tr>
                <td>Tipo</td>
                <td>Origem</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{projeto.tipo}</td>
                <td>{projeto.origem}</td>
              </tr>
            </tbody>
          </table>
          {/* <p className="projeto--tipo">{projeto.tipo}</p>
          <p className="projeto--origem">{projeto.origem}</p> */}
        </div>
        <p className="projeto--descricao">{projeto.texto}</p>
      </div>

      <div className="projeto__description">
        <span className="projeto__repo">
          <a href={projeto.repositorio} target="_blank">
            <button className="projeto__botao--repo">Repository</button>
          </a>
        </span>
        <span className="projeto__demo">
          <a href={projeto.deploy} target="_blank">
            <button className="projeto__botao--demo">Deploy</button>
          </a>
        </span>
      </div>
    </div>
  )
}