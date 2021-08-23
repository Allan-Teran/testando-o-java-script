//var
//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area)

//let
let forma = 'retangulo';
let altura = 5; 
let comprimento = 7;
let area;

if (forma === 'retangulo'){
    area = altura * comprimento
} else {
    area = (altura * comprimento)/2
}

console.log(area)

//não se usa mais var, let so se usa quando o valor da variavel pode mudar e normalmente se usa sempre const