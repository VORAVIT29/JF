console.log(robot_pos(['n', 'n', 'e', 'e', 'n', 'e']))
console.log(robot_pos(['s', 's', 'w', 'w', 'n', 'n', 'n', 'n', 'w']))

function robot_pos(pos) {

    let row = 4
    let col = 3

    for (let i = 0; i < pos.length; i++) {

        if (pos[i] == 'n') {
            row--
        } else if (pos[i] == 's') {
            row++
        } else if (pos[i] == 'e') {
            col++
        } else col--

    }
    console.log('Row :', row, '\nCol :', col)

    if (row == 1 && col == 6) {
        return 'GT-1'
    } else if (row == 2 && col == 0) {
        return 'GT-2'
    }

    return 'Lost'
}