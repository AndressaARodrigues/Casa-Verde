import { useEffect, useState } from 'react';
import styles from './index.module.css';
import formStyles from './form.module.css';

function useFormik({
    initialValues,
    validate
}) {
    const [touched, setTouchedFields] = useState({});
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        //console.log('alguem mexeu nos valores', values);
        validateValues(values);
    }, [values]);
    

    function handleChange(event){
        const fieldName = event.target.getAttribute('name');
        const value = event.target.value;
        setValues({
            ...values,
            [fieldName]: value,
        });
    }

    function handleBlur(event) {
        const fieldName = event.target.getAttribute('name');
        //console.log(fieldName);
        setTouchedFields({
            ...touched,
            [fieldName]: true,
        });
        validateValues(values); // validar novamente quando o campo perder o foco
    }

    function validateValues(values) {
        setErrors(validate(values));
    }

    return {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
    };
}

export default function AssinaturaNewsletter(){
    const formik = useFormik({
        initialValues: {
            userEmail: '',
        },
        validate: function(values) {
            const errors = {};

            if (!values.userEmail) {
                errors.userEmail = 'Por favor, insira seu e-mail.';
            } else if (!values.userEmail.includes('@')) {
                errors.userEmail = 'Por favor, insira um e-mail válido.';
            }  
            
            return errors;
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(formik.values);

        if (Object.keys(formik.errors).length === 0 && formik.values.userEmail) {
            alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${formik.values.userEmail}.`);
        }
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
                            name="userEmail"
                            id="userEmail"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.userEmail}
                        />
                       
                        <button type="submit" disabled={Object.keys(formik.errors).length > 0 || !formik.values.userEmail}>
                            Assinar Newsletter
                        </button>
                    </div>
                </form>

                {formik.touched.userEmail && formik.errors.userEmail && <div className={formStyles.errorMsg}>{formik.errors.userEmail}</div>}
                        
            </div>
        </div>
    );
}
