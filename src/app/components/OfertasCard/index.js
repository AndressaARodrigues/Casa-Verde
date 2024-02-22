import styles from './index.module.css';

export default function OfertasCard({ name, price, image }) {
    const cardStyle = {
        backgroundImage: `url(${image})`,
    };

    return (
        <div className={styles.card} style={cardStyle}>
            <div className={styles.card__content}>
                <div className={styles.card__info}>
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
        </div>
    );
};
