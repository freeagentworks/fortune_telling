// 12星座のデータ
const zodiacData = {
    aries: {
        name: '牡羊座',
        symbol: '♈',
        dates: '3月21日 - 4月19日',
        element: '火の星座',
        color: '#ff6b6b',
        keywords: ['情熱的', '行動力', 'リーダーシップ', '勇敢'],
        description: '12星座のトップバッター。生まれたての赤ちゃんのように純粋で、エネルギッシュ。新しいことに挑戦する勇気と行動力を持っています。',
        compatibility: ['獅子座', '射手座', '双子座', '水瓶座']
    },
    taurus: {
        name: '牡牛座',
        symbol: '♉',
        dates: '4月20日 - 5月20日',
        element: '地の星座',
        color: '#4caf50',
        keywords: ['堅実', '忍耐強い', '美的センス', '安定志向'],
        description: '五感を大切にし、美しいものや心地よいものを愛します。マイペースですが、一度決めたことは最後までやり遂げる強さがあります。',
        compatibility: ['乙女座', '山羊座', '蟹座', '魚座']
    },
    gemini: {
        name: '双子座',
        symbol: '♊',
        dates: '5月21日 - 6月21日',
        element: '風の星座',
        color: '#ffd93d',
        keywords: ['好奇心旺盛', 'コミュニケーション', '柔軟性', '知的'],
        description: '情報収集が得意で、様々なことに興味を持ちます。会話上手で社交的、どんな環境にも適応できる柔軟性を持っています。',
        compatibility: ['天秤座', '水瓶座', '牡羊座', '獅子座']
    },
    cancer: {
        name: '蟹座',
        symbol: '♋',
        dates: '6月22日 - 7月22日',
        element: '水の星座',
        color: '#e3f2fd',
        keywords: ['感受性豊か', '家族愛', '保護的', '直感的'],
        description: '家族や仲間を大切にし、愛情深く世話好き。感受性が豊かで、相手の気持ちを察する能力に優れています。',
        compatibility: ['蠍座', '魚座', '牡牛座', '乙女座']
    },
    leo: {
        name: '獅子座',
        symbol: '♌',
        dates: '7月23日 - 8月22日',
        element: '火の星座',
        color: '#ff9800',
        keywords: ['カリスマ性', '創造力', '寛大', '自信'],
        description: '太陽のように明るく、周囲を照らす存在。自信に満ち、人々を引きつける魅力があります。創造力豊かで表現力も抜群です。',
        compatibility: ['牡羊座', '射手座', '双子座', '天秤座']
    },
    virgo: {
        name: '乙女座',
        symbol: '♍',
        dates: '8月23日 - 9月22日',
        element: '地の星座',
        color: '#795548',
        keywords: ['分析力', '几帳面', '奉仕精神', '実用的'],
        description: '細部にまで気を配り、完璧を求める傾向があります。人の役に立つことに喜びを感じ、実用的で効率的な方法を好みます。',
        compatibility: ['牡牛座', '山羊座', '蟹座', '蠍座']
    },
    libra: {
        name: '天秤座',
        symbol: '♎',
        dates: '9月23日 - 10月23日',
        element: '風の星座',
        color: '#f06292',
        keywords: ['調和', '美的センス', '社交的', '公平'],
        description: 'バランスと調和を重視し、争いを好みません。美的センスに優れ、人間関係を大切にします。公平で diplomatic な性格です。',
        compatibility: ['双子座', '水瓶座', '獅子座', '射手座']
    },
    scorpio: {
        name: '蠍座',
        symbol: '♏',
        dates: '10月24日 - 11月22日',
        element: '水の星座',
        color: '#b71c1c',
        keywords: ['情熱的', '洞察力', '神秘的', '集中力'],
        description: '深い洞察力と強い意志を持ち、物事の本質を見抜く力があります。一度決めたことは最後までやり遂げる集中力があります。',
        compatibility: ['蟹座', '魚座', '牡牛座', '山羊座']
    },
    sagittarius: {
        name: '射手座',
        symbol: '♐',
        dates: '11月23日 - 12月21日',
        element: '火の星座',
        color: '#9c27b0',
        keywords: ['冒険心', '楽観的', '自由', '哲学的'],
        description: '自由を愛し、新しい経験を求めて冒険に出ます。楽観的で前向き、高い理想と哲学的な思考を持っています。',
        compatibility: ['牡羊座', '獅子座', '天秤座', '水瓶座']
    },
    capricorn: {
        name: '山羊座',
        symbol: '♑',
        dates: '12月22日 - 1月19日',
        element: '地の星座',
        color: '#607d8b',
        keywords: ['野心的', '責任感', '忍耐力', '現実的'],
        description: '高い目標を持ち、それを達成するための努力を惜しみません。責任感が強く、現実的で堅実な判断力を持っています。',
        compatibility: ['牡牛座', '乙女座', '蠍座', '魚座']
    },
    aquarius: {
        name: '水瓶座',
        symbol: '♒',
        dates: '1月20日 - 2月18日',
        element: '風の星座',
        color: '#00bcd4',
        keywords: ['独創的', '人道的', '革新的', '友愛'],
        description: '独創的なアイデアと革新的な思考を持ちます。個性を大切にし、人道的で博愛精神に富んでいます。',
        compatibility: ['双子座', '天秤座', '牡羊座', '射手座']
    },
    pisces: {
        name: '魚座',
        symbol: '♓',
        dates: '2月19日 - 3月20日',
        element: '水の星座',
        color: '#3f51b5',
        keywords: ['感受性', '想像力', '共感力', '芸術的'],
        description: '豊かな想像力と感受性を持ち、芸術的才能に恵まれています。共感力が高く、相手の気持ちを理解する能力があります。',
        compatibility: ['蟹座', '蠍座', '牡牛座', '山羊座']
    }
};

