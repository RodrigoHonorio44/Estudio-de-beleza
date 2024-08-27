import React from 'react'
import styles from './Cards.module.css'
import fio from '../..//assets/fio a fio.jpg'
import sobrancelha from '../../assets/sobrancelha.jpg'
import rena from '../../assets/rena.jpg'
const Cards = () => {
    return (
        <>
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <img src={fio} alt="micro fio a fio" />
                    <h4>Micropigmentação Fio a Fio</h4>
                    <p>É realizado a pigmentação sobre a pele de forma a
                        copiar os fios das sobrancelhas.
                        Durabilidade média entre 8 e 18 meses</p>
                </div>
                <div className={styles.card}>
                    <img src={sobrancelha} alt="micro esfumada" />
                    <h4>Micropigmentação Esfumada</h4>
                    <p>Aparência similar ao prenchimento com lápis,
                        Durabilidade média entre 8 e 18 meses.
                        Ideal para quem deseja ter as sobrancelhas preechidas.</p>
                </div>
                <div className={styles.card}>
                    <img src="" alt="" />
                    <h4>Micropigmentação MIX</h4>
                    <p>É realizada é técnica esfumada em conjunto com a técnica fio a fio
                        Durabilidade média entre 8 e 18 meses.</p>
                </div>
                <div className={styles.card}>
                    <img src={rena} alt="micro de rena" />
                    <h4>Micropigmentação Efeito Henna</h4>
                    <p>Aparência similar ao prenchimento com lápis,
                        Durabilidade média de 3 meses.
                        Ideal para pessoas com receio de realizar uma técnica de longa duração, </p>
                </div>
            </div>
            <div className={styles.tecnica}>
                <h2>Conheça os 3 tipos de Micropigmentação Labial?</h2>
            </div>
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <img src="" alt="" />
                    <h4>Micropigmentação labial Revitalização</h4>
                    <p>É realizada é técnica esfumada em conjunto com a técnica fio a fio
                        Durabilidade média entre 8 e 18 meses.</p>
                </div>
                <div className={styles.card}>
                    <img src={rena} alt="micro de rena" />
                    <h4>Micropigmentação labial Neutralização</h4>
                    <p>Aparência similar ao prenchimento com lápis,
                        Durabilidade média de 3 meses.
                        Ideal para pessoas com receio de realizar uma técnica de longa duração, </p>
                </div>
                <div className={styles.card}>
                    <img src={rena} alt="micro de rena" />
                    <h4>Micropigmentação labial Efeito Batom</h4>
                    <p>Aparência similar ao prenchimento com lápis,
                        Durabilidade média de 3 meses.
                        Ideal para pessoas com receio de realizar uma técnica de longa duração, </p>
                </div>
            </div>
        </>
    )
}

export default Cards