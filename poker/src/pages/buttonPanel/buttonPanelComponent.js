import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import { Buton } from "../../components/button"
import { shadow } from "../../theme"

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    button: {
        position: "absolute",
        right: "7%",
        backgroundColor: palette.secondary.main,
        float: "left",
        boxShadow: shadow,
        borderRadius: 7,
        fontSize: "25px",
        width: "150px",
        zIndex: 999,

    },
    buttonPlace: {
        top: "220px",
        [breakpoints.down('sm')]: {
            top: "200px",
        },
    },
    buttonPass: {
        top: "300px",
        [breakpoints.down('sm')]: {
            top: "270px",
        },
    }
}));


export const ButtonPanelComponent = ({ buttonPlaceName, ChangeRound, round, ChangeButton, PassButton }) => {
    const classes = useStyles();
    const onButtonPlaceClick = () => {
        ChangeRound(round)
        ChangeButton(round)
    }
    const onButtonPassClick = () => {
        PassButton()
    }

    return (
        <Grid>
            <Grid className={`${classes.button} ${classes.buttonPlace}`}>
                <Buton
                    onClick={onButtonPlaceClick}
                    text={buttonPlaceName}
                />
            </Grid >
            <Grid className={`${classes.button} ${classes.buttonPass}`}>
                <Buton
                    text={"PASS"}
                    onClick={onButtonPassClick}
                />
            </Grid >
        </Grid>
    )
}
