let randomtop;
let randomleft;

function playrandom(){
    randomtop = Math.floor(Math.random()*71);
    randomleft = Math.floor(Math.random()*75);
    document.getElementById('btn').style.top = randomtop + "%"
    document.getElementById('btn').style.left = randomleft + "%"






}

function changecolor(){
    document.getElementById('core').innerHTML = "Done!"
}