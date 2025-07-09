// 算命学占いアプリケーション

// 十大主星のデータ
const tenMainStars = {
    貫索星: {
        type: '守備本能・陽',
        keywords: ['独立心', '自立', 'マイペース', '頑固', '信念'],
        description: '自分の世界を大切にし、独立独歩の精神を持つ星。一度決めたことは最後までやり遂げる強い意志を持っています。',
        element: '木'
    },
    石門星: {
        type: '守備本能・陰',
        keywords: ['社交性', '協調性', '仲間意識', '政治力', '説得力'],
        description: '人との和を大切にし、集団の中で力を発揮する星。リーダーシップと協調性を兼ね備えています。',
        element: '木'
    },
    鳳閣星: {
        type: '伝達本能・陽',
        keywords: ['楽観的', '自然体', '趣味', '遊び心', '表現力'],
        description: '自然体で人生を楽しむ星。芸術的センスと遊び心を持ち、人を楽しませる才能があります。',
        element: '火'
    },
    調舒星: {
        type: '伝達本能・陰',
        keywords: ['感受性', '芸術性', '完璧主義', '孤独', '創造力'],
        description: '繊細な感性と深い洞察力を持つ星。芸術的才能に恵まれ、独自の世界観を持っています。',
        element: '火'
    },
    禄存星: {
        type: '引力本能・陽',
        keywords: ['奉仕', '愛情', '親切', '面倒見', '経済力'],
        description: '愛情深く人の面倒を見ることが好きな星。経済的センスもあり、人を惹きつける魅力があります。',
        element: '土'
    },
    司禄星: {
        type: '引力本能・陰',
        keywords: ['堅実', '真面目', '蓄積', '家庭的', '用心深さ'],
        description: '堅実で真面目な性格の星。コツコツと努力を重ね、着実に成果を上げていきます。',
        element: '土'
    },
    車騎星: {
        type: '攻撃本能・陽',
        keywords: ['行動力', '正義感', '直感', 'スピード', '単純明快'],
        description: '行動力に溢れ、直感的に動く星。正義感が強く、困っている人を放っておけません。',
        element: '金'
    },
    牽牛星: {
        type: '攻撃本能・陰',
        keywords: ['名誉', 'プライド', '責任感', '自尊心', '向上心'],
        description: 'プライドと責任感を持つ星。名誉を重んじ、常に向上心を持って努力します。',
        element: '金'
    },
    龍高星: {
        type: '習得本能・陽',
        keywords: ['冒険', '改革', '好奇心', '自由', '放浪'],
        description: '冒険心と好奇心に満ちた星。新しいことに挑戦し、自由を愛する改革者です。',
        element: '水'
    },
    玉堂星: {
        type: '習得本能・陰',
        keywords: ['知性', '学問', '伝統', '理論', '母性'],
        description: '知的で学問を愛する星。伝統を重んじ、理論的に物事を考える知性派です。',
        element: '水'
    }
};

