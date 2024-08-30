import React from 'react'
import banner from '../../assets/sobrancelhas.jpg'
import styles from './Banner.module.css'
import logo from '../../assets/logo5.png'
const Banner = () => {
    return (
        <>
            <div className={styles.titulo}><h1>Micropigmentação Sobrancelhas</h1></div>
            <div className={styles.banner}>
                <div className={styles.agendar}>
                    <img src={logo} alt="logo marca" />
                    <p>Se desejar agendar uma avaliação</p>
                    <button>
                        <a href='https://api.whatsapp.com/send?1=pt_BR&phone=5521975966330' target="_blank">WhatsApp</a>
                    </button>
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