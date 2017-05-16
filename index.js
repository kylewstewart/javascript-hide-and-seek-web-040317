function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const x = document.getElementById('nested').querySelector(".target");
  return x
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (var i = 0; i < lis.length; i++) {
    var x = lis[i].innerHTML;
    var y = parseInt(x, 10) + n;
    lis[i].innerHTML = y.toString()
  }
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector("div div div div div");
}
