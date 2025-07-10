// ルノルマンカードデータ
const lenormandCards = [
    {
        id: 1,
        name: "騎士",
        emoji: "🏇",
        keywords: ["ニュース", "知らせ", "スピード", "積極性"],
        meaning: "良いニュースの到来、素早い展開、積極的な行動が幸運を呼びます。",
        advice: "チャンスを逃さず行動しましょう。"
    },
    {
        id: 2,
        name: "クローバー",
        emoji: "🍀",
        keywords: ["幸運", "チャンス", "偶然", "満足"],
        meaning: "小さな幸せと偶然の幸運が訪れます。",
        advice: "感謝の気持ちを忘れずに。"
    },
    {
        id: 3,
        name: "船",
        emoji: "⛵",
        keywords: ["旅行", "冒険", "新たな出発", "挑戦"],
        meaning: "新しい環境や冒険への誘い、変化の時期です。",
        advice: "恐れずに新しいことに挑戦してみましょう。"
    },
    {
        id: 4,
        name: "家",
        emoji: "🏠",
        keywords: ["家庭", "安定", "基盤", "安心"],
        meaning: "家庭や安定した環境、安心できる場所を表します。",
        advice: "基盤を大切にし、安定を求めましょう。"
    },
    {
        id: 5,
        name: "木",
        emoji: "🌳",
        keywords: ["健康", "成長", "時間", "永続性"],
        meaning: "健康と成長、長期的な視点が必要です。",
        advice: "忍耐強く、時間をかけて育てましょう。"
    },
    {
        id: 6,
        name: "雲",
        emoji: "☁️",
        keywords: ["混乱", "不安", "曖昧", "疑問"],
        meaning: "不確実性や混乱、曖昧な状況を表します。",
        advice: "冷静になって状況を整理しましょう。"
    },
    {
        id: 7,
        name: "蛇",
        emoji: "🐍",
        keywords: ["欺き", "誘惑", "複雑", "女性"],
        meaning: "複雑な状況や誘惑、注意が必要な人物。",
        advice: "慎重に行動し、人を見極めましょう。"
    },
    {
        id: 8,
        name: "棺",
        emoji: "⚰️",
        keywords: ["終了", "変化", "病気", "悲しみ"],
        meaning: "何かの終わりと新しい始まり、変化の必要性。",
        advice: "過去を手放し、新しいスタートを切りましょう。"
    },
    {
        id: 9,
        name: "花束",
        emoji: "💐",
        keywords: ["贈り物", "招待", "社交", "美"],
        meaning: "贈り物や招待、社交的な出来事が起こります。",
        advice: "人とのつながりを大切にしましょう。"
    },
    {
        id: 10,
        name: "鎌",
        emoji: "🔪",
        keywords: ["切断", "収穫", "決断", "危険"],
        meaning: "決断の時、何かを切り捨てる必要があります。",
        advice: "勇気を持って決断しましょう。"
    },
    {
        id: 11,
        name: "鞭",
        emoji: "🪓",
        keywords: ["争い", "議論", "スポーツ", "反復"],
        meaning: "争いや競争、繰り返し行う必要があること。",
        advice: "建設的な議論を心がけましょう。"
    },
    {
        id: 12,
        name: "鳥",
        emoji: "🐦",
        keywords: ["コミュニケーション", "うわさ", "不安", "おしゃべり"],
        meaning: "コミュニケーションや情報交換、時に噂話。",
        advice: "言葉の力を理解し、慎重に話しましょう。"
    },
    {
        id: 13,
        name: "子供",
        emoji: "👶",
        keywords: ["新しさ", "無邪気", "始まり", "純粋"],
        meaning: "新しい始まりや純粋な気持ち、無邪気さ。",
        advice: "初心を忘れず、素直な気持ちを大切に。"
    },
    {
        id: 14,
        name: "狐",
        emoji: "🦊",
        keywords: ["狡猾", "仕事", "賢さ", "用心"],
        meaning: "仕事や職場での狡猾さ、注意深く行動する必要。",
        advice: "賢く行動し、騙されないよう注意しましょう。"
    },
    {
        id: 15,
        name: "熊",
        emoji: "🐻",
        keywords: ["力", "権威", "保護", "母性"],
        meaning: "強い力や権威のある人物、保護する力。",
        advice: "自分の力を信じ、他者を守りましょう。"
    },
    {
        id: 16,
        name: "星",
        emoji: "⭐",
        keywords: ["希望", "願い", "運命", "導き"],
        meaning: "希望と願いの実現、運命的な導きがあります。",
        advice: "夢を諦めず、希望を持ち続けましょう。"
    },
    {
        id: 17,
        name: "コウノトリ",
        emoji: "🕊️",
        keywords: ["変化", "移動", "妊娠", "良い知らせ"],
        meaning: "良い変化や移動、新しい生命や知らせ。",
        advice: "変化を恐れず、前向きに受け入れましょう。"
    },
    {
        id: 18,
        name: "犬",
        emoji: "🐕",
        keywords: ["忠実", "友情", "信頼", "仲間"],
        meaning: "忠実な友人や信頼できる仲間の存在。",
        advice: "真の友人を大切にし、信頼関係を築きましょう。"
    },
    {
        id: 19,
        name: "塔",
        emoji: "🗼",
        keywords: ["孤立", "権威", "保護", "一人の時間"],
        meaning: "一人の時間の必要性、孤立や内省の時期。",
        advice: "自分と向き合う時間を持ちましょう。"
    },
    {
        id: 20,
        name: "庭",
        emoji: "🌸",
        keywords: ["社交", "公共", "評判", "集会"],
        meaning: "社交的な場面や公の場、人々との交流。",
        advice: "社交性を活かし、ネットワークを広げましょう。"
    },
    {
        id: 21,
        name: "山",
        emoji: "⛰️",
        keywords: ["障害", "困難", "忍耐", "努力"],
        meaning: "大きな障害や困難、乗り越えるべき課題。",
        advice: "忍耐強く、一歩ずつ前進しましょう。"
    },
    {
        id: 22,
        name: "道",
        emoji: "🛣️",
        keywords: ["選択", "決断", "分岐点", "自由"],
        meaning: "人生の分岐点、重要な選択をする時期。",
        advice: "慎重に選択肢を検討しましょう。"
    },
    {
        id: 23,
        name: "ネズミ",
        emoji: "🐭",
        keywords: ["損失", "減少", "ストレス", "心配"],
        meaning: "少しずつの損失や減少、ストレスの蓄積。",
        advice: "小さな問題も見逃さず、対処しましょう。"
    },
    {
        id: 24,
        name: "ハート",
        emoji: "❤️",
        keywords: ["愛", "感情", "幸福", "喜び"],
        meaning: "愛と感情、心からの幸福と喜び。",
        advice: "愛を表現し、感情を大切にしましょう。"
    },
    {
        id: 25,
        name: "指輪",
        emoji: "💍",
        keywords: ["約束", "結婚", "契約", "結束"],
        meaning: "約束や契約、結婚や永続的な結びつき。",
        advice: "約束を守り、絆を深めましょう。"
    },
    {
        id: 26,
        name: "本",
        emoji: "📖",
        keywords: ["知識", "秘密", "学習", "発見"],
        meaning: "隠された知識や秘密、学習の必要性。",
        advice: "知識を深め、真実を探求しましょう。"
    },
    {
        id: 27,
        name: "手紙",
        emoji: "💌",
        keywords: ["メッセージ", "連絡", "文書", "情報"],
        meaning: "重要なメッセージや連絡、文書による情報。",
        advice: "コミュニケーションを大切にしましょう。"
    },
    {
        id: 28,
        name: "紳士",
        emoji: "🤵",
        keywords: ["男性", "恋人", "パートナー", "男性性"],
        meaning: "重要な男性やパートナー、男性的な性質。",
        advice: "男性性のバランスを意識しましょう。"
    },
    {
        id: 29,
        name: "淑女",
        emoji: "👸",
        keywords: ["女性", "恋人", "パートナー", "女性性"],
        meaning: "重要な女性やパートナー、女性的な性質。",
        advice: "女性性のバランスを意識しましょう。"
    },
    {
        id: 30,
        name: "百合",
        emoji: "🌺",
        keywords: ["純粋", "平和", "年上", "知恵"],
        meaning: "純粋さと平和、年上の人からの知恵。",
        advice: "純粋な心を保ち、知恵を求めましょう。"
    },
    {
        id: 31,
        name: "太陽",
        emoji: "☀️",
        keywords: ["成功", "勝利", "エネルギー", "明るさ"],
        meaning: "大きな成功と勝利、エネルギーに満ちた状態。",
        advice: "自信を持って前進しましょう。"
    },
    {
        id: 32,
        name: "月",
        emoji: "🌙",
        keywords: ["名声", "認識", "サイクル", "直感"],
        meaning: "名声や認識、周期的な変化と直感の重要性。",
        advice: "直感を信じ、タイミングを見極めましょう。"
    },
    {
        id: 33,
        name: "鍵",
        emoji: "🔑",
        keywords: ["解決", "発見", "重要", "開放"],
        meaning: "問題の解決策や重要な発見、解放への鍵。",
        advice: "答えは必ず見つかります。諦めないで。"
    },
    {
        id: 34,
        name: "魚",
        emoji: "🐟",
        keywords: ["豊かさ", "独立", "ビジネス", "自由"],
        meaning: "豊かさと独立、ビジネスの成功と自由。",
        advice: "自立心を持ち、豊かさを追求しましょう。"
    },
    {
        id: 35,
        name: "錨",
        emoji: "⚓",
        keywords: ["安定", "希望", "達成", "到着"],
        meaning: "安定した状況への到着、希望の実現。",
        advice: "目標に向かって着実に進みましょう。"
    },
    {
        id: 36,
        name: "十字架",
        emoji: "✝️",
        keywords: ["試練", "犠牲", "宗教", "運命"],
        meaning: "避けられない試練や犠牲、運命的な出来事。",
        advice: "困難も成長の糧として受け入れましょう。"
    }
];

