// exercicio 5 elabore uma funcao que verifique se o numero e par ou impar

// exercicio 6 faca uma funcao para determinar se o numero e positivo ou negativo

// exercicio 07 faca uma funcao que receba o salariode um trabalhador e p emprestimo, verifique se o emprestimo e de ate 20%
//do salario do trabalhador, se for, o emprestimo deve ser aprovado, caso contrario, deve ser rejeitado


let n1 = 4;

function parimpar(n){
    if (n % 2 == 0){
    return 'e par';
    }
    else{
        return 'e impar'
    }
}
console.log (parimpar(4));