// 運勢のテンプレート
const fortuneTemplates = {
    general: [
        { stars: 5, text: '最高の運気！すべてがうまくいく素晴らしい日です。積極的に行動して、チャンスを掴みましょう。' },
        { stars: 4, text: '良い運気が流れています。前向きな姿勢で過ごせば、良い結果が期待できるでしょう。' },
        { stars: 3, text: '安定した運気です。普段通りに過ごすことで、穏やかな一日を送れるでしょう。' },
        { stars: 2, text: '少し注意が必要な日です。慎重に行動し、無理をしないように心がけましょう。' },
        { stars: 1, text: '運気は低迷気味です。今日は休息を取り、明日に備えることをおすすめします。' }
    ],
    love: [
        { stars: 5, text: '恋愛運は絶好調！運命的な出会いや、パートナーとの絆が深まる素敵な出来事が期待できます。' },
        { stars: 4, text: '愛情に満ちた日です。素直な気持ちを伝えることで、良い関係が築けるでしょう。' },
        { stars: 3, text: '恋愛運は平穏です。相手を思いやる気持ちを大切に、優しく接しましょう。' },
        { stars: 2, text: 'コミュニケーションに注意が必要です。相手の話をよく聞き、理解する努力をしましょう。' },
        { stars: 1, text: '恋愛面では慎重に。今は自分磨きに専念する時期かもしれません。' }
    ],
    work: [
        { stars: 5, text: '仕事運は最高潮！大きなプロジェクトの成功や昇進のチャンスが訪れるかもしれません。' },
        { stars: 4, text: '仕事が順調に進む日です。アイデアが評価され、成果を上げることができるでしょう。' },
        { stars: 3, text: '普段通りの仕事運です。コツコツと努力を積み重ねることが大切です。' },
        { stars: 2, text: '仕事では慎重さが求められます。ミスを防ぐため、確認作業を怠らないようにしましょう。' },
        { stars: 1, text: '仕事運は低調です。無理をせず、基本に立ち返って取り組みましょう。' }
    ],
    money: [
        { stars: 5, text: '金運は絶好調！臨時収入や投資の成功など、経済的な幸運が期待できます。' },
        { stars: 4, text: '金運は上昇中です。貯蓄や投資を始めるには良いタイミングでしょう。' },
        { stars: 3, text: '金運は安定しています。計画的な支出を心がければ問題ありません。' },
        { stars: 2, text: '金銭面では注意が必要です。衝動買いを避け、必要なものだけを購入しましょう。' },
        { stars: 1, text: '金運は低迷しています。今は節約を心がけ、無駄遣いを避けることが大切です。' }
    ]
};

// ラッキーアイテム
const luckyItems = {
    colors: ['赤', '青', '黄', '緑', '紫', 'ピンク', 'オレンジ', '白', '黒', '金', '銀', '茶'],
    numbers: [1, 3, 7, 8, 9, 11, 13, 17, 21, 23, 27, 33],
    items: ['腕時計', 'ハンカチ', '手帳', 'ペン', '鏡', 'アクセサリー', '本', '花', 'コーヒー', '音楽', '香水', 'お守り']
};

// 生年月日から星座を判定
function getZodiacSign(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'gemini';
    if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return 'libra';
    if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) return 'scorpio';
    if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) return 'sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'pisces';
}

// 運勢を生成
function generateFortune(type, date, zodiac) {
    // 日付と星座を使ってシード値を生成
    const seed = date.getTime() + zodiac.charCodeAt(0);
    const index = Math.floor((seed % 100) / 20);
    return fortuneTemplates[type][index];
}

