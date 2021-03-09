import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(3, 0, 2),
      fontFamily: "Permanent Marker",
      textAlign: "center",
      fontSize: "40px",
      color: "deeppink",
      textShadow: "1px 1px darkmagenta",
    },
  }));
export default function Header() {
    const styles = useStyles()

    return (
        <div>
            <Typography className={styles.root} component="h1" variant="h5">
                The ultimate form Challenge.
            </Typography>
        </div>
    )
}