// グローバル変数
let currentDivinationType = '';
let selectedCards = [];
let currentQuestion = '';
let neededCards = 0;

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    showSection('divination-select');
});

// セクション表示関数
function showSection(sectionId) {
    // 全セクションを非表示
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // 指定されたセクションを表示
    setTimeout(() => {
        document.getElementById(sectionId).classList.add('active');
    }, 300);
}

// 占い開始
function startDivination(type) {
    currentDivinationType = type;
    
    // 必要なカード枚数を設定
    switch(type) {
        case 'one':
            neededCards = 1;
            break;
        case 'three':
            neededCards = 3;
            break;
        case 'nine':
            neededCards = 9;
            break;
    }
    
    showSection('question-input');
}

// カード選択開始
function startCardDraw() {
    const question = document.getElementById('question').value.trim();
    
    if (!question) {
        showModal('質問を入力してください 💭');
        return;
    }
    
    currentQuestion = question;
    selectedCards = [];
    
    // カードデッキを生成
    generateCardDeck();
    
    // 説明文を更新
    updateSelectionDescription();
    
    showSection('card-selection');
}

// カードデッキ生成
function generateCardDeck() {
    const cardDeck = document.getElementById('card-deck');
    cardDeck.innerHTML = '';
    
    // カードをシャッフル
    const shuffledCards = [...lenormandCards].sort(() => Math.random() - 0.5);
    
    shuffledCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card-back';
        cardElement.dataset.cardId = card.id;
        cardElement.onclick = () => selectCard(cardElement, card);
        
        cardDeck.appendChild(cardElement);
    });
    
    updateSelectionInfo();
}

