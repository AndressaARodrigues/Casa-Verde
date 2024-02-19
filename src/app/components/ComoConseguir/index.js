import styles from './index.module.css';

export default function ComoConseguir() {
    return (
        <section className={styles.howToGet}>
            <div className={styles.howToGet__container}>
                <div className={styles.howToGet__container__image}>
                    <img src="/images/planta-como-conseguir.png" alt="plantinha" />
                </div>
                <div className={styles.howToGet__container__text}>
                    <h1>
                        Como conseguir
                        <br/>
                        <strong>
                            minha planta
                        </strong>
                    </h1>
                    <div className={styles.step}>
                        <span>Escolha suas plantas</span> 
                        <span>Faça seu pedido</span> 
                        <span>Aguarde na sua casa</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
