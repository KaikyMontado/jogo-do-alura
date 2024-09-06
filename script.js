// script.js
document.getElementById('start').addEventListener('click', startAdventure);

const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');

const choices = {
    1: [
        { text: 'Explorar o porão', next: 2 },
        { text: 'Subir para o sótão', next: 3 },
        { text: 'Procurar por pistas na biblioteca', next: 4 }
    ],
    2: [
        { text: 'Abrir o cofre antigo', next: 5 },
        { text: 'Investigar o altar antigo', next: 6 },
        { text: 'Voltar para a entrada', next: 7 }
    ],
    3: [
        { text: 'Encontrar a chave escondida', next: 8 },
        { text: 'Usar o feitiço para banir o fantasma', next: 9 },
        { text: 'Descer de volta', next: 10 }
    ],
    4: [
        { text: 'Ler o diário antigo', next: 11 },
        { text: 'Seguir o mapa para o porão', next: 12 },
        { text: 'Deixar a biblioteca e ir para o sótão', next: 13 }
    ],
    5: [
        { text: 'Usar a chave do cofre', next: 14 },
        { text: 'Investigar a sala ao lado', next: 15 }
    ],
    6: [
        { text: 'Realizar o ritual de proteção', next: 16 },
        { text: 'Ignorar e continuar explorando', next: 17 }
    ],
    7: [
        { text: 'Voltar para o porão', next: 2 },
        { text: 'Ir para o sótão', next: 3 }
    ],
    8: [
        { text: 'Buscar o esconderijo secreto', next: 18 },
        { text: 'Usar o feitiço de proteção', next: 19 }
    ],
    9: [
        { text: 'Confrontar Lucifer imediatamente', next: 20 },
        { text: 'Voltar para a entrada e preparar uma armadilha', next: 21 }
    ],
    10: [
        { text: 'Ir para o porão', next: 2 },
        { text: 'Ir para a biblioteca', next: 4 }
    ],
    11: [
        { text: 'Descobrir a fraqueza de Lucifer', next: 22 },
        { text: 'Ignorar e ir para o sótão', next: 23 }
    ],
    12: [
        { text: 'Ler o livro de feitiços', next: 24 },
        { text: 'Procurar por itens mágicos', next: 25 }
    ],
    13: [
        { text: 'Enfrentar Lucifer diretamente', next: 26 },
        { text: 'Buscar reforços fora da mansão', next: 27 }
    ],
    14: [
        { text: 'Descobrir o segredo do artefato', next: 28 },
        { text: 'Usar o artefato para banir Lucifer', next: 29 }
    ],
    15: [
        { text: 'Buscar a saída secreta', next: 30 },
        { text: 'Procurar uma pista de fraqueza', next: 31 }
    ],
    16: [
        { text: 'Enfrentar Lucifer com proteção', next: 32 },
        { text: 'Fugir da mansão', next: 33 }
    ],
    17: [
        { text: 'Enfrentar Lucifer sem proteção', next: 34 },
        { text: 'Voltar para a entrada', next: 35 }
    ],
    18: [
        { text: 'Usar o feitiço secreto', next: 36 },
        { text: 'Buscar outro caminho', next: 37 }
    ],
    19: [
        { text: 'Lutar contra Lucifer com o feitiço', next: 38 },
        { text: 'Voltar para a biblioteca', next: 39 }
    ],
    20: [
        { text: 'Lutar bravamente', next: 40 },
        { text: 'Usar uma armadilha preparada', next: 41 }
    ],
    21: [
        { text: 'Ativar a armadilha', next: 42 },
        { text: 'Tentar negociar com Lucifer', next: 43 }
    ],
    22: [
        { text: 'Usar a fraqueza contra Lucifer', next: 44 },
        { text: 'Preparar uma armadilha', next: 45 }
    ],
    23: [
        { text: 'Lutar contra Lucifer no sótão', next: 46 },
        { text: 'Buscar uma rota de fuga', next: 47 }
    ],
    24: [
        { text: 'Usar o feitiço do livro', next: 48 },
        { text: 'Procurar outro item mágico', next: 49 }
    ],
    25: [
        { text: 'Usar o item mágico para enfrentar Lucifer', next: 50 },
        { text: 'Procurar mais itens', next: 51 }
    ],
    26: [
        { text: 'Enfrentar Lucifer sem preparação', next: 52 },
        { text: 'Fugir e preparar-se', next: 53 }
    ],
    27: [
        { text: 'Voltar com reforços', next: 54 },
        { text: 'Tentar negociar com Lucifer', next: 55 }
    ]
};

