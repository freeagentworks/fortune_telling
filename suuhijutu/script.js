// 数秘術占いWebアプリのJavaScript - かわいいバージョン

// 各数字の意味データ
const numerologyMeanings = {
    1: {
        title: "リーダー",
        traits: ["独立心が強い", "創造性に富む", "リーダーシップがある", "積極的"],
        advice: "自信を持って行動し、新しいことに挑戦しましょう"
    },
    2: {
        title: "協調者",
        traits: ["協調性がある", "感受性が豊か", "平和主義", "チームワークを大切にする"],
        advice: "人との調和を大切にし、サポート役として力を発揮しましょう"
    },
    3: {
        title: "表現者",
        traits: ["創造性豊か", "コミュニケーション能力が高い", "楽観的", "芸術的才能"],
        advice: "自己表現を大切にし、クリエイティブな活動に取り組みましょう"
    },
    4: {
        title: "建設者",
        traits: ["堅実", "組織的", "責任感が強い", "忍耐力がある"],
        advice: "着実に計画を立て、継続的な努力を続けましょう"
    },
    5: {
        title: "冒険者",
        traits: ["自由を愛する", "変化を好む", "好奇心旺盛", "多才"],
        advice: "新しい経験を積極的に求め、自由な発想を大切にしましょう"
    },
    6: {
        title: "世話人",
        traits: ["責任感が強い", "家族思い", "愛情深い", "奉仕精神"],
        advice: "他人への思いやりを大切にし、家族や友人との絆を深めましょう"
    },
    7: {
        title: "探求者",
        traits: ["分析力がある", "直感力が鋭い", "精神的", "研究熱心"],
        advice: "内なる声に耳を傾け、知識と智慧を深めましょう"
    },
    8: {
        title: "達成者",
        traits: ["野心的", "実行力がある", "成功志向", "組織運営能力"],
        advice: "目標に向かって着実に努力し、成功を掴みましょう"
    },
    9: {
        title: "完成者",
        traits: ["博愛精神", "完璧主義", "理想主義", "人道的"],
        advice: "広い視野を持ち、社会貢献を意識して行動しましょう"
    },
    11: {
        title: "直感者（マスターナンバー）",
        traits: ["直感力が鋭い", "霊感がある", "感受性が強い", "理想主義"],
        advice: "直感を信じ、精神的な成長を目指しましょう"
    },
    22: {
        title: "建築家（マスターナンバー）",
        traits: ["大きな夢を持つ", "実現力がある", "組織運営能力", "社会的影響力"],
        advice: "大きな目標を設定し、社会に貢献する活動を行いましょう"
    },
    33: {
        title: "奉仕者（マスターナンバー）",
        traits: ["献身的", "癒しの力", "教育者", "愛に満ちた"],
        advice: "他者への奉仕を通じて、愛と癒しを広めましょう"
    }
};

// タブの切り替え
function showTab(tabName) {
    // すべてのタブボタンとコンテンツからactiveクラスを削除
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // 選択されたタブをアクティブにする
    document.querySelector(`[onclick="showTab('${tabName}')"]`).classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // 結果をクリア
    clearResult();
}

// 数字を一桁になるまで足す関数
function reduceToSingleDigit(number) {
    while (number >= 10) {
        // マスターナンバーの場合はそのまま返す
        if (number === 11 || number === 22 || number === 33) {
            return number;
        }
        
        // 各桁の数字を足す
        let sum = 0;
        while (number > 0) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        number = sum;
    }
    return number;
}