// 十二大従星のデータ
const twelveSubStars = {
    天報星: {
        energy: 3,
        age: '胎児',
        keywords: ['多才', '変化', '器用', '霊感'],
        description: '胎児の時期を表す星。変化に富み、多才で器用な面があります。'
    },
    天印星: {
        energy: 6,
        age: '赤子',
        keywords: ['無邪気', '素直', '依存心', '可愛げ'],
        description: '赤ちゃんの時期を表す星。素直で無邪気、周囲から愛される存在です。'
    },
    天貴星: {
        energy: 9,
        age: '児童',
        keywords: ['好奇心', '学習', 'プライド', '潔癖'],
        description: '子供の時期を表す星。好奇心旺盛で学習能力が高く、純粋な心を持っています。'
    },
    天恍星: {
        energy: 7,
        age: '少年',
        keywords: ['夢想', 'ロマン', '芸術', '自由奔放'],
        description: '思春期の時期を表す星。夢とロマンに満ち、芸術的センスがあります。'
    },
    天南星: {
        energy: 10,
        age: '青年',
        keywords: ['情熱', '行動力', '反発心', '批判精神'],
        description: '青年期の時期を表す星。情熱的で行動力があり、既存の価値観に挑戦します。'
    },
    天禄星: {
        energy: 11,
        age: '壮年',
        keywords: ['現実的', '経済力', '社会性', '責任感'],
        description: '壮年期の時期を表す星。現実的で経済力があり、社会的責任を果たします。'
    },
    天将星: {
        energy: 12,
        age: '頭領',
        keywords: ['リーダー', '統率力', '自信', '王者'],
        description: '頭領の時期を表す最強の星。強いリーダーシップと自信を持つ帝王の星です。'
    },
    天堂星: {
        energy: 8,
        age: '老人',
        keywords: ['引退', '自適', '趣味', '悠々自適'],
        description: '老年期の時期を表す星。肩の力を抜いて、自分の好きなことを楽しみます。'
    },
    天胡星: {
        energy: 4,
        age: '病人',
        keywords: ['直感', '芸術', '美意識', '繊細'],
        description: '病人の時期を表す星。繊細で直感的、芸術的センスに優れています。'
    },
    天極星: {
        energy: 2,
        age: '死人',
        keywords: ['精神性', '無欲', '達観', '悟り'],
        description: '死の時期を表す星。物質的なものに執着せず、精神性を重視します。'
    },
    天庫星: {
        energy: 5,
        age: '墓',
        keywords: ['探究心', '研究', '凝り性', '専門性'],
        description: '墓の時期を表す星。一つのことを深く探究し、専門性を極めます。'
    },
    天馳星: {
        energy: 1,
        age: '霊魂',
        keywords: ['瞬発力', '移動', '変化', '自由'],
        description: '霊魂の時期を表す星。瞬発力があり、自由に動き回る変化の星です。'
    }
};

// 天中殺のデータ
const tenchusatsuTypes = {
    子丑: {
        name: '子丑天中殺',
        period: '子年・丑年',
        months: '12月・1月',
        characteristics: '始まりの天中殺。ゼロから物事を生み出す力を持ち、創造性に富んでいます。',
        advice: '新しいことを始めるより、今あるものを大切に育てる時期です。'
    },
    寅卯: {
        name: '寅卯天中殺',
        period: '寅年・卯年',
        months: '2月・3月',
        characteristics: '受け継ぎの天中殺。明るくパワフルで、人から受け継いだものを発展させる力があります。',
        advice: '人との縁を大切にし、協力関係を築くことが開運の鍵です。'
    },
    辰巳: {
        name: '辰巳天中殺',
        period: '辰年・巳年',
        months: '4月・5月',
        characteristics: '情熱の天中殺。太陽のような輝きを持ち、カリスマ性があります。',
        advice: '感情的にならず、冷静に判断することが大切な時期です。'
    },
    午未: {
        name: '午未天中殺',
        period: '午年・未年',
        months: '6月・7月',
        characteristics: '終わりの天中殺。自由な発想力を持ち、既存の枠にとらわれません。',
        advice: '過去にとらわれず、新しい価値観を受け入れる柔軟性が必要です。'
    },
    申酉: {
        name: '申酉天中殺',
        period: '申年・酉年',
        months: '8月・9月',
        characteristics: '実りの天中殺。現実的で実務能力が高く、信頼を集めます。',
        advice: '成果を急がず、じっくりと実力を蓄える時期として過ごしましょう。'
    },
    戌亥: {
        name: '戌亥天中殺',
        period: '戌年・亥年',
        months: '10月・11月',
        characteristics: '精神性の天中殺。深い洞察力と精神的な豊かさを持っています。',
        advice: '内面を見つめ直し、精神的な成長を目指す時期です。'
    }
};

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    // 年の選択肢を生成
    const yearSelect = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1920; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year + '年';
        yearSelect.appendChild(option);
    }

    // 日の選択肢を生成
    const daySelect = document.getElementById('day');
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day + '日';
        daySelect.appendChild(option);
    }

    // フォームの送信イベント
    document.getElementById('birthdateForm').addEventListener('submit', function(e) {
        e.preventDefault();
        calculateSanmeigaku();
    });
});

// 十干と十二支の定義
const tenStems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const twelveBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 干支の五行対応
const stemElements = {
    '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土', 
    '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水'
};

const branchElements = {
    '子': '水', '丑': '土', '寅': '木', '卯': '木', '辰': '土', '巳': '火',
    '午': '火', '未': '土', '申': '金', '酉': '金', '戌': '土', '亥': '水'
};

