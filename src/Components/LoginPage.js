import { useNavigate } from "react-router-dom";
import FormInputs from "./FormInputs";
import { useState, useEffect } from "react";
import classes from '../UI/SignUpPage.module.css'
import { toast } from "react-hot-toast";
import background_form from '../Img/background_forms.jpg'






function LoggedInPage() {
    const [values, setValues] = useState({
        username: '',
        password: '',
    })
    const [accounts, setAccounts] = useState(null)


    const navigate = useNavigate()
    const basicBackToHomepageHandler = () => {
        navigate('/')
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            errorMessage: 'Username should be 3-16 characters character shoud not have special characters',
            label: 'Username',
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true,
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage: 'Password should be 5-20 characters and should not include special characters',
            label: 'Password',
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true,
        },
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://e-com-database-4047d-default-rtdb.europe-west1.firebasedatabase.app/Users.json');
                const resData = await response.json();
                if (response.ok) {
                    setAccounts(resData);
                }
            } catch (error) {
                toast.error('Error fetching data:');
            }
        };

        fetchData();
    }, []);


    const authLogin = () => {
        let exists = Object.values(accounts).find((account) => account.username === values.username && account.password === values.password)
        console.log(exists);

        if (exists) {
            toast.success('You successfully logged in')
            navigate('/products')
            localStorage.setItem("account", JSON.stringify(exists.username));

        }
        else {
            toast.error('Username or password incorrect')

        }

    }









    return (
        <>

            <div className={classes.container}>
                <img className={classes.background} src={background_form} alt={background_form}></img>

                <form className={classes.form}>
                    <h1 className={classes.register}>Login</h1>
                    {inputs.map(input => (
                        <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                    ))}
                    <div className={classes.divButton} >

                        <button className={classes.button} type='button' onClick={basicBackToHomepageHandler}>Return</button>
                        <button className={classes.button} type="button" onClick={authLogin}>Login</button>

                    </div>
                </form>
            </div>

        </>
    )


}

export default LoggedInPage;