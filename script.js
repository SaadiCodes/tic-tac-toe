// creates player and their markers

const personFactory = (name, marker) => {
    return {name, marker}
}

// Adds click event to each div box and makes sure it only fires once. Adds markers.

const addEventListener = (() => {
    const div = document.querySelectorAll(".n")
    console.log(div)
    div.forEach((d) => {
        d.addEventListener("click", Game, {once : true})
    })
})()

// Adds markers on event firing and also checks whether someone won or not.
turn = 1
end = ""
function Game() {
    const winConditions = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]
    const P1 = personFactory("P1", 'X')
    const P2 = personFactory("P2", "O")
    currentPlayer = P1
    if (turn % 2 != 0) {
        this.textContent = P1.marker;
        turn = turn + 1;
        const divs = document.querySelectorAll(".n")
        winConditions.forEach((element) => {
            if (divs[element[0]].textContent == 'X' && divs[element[1]].textContent == 'X' && divs[element[2]].textContent == 'X') {
                alert("Player 1 has won!")
                setTImeout(function() {location.reload()}, 2000)
            }
            else if (turn == 10) {
                setTImeout(function() {location.reload()}, 2000)
            }
        })
    }
    else if (turn % 2 == 0) {
        this.textContent = P2.marker;
        turn = turn + 1;
        const divs = document.querySelectorAll(".n")
        winConditions.forEach((element) => {
            if (divs[element[0]].textContent == 'O' && divs[element[1]].textContent == 'O' && divs[element[2]].textContent == 'O') {
                alert("Player 2 has won!")
                setTImeout(function() {location.reload()}, 2000)
            }
            else if (turn == 10) {
                setTImeout(function() {location.reload()}, 2000)
                
            }
        })
    }
}