// 日干から十大主星への変換テーブル
const stemToStarMap = {
    '甲': {'甲': '貫索星', '乙': '石門星', '丙': '鳳閣星', '丁': '調舒星', '戊': '禄存星', '己': '司禄星', '庚': '車騎星', '辛': '牽牛星', '壬': '龍高星', '癸': '玉堂星'},
    '乙': {'甲': '石門星', '乙': '貫索星', '丙': '調舒星', '丁': '鳳閣星', '戊': '司禄星', '己': '禄存星', '庚': '牽牛星', '辛': '車騎星', '壬': '玉堂星', '癸': '龍高星'},
    '丙': {'甲': '玉堂星', '乙': '龍高星', '丙': '貫索星', '丁': '石門星', '戊': '鳳閣星', '己': '調舒星', '庚': '禄存星', '辛': '司禄星', '壬': '車騎星', '癸': '牽牛星'},
    '丁': {'甲': '龍高星', '乙': '玉堂星', '丙': '石門星', '丁': '貫索星', '戊': '調舒星', '己': '鳳閣星', '庚': '司禄星', '辛': '禄存星', '壬': '牽牛星', '癸': '車騎星'},
    '戊': {'甲': '牽牛星', '乙': '車騎星', '丙': '司禄星', '丁': '禄存星', '戊': '貫索星', '己': '石門星', '庚': '鳳閣星', '辛': '調舒星', '壬': '龍高星', '癸': '玉堂星'},
    '己': {'甲': '車騎星', '乙': '牽牛星', '丙': '禄存星', '丁': '司禄星', '戊': '石門星', '己': '貫索星', '庚': '調舒星', '辛': '鳳閣星', '壬': '玉堂星', '癸': '龍高星'},
    '庚': {'甲': '調舒星', '乙': '鳳閣星', '丙': '玉堂星', '丁': '龍高星', '戊': '牽牛星', '己': '車騎星', '庚': '貫索星', '辛': '石門星', '壬': '司禄星', '癸': '禄存星'},
    '辛': {'甲': '鳳閣星', '乙': '調舒星', '丙': '龍高星', '丁': '玉堂星', '戊': '車騎星', '己': '牽牛星', '庚': '石門星', '辛': '貫索星', '壬': '禄存星', '癸': '司禄星'},
    '壬': {'甲': '司禄星', '乙': '禄存星', '丙': '牽牛星', '丁': '車騎星', '戊': '調舒星', '己': '鳳閣星', '庚': '玉堂星', '辛': '龍高星', '壬': '貫索星', '癸': '石門星'},
    '癸': {'甲': '禄存星', '乙': '司禄星', '丙': '車騎星', '丁': '牽牛星', '戊': '鳳閣星', '己': '調舒星', '庚': '龍高星', '辛': '玉堂星', '壬': '石門星', '癸': '貫索星'}
};

