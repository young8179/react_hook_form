import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import Form from '../components/Form'
import { Input } from '../components/Input'
import MainContainer from '../components/MainContainer'
import PrimaryButton from '../components/PrimaryButton'
import { ErrorMessage } from '@hookform/error-message'
import { Typography } from '@material-ui/core'
import { useData } from '../DataContext'

export default function Step1() {
    const {setValues, data } = useData()
    const history = useHistory()
    const { register, handleSubmit, errors } = useForm({
        defaultValues: { firstName: data.firstName, lastName: data.lastName },
        mode: "onBlur",
        
      });
    console.log(data)
    const onSubmit = (data) => {
        history.push("/step2")
        setValues(data)
        console.log(data)
    }

    return (
        <MainContainer>
             <Typography component="h2" variant="h5">
        🦄 Step 1
      </Typography>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input ref={register({required: "this is required", minLength: {value:3, message:"min length is 5"}})} 
                name="firstName" 
                type="text" 
                label="First Name" />
                <ErrorMessage errors={errors} name="firstName" as="p"/>

                <Input ref={register({required: "this is required", minLength: {value:3, message:"min length is 5"}})} 
                name="lastName" 
                type="text" 
                label="Last Name" />
                <ErrorMessage errors={errors} name="lastName" as="p"/>

                <PrimaryButton type="submit">Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}