// カード選択処理
function selectCard(element, card) {
    if (selectedCards.length >= neededCards) {
        // 既に選択済みのカードをクリックした場合は選択解除
        if (element.classList.contains('selected')) {
            element.classList.remove('selected');
            selectedCards = selectedCards.filter(c => c.id !== card.id);
        } else {
            showModal('必要な枚数のカードが既に選択されています ✨');
            return;
        }
    } else {
        // カード選択
        if (!element.classList.contains('selected')) {
            element.classList.add('selected');
            selectedCards.push(card);
        } else {
            // 選択解除
            element.classList.remove('selected');
            selectedCards = selectedCards.filter(c => c.id !== card.id);
        }
    }
    
    updateSelectionInfo();
}

// 選択情報更新
function updateSelectionInfo() {
    document.getElementById('selection-count').textContent = 
        `選択されたカード: ${selectedCards.length}`;
    document.getElementById('selection-needed').textContent = 
        `必要枚数: ${neededCards}`;
    
    // 結果表示ボタンの状態更新
    const revealBtn = document.getElementById('reveal-btn');
    revealBtn.disabled = selectedCards.length !== neededCards;
}

// 選択説明文更新
function updateSelectionDescription() {
    const description = document.getElementById('selection-description');
    let text = '';
    
    switch(currentDivinationType) {
        case 'one':
            text = '1枚のカードを選んでください。直感を信じて ✨';
            break;
        case 'three':
            text = '3枚のカードを選んでください。過去・現在・未来を見てみましょう 🌸';
            break;
        case 'nine':
            text = '9枚のカードを選んでください。詳細な分析をお楽しみに 🌟';
            break;
    }
    
    description.textContent = text;
}