const results = {
    5: 'Ao abrir o cofre, você ativa uma armadilha. Uma explosão ocorre e você é derrotado.',
    6: 'O altar antigo revela um encantamento que fortalece Lucifer. Você perde a luta.',
    7: 'Você volta para a entrada, mas Lucifer bloqueia a saída e o captura. Fim.',
    8: 'Você encontra a chave e descobre uma sala secreta no sótão, revelando um item que pode derrotar Lucifer.',
    9: 'O feitiço não funciona. Lucifer aparece com mais força e você não consegue escapar.',
    10: 'Ao descer, Lucifer o encontra e você é derrotado rapidamente.',
    11: 'O diário revela que Lucifer tem uma fraqueza específica, mas você não consegue usá-la a tempo.',
    12: 'O mapa leva a uma armadilha mortal. Você não sobrevive.',
    13: 'O sótão está cheio de armadilhas. Você é capturado por Lucifer.',
    14: 'O cofre contém um artefato antigo que pode ajudá-lo. Você está mais preparado para enfrentar Lucifer.',
    15: 'A sala ao lado contém uma pista crucial. No entanto, você se depara com uma armadilha mortal e é capturado.',
    16: 'O ritual de proteção proporciona uma vantagem temporária, mas Lucifer é um adversário formidável.',
    17: 'Ignorar o ritual torna a luta contra Lucifer quase impossível. Você é derrotado.',
    18: 'O esconderijo secreto contém um feitiço poderoso. Você está pronto para enfrentar Lucifer.',
    19: 'O feitiço de proteção é insuficiente contra Lucifer. Você é derrotado.',
    20: 'A luta contra Lucifer é brutal. Mesmo lutando bravamente, você não consegue vencê-lo.',
    21: 'A armadilha é ativada, mas Lucifer a desarma. Você é derrotado.',
    22: 'Você usa a fraqueza descoberta para derrotar Lucifer. Vitória!',
    23: 'No sótão, você enfrenta Lucifer sem sucesso. Você é derrotado.',
    24: 'O feitiço do livro é eficaz e ajuda a derrotar Lucifer. Vitória!',
    25: 'O item mágico permite que você enfrente Lucifer com sucesso. Vitória!',
    26: 'Enfrentar Lucifer diretamente é um erro fatal. Você não sobrevive.',
    27: 'Com reforços, você enfrenta Lucifer e consegue derrotá-lo. Vitória!',
    28: 'O artefato revela um ponto fraco de Lucifer. Você o derrota.',
    29: 'Usar o artefato para banir Lucifer é um sucesso. Vitória!',
    30: 'A saída secreta leva a um caminho seguro. Você consegue escapar e preparar uma estratégia.',
    31: 'Procurar uma pista de fraqueza é inútil. Lucifer o encontra e você é derrotado.',
    32: 'Enfrentar Lucifer com proteção é uma vantagem. Você o derrota com sucesso!',
    33: 'Fugir da mansão é uma escolha segura, mas você precisa encontrar outra forma de enfrentar Lucifer.',
    34: 'Enfrentar Lucifer sem proteção é um erro fatal. Você não sobrevive.',
    35: 'Voltar para a entrada não ajuda. Lucifer captura você. Fim.',
    36: 'O feitiço secreto permite que você enfrente Lucifer com sucesso. Vitória!',
    37: 'Buscar outro caminho leva a uma armadilha mortal. Você não sobrevive.',
    38: 'Lutar contra Lucifer com o feitiço é eficaz. Você vence!',
    39: 'Voltar para a biblioteca não ajuda. Lucifer o captura. Fim.',
    40: 'A luta é intensa, mas sua bravura e habilidades permitem que você vença Lucifer. Vitória!',
    41: 'A armadilha preparada é eficaz. Você derrota Lucifer com sucesso.',
    42: 'A armadilha é bem-sucedida. Lucifer é derrotado e você vence!',
    43: 'Tentar negociar com Lucifer não funciona. Ele o captura. Fim.',
    44: 'Usar a fraqueza contra Lucifer é eficaz. Você derrota o espírito maligno. Vitória!',
    45: 'Preparar uma armadilha pode ser perigoso. Lucifer a desarma e você é derrotado.',
    46: 'Lutar contra Lucifer no sótão é desastroso. Você não consegue escapar.',
    47: 'Buscar uma rota de fuga é uma escolha segura. Você consegue escapar e planejar uma nova estratégia.',
    48: 'Usar o feitiço do livro é eficaz. Você derrota Lucifer. Vitória!',
    49: 'Procurar outro item mágico não ajuda. Lucifer o captura. Fim.',
    50: 'O item mágico é a chave para derrotar Lucifer. Você vence!',
    51: 'Procurar mais itens não ajuda. Lucifer o captura. Fim.',
    52: 'Enfrentar Lucifer sem preparação é um erro fatal. Você é derrotado.',
    53: 'Fugir e preparar-se leva a uma segunda chance. Você enfrenta e derrota Lucifer.',
    54: 'Com reforços, você consegue derrotar Lucifer. Vitória!',
    55: 'Negociar com Lucifer falha. Ele o captura. Fim.'
};

function startAdventure() {
    storyElement.innerHTML = '<p>Você está na mansão assombrada. Qual é o seu próximo passo?</p>';
    showChoices(1);
}

function showChoices(stage) {
    choicesElement.style.display = 'block';
    resultElement.style.display = 'none';
    
    const currentChoices = choices[stage];
    const buttons = document.querySelectorAll('#choices button');
    
    currentChoices.forEach((choice, index) => {
        buttons[index].innerText = choice.text;
        buttons[index].onclick = () => {
            if (results[choice.next]) {
                showResult(choice.next);
            } else {
                showChoices(choice.next);
            }
        };
    });
}

function showResult(stage) {
    choicesElement.style.display = 'none';
    resultElement.style.display = 'block';
    resultElement.innerHTML = results[stage];
}
