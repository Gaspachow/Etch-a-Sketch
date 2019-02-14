const container = document.querySelector('.container');
let squareSize = 16;
squareCreate(squareSize)

function squareCreate(size) {
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

const allCells = document.querySelectorAll('.hor');


function drawing (nodeList, event, fn) {
  for (i=0;i<=nodeList.length; i++) {
    nodeList[i].addEventListener(event, fn, false);
  }
}

function paint() {
  this.classList.add('activated');
  }

  
  