// 日支から十二大従星への変換テーブル
const branchToSubStarMap = {
    '子': {'子': '天庫星', '丑': '天印星', '寅': '天貴星', '卯': '天恍星', '辰': '天南星', '巳': '天禄星', '午': '天将星', '未': '天堂星', '申': '天胡星', '酉': '天極星', '戌': '天馳星', '亥': '天報星'},
    '丑': {'子': '天印星', '丑': '天庫星', '寅': '天報星', '卯': '天貴星', '辰': '天恍星', '巳': '天南星', '午': '天禄星', '未': '天将星', '申': '天堂星', '酉': '天胡星', '戌': '天極星', '亥': '天馳星'},
    '寅': {'子': '天貴星', '丑': '天報星', '寅': '天庫星', '卯': '天印星', '辰': '天貴星', '巳': '天恍星', '午': '天南星', '未': '天禄星', '申': '天将星', '酉': '天堂星', '戌': '天胡星', '亥': '天極星'},
    '卯': {'子': '天恍星', '丑': '天貴星', '寅': '天印星', '卯': '天庫星', '辰': '天報星', '巳': '天貴星', '午': '天恍星', '未': '天南星', '申': '天禄星', '酉': '天将星', '戌': '天堂星', '亥': '天胡星'},
    '辰': {'子': '天南星', '丑': '天恍星', '寅': '天貴星', '卯': '天報星', '辰': '天庫星', '巳': '天印星', '午': '天貴星', '未': '天恍星', '申': '天南星', '酉': '天禄星', '戌': '天将星', '亥': '天堂星'},
    '巳': {'子': '天禄星', '丑': '天南星', '寅': '天恍星', '卯': '天貴星', '辰': '天印星', '巳': '天庫星', '午': '天報星', '未': '天貴星', '申': '天恍星', '酉': '天南星', '戌': '天禄星', '亥': '天将星'},
    '午': {'子': '天将星', '丑': '天禄星', '寅': '天南星', '卯': '天恍星', '辰': '天貴星', '巳': '天報星', '午': '天庫星', '未': '天印星', '申': '天貴星', '酉': '天恍星', '戌': '天南星', '亥': '天禄星'},
    '未': {'子': '天堂星', '丑': '天将星', '寅': '天禄星', '卯': '天南星', '辰': '天恍星', '巳': '天貴星', '午': '天印星', '未': '天庫星', '申': '天報星', '酉': '天貴星', '戌': '天恍星', '亥': '天南星'},
    '申': {'子': '天胡星', '丑': '天堂星', '寅': '天将星', '卯': '天禄星', '辰': '天南星', '巳': '天恍星', '午': '天貴星', '未': '天報星', '申': '天庫星', '酉': '天印星', '戌': '天貴星', '亥': '天恍星'},
    '酉': {'子': '天極星', '丑': '天胡星', '寅': '天堂星', '卯': '天将星', '辰': '天禄星', '巳': '天南星', '午': '天恍星', '未': '天貴星', '申': '天印星', '酉': '天庫星', '戌': '天報星', '亥': '天貴星'},
    '戌': {'子': '天馳星', '丑': '天極星', '寅': '天胡星', '卯': '天堂星', '辰': '天将星', '巳': '天禄星', '午': '天南星', '未': '天恍星', '申': '天貴星', '酉': '天報星', '戌': '天庫星', '亥': '天印星'},
    '亥': {'子': '天報星', '丑': '天馳星', '寅': '天極星', '卯': '天胡星', '辰': '天堂星', '巳': '天将星', '午': '天禄星', '未': '天南星', '申': '天恍星', '酉': '天貴星', '戌': '天印星', '亥': '天庫星'}
};

// 天中殺の計算用
const tenchusatsuMap = {
    '甲子': '戌亥', '乙丑': '戌亥', '丙寅': '子丑', '丁卯': '子丑', '戊辰': '寅卯', '己巳': '寅卯',
    '庚午': '辰巳', '辛未': '辰巳', '壬申': '午未', '癸酉': '午未', '甲戌': '申酉', '乙亥': '申酉',
    '丙子': '戌亥', '丁丑': '戌亥', '戊寅': '子丑', '己卯': '子丑', '庚辰': '寅卯', '辛巳': '寅卯',
    '壬午': '辰巳', '癸未': '辰巳', '甲申': '午未', '乙酉': '午未', '丙戌': '申酉', '丁亥': '申酉',
    '戊子': '戌亥', '己丑': '戌亥', '庚寅': '子丑', '辛卯': '子丑', '壬辰': '寅卯', '癸巳': '寅卯',
    '甲午': '辰巳', '乙未': '辰巳', '丙申': '午未', '丁酉': '午未', '戊戌': '申酉', '己亥': '申酉',
    '庚子': '戌亥', '辛丑': '戌亥', '壬寅': '子丑', '癸卯': '子丑', '甲辰': '寅卯', '乙巳': '寅卯',
    '丙午': '辰巳', '丁未': '辰巳', '戊申': '午未', '己酉': '午未', '庚戌': '申酉', '辛亥': '申酉',
    '壬子': '戌亥', '癸丑': '戌亥', '甲寅': '子丑', '乙卯': '子丑', '丙辰': '寅卯', '丁巳': '寅卯',
    '戊午': '辰巳', '己未': '辰巳', '庚申': '午未', '辛酉': '午未', '壬戌': '申酉', '癸亥': '申酉'
};

// 日の干支を計算する関数
function calculateDayStem(year, month, day) {
    // 基準日（1900年1月1日）からの経過日数を計算
    const baseDate = new Date(1900, 0, 1);
    const targetDate = new Date(year, month - 1, day);
    const daysDiff = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
    
    // 1900年1月1日は庚子の日（庚=6, 子=0）
    const baseStemIndex = 6;
    const baseBranchIndex = 0;
    
    const stemIndex = (baseStemIndex + daysDiff) % 10;
    const branchIndex = (baseBranchIndex + daysDiff) % 12;
    
    return {
        stem: tenStems[stemIndex],
        branch: twelveBranches[branchIndex]
    };
}

