document.addEventListener('DOMContentLoaded', () => {
    // カードデータを更新。画像はpicsum.photosからランダムに取得
    const cards = [
        { name: "新しい始まり", message: "新しい扉が開く時。過去を手放し、未来への一歩を踏み出しましょう。", image: "https://picsum.photos/seed/new_beginning/400/600" },
        { name: "信頼", message: "自分と宇宙を信頼してください。全てはあなたのために動いています。", image: "https://picsum.photos/seed/trust/400/600" },
        { name: "豊かさ", message: "物質的、精神的な豊かさがあなたに流れてきています。感謝の心で受け取りましょう。", image: "https://picsum.photos/seed/abundance/400/600" },
        { name: "直感", message: "心の声を信じて。あなたの直感が正しい道を示しています。", image: "https://picsum.photos/seed/intuition/400/600" },
        { name: "解放", message: "不要なものを手放す時です。心も体も軽やかにしましょう。", image: "https://picsum.photos/seed/release/400/600" },
        { name: "癒し", message: "心と体の両方に癒しが必要です。自分を大切にする時間を取りましょう。", image: "https://picsum.photos/seed/healing/400/600" },
        { name: "力", message: "あなたには困難を乗り越える内なる力があります。自信を持ってください。", image: "https://picsum.photos/seed/strength/400/600" },
        { name: "愛", message: "愛を与え、受け取ることを自分に許可してください。愛は全ての答えです。", image: "https://picsum.photos/seed/love/400/600" },
        { name: "感謝", message: "今あるものに感謝することで、さらなる幸運が引き寄せられます。", image: "https://picsum.photos/seed/gratitude/400/600" },
        { name: "変容", message: "大きな変化の時です。蝶がさなぎから羽ばたくように、あなたも変容を遂げるでしょう。", image: "https://picsum.photos/seed/transformation/400/600" }
    ];

    const shuffleButton = document.getElementById('shuffle-button');
    const cardContainer = document.getElementById('card-container');
    const instructionText = document.getElementById('instruction-text');
    const readingTypeSelect = document.getElementById('reading-type');

    shuffleButton.addEventListener('click', () => {
        const question = document.getElementById('question').value;
        if (!question) {
            alert('相談したいことを入力してください。');
            return;
        }

        instructionText.textContent = 'シャッフルしています...';
        cardContainer.innerHTML = '';

        setTimeout(() => {
            const readingType = parseInt(readingTypeSelect.value, 10);
            dealCards(readingType);
        }, 1500);
    });

    function dealCards(numberOfCards) {
        instructionText.textContent = '気になるカードをクリックして、メッセージを受け取りましょう。';
        const shuffledCards = [...cards].sort(() => 0.5 - Math.random());
        const selectedCards = shuffledCards.slice(0, numberOfCards);
        const labels = getLabels(numberOfCards);

        selectedCards.forEach((cardData, index) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'card-wrapper';

            const cardElement = document.createElement('div');
            cardElement.className = 'card';

            const cardBack = document.createElement('div');
            cardBack.className = 'card-face card-back';
            cardBack.innerHTML = '<span>✨</span>';

            const cardFront = document.createElement('div');
            cardFront.className = 'card-face card-front';
            const image = document.createElement('img');
            image.src = cardData.image;
            image.alt = cardData.name;
            image.className = 'card-image';
            cardFront.appendChild(image);

            cardElement.appendChild(cardBack);
            cardElement.appendChild(cardFront);
            
            const infoElement = document.createElement('div');
            infoElement.className = 'card-info';
            infoElement.innerHTML = `<p class="card-label">${labels[index] || ''}</p>
                                     <h3 class="card-name">${cardData.name}</h3>
                                     <p class="card-message">${cardData.message}</p>`;

            wrapper.appendChild(cardElement);
            wrapper.appendChild(infoElement);
            cardContainer.appendChild(wrapper);

            cardElement.addEventListener('click', () => {
                if (cardElement.classList.contains('flipped')) return; // 既にめくられていたら何もしない
                cardElement.classList.add('flipped');
                infoElement.classList.add('visible');
            });
        });
    }

    function getLabels(numberOfCards) {
        if (numberOfCards === 3) {
            return ['過去', '現在', '未来'];
        }
        return ['あなたへのメッセージ'];
    }
});