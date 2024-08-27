import React from 'react'
import styles from './Cards.module.css'
import fio from '../..//assets/fio a fio.jpg'
import sobrancelha from '../../assets/sobrancelha.jpg'
import rena from '../../assets/rena.jpg'
import boca from '../../assets/boca.jpg'
import contornoBoca from '../../assets/contorno do labio.jpg'
import bocaHomem from '../../assets/bocahomem.jpg'
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
                    <img src={sobrancelha} alt="" />
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
                    <img src={contornoBoca} alt="" />
                    <h4>Micropigmentação labial Revitalização</h4>
                    <p>Transforme seus lábios com micropigmentação labial, destacando o contorno e a cor natural, e revitalização, que promove hidratação profunda e rejuvenescimento.</p>
                </div>
                <div className={styles.card}>
                    <img src={bocaHomem} alt="micro de rena" />
                    <h4>Micropigmentação labial Neutralização</h4>
                    <p>Corrija e uniformize o tom dos seus lábios! A neutralização é ideal para quem tem lábios escurecidos ou com manchas, proporcionando uma cor natural e harmoniosa. Realce sua beleza com lábios mais claros e definidos. Agende sua sessão!</p>
                </div>
                <div className={styles.card}>
                    <img src={boca} alt="micro de rena" />
                    <h4>Micropigmentação labial Efeito Batom</h4>
                    <p>ATenha lábios perfeitos o tempo todo! A técnica de micropigmentação labial com efeito batom deixa seus lábios sempre com cor vibrante e contorno definido, como se estivesse usando batom. Realce sua beleza com praticidade e durabilidade. Agende sua sessão! </p>
                </div>
            </div>
        </>
    )
}

export default Cards