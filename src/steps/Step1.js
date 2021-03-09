import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import MainContainer from '../components/MainContainer'

export default function Step1() {
    const history = useHistory()
    const {register, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {
        history.push("/step2")
    }

    return (
        <MainContainer>
            <h2>Step 1</h2>
            <form>
                <input ref={register} name="lastName" type="text" placeholder="First Name" />
                <input ref={register} name="lastName" type="text" placeholder="Last Name" />
                <button type="submit">Next</button>
            </form>
        </MainContainer>
    )
}
