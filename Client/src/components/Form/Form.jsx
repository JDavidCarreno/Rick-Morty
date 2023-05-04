import styles from './Form.module.css'
import img from '../../img/imgLogin.png'
import { useState } from 'react'
import validations from './validation'

const Form = (props) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });

        setErrors(validations({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return(
        <div>
            <form className={styles.container}>
                <img className={styles.img} src={img} alt="Rick and Morty" />  
                <div className={styles.email}>
                    <label>EMAIL</label>
                    <input type="text" placeholder="Email..." value={userData.email} name='email' onChange={handleChange}/>
                    {
                        errors.email ? (<p>{errors.email}</p>) : null
                    }
                </div>
                
                <div className={styles.password}>
                    <label>PASSWORD</label>
                    <input type="password" value={userData.password} name='password' onChange={handleChange}/>
                    {
                        errors.password ? (<p>{errors.password}</p>) : null
                    }
                </div>
                <button className={styles.btn} type="submit" onClick={handleSubmit}>Ingresar</button>
            </form>
        </div>
    )
}

export default Form;