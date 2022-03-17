//Exercise 1
const bicycleRiding = (
  speedsTeamOne: number[],
  speedsTeamTwo: number[],
  fastest: boolean
): number => {
  if (speedsTeamOne.length === speedsTeamTwo.length) {
    return speedsTeamOne.reduce((acc, current, idx) => {
      //paired every player on a bicycle and then looking for the min or max sped
      const number = fastest
        ? Math.max(current, speedsTeamTwo[idx])
        : Math.min(current, speedsTeamTwo[idx]);
      return (acc += number);
    }, 0);
  }
  return 0;
};

//Seeing the result
console.log(
  "Exercise One, tandemSpeed ==>",
  bicycleRiding([6, 8, 2, 9, 2], [6, 7, 6, 5, 4], true)
);
