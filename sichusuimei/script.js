// 四柱推命アプリのメインスクリプト

// 十干の定義
const JIKKAN = [
    { kanji: '甲', reading: 'きのえ', element: 'wood', type: 'yang' },
    { kanji: '乙', reading: 'きのと', element: 'wood', type: 'yin' },
    { kanji: '丙', reading: 'ひのえ', element: 'fire', type: 'yang' },
    { kanji: '丁', reading: 'ひのと', element: 'fire', type: 'yin' },
    { kanji: '戊', reading: 'つちのえ', element: 'earth', type: 'yang' },
    { kanji: '己', reading: 'つちのと', element: 'earth', type: 'yin' },
    { kanji: '庚', reading: 'かのえ', element: 'metal', type: 'yang' },
    { kanji: '辛', reading: 'かのと', element: 'metal', type: 'yin' },
    { kanji: '壬', reading: 'みずのえ', element: 'water', type: 'yang' },
    { kanji: '癸', reading: 'みずのと', element: 'water', type: 'yin' }
];

// 十二支の定義
const JUNISHI = [
    { kanji: '子', reading: 'ね', animal: '鼠', element: 'water', icon: '🐭' },
    { kanji: '丑', reading: 'うし', animal: '牛', element: 'earth', icon: '🐮' },
    { kanji: '寅', reading: 'とら', animal: '虎', element: 'wood', icon: '🐯' },
    { kanji: '卯', reading: 'う', animal: '兎', element: 'wood', icon: '🐰' },
    { kanji: '辰', reading: 'たつ', animal: '龍', element: 'earth', icon: '🐲' },
    { kanji: '巳', reading: 'み', animal: '蛇', element: 'fire', icon: '🐍' },
    { kanji: '午', reading: 'うま', animal: '馬', element: 'fire', icon: '🐴' },
    { kanji: '未', reading: 'ひつじ', animal: '羊', element: 'earth', icon: '🐑' },
    { kanji: '申', reading: 'さる', animal: '猿', element: 'metal', icon: '🐵' },
    { kanji: '酉', reading: 'とり', animal: '鶏', element: 'metal', icon: '🐓' },
    { kanji: '戌', reading: 'いぬ', animal: '犬', element: 'earth', icon: '🐕' },
    { kanji: '亥', reading: 'い', animal: '猪', element: 'water', icon: '🐗' }
];

// 五行の定義
const GOGYOU = {
    wood: { name: '木', color: '#48bb78', icon: '🌳', traits: ['成長', '発展', '創造'] },
    fire: { name: '火', color: '#f56565', icon: '🔥', traits: ['情熱', '活力', '明朗'] },
    earth: { name: '土', color: '#d69e2e', icon: '🌍', traits: ['安定', '信頼', '包容'] },
    metal: { name: '金', color: '#a0aec0', icon: '⚱️', traits: ['正義', '潔白', '決断'] },
    water: { name: '水', color: '#4299e1', icon: '💧', traits: ['知恵', '柔軟', '深思'] }
};

// 性格データベース
const PERSONALITY_DB = {
    '甲': {
        title: '大樹の人',
        traits: ['リーダーシップがある', '正義感が強い', '頑固な面もある', '成長志向'],
        description: '大きな木のように、しっかりとした基盤を持ち、周囲を包み込む包容力があります。'
    },
    '乙': {
        title: '草花の人',
        traits: ['優しく柔軟', '美的センスがある', '協調性に富む', '細やかな配慮'],
        description: '美しい花のように、周囲を和ませる魅力と、しなやかな強さを持っています。'
    },
    '丙': {
        title: '太陽の人',
        traits: ['明るく積極的', '情熱的', '注目を集める', 'エネルギッシュ'],
        description: '太陽のように明るく、周囲を照らす存在。自然とリーダーになることが多いです。'
    },
    '丁': {
        title: '灯火の人',
        traits: ['温かい心', '芸術的才能', '繊細な感性', '人を癒す力'],
        description: 'ろうそくの炎のように、静かでありながら人の心を温める力があります。'
    },
    '戊': {
        title: '山の人',
        traits: ['安定感がある', '責任感が強い', '信頼される', '現実的'],
        description: '山のように動じない安定感と、多くの人を支える包容力を持っています。'
    },
    '己': {
        title: '田畑の人',
        traits: ['面倒見が良い', '努力家', '実用的', '育成能力'],
        description: '肥沃な土地のように、物事を育て上げる能力に長けています。'
    },
    '庚': {
        title: '刀剣の人',
        traits: ['意志が強い', '正義感', '決断力', '潔癖'],
        description: '鋭い刀のように、物事をきっぱりと判断し、実行する力があります。'
    },
    '辛': {
        title: '宝石の人',
        traits: ['美的センス', '洗練された', '完璧主義', '品格'],
        description: '美しい宝石のように、洗練された魅力と高い美意識を持っています。'
    },
    '壬': {
        title: '大海の人',
        traits: ['包容力', '知恵深い', '変化に強い', 'スケールが大きい'],
        description: '大海のように広い心と、深い知恵を持つ人です。'
    },
    '癸': {
        title: '雨露の人',
        traits: ['細やかな気配り', '直感力', '神秘的', '清らか'],
        description: '雨や露のように、静かに物事を潤す力を持っています。'
    }
};

