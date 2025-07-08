#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
数秘術プログラム
生年月日から運命数（ライフパスナンバー）を計算し、運勢を占います
"""

import datetime
from typing import Dict, List

class Numerology:
    """数秘術クラス"""
    
    def __init__(self):
        # 各数字の意味
        self.meanings = {
            1: {
                "title": "リーダー",
                "traits": ["独立心が強い", "創造性に富む", "リーダーシップがある", "積極的"],
                "advice": "自信を持って行動し、新しいことに挑戦しましょう"
            },
            2: {
                "title": "協調者",
                "traits": ["協調性がある", "感受性が豊か", "平和主義", "チームワークを大切にする"],
                "advice": "人との調和を大切にし、サポート役として力を発揮しましょう"
            },
            3: {
                "title": "表現者",
                "traits": ["創造性豊か", "コミュニケーション能力が高い", "楽観的", "芸術的才能"],
                "advice": "自己表現を大切にし、クリエイティブな活動に取り組みましょう"
            },
            4: {
                "title": "建設者",
                "traits": ["堅実", "組織的", "責任感が強い", "忍耐力がある"],
                "advice": "着実に計画を立て、継続的な努力を続けましょう"
            },
            5: {
                "title": "冒険者",
                "traits": ["自由を愛する", "変化を好む", "好奇心旺盛", "多才"],
                "advice": "新しい経験を積極的に求め、自由な発想を大切にしましょう"
            },
            6: {
                "title": "世話人",
                "traits": ["責任感が強い", "家族思い", "愛情深い", "奉仕精神"],
                "advice": "他人への思いやりを大切にし、家族や友人との絆を深めましょう"
            },
            7: {
                "title": "探求者",
                "traits": ["分析力がある", "直感力が鋭い", "精神的", "研究熱心"],
                "advice": "内なる声に耳を傾け、知識と智慧を深めましょう"
            },
            8: {
                "title": "達成者",
                "traits": ["野心的", "実行力がある", "成功志向", "組織運営能力"],
                "advice": "目標に向かって着実に努力し、成功を掴みましょう"
            },
            9: {
                "title": "完成者",
                "traits": ["博愛精神", "完璧主義", "理想主義", "人道的"],
                "advice": "広い視野を持ち、社会貢献を意識して行動しましょう"
            },
            11: {
                "title": "直感者（マスターナンバー）",
                "traits": ["直感力が鋭い", "霊感がある", "感受性が強い", "理想主義"],
                "advice": "直感を信じ、精神的な成長を目指しましょう"
            },
            22: {
                "title": "建築家（マスターナンバー）",
                "traits": ["大きな夢を持つ", "実現力がある", "組織運営能力", "社会的影響力"],
                "advice": "大きな目標を設定し、社会に貢献する活動を行いましょう"
            },
            33: {
                "title": "奉仕者（マスターナンバー）",
                "traits": ["献身的", "癒しの力", "教育者", "愛に満ちた"],
                "advice": "他者への奉仕を通じて、愛と癒しを広めましょう"
            }
        }
    
    def calculate_life_path_number(self, birth_date: str) -> int:
        """
        生年月日から運命数（ライフパスナンバー）を計算
        
        Args:
            birth_date: 生年月日（YYYY-MM-DD形式）
            
        Returns:
            運命数
        """
        try:
            # 日付をパース
            date_obj = datetime.datetime.strptime(birth_date, "%Y-%m-%d")
            
            # 年、月、日をそれぞれ一桁になるまで足す
            year = self._reduce_to_single_digit(date_obj.year)
            month = self._reduce_to_single_digit(date_obj.month)
            day = self._reduce_to_single_digit(date_obj.day)
            
            # 合計を計算
            total = year + month + day
            
            # マスターナンバーかチェック
            if total in [11, 22, 33]:
                return total
            
            # 一桁になるまで足す
            return self._reduce_to_single_digit(total)
            
        except ValueError:
            raise ValueError("日付は YYYY-MM-DD 形式で入力してください")
    
    def _reduce_to_single_digit(self, number: int) -> int:
        """
        数字を一桁になるまで各桁を足す
        
        Args:
            number: 計算対象の数字
            
        Returns:
            一桁の数字
        """
        while number >= 10:
            # マスターナンバーの場合はそのまま返す
            if number in [11, 22, 33]:
                return number
            
            # 各桁の数字を足す
            digit_sum = 0
            while number > 0:
                digit_sum += number % 10
                number //= 10
            number = digit_sum
        
        return number
    
    def get_fortune(self, life_path_number: int) -> Dict:
        """
        運命数から運勢を取得
        
        Args:
            life_path_number: 運命数
            
        Returns:
            運勢情報
        """
        return self.meanings.get(life_path_number, {
            "title": "不明",
            "traits": ["情報がありません"],
            "advice": "別の日付で試してみてください"
        })
    
    def calculate_name_number(self, name: str) -> int:
        """
        名前から姓名数を計算（アルファベット）
        
        Args:
            name: 名前（アルファベット）
            
        Returns:
            姓名数
        """
        # A=1, B=2, ..., Z=26 として計算
        total = 0
        for char in name.upper():
            if char.isalpha():
                total += ord(char) - ord('A') + 1
        
        # マスターナンバーかチェック
        if total in [11, 22, 33]:
            return total
        
        return self._reduce_to_single_digit(total)

def main():
    """メイン関数"""
    numerology = Numerology()
    
    print("=" * 50)
    print("          数秘術プログラム")
    print("=" * 50)
    
    while True:
        print("\n【メニュー】")
        print("1. 生年月日から運命数を計算")
        print("2. 名前から姓名数を計算")
        print("3. 終了")
        
        choice = input("\n選択してください (1-3): ").strip()
        
        if choice == "1":
            try:
                birth_date = input("生年月日を入力してください (YYYY-MM-DD): ").strip()
                life_path_number = numerology.calculate_life_path_number(birth_date)
                fortune = numerology.get_fortune(life_path_number)
                
                print(f"\n【結果】")
                print(f"運命数: {life_path_number}")
                print(f"タイプ: {fortune['title']}")
                print(f"特徴: {', '.join(fortune['traits'])}")
                print(f"アドバイス: {fortune['advice']}")
                
            except ValueError as e:
                print(f"エラー: {e}")
                
        elif choice == "2":
            name = input("名前をローマ字で入力してください: ").strip()
            if name:
                name_number = numerology.calculate_name_number(name)
                fortune = numerology.get_fortune(name_number)
                
                print(f"\n【結果】")
                print(f"姓名数: {name_number}")
                print(f"タイプ: {fortune['title']}")
                print(f"特徴: {', '.join(fortune['traits'])}")
                print(f"アドバイス: {fortune['advice']}")
            else:
                print("名前が入力されていません")
                
        elif choice == "3":
            print("プログラムを終了します。")
            break
            
        else:
            print("無効な選択です。1-3の数字を入力してください。")

if __name__ == "__main__":
    main()
