import { Button, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3,0,2)
    }
}))
export default function PrimaryButton({children, ...props}) {
    const styles = useStyles()
    return (
        <div>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={styles.root}
                {...props}
            >
                {children}
            </Button>
        </div>
    )
}
