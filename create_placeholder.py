from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder(filename, text, size=(800, 600), color=(240, 240, 240)):
    # 画像を作成
    img = Image.new('RGB', size, color)
    d = ImageDraw.Draw(img)
    
    # フォントの設定（デフォルトフォントを使用）
    try:
        # Windowsの標準的なフォントパスを試す
        font = ImageFont.truetype("arial.ttf", 40)
    except IOError:
        # フォントが見つからない場合はデフォルトを使用
        font = ImageFont.load_default()

    # テキストの描画位置を計算（簡易的な中央揃え）
    # textbboxは新しいPillowのバージョンで推奨されるが、古い環境も考慮してtextsizeを使うか、
    # あるいは単純に座標を指定する
    
    # テキストの色
    text_color = (50, 50, 50)
    
    # テキストを描画
    d.text((50, 250), text, fill=text_color, font=font)
    
    # 保存
    img.save(filename)
    print(f"Created placeholder image: {filename}")

# 出力パス
output_path = r"c:\Users\maruy\.gemini\antigravity\scratch\life_creation\assets\lixil_regio.png"

# ディレクトリが存在することを確認
os.makedirs(os.path.dirname(output_path), exist_ok=True)

# 画像生成
create_placeholder(output_path, "LIXIL REGIO\n(Placeholder Image)")
