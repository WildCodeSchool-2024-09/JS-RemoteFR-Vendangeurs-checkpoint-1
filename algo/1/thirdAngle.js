/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
  // Your code here !
  const lastAngle = 180 - (a + b);

  return lastAngle;
}


console.log(thirdAngle(20, 100));
console.log(thirdAngle(40, 50));
console.log(thirdAngle(60, 40));

module.exports = thirdAngle;
