let bodyEl = document.querySelector("button");
let scoreEl = document.getElementById("score");

bodyEl.onmousemove = function () {
    scoreEl.innerHTML = Math.random();
}

// scoreEl.innerHTML = Math.random();