// ラッキーアイテムを生成
function generateLuckyItems(date, zodiac) {
    const seed = date.getTime() + zodiac.charCodeAt(0);
    return {
        color: luckyItems.colors[seed % luckyItems.colors.length],
        number: luckyItems.numbers[seed % luckyItems.numbers.length],
        item: luckyItems.items[seed % luckyItems.items.length]
    };
}

// 星を表示
function displayStars(count) {
    return '⭐'.repeat(count);
}

// 占い結果を表示
function showHoroscope() {
    const birthdateInput = document.getElementById('birthdate');
    const birthdate = new Date(birthdateInput.value);
    
    if (!birthdateInput.value) {
        alert('生年月日を入力してください');
        return;
    }
    
    const zodiacSign = getZodiacSign(birthdate);
    const zodiac = zodiacData[zodiacSign];
    const today = new Date();
    
    // 星座情報を表示
    document.getElementById('zodiac-symbol').textContent = zodiac.symbol;
    document.getElementById('zodiac-symbol').style.color = zodiac.color;
    document.getElementById('zodiac-name').textContent = zodiac.name;
    document.getElementById('zodiac-date').textContent = zodiac.dates;
    document.getElementById('zodiac-element').textContent = zodiac.element;
    
    // 運勢を生成・表示
    const generalFortune = generateFortune('general', today, zodiacSign);
    document.getElementById('general-stars').textContent = displayStars(generalFortune.stars);
    document.getElementById('general-fortune').textContent = generalFortune.text;
    
    const loveFortune = generateFortune('love', today, zodiacSign);
    document.getElementById('love-stars').textContent = displayStars(loveFortune.stars);
    document.getElementById('love-fortune').textContent = loveFortune.text;
    
    const workFortune = generateFortune('work', today, zodiacSign);
    document.getElementById('work-stars').textContent = displayStars(workFortune.stars);
    document.getElementById('work-fortune').textContent = workFortune.text;
    
    const moneyFortune = generateFortune('money', today, zodiacSign);
    document.getElementById('money-stars').textContent = displayStars(moneyFortune.stars);
    document.getElementById('money-fortune').textContent = moneyFortune.text;
    
    // ラッキーアイテムを表示
    const lucky = generateLuckyItems(today, zodiacSign);
    document.getElementById('lucky-color').textContent = lucky.color;
    document.getElementById('lucky-color').style.color = lucky.color;
    document.getElementById('lucky-number').textContent = lucky.number;
    document.getElementById('lucky-item').textContent = lucky.item;
    
    // 結果セクションを表示
    document.getElementById('result-section').classList.remove('hidden');
    document.querySelector('.input-section').classList.add('hidden');
    document.querySelector('.zodiac-list-section').classList.add('hidden');
}

// リセット
function reset() {
    document.getElementById('result-section').classList.add('hidden');
    document.querySelector('.input-section').classList.remove('hidden');
    document.querySelector('.zodiac-list-section').classList.remove('hidden');
    document.getElementById('birthdate').value = '';
}

// 星座詳細モーダルを表示
function showZodiacInfo(zodiacSign) {
    const zodiac = zodiacData[zodiacSign];
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 4rem; color: ${zodiac.color}; margin-bottom: 20px;">${zodiac.symbol}</div>
            <h2 style="font-size: 2rem; margin-bottom: 10px;">${zodiac.name}</h2>
            <p style="color: #b8b8d1; margin-bottom: 20px;">${zodiac.dates}</p>
            <p style="margin-bottom: 20px;">${zodiac.element}</p>
        </div>
        
        <div style="margin-bottom: 30px;">
            <h3 style="margin-bottom: 15px;">性格・特徴</h3>
            <p style="line-height: 1.8;">${zodiac.description}</p>
        </div>
        
        <div style="margin-bottom: 30px;">
            <h3 style="margin-bottom: 15px;">キーワード</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                ${zodiac.keywords.map(keyword => 
                    `<span style="background: rgba(255,255,255,0.1); padding: 8px 16px; border-radius: 20px;">${keyword}</span>`
                ).join('')}
            </div>
        </div>
        
        <div>
            <h3 style="margin-bottom: 15px;">相性の良い星座</h3>
            <p>${zodiac.compatibility.join('、')}</p>
        </div>
    `;
    
    document.getElementById('zodiac-modal').classList.remove('hidden');
}

// モーダルを閉じる
function closeModal() {
    document.getElementById('zodiac-modal').classList.add('hidden');
}

// モーダルの外側をクリックしたら閉じる
window.onclick = function(event) {
    const modal = document.getElementById('zodiac-modal');
    if (event.target === modal) {
        closeModal();
    }
}