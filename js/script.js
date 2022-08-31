//Algorithm in JS developed by: Mateus Abdias

//The formula used was made by: John Conway
//Learn more: https://github.com/MateusAbdias/moonPhase-Algorithm

function main(number) {
    const moonPhase = document.querySelector(".moon-phase");
    const addTitle = document.createElement("h1");
    const addDescription = document.createElement("p");

    if (number >= 0 && number <= 1 ) {
        addTitle.innerHTML = "Hoje é Lua Nova"
        addDescription.innerHTML = "A Lua nova é a fase que a Lua está entre o Sol e a Terra, nesse período, a Lua nasce juntamente com o Sol as 6h e se põe juntamente com ele, por volta das 18h. Nessa fase a Lua continua recebendo a iluminação solar, mas não pode ser vista da terra pois o Sol está do seu lado oposto. Esse período corresponde ao início do mês sinótico, o tempo que levará para ocorrer outra lunação é de aproximadamente 29,53 dias."
        addImage('./img/luaNova.png', 300, 300, 'Lua Nova')
    } 
    else if (number >= 2 && number <= 6) {
        addTitle.innerHTML = "Hoje é Lua Crescente"
        addDescription.innerHTML = "A Lua Crescente é a fase que a Lua está ao leste do Sol, em um ângulo aproximadamente a 90°, essa posição em relação ao Sol faz com que apenas a metade da fase da Lua seja iluminada, deixando a imagem da Lua daqui da Terra com um formato de semicírculo. Nesse período, a lua nasce aproximadamente as 12h e se põe as 0h. "
        addImage('./img/luaCrescente.png', 300, 300, 'Lua Crescente')
    } 
    else if (number >= 7 && number <= 8) {
        addTitle.innerHTML = "Hoje é Lua Quarto Crescente"
        addDescription.innerHTML = "A Lua Quarto Crescente é uma fase em que a Lua está em uma posição aproximadamente reta ao Sol, formando um ângulo de 90°, o que nos faz ver apenas metade dela (lado esquerdo). Essa fase é comumente confundida com a fase anterior (Lua Crescente), mas é nesse período que o Sol vai iluminando cada vez mais o lado escuro da Lua."
        addImage('./img/luaQuartoCrescente.png', 300, 320, 'Lua Quarto Crescente')
    }
    else if (number >= 9 && number <= 13) {
        addTitle.innerHTML = "Hoje é Lua Crescente Gibosa"
        addDescription.innerHTML = "A Lua Crescente Gibosa é uma fase de transição entre a Lua Quarto Crescente e a Lua Cheia, ou seja, quanto mais dias se passar nessa fase, maior será a área iluminada pelo Sol que aparecerá. Ela é vista da terra em um formato convexo, e sua parte iluminada será entre 60% a 96%."
        addImage('./img/luaCrescenteGibosa.png', 300, 320, 'Lua Crescente Gibosa')
    }
    else if (number >= 14 && number <= 16) {
        addTitle.innerHTML = "Hoje é Lua Cheia"
        addDescription.innerHTML = "A Lua Cheia é a fase em que a vemos toda iluminada. Nessa fase a Lua está com a sua face iluminada direcionada para a Terra, pois o planeta Terra esta entre o Sol e a Lua. Nesse período, a Lua nasce antes do por do sol, por volta das 18h e se põe por volta das 6h. Esse período corresponde a metade da lunação, o tempo que levará para ocorrer outra Lua Cheia é de aproximadamente 29 dias."
        addImage('./img/luaCheia.png', 300, 300, 'Lua Cheia')
    }
    else if (number >= 17 && number <= 21) {
        addTitle.innerHTML = "Hoje é Lua Minguante Gibosa";
        addDescription.innerHTML = "A Lua minguante Gibosa é a fase pós Lua cheia. Nesse período a Lua começa a diminuir, quanto mais dias se passar nessa fase, menor será a parte iluminada pelo Sol que aparecerá. Ela é vista da terra em um formato convexo, e sua parte iluminada será entre 96% a 60%, tornando-se semelhante a Lua Crescente Gibosa, porém invertida"
        addImage('./img/luaMinguanteGibosa.png', 300, 320, 'Lua Minguante Gibosa')
    }
    else if (number >= 22 && number <= 23) {
        addTitle.innerHTML = "Hoje é Lua Quarto Minguante"
        addDescription.innerHTML = "A Lua Quarto Minguante é uma fase em que a Lua está em uma posição aproximadamente reta ao Sol, formando um ângulo de 90°, o que nos faz ver apenas metade dela, dessa vez o lado direito. Essa fase é o inverso da fase Quarto Crescente, mas é nesse período que o Sol vai iluminando cada vez menos a Lua. Nessa fase a Lua nasce por volta das 0h e se põe por volta das 12h."
        addImage('./img/luaQuartoMinguante.png', 300, 320, 'Lua Quarto Minguante')
    }
    else if (number >= 24 && number <= 29) {
        addTitle.innerHTML = "Hoje é Lua Minguante"
        addDescription.innerHTML = "A Lua Minguante é a última fase da lunação, aqui é marcado o fim do mês lunar. Nesse período a Lua é iluminada entre 39% a 3% de seu lado direito até desaparecer novamente e dar ínicio a fase da Lua Nova. Nessa fase, a Lua nasce às 0h e se põe às 12h. A visualização parcial da iluminação da Lua ocorre por causa do ângulo de 90 graus com o sol e tem seu lado leste iluminado."
        addImage('./img/luaMinguante.png', 300, 300, 'Lua Minguante')
    } 
    else {
        main(number - 29);
    }

    moonPhase.appendChild(addTitle);
    moonPhase.appendChild(addDescription);
};

//calculo da fase da lua
const moonPhaseCalculation = () => {
    //Pega a data atual 
    let date = new Date;

    //Pega o ano atual e transforma em string
    const year = date.getFullYear().toString();
    const today = date.getDate();
    //Se for mês 1 ou mês 2 soma mais 2 
    let month = date.getMonth() + 1;
    if (month === 1 || month === 2){
        month += 2;
    };

    //Pega o ano atual e aplica o slice (o que retorna apenas os dois ultimos digitos do ano) e retorna para número
    const handleYearSlice = year.slice(2);
    const handleYearNumber = parseInt(handleYearSlice);

    //fórmula para o calculo que ultiliza o ano
    const handleYear = ((((handleYearNumber % 19 ) * 11) % 30) -8 ) % 30;

    const phaseNumber = handleYear + today + month; 
    return phaseNumber;
}

function addImage(src, width, height, alt) {
    const imageMoon =document.querySelector(".imageMoon")
    var image = document.createElement("img");
    image.src =src;
    image.width = width;
    image.height = height;
    image.alt = alt;
    imageMoon.appendChild(image);
}

main(moonPhaseCalculation());