// メインアプリクラス
class ShichusuimeiApp {
    constructor() {
        this.userBirthData = null;
        this.meishiki = null;
        this.init();
    }

    init() {
        this.setupYearOptions();
        this.setupDayOptions();
        this.setupHourOptions();
        this.setupEventListeners();
    }

    setupYearOptions() {
        const yearSelect = document.getElementById('birthYear');
        const partnerYearSelect = document.getElementById('partnerYear');
        const currentYear = new Date().getFullYear();
        
        for (let year = currentYear; year >= 1900; year--) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year + '年';
            yearSelect.appendChild(option);
            
            const partnerOption = document.createElement('option');
            partnerOption.value = year;
            partnerOption.textContent = year + '年';
            partnerYearSelect.appendChild(partnerOption);
        }
    }

    setupDayOptions() {
        const daySelect = document.getElementById('birthDay');
        const partnerDaySelect = document.getElementById('partnerDay');
        
        for (let day = 1; day <= 31; day++) {
            const option = document.createElement('option');
            option.value = day;
            option.textContent = day + '日';
            daySelect.appendChild(option);
            
            const partnerOption = document.createElement('option');
            partnerOption.value = day;
            partnerOption.textContent = day + '日';
            partnerDaySelect.appendChild(partnerOption);
        }
    }

    setupHourOptions() {
        const hourSelect = document.getElementById('birthHour');
        
        for (let hour = 0; hour <= 23; hour++) {
            const option = document.createElement('option');
            option.value = hour;
            option.textContent = hour + '時';
            if (hour === 11) {
                option.selected = true;
            }
            hourSelect.appendChild(option);
        }
    }

    setupEventListeners() {
        document.getElementById('birthForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.calculateFortune();
        });

        document.getElementById('compatibilityForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.calculateCompatibility();
        });
    }

    calculateFortune() {
        const year = parseInt(document.getElementById('birthYear').value);
        const month = parseInt(document.getElementById('birthMonth').value);
        const day = parseInt(document.getElementById('birthDay').value);
        const hour = parseInt(document.getElementById('birthHour').value);
        const gender = document.getElementById('gender').value;

        if (!year || !month || !day || hour === undefined || !gender) {
            alert('すべての項目を入力してください。');
            return;
        }

        this.userBirthData = { year, month, day, hour, gender };
        this.meishiki = this.createMeishiki(year, month, day, hour);
        
        this.displayResults();
        this.scrollToResults();
    }

    createMeishiki(year, month, day, hour) {
        const yearPillar = this.getYearPillar(year);
        const monthPillar = this.getMonthPillar(year, month);
        const dayPillar = this.getDayPillar(year, month, day);
        const hourPillar = this.getHourPillar(day, hour);

        return {
            year: yearPillar,
            month: monthPillar,
            day: dayPillar,
            hour: hourPillar
        };
    }

    getYearPillar(year) {
        const kanIndex = (year + 7) % 10;
        const shiIndex = (year + 9) % 12;
        
        return {
            kan: JIKKAN[kanIndex === 0 ? 9 : kanIndex - 1],
            shi: JUNISHI[shiIndex === 0 ? 11 : shiIndex - 1]
        };
    }

    getMonthPillar(year, month) {
        const baseKan = this.getYearPillar(year).kan;
        const monthKanIndex = (JIKKAN.findIndex(k => k.kanji === baseKan.kanji) * 2 + month - 1) % 10;
        const monthShiIndex = (month + 1) % 12;
        
        return {
            kan: JIKKAN[monthKanIndex],
            shi: JUNISHI[monthShiIndex]
        };
    }

    getDayPillar(year, month, day) {
        const totalDays = this.getTotalDays(year, month, day);
        const kanIndex = (totalDays + 9) % 10;
        const shiIndex = (totalDays + 11) % 12;
        
        return {
            kan: JIKKAN[kanIndex],
            shi: JUNISHI[shiIndex]
        };
    }

    getHourPillar(day, hour) {
        const hourIndex = Math.floor((hour + 1) / 2) % 12;
        const kanIndex = (day + hourIndex) % 10;
        
        return {
            kan: JIKKAN[kanIndex],
            shi: JUNISHI[hourIndex]
        };
    }

    getTotalDays(year, month, day) {
        let totalDays = day;
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        for (let i = 0; i < month - 1; i++) {
            totalDays += daysInMonth[i];
        }
        
        totalDays += (year - 1900) * 365;
        totalDays += Math.floor((year - 1900) / 4);
        
        return totalDays;
    }

    displayResults() {
        this.displayMeishiki();
        this.displayPersonality();
        this.displayGogyouBalance();
        this.displayFortune2025();
        
        document.getElementById('inputSection').style.display = 'none';
        document.getElementById('resultSection').style.display = 'block';
    }

    displayMeishiki() {
        const container = document.getElementById('meishikiTable');
        
        const html = `
            <div class="meishiki-grid">
                <div class="pillar sparkle">
                    <div class="pillar-title">年柱（先祖・幼年期）</div>
                    <div class="pillar-content">${this.meishiki.year.kan.kanji}${this.meishiki.year.shi.kanji}</div>
                    <div class="pillar-reading">${this.meishiki.year.kan.reading}${this.meishiki.year.shi.reading}</div>
                    <div class="pillar-animal">${this.meishiki.year.shi.icon} ${this.meishiki.year.shi.animal}</div>
                </div>
                <div class="pillar sparkle">
                    <div class="pillar-title">月柱（両親・青年期）</div>
                    <div class="pillar-content">${this.meishiki.month.kan.kanji}${this.meishiki.month.shi.kanji}</div>
                    <div class="pillar-reading">${this.meishiki.month.kan.reading}${this.meishiki.month.shi.reading}</div>
                    <div class="pillar-animal">${this.meishiki.month.shi.icon} ${this.meishiki.month.shi.animal}</div>
                </div>
                <div class="pillar sparkle" style="border: 3px solid #667eea;">
                    <div class="pillar-title">日柱（自分・中年期）⭐</div>
                    <div class="pillar-content">${this.meishiki.day.kan.kanji}${this.meishiki.day.shi.kanji}</div>
                    <div class="pillar-reading">${this.meishiki.day.kan.reading}${this.meishiki.day.shi.reading}</div>
                    <div class="pillar-animal">${this.meishiki.day.shi.icon} ${this.meishiki.day.shi.animal}</div>
                </div>
                <div class="pillar sparkle">
                    <div class="pillar-title">時柱（子供・晩年期）</div>
                    <div class="pillar-content">${this.meishiki.hour.kan.kanji}${this.meishiki.hour.shi.kanji}</div>
                    <div class="pillar-reading">${this.meishiki.hour.kan.reading}${this.meishiki.hour.shi.reading}</div>
                    <div class="pillar-animal">${this.meishiki.hour.shi.icon} ${this.meishiki.hour.shi.animal}</div>
                </div>
            </div>
            <div style="background: #e2e8f0; padding: 15px; border-radius: 10px; margin-top: 20px;">
                <p style="font-size: 0.9rem; color: #4a5568; text-align: center;">
                    <strong>日柱</strong>があなたの基本性格を表す最も重要な柱です。
                </p>
            </div>
        `;
        
        container.innerHTML = html;
    }

    displayPersonality() {
        const container = document.getElementById('personalityContent');
        const dayKan = this.meishiki.day.kan.kanji;
        const personality = PERSONALITY_DB[dayKan];
        
        const html = `
            <div class="personality-trait">
                <div class="trait-title">
                    <i class="fas fa-crown"></i>
                    あなたは「${personality.title}」
                </div>
                <div class="trait-description">
                    ${personality.description}
                </div>
            </div>
            <div class="personality-trait">
                <div class="trait-title">
                    <i class="fas fa-star"></i>
                    主な特徴
                </div>
                <div class="trait-description">
                    <ul style="list-style: none; padding: 0;">
                        ${personality.traits.map(trait => `<li style="margin: 8px 0; padding-left: 20px; position: relative;"><span style="position: absolute; left: 0;">✨</span>${trait}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="personality-trait">
                <div class="trait-title">
                    <i class="fas fa-lightbulb"></i>
                    五行属性: ${GOGYOU[this.meishiki.day.kan.element].name}（${this.meishiki.day.kan.element}）
                </div>
                <div class="trait-description">
                    ${GOGYOU[this.meishiki.day.kan.element].traits.join('・')}の特性を持っています。
                </div>
            </div>
        `;
        
        container.innerHTML = html;
    }

    displayGogyouBalance() {
        const container = document.getElementById('gogyouChart');
        const elements = this.calculateElementBalance();
        
        const html = Object.entries(GOGYOU).map(([key, value]) => {
            const count = elements[key] || 0;
            return `
                <div class="gogyou-element ${key}">
                    <div class="gogyou-icon">${value.icon}</div>
                    <div class="gogyou-name">${value.name}</div>
                    <div class="gogyou-count">${count}</div>
                    <div style="font-size: 0.8rem; color: #718096; margin-top: 5px;">
                        ${value.traits.join('・')}
                    </div>
                </div>
            `;
        }).join('');
        
        container.innerHTML = html;
    }

    calculateElementBalance() {
        const elements = {};
        
        [this.meishiki.year, this.meishiki.month, this.meishiki.day, this.meishiki.hour].forEach(pillar => {
            const kanElement = pillar.kan.element;
            elements[kanElement] = (elements[kanElement] || 0) + 1;
            
            const shiElement = pillar.shi.element;
            elements[shiElement] = (elements[shiElement] || 0) + 1;
        });
        
        return elements;
    }

    displayFortune2025() {
        const container = document.getElementById('fortune2025');
        const score = this.calculate2025Fortune();
        const level = this.getFortuneLevel(score);
        const advice = this.get2025Advice(score);
        
        const html = `
            <div class="fortune-score">${score}点</div>
            <div class="fortune-level">${level}</div>
            <div class="fortune-description">
                ${advice}
            </div>
            <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.3); border-radius: 10px;">
                <h4 style="margin-bottom: 10px;"><i class="fas fa-calendar-alt"></i> 2025年のポイント</h4>
                <p>巳年は火の年。あなたの五行バランスを考慮すると、${this.get2025ElementAdvice()}がおすすめです。</p>
            </div>
        `;
        
        container.innerHTML = html;
    }

    calculate2025Fortune() {
        const year2025Kan = JIKKAN[1]; // 乙
        const year2025Shi = JUNISHI[5]; // 巳
        
        let score = 50;
        
        const dayKan = this.meishiki.day.kan;
        if (dayKan.element === year2025Kan.element) {
            score += 20;
        } else if (this.isCompatibleElement(dayKan.element, year2025Kan.element)) {
            score += 15;
        }
        
        const dayShiIndex = JUNISHI.findIndex(s => s.kanji === this.meishiki.day.shi.kanji);
        const year2025ShiIndex = 5;
        const shiDiff = Math.abs(dayShiIndex - year2025ShiIndex);
        
        if (shiDiff === 0) score += 25;
        else if (shiDiff === 4 || shiDiff === 8) score += 20;
        else if (shiDiff === 6) score -= 10;
        
        return Math.min(Math.max(score, 10), 95);
    }

    isCompatibleElement(element1, element2) {
        const compatibility = {
            'wood': ['fire'],
            'fire': ['earth'],
            'earth': ['metal'],
            'metal': ['water'],
            'water': ['wood']
        };
        
        return compatibility[element1]?.includes(element2) || 
               compatibility[element2]?.includes(element1);
    }

    getFortuneLevel(score) {
        if (score >= 80) return '🌟 大吉運';
        if (score >= 70) return '✨ 吉運';
        if (score >= 60) return '🍀 中吉運';
        if (score >= 40) return '📈 平運';
        return '⚠️ 注意運';
    }

    get2025Advice(score) {
        if (score >= 80) {
            return '2025年はあなたにとって非常に良い年です！新しいことにチャレンジするには絶好のタイミング。積極的に行動しましょう。';
        } else if (score >= 70) {
            return '2025年は順調な発展が期待できます。計画を立てて着実に進めていけば、良い結果が得られるでしょう。';
        } else if (score >= 60) {
            return '2025年は安定した年になりそうです。大きな変化は避けて、基盤を固めることに集中しましょう。';
        } else if (score >= 40) {
            return '2025年は慎重に行動することが大切です。急がず、じっくりと取り組むことで道が開けます。';
        } else {
            return '2025年は忍耐の年です。困難があっても諦めず、学びの機会と捉えて成長に繋げましょう。';
        }
    }

    get2025ElementAdvice() {
        const dayElement = this.meishiki.day.kan.element;
        const advice = {
            'wood': '火の年なので、あなたの木の気が活性化されます。創造活動や新しい事業がおすすめ',
            'fire': '同じ火の年なので、エネルギーが高まります。ただし、行き過ぎに注意',
            'earth': '火から土への相生で、安定と成長が期待できます。不動産や投資に良い年',
            'metal': '火と金は相剋の関係。慎重な判断と冷静な行動を心がけて',
            'water': '火と水は対立する関係。バランスを取ることが重要です'
        };
        
        return advice[dayElement] || '調和を大切に過ごしましょう';
    }

    calculateCompatibility() {
        const partnerYear = parseInt(document.getElementById('partnerYear').value);
        const partnerMonth = parseInt(document.getElementById('partnerMonth').value);
        const partnerDay = parseInt(document.getElementById('partnerDay').value);
        
        if (!partnerYear || !partnerMonth || !partnerDay) {
            alert('お相手の生年月日を入力してください。');
            return;
        }
        
        const partnerMeishiki = this.createMeishiki(partnerYear, partnerMonth, partnerDay, 11);
        const compatibility = this.calculateCompatibilityScore(this.meishiki, partnerMeishiki);
        
        this.displayCompatibilityResult(compatibility);
    }

    calculateCompatibilityScore(meishiki1, meishiki2) {
        let score = 50;
        
        const element1 = meishiki1.day.kan.element;
        const element2 = meishiki2.day.kan.element;
        
        if (element1 === element2) {
            score += 20;
        } else if (this.isCompatibleElement(element1, element2)) {
            score += 25;
        } else if (this.isConflictElement(element1, element2)) {
            score -= 15;
        }
        
        const shi1Index = JUNISHI.findIndex(s => s.kanji === meishiki1.year.shi.kanji);
        const shi2Index = JUNISHI.findIndex(s => s.kanji === meishiki2.year.shi.kanji);
        const shiDiff = Math.abs(shi1Index - shi2Index);
        
        if (shiDiff === 0) score += 15;
        else if (shiDiff === 4 || shiDiff === 8) score += 20;
        else if (shiDiff === 6) score -= 20;
        
        return Math.min(Math.max(score, 10), 95);
    }

    isConflictElement(element1, element2) {
        const conflicts = {
            'wood': ['metal'],
            'fire': ['water'],
            'earth': ['wood'],
            'metal': ['fire'],
            'water': ['earth']
        };
        
        return conflicts[element1]?.includes(element2) || 
               conflicts[element2]?.includes(element1);
    }

    displayCompatibilityResult(score) {
        const container = document.getElementById('compatibilityResult');
        const level = this.getCompatibilityLevel(score);
        const advice = this.getCompatibilityAdvice(score);
        
        const html = `
            <div class="compatibility-score">
                <div class="compatibility-percentage">${score}%</div>
                <div class="compatibility-level">${level}</div>
            </div>
            <div style="padding: 15px; background: white; border-radius: 10px; margin-top: 15px;">
                <h4 style="margin-bottom: 10px;"><i class="fas fa-heart"></i> 相性アドバイス</h4>
                <p>${advice}</p>
            </div>
        `;
        
        container.innerHTML = html;
        container.style.display = 'block';
    }

    getCompatibilityLevel(score) {
        if (score >= 80) return '💕 最高の相性';
        if (score >= 70) return '💖 とても良い相性';
        if (score >= 60) return '💝 良い相性';
        if (score >= 40) return '🤝 普通の相性';
        return '⚠️ 注意が必要';
    }

    getCompatibilityAdvice(score) {
        if (score >= 80) {
            return 'お二人は非常に相性が良いペアです。お互いを自然に理解し合い、支え合える関係を築けるでしょう。';
        } else if (score >= 70) {
            return 'とても良い相性です。お互いの長所を活かし合いながら、素晴らしい関係を築いていけるでしょう。';
        } else if (score >= 60) {
            return '良い相性です。お互いを尊重し、理解し合う努力を続けることで、より深い絆を築けます。';
        } else if (score >= 40) {
            return '普通の相性です。違いを認め合い、コミュニケーションを大切にすることで関係を深められます。';
        } else {
            return '課題のある相性ですが、お互いの理解と努力次第で良い関係を築くことは可能です。忍耐と愛情を大切に。';
        }
    }

    scrollToResults() {
        document.getElementById('resultSection').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// アプリケーション開始
document.addEventListener('DOMContentLoaded', () => {
    new ShichusuimeiApp();
});