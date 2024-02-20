import { useEffect, useState } from 'react';
import styles from './index.module.css';

export default function ComoConseguir() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const circles = document.querySelectorAll(`.${styles.step} span`);

        const blinkSequentially = () => {
            const nextIndex = (activeIndex + 1) % circles.length; 
            circles[activeIndex].classList.remove(styles.blink);
            circles[nextIndex].classList.add(styles.blink); 
            setActiveIndex(nextIndex); 
        };

        const intervalId = setInterval(blinkSequentially, 1000); 

        return () => clearInterval(intervalId); 
    }, [activeIndex]); 

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
                        <span className={activeIndex === 0 ? styles.blink : ''}>Escolha suas plantas</span> 
                        <span className={activeIndex === 1 ? styles.blink : ''}>Faça seu pedido</span> 
                        <span className={activeIndex === 2 ? styles.blink : ''}>Aguarde na sua casa</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