// 生年月日から運命数を計算
function calculateLifePathNumber() {
    const year = parseInt(document.getElementById('birth-year').value);
    const month = parseInt(document.getElementById('birth-month').value);
    const day = parseInt(document.getElementById('birth-day').value);
    
    // 入力値の検証
    if (!year || !month || !day) {
        showError("🌸 すべての項目を入力してくださいね♡");
        return;
    }
    
    if (year < 1900 || year > 2024) {
        showError("🎀 正しい年を入力してくださいね（1900-2024）♡");
        return;
    }
    
    if (month < 1 || month > 12) {
        showError("🌸 正しい月を入力してくださいね（1-12）♡");
        return;
    }
    
    if (day < 1 || day > 31) {
        showError("🌺 正しい日を入力してくださいね（1-31）♡");
        return;
    }
    
    // 日付の妥当性チェック
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        showError("🌸 存在しない日付ですね♡ もう一度確認してください✨");
        return;
    }
    
    // 各要素を一桁にする
    const reducedYear = reduceToSingleDigit(year);
    const reducedMonth = reduceToSingleDigit(month);
    const reducedDay = reduceToSingleDigit(day);
    
    // 合計を計算
    const total = reducedYear + reducedMonth + reducedDay;
    
    // マスターナンバーかチェック
    let lifePathNumber;
    if (total === 11 || total === 22 || total === 33) {
        lifePathNumber = total;
    } else {
        lifePathNumber = reduceToSingleDigit(total);
    }
    
    // 結果を表示
    showResult(lifePathNumber, `${year}年${month}月${day}日`);
}

// 名前から姓名数を計算
function calculateNameNumber() {
    const name = document.getElementById('name').value.trim();
    
    if (!name) {
        showError("🎀 お名前を入力してくださいね♡");
        return;
    }
    
    // アルファベットのみかチェック
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        showError("🌸 お名前はアルファベットで入力してくださいね♡");
        return;
    }
    
    // A=1, B=2, ..., Z=26 として計算
    let total = 0;
    for (let char of name.toUpperCase()) {
        if (char >= 'A' && char <= 'Z') {
            total += char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        }
    }
    
    // マスターナンバーかチェック
    let nameNumber;
    if (total === 11 || total === 22 || total === 33) {
        nameNumber = total;
    } else {
        nameNumber = reduceToSingleDigit(total);
    }
    
    // 結果を表示
    showResult(nameNumber, name);
}

// 結果を表示
function showResult(number, input) {
    const resultContent = document.getElementById('result-content');
    const meaning = numerologyMeanings[number];
    
    if (!meaning) {
        showError("🌸 計算結果に問題がありますね♡ もう一度試してください✨");
        return;
    }
    
    const traitsHtml = meaning.traits.map(trait => `<span class="trait-tag">${trait}</span>`).join('');
    
    resultContent.innerHTML = `
        <div class="result-card">
            <div class="result-number">${number}</div>
            <div class="result-title">🌸 ${meaning.title} 🌸</div>
            <div class="result-traits">
                <h3>🎆 あなたの素敵な特徴 🎆</h3>
                <div class="traits-list">
                    ${traitsHtml}
                </div>
            </div>
            <div class="result-advice">
                <strong>🎀 スペシャルアドバイス:</strong><br>
                ${meaning.advice} ✨
            </div>
        </div>
    `;
}

// エラーメッセージを表示
function showError(message) {
    const resultContent = document.getElementById('result-content');
    resultContent.innerHTML = `
        <div class="error-message">
            🌸😢 ${message}
        </div>
    `;
}

// 結果をクリア
function clearResult() {
    const resultContent = document.getElementById('result-content');
    resultContent.innerHTML = '';
}

// エンターキーでの計算実行
document.addEventListener('DOMContentLoaded', function() {
    // 生年月日の入力フィールド
    ['birth-year', 'birth-month', 'birth-day'].forEach(id => {
        document.getElementById(id).addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateLifePathNumber();
            }
        });
    });
    
    // 名前の入力フィールド
    document.getElementById('name').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateNameNumber();
        }
    });
});

// 今日の日付を取得してプレースホルダーに設定
window.addEventListener('load', function() {
    const today = new Date();
    const currentYear = today.getFullYear();
    
    // 年の最大値を現在の年に設定
    document.getElementById('birth-year').setAttribute('max', currentYear);
});