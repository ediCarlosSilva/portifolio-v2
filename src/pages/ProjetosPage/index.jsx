import { useState } from 'react';
import Projetos from '../../components/Projetos';
import {v4 as uuidv4} from 'uuid';

import projetos from '../../json/projetos.json';
import tiposProjetos from '../../json/tiposProjetos.json';

export default function ProjetosPage() {

    // console.log(projetos);
    // console.log(tiposProjetos);

    return (
        // <h1>Projetos</h1>
        <Projetos projetos={projetos} tiposProjetos={tiposProjetos}/>
    )

}