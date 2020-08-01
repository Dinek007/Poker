import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({

    button: {
        marginLeft: "0px",
        textAlign: "center",
        fontSize: "25px",
        color: palette.error.main,
        width: "100%",
        fontFamily: "Rockwell"
    },
}));

export const Buton = ({ text, onClick, }) => {
    const classes = useStyles();

    return (
        <Button className={classes.button} onClick={onClick} > {text} </Button>
    )
}