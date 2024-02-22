import { useState } from 'react';
import OfertasCard from '../OfertasCard';
import styles from './index.module.css';
import filterStyles from './filters.module.css'; // Renomeie o arquivo para filters.module.css
import plantsJson from '../../../util/api-plants/plants.json';

export default function ConhecaOfertas() {
    const [filteredPlants, setFilteredPlants] = useState(plantsJson.filter(plant => plant.quantity > 0));
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [showNoResults, setShowNoResults] = useState(false);

    const applyFilters = () => {
        let filtered = plantsJson.filter(plant => plant.quantity > 0); 
        if (minPrice || maxPrice) {
            filtered = filtered.filter(plant => {
                const price = parseFloat(plant.price);
                if (minPrice && maxPrice) {
                    return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
                } else if (minPrice) {
                    return price >= parseFloat(minPrice);
                } else if (maxPrice) {
                    return price <= parseFloat(maxPrice);
                }
                return true;
            });
        }
        setFilteredPlants(filtered);
        setShowNoResults(filtered.length === 0);
    };

    const sortByNome = () => {
        const sortedPlants = [...filteredPlants].sort((a, b) => a.name.localeCompare(b.name));
        setFilteredPlants(sortedPlants);
    };

    const sortByPrice = () => {
        const sortedPlants = [...filteredPlants].sort((a, b) => a.price - b.price);
        setFilteredPlants(sortedPlants);
    };

    return (
        <section className={styles.discoverOffers}>
            <h2>Conheça nossas <br/>
                <strong>ofertas</strong>
            </h2>
            <div className={filterStyles.filters}>
                <button onClick={sortByNome}>Ordenar por Nome</button>
                <button onClick={sortByPrice}>Ordenar por Preço</button>
                <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} placeholder="Preço Mínimo" min="0" />
                <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} placeholder="Preço Máximo" min="0" />
                <button onClick={applyFilters}>Aplicar Filtros</button>
            </div>
            <div className={styles.offersContainer}>
                {showNoResults ? (
                    <p>Nenhum resultado encontrado.</p>
                ) : (
                    filteredPlants.map((el, index) => (
                        <OfertasCard
                            key={index} 
                            id={el.id}
                            image={el.image}
                            name={el.name}
                            price={el.price}
                        />
                    ))
                )}
            </div>
        </section>
    );
};
