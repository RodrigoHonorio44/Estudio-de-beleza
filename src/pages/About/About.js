import React from 'react'
import styles from './About.module.css'
import Container from '../../components/Container/Container'
import susi from '../../assets/1.png'
import susi1 from '../../assets/2.png'
const About = () => {
    return (
        <>
            <Container>
                <div className={styles.container}>

                    <img src={susi} alt="" />
                    <br />
                    <img src={susi1} alt="" />
                </div>
            </Container>
        </>
    )
}

export default About