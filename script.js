function verificaNumero(num) { //num = -12
    let str = '';
    
    if (num % 2 == 0) { //-0 ==0 -> true
      str = 'par';
    } else {
      str = 'impar';
    } //str = par
  
    str += ', '; //str = 'par, '
  
    if (num > 0) { //-12 > 0 -> false
      str += 'positivo';
    } else {
      str += 'negativo';
    } //str = 'par, negativo'
  
    str += ' e '; //'par, negativo e '
  
    if (num === parseInt(num)) { //-12 === -12 -> true
      str += 'não possui casas decimais'; 
    } else {
      str += 'possui casas decimais';
    } //str = 'par, negativo e não possui casas decimais'
  
    str = 'O numero ' + num + ' é ' + str; 
    //str = 'O numero ' + '-12' é '+'par, negativo e não possui casas decimais'
    //str = 'O numero -12 é par, negativo e não possui casas decimais'; 
    //       O numero -12 é par, negativo e não possui casas decimais
  
    return str;
  }
  
  console.log(verificaNumero(-12));



  let valor = 18;
let result = valor / 2; //result = 18 / 2 = 9
console.log(result); //9

result = result / 3; //9 / 3 = 3
console.log(result); //3

let isPair = ( result == 3 ); //3 == 3 -> true
console.log(isPair); //true

if (isPair) { //true
  result = result * 6; //result = 3 * 6 = 18
} else {
  result = result * 12;
}

console.log(result); //18

/*
1 - 9
2 - 3
3 - true
4 - 18
*/


function algarismosEmUmNumero(n){ //n = 3.141517
    let str = `${n}`; //str = '3.141517'
    let contagem = str.length; //contagem = 8
    console.log(contagem); //8
  
    if (n != parseInt(n)) { //n = 3.141517 ! = 3 -> true
      console.log("Entrou aqui"); //'Entrou aqui'
      contagem = contagem - 1; //contagem = 8 - 1 = 7
    }
  
    console.log(contagem); //7
  
    return contagem;
  }
  algarismosEmUmNumero(3.141517);

  /*
  1 - 8 
  2 - "Entrou aqui"
  3 - 7
  */