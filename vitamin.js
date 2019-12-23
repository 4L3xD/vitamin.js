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
    observacao: 'Estimula a formação de células do sangue e prevene alterações no DNA das células'
    }
];

console.log('Vitaminas: ' + vitaminas.map(vitamina => vitamina.nome))


// for (alimento of vitaminas) {
    //     console.log('fontes por vitamina: ' + alimento.nome + ' ' + alimento.fontes)
    // }
    
    for (let b1 of vitaminas) {
        if (b1.nome === 'B1 (Tiamina)') {
            var tiamina_B1 = b1.fontes
            console.log(`Fontes com B1: ${tiamina_B1}`);
        }
    }
    
    for (let b2 of vitaminas) {
        if (b2.nome === 'B2') {
            var B2 = b2.fontes
            console.log(`Fontes com B2: ${B2}`);
        }
    }
    
    for (let b3 of vitaminas) {
        if (b3.nome === 'B3 (Niacina)') {
            var B3_Niacina = b3.fontes
            console.log(`Fontes com B3: ${B3_Niacina}`);
        }
    }
    
    for (let b5 of vitaminas) {
        if (b5.nome === 'B5 (Ácido Pantotênico)') {
            var B5_acidoPantotenico = b5.fontes
            console.log(`Fontes com B5: ${B5_acidoPantotenico}`);
        }
    }
    
    for (let b6 of vitaminas) {
        if (b6.nome === 'B6') {
            var B6 = b6.fontes
            console.log(`Fontes com B6: ${B6}`);
        }
    }
    
    for (let b9 of vitaminas) {
        if (b9.nome === 'B9 (Ácido Fólico)') {
            var B9_acidoFolico = b9.fontes
            console.log(`Fontes com B9: ${B9_acidoFolico}`);
        }
    }
    
    let todasFontes = vitaminas.map(alimento => alimento.fontes);
    console.log(`Todas as fontes listadas: ${todasFontes}`);