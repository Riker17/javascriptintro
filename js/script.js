const me = {
  name: 'Will',
  age: 39,
  eyes: brown,
  height: 70,
};

document.write(me.name + me.age + me.eyes + me.height);

const imgs = document.getElementsByTagName('img');
console.log('img', imgs[0]);
const px = 'px';
let move = 0;

setInterval( () => {
  move += 20;
  img.style.right = move + px;
}, 100)