// 結果表示
function revealCards() {
    if (selectedCards.length !== neededCards) {
        showModal('必要な枚数のカードを選択してください 💫');
        return;
    }
    
    // 質問を表示
    displayQuestion();
    
    // カードと解釈を表示
    displayResults();
    
    showSection('result-display');
}

// 質問表示
function displayQuestion() {
    const questionDiv = document.getElementById('user-question');
    questionDiv.innerHTML = `
        <h3>あなたの質問</h3>
        <p>"${currentQuestion}"</p>
    `;
}

// 結果表示
function displayResults() {
    const resultCards = document.getElementById('result-cards');
    const interpretation = document.getElementById('interpretation');
    
    resultCards.innerHTML = '';
    interpretation.innerHTML = '';
    
    // カード表示
    switch(currentDivinationType) {
        case 'one':
            displayOneCardResult();
            break;
        case 'three':
            displayThreeCardResult();
            break;
        case 'nine':
            displayNineCardResult();
            break;
    }
}

// 1枚引き結果表示
function displayOneCardResult() {
    const card = selectedCards[0];
    const resultCards = document.getElementById('result-cards');
    const interpretation = document.getElementById('interpretation');
    
    // カード表示
    const cardElement = createCardElement(card, '今のあなたへのメッセージ');
    resultCards.appendChild(cardElement);
    
    // 解釈
    interpretation.innerHTML = `
        <h3>🔮 占い結果 🔮</h3>
        <div class="interpretation-section">
            <h4>💫 カードからのメッセージ</h4>
            <p>${card.meaning}</p>
        </div>
        <div class="interpretation-section">
            <h4>✨ アドバイス</h4>
            <p>${card.advice}</p>
        </div>
        <div class="interpretation-section">
            <h4>🌸 キーワード</h4>
            <p>${card.keywords.join('、')}</p>
        </div>
    `;
}

// 3枚引き結果表示
function displayThreeCardResult() {
    const positions = ['過去', '現在', '未来'];
    const resultCards = document.getElementById('result-cards');
    const interpretation = document.getElementById('interpretation');
    
    // カード表示
    selectedCards.forEach((card, index) => {
        const cardElement = createCardElement(card, positions[index]);
        resultCards.appendChild(cardElement);
    });
    
    // 解釈
    let interpretationHTML = `
        <h3>🌸 時間の流れから見るあなたの運勢 🌸</h3>
    `;
    
    selectedCards.forEach((card, index) => {
        interpretationHTML += `
            <div class="interpretation-section">
                <h4>💫 ${positions[index]}：${card.name}</h4>
                <p>${card.meaning}</p>
                <p><strong>アドバイス：</strong>${card.advice}</p>
            </div>
        `;
    });
    
    // 総合的な解釈
    interpretationHTML += `
        <div class="interpretation-section">
            <h4>✨ 総合的なメッセージ</h4>
            <p>${generateThreeCardSummary()}</p>
        </div>
    `;
    
    interpretation.innerHTML = interpretationHTML;
}

// 9枚引き結果表示
function displayNineCardResult() {
    const positions = [
        '思考・過去', '思考・現在', '思考・未来',
        '行動・過去', '行動・現在', '行動・未来', 
        '結果・過去', '結果・現在', '結果・未来'
    ];
    
    const resultCards = document.getElementById('result-cards');
    const interpretation = document.getElementById('interpretation');
    
    // カード表示（3x3グリッド）
    resultCards.style.display = 'grid';
    resultCards.style.gridTemplateColumns = 'repeat(3, 1fr)';
    resultCards.style.gap = '15px';
    
    selectedCards.forEach((card, index) => {
        const cardElement = createCardElement(card, positions[index]);
        cardElement.style.maxWidth = 'none';
        resultCards.appendChild(cardElement);
    });
    
    // 解釈
    let interpretationHTML = `
        <h3>🌟 9枚のカードが示す詳細な運勢 🌟</h3>
    `;
    
    // 行ごとの解釈
    const rows = ['思考の流れ', '行動の流れ', '結果の流れ'];
    for (let row = 0; row < 3; row++) {
        interpretationHTML += `
            <div class="interpretation-section">
                <h4>💫 ${rows[row]}</h4>
        `;
        
        for (let col = 0; col < 3; col++) {
            const index = row * 3 + col;
            const card = selectedCards[index];
            const timeFrame = ['過去', '現在', '未来'][col];
            
            interpretationHTML += `
                <p><strong>${timeFrame}（${card.name}）：</strong>${card.meaning}</p>
            `;
        }
        
        interpretationHTML += '</div>';
    }
    
    // 総合的な解釈
    interpretationHTML += `
        <div class="interpretation-section">
            <h4>✨ 総合的なメッセージ</h4>
            <p>${generateNineCardSummary()}</p>
        </div>
    `;
    
    interpretation.innerHTML = interpretationHTML;
}