// 年・月の干支を簡易計算する関数
function calculateYearMonthStem(year, month) {
    // 簡易的な計算（実際はより複雑）
    const yearStemIndex = (year - 1900) % 10;
    const yearBranchIndex = (year - 1900) % 12;
    
    const monthStemIndex = (yearStemIndex * 2 + month - 1) % 10;
    const monthBranchIndex = (month - 1) % 12;
    
    return {
        yearStem: tenStems[yearStemIndex],
        yearBranch: twelveBranches[yearBranchIndex],
        monthStem: tenStems[monthStemIndex],
        monthBranch: twelveBranches[monthBranchIndex]
    };
}

// 算命学の計算
function calculateSanmeigaku() {
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);

    // 日の干支を計算
    const dayStem = calculateDayStem(year, month, day);
    const yearMonthStem = calculateYearMonthStem(year, month);
    
    // 陰占（干支の配置）
    const insenData = {
        yearStem: yearMonthStem.yearStem,
        yearBranch: yearMonthStem.yearBranch,
        monthStem: yearMonthStem.monthStem,
        monthBranch: yearMonthStem.monthBranch,
        dayStem: dayStem.stem,
        dayBranch: dayStem.branch
    };
    
    // 陽占（人体星図）の計算
    const selectedMainStars = {
        north: stemToStarMap[insenData.dayStem][insenData.yearStem],
        east: stemToStarMap[insenData.dayStem][insenData.monthStem],
        center: stemToStarMap[insenData.dayStem][insenData.dayStem],
        west: stemToStarMap[insenData.dayStem][insenData.monthStem],
        south: stemToStarMap[insenData.dayStem][insenData.yearStem]
    };

    // 十二大従星の計算
    const selectedSubStars = {
        leftShoulder: branchToSubStarMap[insenData.dayBranch][insenData.yearBranch],
        leftFoot: branchToSubStarMap[insenData.dayBranch][insenData.monthBranch],
        rightFoot: branchToSubStarMap[insenData.dayBranch][insenData.dayBranch]
    };

    // 天中殺の計算
    const dayColumn = insenData.dayStem + insenData.dayBranch;
    const tenchusatsuType = tenchusatsuMap[dayColumn] || '戌亥';

    // 結果を表示
    displayResults(selectedMainStars, selectedSubStars, tenchusatsuType);
}

