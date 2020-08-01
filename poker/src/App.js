import React from 'react'
import { ThemeProvider } from '@material-ui/core'

import { ButtonPanelContainer } from "./pages/buttonPanel/buttonPanelContainer"
import { BoardContainer } from "./pages/board/boardContainer"
import { BorderContainer } from "./pages/border/borderContainer"
import { theme } from './theme'

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <ButtonPanelContainer />
            <BoardContainer />
            <BorderContainer />
        </ThemeProvider>
    )
}
