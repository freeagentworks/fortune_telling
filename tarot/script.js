const startButton = document.getElementById('start-button');
const cardContainer = document.getElementById('card-container');
const questionInput = document.getElementById('question');

const cards = [
    { name: '愚者', meaning: '始まり、無邪気、自発性', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg' },
    { name: '魔術師', meaning: '顕現、機知、力', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg' },
    { name: '女教皇', meaning: '直感、潜在意識、神秘', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar02.jpg' },
    { name: '女帝', meaning: '女性らしさ、美しさ、自然', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar03.jpg' },
    { name: '皇帝', meaning: '権威、構造、支配', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar04.jpg' },
    { name: '教皇', meaning: '伝統、適合、道徳', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar05.jpg' },
    { name: '恋人', meaning: '愛、調和、関係', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar06.jpg' },
    { name: '戦車', meaning: '支配、意志力、勝利', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar07.jpg' },
    { name: '力', meaning: '勇気、思いやり、集中', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar08.jpg' },
    { name: '隠者', meaning: '内省、孤独、導き', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar09.jpg' },
    { name: '運命の輪', meaning: '幸運、カルマ、ライフサイクル', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar10.jpg' },
    { name: '正義', meaning: '公平、真実、原因と結果', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar11.jpg' },
    { name: '吊るされた男', meaning: '中断、制限、手放し', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar12.jpg' },
    { name: '死神', meaning: '終わり、変化、変容', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar13.jpg' },
    { name: '節制', meaning: 'バランス、節度、忍耐', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar14.jpg' },
    { name: '悪魔', meaning: '束縛、依存、否定性', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar15.jpg' },
    { name: '塔', meaning: '突然の変化、激変、混乱', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar16.jpg' },
    { name: '星', meaning: '希望、信仰、若返り', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar17.jpg' },
    { name: '月', meaning: '幻想、恐怖、不安', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar18.jpg' },
    { name: '太陽', meaning: '積極性、楽しみ、暖かさ', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar19.jpg' },
    { name: '審判', meaning: '再生、内なる呼びかけ、免罪', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar20.jpg' },
    { name: '世界', meaning: '完成、統合、達成', img: 'https://www.sacred-texts.com/tarot/pkt/img/ar21.jpg' }
];

startButton.addEventListener('click', () => {
    if (!questionInput.value) {
        alert('占いたいことを入力してください。');
        return;
    }

    cardContainer.innerHTML = '';
    const drawnCards = [];
    const cardPositions = ['過去', '現在', '未来'];

    for (let i = 0; i < 3; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * cards.length);
        } while (drawnCards.includes(randomIndex));
        drawnCards.push(randomIndex);

        const card = cards[randomIndex];
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('card-wrapper');

        const positionElement = document.createElement('h4');
        positionElement.textContent = cardPositions[i];

        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `<h3>${card.name}</h3><div class="card-image-frame"><img src="${card.img}" alt="${card.name}"></div>`;

        const meaningElement = document.createElement('p');
        meaningElement.classList.add('card-meaning');
        meaningElement.textContent = card.meaning;

        cardWrapper.appendChild(positionElement);
        cardWrapper.appendChild(cardElement);
        cardWrapper.appendChild(meaningElement);
        cardContainer.appendChild(cardWrapper);
    }
});
