import Projetos from '../../components/Projetos';

import projetos from '../../json/projetos.json';

export default function ProjetosPage() {
    return (
        <Projetos projetos={projetos}/>
    )

}