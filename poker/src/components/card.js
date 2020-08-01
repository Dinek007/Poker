import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    image: {
        position: "relative",
        float: "left",
        width: "130px",
        margin: '5px',
        [breakpoints.down('sm')]: {
            width: "70px",
        },
    }
}));

export const Card = (source) => {
    const classes = useStyles();

    return (
        <img className={classes.image} src={source.source} alt="cardPicture" />
    )
}