// 結果の表示
function displayResults(mainStars, subStars, tenchusatsuType) {
    // セクションの切り替え
    document.getElementById('inputSection').classList.add('hidden');
    document.getElementById('resultSection').classList.remove('hidden');

    // 人体星図の表示
    displayHumanChart(mainStars);

    // 十大主星の解説
    displayMainStarExplanation(mainStars);

    // 十二大従星の解説
    displaySubStarExplanation(subStars);

    // 天中殺の表示
    displayTenchusatsu(tenchusatsuType);

    // 総合鑑定
    displayOverallReading(mainStars, subStars, tenchusatsuType);

    // スクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 人体星図の表示
function displayHumanChart(mainStars) {
    const positions = ['north', 'east', 'center', 'west', 'south'];
    
    positions.forEach(position => {
        const starName = mainStars[position];
        const element = document.getElementById(position + 'Star');
        element.querySelector('.star-name').textContent = starName;
    });
}

// 十大主星の解説表示
function displayMainStarExplanation(mainStars) {
    const container = document.getElementById('mainStarExplanation');
    let html = '';

    // 中央の星（主星）の詳細解説
    const centerStar = mainStars.center;
    const centerStarData = tenMainStars[centerStar];
    
    html += `
        <h3>あなたの主星：${centerStar}</h3>
        <p><strong>タイプ：</strong>${centerStarData.type}</p>
        <p><strong>キーワード：</strong>${centerStarData.keywords.join('、')}</p>
        <p>${centerStarData.description}</p>
    `;

    // その他の星の簡単な説明
    const positions = {
        north: '表面意識',
        east: '仕事・社会',
        west: '家庭・配偶者',
        south: '部下・子供'
    };

    html += '<h3>その他の星の配置</h3>';
    
    Object.entries(positions).forEach(([position, meaning]) => {
        const starName = mainStars[position];
        const starData = tenMainStars[starName];
        html += `<p><strong>${meaning}（${starName}）：</strong>${starData.keywords.slice(0, 3).join('、')}</p>`;
    });

    container.innerHTML = html;
}

// 十二大従星の解説表示
function displaySubStarExplanation(subStars) {
    const container = document.getElementById('subStarExplanation');
    let html = '';
    let totalEnergy = 0;

    const periods = {
        leftShoulder: '初年期（0-30歳）',
        leftFoot: '中年期（30-60歳）',
        rightFoot: '晩年期（60歳以降）'
    };

    Object.entries(periods).forEach(([position, period]) => {
        const starName = subStars[position];
        const starData = twelveSubStars[starName];
        totalEnergy += starData.energy;
        
        html += `
            <h3>${period}：${starName}</h3>
            <p><strong>エネルギー値：</strong>${starData.energy}点</p>
            <p><strong>キーワード：</strong>${starData.keywords.join('、')}</p>
            <p>${starData.description}</p>
        `;
    });

    container.innerHTML = html;

    // エネルギー値の表示
    const energyFill = document.getElementById('energyFill');
    const energyValue = document.getElementById('energyValue');
    const energyPercentage = (totalEnergy / 36) * 100; // 最大36点
    
    energyFill.style.width = energyPercentage + '%';
    energyValue.textContent = `${totalEnergy}点 / 36点`;

    // 従星の名前を表示
    document.querySelector('#leftShoulderStar .sub-star-name').textContent = subStars.leftShoulder;
    document.querySelector('#leftFootStar .sub-star-name').textContent = subStars.leftFoot;
    document.querySelector('#rightFootStar .sub-star-name').textContent = subStars.rightFoot;
}

// 天中殺の表示
function displayTenchusatsu(type) {
    const tenchusatsu = tenchusatsuTypes[type];
    
    document.getElementById('tenchusatsuType').textContent = tenchusatsu.name;
    document.getElementById('tenchusatsuPeriod').textContent = 
        `年運：${tenchusatsu.period} / 月運：${tenchusatsu.months}`;
    document.getElementById('tenchusatsuDesc').innerHTML = `
        <p><strong>特徴：</strong>${tenchusatsu.characteristics}</p>
        <p><strong>アドバイス：</strong>${tenchusatsu.advice}</p>
    `;
}

// 総合鑑定の表示
function displayOverallReading(mainStars, subStars, tenchusatsuType) {
    const container = document.getElementById('overallReading');
    const centerStar = tenMainStars[mainStars.center];
    const tenchusatsu = tenchusatsuTypes[tenchusatsuType];
    
    let html = `
        <h3>あなたの宿命</h3>
        <p>あなたは${mainStars.center}を主星に持つ、${centerStar.keywords[0]}に富んだ人です。
        ${centerStar.description}</p>
        
        <h3>人生の流れ</h3>
        <p>初年期は${subStars.leftShoulder}の影響で${twelveSubStars[subStars.leftShoulder].keywords[0]}な時期を過ごし、
        中年期は${subStars.leftFoot}により${twelveSubStars[subStars.leftFoot].keywords[0]}な展開が期待できます。
        晩年期は${subStars.rightFoot}の影響で${twelveSubStars[subStars.rightFoot].keywords[0]}な人生となるでしょう。</p>
        
        <h3>開運のポイント</h3>
        <p>あなたの${tenchusatsu.name}という天中殺のタイプから、${tenchusatsu.characteristics}
        ${tenchusatsu.advice}</p>
        
        <h3>総合的なアドバイス</h3>
        <p>あなたの持つ星の配置から、${centerStar.keywords.join('と')}を活かすことが成功への近道です。
        特に${mainStars.east}が東にあることから、仕事面では${tenMainStars[mainStars.east].keywords[0]}を発揮することで、
        より良い結果を得られるでしょう。</p>
    `;
    
    container.innerHTML = html;
}

// フォームのリセット
function resetForm() {
    document.getElementById('birthdateForm').reset();
    document.getElementById('resultSection').classList.add('hidden');
    document.getElementById('inputSection').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}