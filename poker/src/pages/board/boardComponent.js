import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { CardsComponent } from "../../components/cardsList"
import { shadow } from "../../theme"

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    board: {
        textAlign: "center",
        position: "absolute",
        height: "630px",
        top: "170px",
        width: "55vw",
        left: "50%",
        transform: "translate(-50%, 0)",
        flexWrap: "wrap",
        display: "flex",
        backgroundColor: palette.secondary.main,
        boxShadow: shadow,
        borderRadius: 7,
        [breakpoints.down('md')]: {
            width: "90vw",
            height: "830px",
        },
        [breakpoints.down('sm')]: {
            height: "700px",
        },
    },
    cardsContainer: {
        textAlign: 'center',
        position: "relative",
        [breakpoints.down('sm')]: {
            top: "-30px"
        },
    },
}));

const DefaultGrid = ({ children, className }) => (
    <Grid xs="8" className={className}>{children}</Grid>
)


export const BoardComponent = ({ listPlayer2, listPlayer1, boardCards }) => {
    const classes = useStyles();

    return (
        <Grid
            justify="center"
            alignItems="center"
            xs="12" className={classes.board}
        >
            <DefaultGrid className={classes.cardsContainer}>
                <CardsComponent storeCards={listPlayer2} />
            </DefaultGrid>
            <DefaultGrid className={classes.cardsContainer} >
                <CardsComponent storeCards={boardCards} />
            </DefaultGrid>
            <DefaultGrid className={classes.cardsContainer}>
                <CardsComponent storeCards={listPlayer1} />
            </DefaultGrid>
        </Grid>

    )
}
