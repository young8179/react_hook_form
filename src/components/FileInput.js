import React from 'react'
import { Controller } from 'react-hook-form'



export default function FileInput({control, name}) {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            >

        </Controller>
    )
}
