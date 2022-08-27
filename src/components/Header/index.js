import logoHeader from '../../assets/logoHeader.png';
import '../../index.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/banner/logo.svg';
import { useState } from 'react';
import music1 from '../../assets/musics/normal-world.mpeg';
import music2 from '../../assets/musics/inverted-world.mpeg';


export default function Header(){
    
    const [tema, setTema] = useState("light");
    const [music, setMusic] = useState(music1);

    function Inverter(){
        if(tema === 'light'){
            setTema("dark");
            setMusic(music2);
        }else{
            setTema("light");
            setMusic(music1);
        }
    }

    return(
        <header className={tema}>
            <div className='header-content'>
                <audio id='music' autoPlay>
                    <source src={music}/>
                </audio>
        
                <img className='invert-element' src={logo}/>
    
                <p className='invert-element'>
                    Uma jornada para quem não tem medo do desconhecido. O caminho para o
                    Mundo invertido é incerto, repleto de obstáculos e perigos. Porém, a
                    recompensa é grande: salvar Hawkings e o mundo todo das garras de Vecna.
                    Você está preparado? Então clique no botão abaixo para entrar no Mundo
                    Invertido!
                </p>

                <button onClick={() => Inverter()}>Inverter Mundos</button>
    
            </div>
            
            <div id="top-characters" className="world-characters"></div>
        </header>
            
    );
}