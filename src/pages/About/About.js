import React from 'react'
import styles from './About.module.css'
import Container from '../../components/Container/Container'
import susi from '../../assets/Banner susi.png'
const About = () => {
    return (
        <>
            <Container>
                <div className={styles.container}>

                    <img src={susi} alt="" />
                </div>
            </Container>
        </>
    )
}

export default About