const backimg = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const randimg = backimg[Math.floor(Math.random() * backimg.length)];

const setimg =  document.createElement("img");
setimg.src = `img/${randimg}`;

document.body.appendChild(setimg);