// カード要素作成
function createCardElement(card, position) {
    const cardElement = document.createElement('div');
    cardElement.className = 'result-card';
    
    cardElement.innerHTML = `
        <div class="card-image">${card.emoji}</div>
        <div class="card-name">${card.name}</div>
        <div class="card-position">${position}</div>
        <div class="card-meaning">${card.meaning}</div>
    `;
    
    return cardElement;
}

// 3枚引き総合解釈生成
function generateThreeCardSummary() {
    const summaries = [
        "過去の経験が現在の状況を作り出し、それが未来への道筋を示しています。カードが示すメッセージを心に留めて、前向きに歩んでいきましょう。",
        "時間の流れの中で、あなたの人生に重要な変化が起きています。過去から学び、現在を大切にし、明るい未来を築いていくことができるでしょう。",
        "カードたちが織り成す物語は、あなたの心の奥底にある答えを映し出しています。直感を信じて、自分らしい道を歩んでください。"
    ];
    
    return summaries[Math.floor(Math.random() * summaries.length)];
}

// 9枚引き総合解釈生成
function generateNineCardSummary() {
    const summaries = [
        "9枚のカードが示すのは、あなたの人生の複雑で美しい織物です。思考、行動、結果のそれぞれが調和して、素晴らしい未来を創造していくでしょう。",
        "詳細な分析から見えてくるのは、あなたが持つ無限の可能性です。過去の学びを活かし、現在の行動を通じて、理想的な未来を手に入れることができるでしょう。",
        "カードたちが語る物語は、あなたの内なる知恵と外なる現実が完璧に調和する時期が来ていることを示しています。自信を持って前進してください。"
    ];
    
    return summaries[Math.floor(Math.random() * summaries.length)];
}

// 戻る処理
function goBack() {
    if (document.getElementById('question-input').classList.contains('active')) {
        showSection('divination-select');
    } else if (document.getElementById('card-selection').classList.contains('active')) {
        showSection('question-input');
    }
}

// リセット処理
function resetDivination() {
    currentDivinationType = '';
    selectedCards = [];
    currentQuestion = '';
    neededCards = 0;
    
    document.getElementById('question').value = '';
    
    showSection('divination-select');
}

// シェア処理
function shareDivination() {
    const shareText = `✨ルノルマンカード占い結果✨\n\n質問：${currentQuestion}\n\n選ばれたカード：${selectedCards.map(card => card.name).join('、')}\n\n🔮 素敵な未来が待っています 🔮`;
    
    if (navigator.share) {
        navigator.share({
            title: 'ルノルマンカード占い結果',
            text: shareText
        });
    } else {
        // フォールバック：クリップボードにコピー
        navigator.clipboard.writeText(shareText).then(() => {
            showModal('結果をクリップボードにコピーしました！ 📋✨');
        });
    }
}

// モーダル表示
function showModal(message) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h3 style="color: #ff6b9d; margin-bottom: 15px; text-align: center;">💫 お知らせ 💫</h3>
        <p style="text-align: center; color: #666; line-height: 1.6;">${message}</p>
        <div style="text-align: center; margin-top: 20px;">
            <button class="btn btn-primary" onclick="closeModal()">OK</button>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // モーダル外をクリックして閉じる
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

// モーダル閉じる
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// エンターキーでカード選択に進む
document.getElementById('question').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        startCardDraw();
    }
});

// ページ読み込み完了時の演出
window.addEventListener('load', function() {
    // ロード時のアニメーション
    setTimeout(() => {
        const header = document.querySelector('.header');
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
    }, 100);
});

// カードホバー効果の強化
document.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('card-back')) {
        event.target.style.transform = 'translateY(-5px) scale(1.05)';
    }
});

document.addEventListener('mouseout', function(event) {
    if (event.target.classList.contains('card-back') && !event.target.classList.contains('selected')) {
        event.target.style.transform = 'translateY(0) scale(1)';
    }
});