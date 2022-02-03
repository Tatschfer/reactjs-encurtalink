import { FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu';
import { useState } from 'react';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';
import { saveLink } from '../../services/storeLinks';

export default function Home(){

  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState('');

  async function handleShortLink(){
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })
      setData(response.data);
      setShowModal(true);

      saveLink('@encurtaLink', response.data)

      setLink('');

    } catch{
      alert("Ops, parece que algo deu errado!");
      setLink('');
    }
  }

    return(
      <div className="container-home">
        
      <div className="logo">
        <img src="/logo.png" alt="Sujeito link logo"/>
        <h1>Encurta</h1>
        <span>Insira seu link 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff"/>
          <input 
          value={link}
          onChange={(e)=>{setLink(e.target.value)}}
          placeholder="Cole seu link aqui..." />
        </div>

        <button onClick={handleShortLink}>Encurtar link</button>

      </div>

      <Menu/>
      {showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data}
          />
      )}
      <span className="copyrights">Projeto realizado por Fernanda Tatsch na Semana React JS do <a href="https://www.instagram.com/sujeitoprogramador/">Sujeito Programador</a></span>
      </div>
    )
  } 