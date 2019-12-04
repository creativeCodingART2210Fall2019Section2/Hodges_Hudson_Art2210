var film;

function preLoad(){
    film = loadJSON('Data.json');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    fill(0);
    text(film.movie[0].title);
}
