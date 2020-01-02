**vitaMina** é um _software de pesquisa de fontes de vitaminas_.

_PROJETO:_

- **map** que filtra as vitaminas pelo nome;

-  **for ( of )**  que filtra pelo nome se uma vitamina corresponde a um nome de vitamina específico e salva as fontes da vitamina.nome em uma variável de formato 'nomeCientificoVitamina_nomePopularVitamina';

     -- * nele será add  um **set** correspondente ao nome da vitamina para cada fonte presente na vitamina em questão.
Ex: ( fonteVitB1 = fonteVitaminas.set( fonte, 'B1 ( Tiamina )' ) );
       for (let vitamina of vitaminas) {
        if (vitamina.nome === 'B1 (Tiamina)') {
        tiamina_B1 = vitamina.fontes;
        console.log(`Fontes com B1 (Tiamina): ${tiamina_B1}`);
    }

- **for** que deverá mapear _todasFontes_ pela vitamina e se esta fonte existir em mais de uma vitamina deverá configurar(set) para as vitaminas presentes naquela fonte sejam declaradas como *key*.
Tem como parâmetro a quantidade de elementos de _todasFonte_s e decrementa a qtdd total de fontes de vitaminas ( _i_ ) enquanto a quantidade de elementos em _todasFontes_ não for <= 0.
    Dentro deste **for** temos um **for ( of )** que filtra uma _fonte_ de vitamina de _fontesVitaminas_ que é um **concat** de todas as vitaminas.

        fontesVitaminas = tiamina_B1.concat(B2, B3_Niacina, B5_acidoPantotenico, B6, 
        B9_acidoFolico);

    E dentro deste **for ( of )** temos outro **for** que compara se a quantidade de elementos em uma dada vitamina, por exemplo _tiamina_B1_, é = a _x_, que é o índice de elementos. Caso não seja, o for atribui a variavel interna _fonteVitB1_ os valores contidos em fontesVitaminas a chave com o nome de uma vitamina específica (Precisa ser tratado!).

        fonteVitaminas = new Map();


        for (i = todasFontes.length; i >= 0; i--) {
          for (fonte of fontesVitaminas) {
            for (x = 0; x <= tiamina_B1.length; x++) {
              fonteVitB1 = fonteVitaminas.set(fonte, 'B1 (Tiamina)');        
            }
          }
        }

- **map** que filtra todasFontes de vitaminas;
    -- Precisa filtrar sem repetir uma mesma fonte! 