import React from 'react'
import styles from './Footer.module.css'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className={styles.footer}>

                <div className={styles.redes}>
                    <div className={styles.funcionamento}>
                        <h3>HORÁRIO DE FUNCIONAMETO</h3>

                        <p>Segunda à Sexta 9h às 18:00</p>
                        <p>Sábado das 9h ás 17h</p>
                    </div>
                    <div className={styles.socias}>
                        <h3>Redes Socias</h3>
                        <a href="https://www.instagram.com/susigreycepmu/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} style={{ color: ' #ffffff' }} /></a>
                        <a href="https://www.tiktok.com/@susigreycepmu" target="_blank" rel="noopener noreferrer"><FaTiktok size={30} style={{ color: ' #ffffff' }} /></a>
                        <a href="https://www.facebook.com/susigreyce.sobrancelhas" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} style={{ color: ' #ffffff' }} /></a>
                    </div>
                </div>

            </div>
            <div className={styles.rodape}>
                <p>© 2024 Honório. Todos os direitos reservados.</p>
            </div>


        </>
    )
}

export default Footer