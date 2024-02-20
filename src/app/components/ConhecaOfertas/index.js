import OfertasCard from '../OfertasCard';
import styles from './index.module.css';

export default function ConhecaOfertas() {
    return (
        <section className={styles.discoverOffers}>
            <h2>Conheça nossas <br/>
                <strong>ofertas</strong>
            </h2>
            <div>
                <OfertasCard
                name="Ajuga reptans"
                price="R$ 19,90"
                />
            </div>
        </section>
    );
};
