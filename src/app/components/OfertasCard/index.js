import styles from './index.module.css';

export default function OfertasCard({ name, price }) {
    return (
        <div className={styles.card}>
            <div className={styles.card__container__image}>
                <img src="/images/plants/planta-card-1.png" alt="plantinha" />
            </div>
            <div className={styles.card__container__info}> 
                <h3 className={styles.card__title}>
                    {name}
                </h3>    
                <p className={styles.card__price}>
                    R$ {price}
                </p>
                <button className={styles.card__save__btn}>
                    Comprar 
                    <img src="/images/icons/seta.png" alt="seta" />
                </button>
            </div>
        </div>
    );
};
