import { useState } from 'react';
import classes from '../UI/FormInputs.module.css'


function FormInputs(props) {
    const [focused, setFocused] = useState(false)

    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <>
            <div>
                <label className={classes.label}>{label}</label>
                <input className={classes.input} {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
                <span className={classes.span}>{errorMessage}</span>
            </div>
        </>
    )


}

export default FormInputs