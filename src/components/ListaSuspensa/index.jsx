import './ListaSuspensa.css';

export default function ListaSuspensa(props) {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                <option value=""></option>
                {
                    props.tiposProjetos.map(tipoProjeto => {
                        return <option key={tipoProjeto.id}>{tipoProjeto.tipo}</option>
                    })
                }
            </select>
        </div>
    )
}

// <option value="estudo">Estudo</option>
// <option value="challenge">Challenge</option>
// <option value="teste">Teste-técnico</option>