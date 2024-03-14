let s1 = document.getElementById('div1')
let s2 = document.getElementById('div2')
let s3 = document.getElementById('div3')
let s4 = document.getElementById('div4')

const moveMargin = () => {
  s1.style.marginLeft = "0px";
  s2.style.marginLeft = "100px";
  s3.style.marginLeft = "200px";
  s4.style.marginLeft = "300px";
}

document.getElementById('move').addEventListener('click', moveMargin);

const bR = () =>{

  s1.style.borderTopRightRadius = "50%"
  s1.style.borderBottomLeftRadius = "50%"
  s2.style.borderTopRightRadius = "50%"
  s2.style.borderBottomLeftRadius = "50%"
  s3.style.borderTopRightRadius = "50%"
  s3.style.borderBottomLeftRadius = "50%"
  s4.style.borderTopRightRadius = "50%"
  s4.style.borderBottomLeftRadius = "50%"

}
document.getElementById('effect').addEventListener('click', bR);