import React from 'react'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/sobrancelhas expert (1).png'
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <span><img src={logo} alt="" /></span>

            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
            <nav className={`${styles.nav_container} ${isOpen ? styles.open : ''}`}>
                <Link to='/' className='nav-li-li'>Home</Link>
                <Link to='/about' className='nav-li-li'>Sobre</Link>
                <Link to='/curso' className='nav-li-li'>Curso</Link>
                <Link to='/contact' className='nav-li-li'>Contato</Link>
            </nav>
        </div>
    )
}

export default Nav