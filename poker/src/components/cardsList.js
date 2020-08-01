import React from "react"
import { makeStyles } from '@material-ui/core/styles'

import { Card } from "./card"

const useStyles = makeStyles({
    imageContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center"
    }
});

export const CardsComponent = ({ storeCards }) => {
    const classes = useStyles();

    return (
        <div className={classes.imageContainer}>
            {
                storeCards.map((val, index) => (
                    <div key={index}>
                        <Card source={val} />
                    </div>
                ))
            }
        </div>
    )
}