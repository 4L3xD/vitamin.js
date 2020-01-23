let vitaminas = [
    { nome: 'B1 (Tiamina)',
    fontes: ["ervilhas", "feijões", "cereais", "couve-flor", "alface", "espinafre", "berinjela"],
    observacao: 'Álcool afeta negativamente a absorção de B1!'
    }, 
    
    { nome: 'B2',
    fontes: ["levedo de cerveja", "aveia em flocos", "amêndoas", "espinafre"],
    observacao: 'produção de energia'
    },

    { nome: 'B3 (Niacina)',
    fontes: ["gérmen de  trigo", "gergelim", "amendoim", "batata doce", "abóbora", "lentilhas", "cogumelos", "manga", "aveia", "arroz branco", "feijões"],
    observacao: 'digestão'
    }, 
    
    { nome: 'B5 (Ácido Pantotênico)',
    fontes: ["batata", "abacate", "gérmen de trigo"],
    observacao: ""
    },

    { nome: 'B6',
    fontes: ["batata", "aveia", "banana", "gérmen de trigo", "abacate", "levedo de cerveja", "cereais", "semente de girassol", "nozes", "feijões", "cenoura", "soja", "espinafre", "milho"],
    observacao: 'auxilia o organismo a produzir anticorpos a fim de combater doenças e infecções, converte proteínas em aminoácidos, muito importantes para a sua constituição e garante bom desempenho durante as atividades físicas'
    },

    { nome: 'B9 (Ácido Fólico)',
    fontes: ["levedo de cerveja","lentilhas", "quiabo cozido", "feijão preto", "espinafre", "amendoim", "macarrão", "brocólis cozido", "beterraba", "suco de laranja", "arroz branco"],
    observacao: 'Estimula a formação de células do sangue e previne alterações no DNA das células'
    }
];
console.log(`${'Vitaminas: ' + vitaminas.map(vitamina => vitamina.nome)}`);


let tiamina_B1, B2, B3_Niacina, B5_acidoPantotenico, B6, B9_acidoFolico; 

for (let vitamina of vitaminas) {
    if (vitamina.nome === 'B1 (Tiamina)') {
        tiamina_B1 = vitamina.fontes;
        console.log(`Fontes com B1 (Tiamina): ${tiamina_B1}`);
    }
    else if (vitamina.nome === 'B2') {
        B2 = vitamina.fontes;
        console.log(`Fontes com B2: ${B2}`);
    }
    else if (vitamina.nome === 'B3 (Niacina)') {
        B3_Niacina = vitamina.fontes;
        console.log(`Fontes com B3 (Niacina): ${B3_Niacina}`);
    }
    else if (vitamina.nome === 'B5 (Ácido Pantotênico)') {
        B5_acidoPantotenico = vitamina.fontes;
        console.log(`Fontes com B5 (Ácido Pantotênico)): ${B5_acidoPantotenico}`);
    }
    else if (vitamina.nome === 'B6') {
        B6 = vitamina.fontes;
        console.log(`Fontes com B6): ${B6}`);
    }
    else if (vitamina.nome === 'B9 (Ácido Fólico)') {
        B9_acidoFolico = vitamina.fontes;
        console.log(`Fontes com B9): ${B9_acidoFolico}`);
    }
}


let todasFontes = vitaminas.map(alimento => alimento.fontes);
console.log(`Todas as fontes listadas: ${todasFontes}`);
     
// Tratar as fontes iguais que contém mais de uma vitamina de modo que as fontes não apareçam repetidas na exibição de 'todasFontes'

//fontesVit = tiamina_B1.concat(B2, B3_Niacina, B5_acidoPantotenico, B6, B9_acidoFolico);


fontesVitaminas = new Map();
for (let vitamina of vitaminas) {
  for (let fonte of vitamina.fontes) {
    if(!fontesVitaminas.get(fonte)) {
      fontesVitaminas.set(fonte, [vitamina.nome]);
    }
    else {
      fontesVitaminas.get(fonte).push(vitamina.nome);
    }
  }
}
console.log(fontesVitaminas);