import './ProjectCard.css';
import { Link } from 'react-router-dom';
import React from 'react';

export default function ProjectCard({projeto}) {

  return (
    <div className="projeto" title="Saiba Mais">
      <div className="projeto--imagem">
        <img src="assets/blog.png" alt="Projeto Blog." />
      </div>
      <div className="projeto--conteudo">
        <h2 className="projeto--titulo">{projeto.titulo}</h2>
        <div className='projeto--motivo'>
          <p className="projeto--tipo">Estudo</p>
          <p className="projeto--origem">Alura</p>
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