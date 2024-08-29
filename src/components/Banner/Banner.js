import React from 'react'
import banner from '../../assets/sobrancelhas.jpg'
import styles from './Banner.module.css'
import icon from '../../assets/icons8-whatsapp-80.png'
import { IoLogoWhatsapp } from "react-icons/io";
const Banner = () => {
    return (
        <>
            <div className={styles.titulo}><h1>Micropigmentação Sobrancelhas</h1></div>
            <div className={styles.banner}>
                <div className={styles.agendar}>
                    <a href='https://wa.me/5521975966330' target="_blank"><IoLogoWhatsapp size={30} style={{ color: '#22a241' }} /></a>
                    <p > Clique Aqui</p>
                    <p>Se desejar agendar uma avaliação</p>
                </div>
                <div className={styles.avaliação}>
                    <h3>Avaliação Gratuita</h3>
                    <p>Aqui na SusiGrecy Sobrancelhas iremos fazer as
                        medições de seu rosto e indentificar qual o melhor
                        formato e técnica para cada cliente,
                        Agente seu horário e permita que nossa especialista
                        em micropigmentação mostre em seu próprio rosto
                        como irá ficar a técnica perfeita para voçê!
                    </p>
                </div>
                <div className={styles.sobrancelha}>
                    <img src={banner} alt="tecnica da sobrancelha" />
                </div>
            </div>
            <div className={styles.tecnica}>
                <h2>Você conhece a diferença entre as Técnicas?</h2>
            </div>
        </>
    )
}

export default Banner