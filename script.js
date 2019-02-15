const container = document.querySelector('.container');
const newSquareButton = document.querySelector('#changeSize');
let squareSize = 16;


squareCreate(squareSize)
newSquareButton.addEventListener('click', newSquare, false);


function squareCreate(size) {
  eraseSquare();

  for (i=1;i<=size;i++){
    let divCreateVer = document.createElement('div');
    divCreateVer.classList.add('ver', 'ver'+i);
    container.appendChild(divCreateVer);
    for (j=1;j<=size;j++){
      let divCreateHor = document.createElement('div');
      divCreateHor.classList.add('hor', 'id'+ i + '.' + j);
      divCreateHor.addEventListener('mouseover', paint, false);
      divCreateVer.appendChild(divCreateHor);
  }}}


function drawing (nodeList, event, fn) {
  for (i=0;i<=nodeList.length; i++) {
    nodeList[i].addEventListener(event, fn, false);
  }
}

function paint() {
  this.classList.add('activated');
  }


function eraseSquare () {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function newSquare() {
  newSize = prompt('Enter Square Size', '16 - 124');
  if (newSize == null) {
    return;
  } else if (newSize >= 16 && newSize <= 124) {
    squareCreate(newSize);
  } else {
    alert('Please enter valid number');
    newSquare();
  }

}
  

