let row = 1;
let col = 1
document.onkeydown = function(e) {
  if(e.key == "ArrowUp" && row > 1) {
      row -= 1;
      moveTheLittleGuy(row, col)
  }
  if(e.key == "ArrowDown" && row < 10) {
      row += 1;
      moveTheLittleGuy(row, col)
  }
  if(e.key == "ArrowLeft" && col > 1) {
      col -= 1;
      moveTheLittleGuy(row, col)
  }
  if(e.key == "ArrowRight" && col < 10) {
      col += 1;
      moveTheLittleGuy(row, col)
  }
}
function moveTheLittleGuy (rowToMoveto, colToMoveTo) {
  let coordsClass = `.r${rowToMoveto}c${colToMoveTo}`
  $(coordsClass).append($('#little-guy'))
}