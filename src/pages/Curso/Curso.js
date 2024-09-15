import React from 'react'
import styles from './Curso.module.css'
import Container from '../../components/Container/Container'
import Footer from '../../components/Footer/Footer'
import curso from '../../assets/3.png'
const Curso = () => {
    return (
        <>
            <Container>
                <div className={styles.banner}>
                    <img src={curso} alt="" />
                </div>
                <div>
                    <h1>O que vou aparender no Curso ?</h1>
                </div>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h3>Lista de material</h3>
                        <p>Conheça cada ferramenta necessária para a execução do procedimento e receba dicas de fornecedores.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Colorimetria basica</h3>
                        <p>Aprenda sobre a diversidade de pigmentos orgânicos e inorgânicos
                            e descubra quais são os mais indicados para começar. Compreender
                            a colorimetria é essencial para obter resultados precisos e duradouros
                            em micropigmentação, garantindo a escolha correta de tons para cada tipo de pele.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>Mapeamento descomplicado</h3>
                        <p>Descubra o segredo para alcançar o design perfeito para cada
                            cliente com um mapeamento eficaz e simplificado. Aprenda
                            técnicas que garantirão resultados personalizados e precisos,
                            atendendo às necessidades e preferências individuais de cada pessoa.</p>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.card}>
                            <h3>Técnica Power Shading</h3>
                            <p>Aprenda em detalhes a executar a técnica Power Shading,
                                conhecida por criar um degradê impecável. Domine cada etapa
                                desse procedimento incrível, elevando o nível dos seus resultados
                                e oferecendo aos seus clientes um acabamento suave e natural.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3>Treino em pele sintética</h3>
                            <p>O treino em pele sintética é fundamental para aprimorar o controle da sua técnica.
                                Ele permite ajustar o peso da mão e melhorar a precisão dos movimentos, garantindo maior
                                confiança e segurança na hora de aplicar a micropigmentação em seus clientes.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3>Modelos reais</h3>
                            <p>Ao final do curso, você realizará o procedimento em uma modelo real,
                                sob a minha supervisão direta. Essa prática proporciona uma experiência
                                completa e permite que você aplique todo o conhecimento adquirido, garantindo
                                a confiança necessária para atuar com segurança e excelência no mercado.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.container1}>
                    <h2>PARA QUEM É O CURSO? </h2>
                    <p>Este curso foi cuidadosamente planejado e desenvolvido por Susi Greyce
                        para atender às necessidades de profissionais experientes em design
                        de sobrancelhas que desejam expandir suas habilidades para a área de
                        micropigmentação. É imprescindível ter experiência prévia como designer
                        de sobrancelhas para se matricular.</p>
                    <p>Com o setor de micropigmentação em rápida expansão no país e uma demanda
                        crescente por profissionais qualificados, este curso proporciona a formação
                        necessária para você se destacar e conquistar seu espaço no mercado.</p>
                </div>
                <div className={styles.container2}>
                    <h2>QUAL A DINÂMICA DO CURSO ?</h2>
                    <p>Serão 3 dias de Curso divididos da Seguinte Forma:</p>
                    <br />
                    <p>1° dia - Apresentação dos materias + toda a parte teórica + treino em pele</p>
                    <p>2° dia - Treino em pele sintética  + demonstração da técnica na Modelos</p>
                    <p>3º dia - Treino em pele sintética + execução da técnica na modelo</p>
                    <br />

                </div>
            </Container>
        </>
    )
}

export default Curso