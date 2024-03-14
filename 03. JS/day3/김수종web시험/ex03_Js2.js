function like() {
  let numStr = document.getElementById('number').innerText;
  let num = parseInt(numStr.split(' ')[2]);
  num++;
  document.getElementById('number').innerText = "Like! ❤ " + num;
}

function hate() {
  let numStr = document.getElementById('number').innerText;
  let num = parseInt(numStr.split(' ')[2]);
  if (num != 0) {
      num--;
      document.getElementById('number').innerText = "Like! ❤ " + num;
  }
}

function reset() {
  document.getElementById('number').innerText = "Like! ❤ 0";
}

document.getElementById('like').addEventListener('click', like);
document.getElementById('hate').addEventListener('click', hate);
document.getElementById('reset').addEventListener('click', reset);
