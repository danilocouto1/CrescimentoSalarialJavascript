import entrada from "readline-sync";
//Entrada de dados
let salarioMinimo = [
    {salario: 510.00, ano: 2010},
    {salario: 545.00, ano: 2011},
    {salario: 622.00, ano: 2012},
    {salario: 678.00, ano: 2013},
    {salario: 724.00, ano: 2014},
    {salario: 788.00, ano: 2015},
    {salario: 880.00, ano: 2016},
    {salario: 937.00, ano: 2017},
    {salario: 954.00, ano: 2018},
    {salario: 998.00, ano: 2019},
    {salario: 1045.00, ano: 2020}
]

let inflacao = [
    {ipca: 5.91, ano: 2010},
    {ipca: 6.50, ano: 2011},
    {ipca: 5.84, ano: 2012},
    {ipca: 5.91, ano: 2013},
    {ipca: 6.41, ano: 2014},
    {ipca: 10.67, ano: 2015},
    {ipca: 6.29, ano: 2016},
    {ipca: 2.95, ano: 2017},
    {ipca: 3.75, ano: 2018},
    {ipca: 4.31, ano: 2019},
    {ipca: 4.52, ano: 2020}
]


console.log(`Escolha uma das alternativas:

1 - Listar os salarios minimos de 2010 a 2020.
2 - Listar os indices de IPCA de 2010 a 2020.
3 - Comparaçãp entre o percentual de aumento salarial entre salario minimo e o IPCA.`
);

var key = entrada.question("Digite o numero de sua escolha: ");

//Processamento de dados

console.log("Opcao escolhida: " + key +"\n");

switch (Number(key)) {
    case 1:
        //Saida de dados
        for(let dado of salarioMinimo) {
            console.log("Ano:".padEnd(20, ".") + dado.ano);
            console.log("Salario:".padEnd(20, ".")+ "R$ " + dado.salario.toFixed(2).replace(".",",") + "\n");
        }
        break;
    case 2:
        //Saida de dados
        for(let dado of inflacao) {
            console.log("Ano:".padEnd(20, ".") + dado.ano);
            console.log("IPCA:".padEnd(20, ".") + dado.ipca.toFixed(2).replace(".",",") + "%\n");
        }
        break;
    case 3:
        //Saida de dados
        for (let i = 0; i < salarioMinimo.length; i++) {
            let ano = salarioMinimo[i].ano;
            let salario = salarioMinimo[i].salario;
            let ipca = inflacao[i].ipca;
            let crescimentoSalarial = (i == 0) ? '-' :  ((salarioMinimo[i].salario - salarioMinimo[i-1].salario) /salarioMinimo[i-1].salario)* 100;

            console.log("Ano:".padEnd(30, ".") + ano);
            console.log("Salario:".padEnd(30, ".")+ "R$ " + salario.toFixed(2).replace(".",","));
            if (i == 0) {
                console.log("Crescimento salarial: "+ crescimentoSalarial);
            } else {
                console.log("Crescimento salarial:".padEnd(30, ".")+ crescimentoSalarial.toFixed(2).replace(".",",")+ "%");
            }
            console.log("IPCA:".padEnd(30, ".") + ipca.toFixed(2).replace(".",",") + "%\n");

        }
        break;

    default:
        
        break;
}