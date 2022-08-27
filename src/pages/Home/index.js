

import serieImg1 from '../../assets/images/content/serie-image-01.png';
import serieImg2 from '../../assets/images/content/serie-image-02.png';
import serieImg3 from '../../assets/images/content/serie-image-03.png';
import { useState } from 'react';
import './home.css';
import invertedWorld from '../../assets/images/content/inverted-world.png';
import music1 from '../../assets/musics/normal-world.mpeg';
import music2 from '../../assets/musics/inverted-world.mpeg';
import logo from '../../assets/images/banner/logo.svg';
import logoFooter from '../../assets/images/footer/logo.svg';


export default function Home(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [level, setLevel] = useState('');
    const [personagem, setPersonagem] = useState('');
    const [tema, setTema] = useState("light");
    const [music, setMusic] = useState(music1);


    function handleInscrever(e){
        e.preventDefault();
    }

   
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
        <body className={tema}>
            <header>
            <div className='header-content'>
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
            <div  className="world-characters" id="top-characters"></div>
        </header>
        
        <main>
            <div className="world-characters" id="bottom-characters"></div>
                <section id="section-inverted-world" className='container'>
                    <div className='aboutSection'>
                        <h2>O MUNDO INVERTIDO</h2>
                        <p>O Mundo Invertido parece uma cópia do nosso mundo, mas com
                            criaturas horrendas, tempestades assustadoras, muita escuridão e 
                            entidades malignas. Um reino controlado por Vecna, que tem planos de 
                            trazer tudo isso ao nosso mundo.
                        </p>
                    </div>
                    
                    <img className='invert-element' src={invertedWorld}/>
                </section>
                <section id="section-stranger-trailer" className="container">

                    <div className='videoSection'>
                        <iframe 
                        width="430" 
                        height="195" 
                        src="https://www.youtube.com/embed/otutSrxYpa4" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>      
                        </iframe>
                    </div>
                    <div className='aboutSection'>
                        <h2>STRANGER THINGS VOL. 4</h2>
                        <p>Mais experientes, os heróis de Stranger Things também precisam 
                            enfrentar desafios maiores do que nunca e fazer decisões que vão mudar 
                            suas vidas para sempre. Confira ao lado o trailer da quarta temporada.
                        </p>
                    </div>
                    
                
                
                </section>   
                    
                <section id="section-stranger-galery" className='container'>
                    <div className='aboutSection'>
                        <h1>A SEGUNDA SERIE MAIS ASSISTIDA DA NETFLIX</h1>
                        <div className='galery-container'>
                            <div className='galery-image invert-element'>
                                <img src={serieImg1}/>
                            </div>
                            <div className='galery-image invert-element'>
                                <img src={serieImg2}/>
                            </div>
                            <div className='galery-image invert-element'>
                                <img src={serieImg3}/>
                            </div>
                        </div>  

                    </div>
                </section>
                <section id="section-form"className='container'>
                    
                    <h2>o clube dungeons & dragons</h2>
                    <p>
                    Para deter Vecna, os heróis de Stranger Things também precisam de você. O Clube de D&D mais famoso de Hawkings está com vagas abertas para 
                    sua próxima aventura. Se você é destemido, gosta de desafios e não tem medo de rodar o D20, chegou a hora de se inscrever para fazer parte da 
                    nova campanha.
                    </p>
                    
                    <div className='form-content'>
                        <h3>ENTRE PARA O CLUBE DE D&D E TENHA EXPERIENCIAS DE OUTRO MUNDO </h3>

                        <div className='form-container'>
                            <form onSubmit={handleInscrever}>
                                <label for="name">Nome Completo</label>
                                <input type="text" name="nome" onChange={ (e) => setNome(e.target.value)}/>

                                <label for="email">Email</label>
                                <input type="email" name="email" onChange={ (e) => setEmail(e.target.value)}/>

                                <label for="level">Level</label>
                                <input type="text" name="level" onChange={ (e) => setLevel(e.target.value)}/>

                                <label for="personagem">Personagem</label>
                                <textarea name="personagem" cols="30" rows="10" onChange={ (e) => setPersonagem(e.target.value)}></textarea>

                                <button type='submit'>Se Inscrever</button>

                            </form>

                        </div>
                    </div>

                </section>
        </main>

        <footer>
            <p>
            Projeto construído para fins didáticos, com o objetivo de colocar em
            prática os conhecimentos de HTML, CSS e JavaScript aprendidos na DIO._
            </p>
            <img src={logoFooter}/>
        </footer>

        
        
        <audio src={music} autoPlay></audio>
        </body>
    )
}