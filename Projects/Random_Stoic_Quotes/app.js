//Autor: Iury Coelho
//Feito em :06/03/2020
//Propósito: Geração de citações randômicas 

// Global Variables
const botao_gerar_citacao = document.querySelector("#gerar_citacao");
var total_quotes = document.getElementById("p0");
var random_quote = document.getElementById("p1");
var random_author = document.getElementById("p2");
var  quotes = [
{
    quote:"A única coisa sobre a qual você tem controle é a sua mente. E isso lhe garante poder suficiente porque a sua mente é origem de todas as suas escolhas, ações e percepções",
    author:"Epicteto",
},

{
    quote:"Em todas as coisas, devemos tentar tornar-nos tão gratos quanto possível.",
    author:"Sênica",
},

{
    quote:"A cada dia que surge, receba-o como o melhor de todos os dias e torne-o sua própria posse. Devemos aproveitar o que vai embora.",
    author:"Sêneca",
},

{
    quote: "Não procure fazer com que as coisas aconteçam exatamente como você deseja. Deseje que tudo aconteça da forma como acontecerá e sua vida fluirá bem",
    author: "Epicteto",

},

{
    quote: "Você tem medo de morrer, mas o que é sua vida hoje senão morte? ",
    author: "Sêneca",

},

{
    quote: "É possível aprender a se alegrar com todos os seus sucessos e a superar todos seus fracassos",
    author: "Sêneca",

},

{
    quote: "Você pode até amarrar minha perna, mas nem mesmo Zeus poderá romper minha liberdade de escolha",
    author: "Epicteto",

},

{
    quote: "É impossível para uma pessoa começar a aprender o que ela acha que já sabe.",
    author: "Epicteto",

},

{
    quote: "Vá fundo dentro de si mesmo, pois há uma fonte de benevolência preparada para fluir se você continuar.",
    author: "Marco Aurélio",

},

{
    quote: "Receba sem orgulho, deixe ir sem apego.",
    author: "Marco Aurélio",

},

{
    quote: "Esta é a marca da perfeição do caráter — viver cada dia como se fosse o seu último, sem frenesi, preguiça ou qualquer fingimento. ",
    author: "Marco Aurélio",

},

{
    quote: "Não se comporte como se estivesse destinado a viver para sempre. Tudo que acontece depende de você. Enquanto você viver e enquanto você puder, seja bom agora.",
    author: "Marco Aurélio",

},

{
    quote: "O melhor modo de vingar-se de um inimigo, é não se assemelhar a ele.",
    author: "Marco Aurélio",

},

{
	quote: "Qualquer pessoa capaz de te irritar se torna teu mestre; ela consegue te irritar somente quando você se permite ser perturbado por ela.",
	author: "Epicteto",
},

{
	quote: "Se beberes água, não digas por tudo e por nada que bebes água.",
	author: "Epicteto",
},

{
	quote: "O que importa não é o que acontece, mas como você reage",
	author: "Epicteto",
},

{
	quote: "Desterra de ti desejos e receios e nada terás que te tiranize.",
	author: "Epicteto",
},

{
	quote: "Se disserem mal de ti com fundamento, corrige-te. Do contrário, ri e não faças caso.",
	author: "Epicteto",
},

{
	quote: "Não busqueis a felicidade fora, mas sim dentro de vós, caso contrário nunca a encontrareis.",
	author: "Epicteto",
},

{
	quote: "O homem sábio é aquele que não se entristece com as coisas que não tem, mas se rejubila com as que tem",
	author: "Epicteto",
},

{
	quote: "O caminho para a felicidade é parar de preocupar-se com o que está além do nosso poder",
	author: "Epicteto",
},

{
	quote: "Sucesso é encontrar aquilo que se tenciona ser e depois fazer o que é necessário para isso.",

	author: "Epicteto",
},

{
	quote: "Nenhum homem que não domine a si mesmo é livre.",
	author: "Epicteto",
},

{
	quote: "Zele por este momento. Mergulhe em suas particularidades. Seja sensível a que você é, ao seu desafio, à sua realidade. Livre-se dos subterfúgios. Pare de criar problemas desnecessários para si mesmo. Este é o tempo de realmente viver; de se entregar por completo à situação em que você está agora.",
	author: "Epicteto",
},

{
	quote: "Quando você se ofender com as faltas de alguém, vire-se e estude os seus próprios defeitos. Cuidando deles, você esquecerá a sua raiva e aprenderá a viver sensatamente.",
	author: "Epicteto",
},

{
	quote: "Lembrai-vos que em toda festa, tendes dois convivas a entreter - o corpo e a alma; e o que dais ao corpo, na realidade o perdeis. Mas o que dais à alma, permanece para sempre.",
	author: "Epicteto",
},

{
	quote: "Pratique sozinho, pelo amor de Deus, em situações simples, e só então aborde as situações mais complexas.",
	author: "Epicteto",
},

{
	quote: "Tem a cada dia diante dos olhos a morte, o exílio e tudo o que parece assustador, principalmente a morte: jamais terás então qualquer pensamento baixo ou qualquer desejo excessivo.",
	author: "Epicteto",
},

{
	quote: "Dedique ao menos metade de suas energias a livrar-se de desejos ocos, e muito breve verá que ao fazê-lo há de receber maior realização e mais felicidade.",
	author: "Epicteto",
},

{
	quote: "Nada de grande se cria de repente.",
	author: "Epicteto",
},


{
	quote: "Não te alongues a contar as tuas façanhas, nem os perigos que terás passado; não podes querer que os outros tenham tanto prazer em escutar-te como tu em contá-los.",
	author: "Epicteto",
},

{
	quote: "A felicidade não consiste em adquirir nem em gozar, mas sim em nada desejar, consiste em ser livre.",
	author: "Epicteto",
},

{
	quote: "Se pretendes fazer alguma coisa, transforme em hábito a tua pretensão. Se não pretendes, abstém-te de fazê-la.",
	author: "Epicteto",
},


{
	quote: "O que se deve então dizer assim que cada dificuldade chegue? Eu estava me preparando para isso, eu estava treinando para isso.",
	author: "Epicteto",
},

{
	quote: "Procura limpar a vasilha antes de lançar nela seja o que for; quer dizer, antes de pregar a virtude, reforma os teus costumes.",
	author: "Epicteto",
},

{
	quote: "Não te digas filósofo nunca, nem fales em máximas na presença de ignorantes, mas age de acordo com essas máximas. Assim, num banquete, não ensines como é preciso comer, mas come de maneira conveniente.",
	author: "Epicteto",
},


{
	quote: "Mantenha-se bom, puro, sério, livre de afetação, amigo da justiça, gentil, apaixonado, vigoroso em todas as suas atitudes. Lute para viver como a filosofia gostaria que vivesse.",
	author: "Marco Aurélio",
},

{
	quote: "Nada de desgosto, nem de desânimo; se acabas de fracassar, recomeça.",
	author: "Marco Aurélio",
},

{
	quote: "Se você está sofrendo por coisas externas, não são elas que estão te perturbando, mas o seu próprio julgamento sobre elas. E está em seu poder anular este julgamento agora.",
	author: "Marco Aurélio",
},


{
	quote: "Se te ocorrer, de manhã, de acordares com preguiça e indolência, lembra-te deste pensamento: Levanto-me para retomar a minha obra de homem.",
	author: "Marco Aurélio",
},

{
	quote: "Tenha poucas ocupações, diz o sábio, se quiser levar uma vida tranqüila.",
	author: "Marco Aurélio",
},

{
	quote: "Nossa vida é o que nossos pensamentos fazem dela.",
	author: "Marco Aurélio",
},


{
	quote: "Basta abandonar todo o passado, confiar o futura à providência e dirigir a ação presente para a piedade e a justiça.",
	author: "Marco Aurélio",
},

{
	quote: "Nada sucede ao homem que sua natureza não seja capaz de suportar.",
	author: "Marco Aurélio",
},

{
	quote: "Antes de começares a falar, garante que em teu rosto se possa ler o que irás dizer.",
	author: "Marco Aurélio",
},

{
	quote: "Você tem poder sobre sua mente, não os eventos externos. Perceba isso, e você encontrará força.",
	author: "Marco Aurélio",
},

{
	quote: "A experiência é um troféu composto por todas as armas que nos feriram.",
	author: "Marco Aurélio",
},

{
	quote: "Procura a satisfação de veres morrer os teus vícios antes de ti.",
	author: "Sênica",
},

{
	quote: "Culpar aos demais dos infortúnios próprios é um sinal de falta de educação. Culpar-se a si mesmo, demonstra que a educação começou.Não culpar nem aos outros e nem a si mesmo, demonstra que a educação esta completa.",
	author: "Epicteto",
},

{
	quote: "Em nenhum lugar o homem pode encontrar um refúgio mais silencioso e menos agitado do que em sua própria alma.",
	author: "Marco Aurélio",
},
];

var size_quotes = quotes.length;

// Functions
function gerar_citacao(){
	
	var random = Math.floor((Math.random() * size_quotes) + 0);     
	random_quote.innerHTML = `"${quotes[random].quote}"`;
	random_author.innerHTML = quotes[random].author; 
	total_quotes.innerHTML = `Luck-Quote: ${random}/${size_quotes}`;

        
};
// Routines 
botao_gerar_citacao.addEventListener('click',gerar_citacao);