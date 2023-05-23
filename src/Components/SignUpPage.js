import { useEffect, useState } from 'react'
import classes from '../UI/SignUpPage.module.css'
import FormInputs from "./FormInputs"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import background_form from '../Img/background_forms.jpg'




function SignUpPage() {
    const [isValid, setIsValid] = useState(false);
    const [values, setValues] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    })

    const navigate = useNavigate()

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
        {
            id: 3,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: 'Passwords dont match',
            label: 'Confirm Password',
            pattern: values.password,
            required: true,
        }
    ]



    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const returnHandler = () => {
        navigate('/')
    }

    useEffect(() => {
        const usernameRegex = new RegExp(inputs[0].pattern);
        const passwordRegex = new RegExp(inputs[1].pattern);
        const confirmPasswordRegex = new RegExp(inputs[2].pattern);


        if (
            !usernameRegex.test(values.username) ||
            !passwordRegex.test(values.password) ||
            !confirmPasswordRegex.test(values.confirmPassword)) {
            setIsValid(false)

        } else setIsValid(true)



    }, [values])

    const signUpHandler = async () => {
        await fetch(`https://e-com-database-4047d-default-rtdb.europe-west1.firebasedatabase.app/Users.json`, {
            method: 'POST',
            body: JSON.stringify({
                username: values.username,
                password: values.password,
            })
        });
        toast.success('You successfully created an account')
        navigate('/products')
    }











    return (
        <>


            <div className={classes.container}>
                <img className={classes.background} src={background_form} alt={background_form}></img>

                <form className={classes.form}>
                    <h1 className={classes.register}>Sign Up</h1>
                    {inputs.map(input => (

                        <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                    ))}
                    <div className={classes.divButton} >

                        <button className={classes.button} type='button' onClick={returnHandler}>close</button>
                        <button className={classes.button} type='button' onClick={signUpHandler} disabled={!isValid}>Sign Up</button>

                    </div>
                </form>
            </div>



        </>
    )


}

export default SignUpPage