//Exercise 1
console.log("Exercise One ==> Bicycle Riding");

const redShirtSpeeds = [6, 8, 2, 9, 2];
const blueShirtSpeeds = [6, 7, 6, 5, 4];
const fastest = true;

const tamdemSpeed = redShirtSpeeds.reduce((acc, current, idx) => {
  const number = fastest
    ? Math.max(current, blueShirtSpeeds[idx])
    : Math.min(current, blueShirtSpeeds[idx]);
  return (acc += number);
}, 0);

console.log("tamdemSpeed", tamdemSpeed);
