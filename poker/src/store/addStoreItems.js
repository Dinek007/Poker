export const addStore = () => {

    const cardNames = ["Clubs", "Diamonds", "Hearts", "Spades"]
    const cards = []
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 13; j++) {
            cards.push(cardNames[i] + "." + j)
        }
    }
    cards.push("Default")



    const buttons = ["PLACE"]

    const player1 = ["../../cards/Default.png", "../../cards/Default.png"]

    const player2 = ["../../cards/Default.png", "../../cards/Default.png"]

    const board = ["../../cards/Default.png", "../../cards/Default.png", "../../cards/Default.png", "../../cards/Default.png", "../../cards/Default.png"]

    const ico = ["../../textures/player.png", "../../textures/computer.png"]

    const store = {
        cards: cards,
        buttons: buttons,
        player1: player1,
        player2: player2,
        board: board,
        ico: ico,
    }


    return store
}