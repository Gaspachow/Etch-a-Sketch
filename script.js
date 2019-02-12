const container = document.querySelector('.container')

for (i=1;i<=16;i++){
  let divCreateVer = document.createElement('div')
  divCreateVer.classList.add('ver', 'ver'+i);
  container.appendChild(divCreateVer)
  for (j=1;j<=16;j++){
    let divCreateHor = document.createElement('div')
    divCreateHor.classList.add('hor', 'hor'+j);
    divCreateVer.appendChild(divCreateHor);
}}

