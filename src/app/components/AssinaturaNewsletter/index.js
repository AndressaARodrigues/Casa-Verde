import { useState } from 'react';
import styles from './index.module.css';
import formStyles from './form.module.css';

export default function AssinaturaNewsletter() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValidEmail(email)) {
            const message = `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}.`;
            alert(message);
        } else {
            alert('Por favor, insira um e-mail válido.');
        }
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (        
        <div className={styles.assinaturaNewsletter}>
            <div className={styles.assinaturaNewsletter__container}>
                <div className={styles.assinaturaNewsletter__container__text}>
                    <h1>
                        Sua casa com as
                        <br />
                        <strong>
                            melhores <br /> plantas
                        </strong>
                    </h1>
                    <p>
                        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                    </p>
                </div>


                <form className={formStyles.form} onSubmit={handleSubmit}>
                    <div className={formStyles.fieldGroup}>
                        <input 
                            type="email" 
                            placeholder='Insira seu E-mail' 
                            value={email}
                            onChange={handleEmailChange} 
                        />
                        <button type="submit">
                            Assinar Newsletter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}