import './menu.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className='menu'>
            <a className="social" href="https://github.com/Tatschfer">
                <BsGithub size={24} color="#fff"/>
            </a>

            <a className="social" href="https://www.linkedin.com/in/fernandaatatsch/">
                <BsLinkedin size={24} color="#fff"/>
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}