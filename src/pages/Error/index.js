import './error.css';
import { Link } from 'react-router-dom';

export default function Error(){
    return(
        <div className="container-error">
            <img src="notfound.gif" alta="página não encontrada"/>
            <h1>Ops! Essa página não existe :(</h1>
            <Link to="/">Voltar para home</Link>
        </div>
    )
}