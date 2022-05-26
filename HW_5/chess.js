const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
const line = [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8"];

function drowChess() {
    let box = document.querySelector(".box"); // поиск div class="box"

    let boardmarksvertical = document.createElement("div"); // создание маркеровок доски
    boardmarksvertical.classList.add("boardmarksvertical")
    box.appendChild(boardmarksvertical);

    let boardmarkshorisontal = document.createElement("div"); // создание маркеровок доски
    boardmarkshorisontal.classList.add("boardmarkshorisontal");
    box.appendChild(boardmarkshorisontal);

    let board = document.createElement("div"); // создание блока div доски
    board.classList.add("chessboard"); // задание класса для css
    box.appendChild(board); // добавление созданной доски

    let boardmarksh;
    let boardmarksv;
// вертикальная и горизонтальная разметка
    for (let i = 0; i < 8; i++) {
        boardmarksh = document.createElement("div");
        boardmarksh.classList.add("boardmarkletter");
        boardmarksh.textContent = rows[i];
        boardmarkshorisontal.appendChild(boardmarksh);
        boardmarksv = document.createElement("div");
        boardmarksv.classList.add("boardmarknumber");
        boardmarksv.textContent = line[i];
        boardmarksvertical.appendChild(boardmarksv);
    };

    let grid;
    let gridMark;

    for (let i = 0; i < 64; i++) {
        grid = document.createElement("div");
        let j = Math.floor(i / 8);
        if ((i + j) % 2 == 0) {
            grid.classList.add("change-color")
        };
        gridMark = document.createElement("p");
        gridMark.classList.add("gridMark");
        grid.appendChild(gridMark);
        grid.classList.add("grid");
        board.appendChild(grid);
        //console.log(grid);

    }

}

drowChess();
