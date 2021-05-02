var i = 0;
var txt = 'Once upon an ice age, there is a dino playing in his favourite park in the north pole. Unfortunately for him, he stepped on his tail and fell into an ice pool, in which luckily turns out to be his life saver  from the great extinction in the past. After 65 millions and one year, due to the global warming, he has finally woken up. Everything has changed and now, he has to adapt with the modern life of the humanity.';
var speed = 25;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("story").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}