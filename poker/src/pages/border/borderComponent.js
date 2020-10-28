import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { TextLabel } from "../../components/textLabel"
import { InputLabel } from "../../components/inputLabel"
import { shadow } from "../../theme"

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    pool: {
        position: "absolute",
        left: "7%",
        backgroundColor: palette.secondary.dark,
        float: "left",
        top: "220px",
        boxShadow: shadow,
        borderRadius: 7,
        fontSize: "25px",
        width: "180px",
        [breakpoints.down('sm')]: {
            width: "150px",
            top: "210px",
        },
    },
    player1Cash: {
        position: "absolute",
        left: "50%",
        transform: "translate(-100%, 0)",
        zIndex: "999",
        backgroundColor: palette.secondary.dark,
        float: "left",
        top: "815px",
        boxShadow: shadow,
        borderRadius: 7,
        width: "180px",
        [breakpoints.down('md')]: {
            top: "1015px",
        },
        [breakpoints.down('sm')]: {
            top: "875px",
        },
    },
    player2Cash: {
        position: "absolute",
        left: "50%",
        transform: "translate(-100%, 0)",
        zIndex: "999",
        backgroundColor: palette.secondary.dark,
        float: "left",
        top: "20px",
        boxShadow: shadow,
        borderRadius: 7,
        width: "180px",
    },
    poolAdd: {
        position: "absolute",
        left: "7%",
        backgroundColor: palette.secondary.dark,
        float: "left",
        top: "400px",
        boxShadow: shadow,
        borderRadius: 7,
        fontSize: "25px",
        width: "180px",
        [breakpoints.down('md')]: {
            top: "660px",
        },
        [breakpoints.down('sm')]: {
            top: "540px",
            width: "130px",
        },
    },
    player1Icon: {
        position: "absolute",
        top: "10px",
        backgroundColor: palette.secondary.dark,
        borderRadius: "20px",
        padding: " 10px",
        boxShadow: shadow,
        left: "50%",
        marginLeft: "20px",
        width: "100px"
    },
    player2Icon: {
        position: "absolute",
        backgroundColor: palette.secondary.dark,
        borderRadius: "20px",
        padding: " 10px",
        boxShadow: shadow,
        top: "800px",
        width: "100px",
        left: "50%",
        marginLeft: "20px",
        marginBottom: "15px",
        [breakpoints.down('md')]: {
            top: "1000px",
        },
        [breakpoints.down('sm')]: {
            top: "860px",
        },
    },
}));

export const BorderComponent = ({
    pool,
    round,
    changePool,
    inputNames,
    player1Cash,
    player2Cash,
    player1Debt,
    player2Debt,
    playerIconSrc1,
    playerIconSrc2
}) => {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.pool}>
                <TextLabel text="POOL" value2={pool} />
            </Grid>
            <Grid className={classes.player1Cash}>
                <TextLabel value={player1Cash} value2={player1Debt} />
            </Grid>

            <Grid className={classes.player2Cash}>
                <TextLabel value={player2Cash} value2={player2Debt} />
            </Grid>

            <img src={playerIconSrc2} alt="gracz" className={classes.player1Icon} />
            <img src={playerIconSrc1} alt="gracz" className={classes.player2Icon} />

            <Grid className={classes.poolAdd}>
                {
                    inputNames.map((val, index) => (
                        <InputLabel
                            kay={index}
                            changepool={changePool}
                            round={round}
                            addValue={val}
                        />
                    ))
                }
            </Grid>
        </>
    )
}
