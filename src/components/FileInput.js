import { Paper } from '@material-ui/core'
import { CloudUpload } from '@material-ui/icons'
import React from 'react'
import Dropzone from 'react-dropzone'
import { Controller } from 'react-hook-form'



export default function FileInput({control, name}) {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={(onChange, onBlur, value) => (<>
             <Dropzone onDrop={onChange}>
                 {({ getRootProps, getInputProps}) => (
                     <Paper variant="outlined" {...getRootProps()}>
                         <CloudUpload />
                         <input {...getInputProps()} name={name} onBlur={onBlur} />
                         <p>Drag 'n' drop files here, or click to select files</p>
                     </Paper>
                 )}

             </Dropzone>
            </>)}
            >

        </Controller>
    )
}
