import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form';
import { Input } from '../components/Input';
import MainContainer from '../components/MainContainer';
import { useData } from '../DataContext';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PrimaryButton from '../components/PrimaryButton';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
// import { yupResolver } from 'react-hook-form-resolvers';


const normalizePhoneNumber = (value) =>{
    const phoneNumber = parsePhoneNumberFromString(value)
    if(!phoneNumber){
        return value
    }
    return (
        phoneNumber.formatInternational()
    )
}

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email should have correct format")
        .required("Email is a required field")
})
export default function Step2() {
    const {data, setValues} = useData()
    const history = useHistory()
    const { register, handleSubmit, errors, watch } = useForm({
        defaultValues:{
            email: data.email,
            hasPhone: data.phoneNumber
        },
        mode: "onBlur",
        resolver: yupResolver(schema),
    })

    const hasPhone = watch("hasPhone");
    console.log(data)
    const onSubmit = (data) =>{
        history.push("/step3")
        setValues(data)
    }
    return (
        <MainContainer>
            <Typography>Step 2</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input ref={register} 
                    type="email" 
                    label="Email" 
                    name="email" 
                    required 
                    error={!! errors.email} 
                    helperText={errors?.email?.message}/>

                <FormControlLabel control={<Checkbox
                   defaultValue={data.hasPhone}
                   defaultChecked={data.hasPhone}
                   color="primary"
                   inputRef={register}
                   name="hasPhone" 
                />} 
                label="Do you have a phone?"/>

                {hasPhone && <Input ref={register}
                    id="phoneNumber"
                    type="tel"
                    label="Phone Number"
                    name="phoneNumber"
                    onChange={
                        (event) =>{
                            event.target.value = normalizePhoneNumber(event.target.value)
                        }
                    }
                    />}

                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}
