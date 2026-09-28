<template>
  <main>
    <header>
      <h1>Hijiri Sato</h1>
      <p class="sub">佐藤 聖璃</p>
    </header>

    <section>
      <h2>About</h2>
      <p>東京電機大学大学院 理工学研究科 情報学専攻に所属しています。バックエンドを中心に、いくつかの企業でインターンとして開発に関わってきました。</p>
      <p>小学生の頃からテニスを続けてきました。高校は仙台育英学園で硬式テニス部に所属し、全国選抜やインターハイにも出場。学生時代の多くを、部活に打ち込んできました。</p>
    </section>

    <section>
      <h2>Career</h2>
      <ul class="rows">
        <li v-for="item in career" :key="item.y + item.org">
          <span class="date">{{ item.y }}</span>
          <div>
            <div class="title">{{ item.org }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </li>
      </ul>
    </section>

    <section>
      <h2>Writing</h2>
      <ul class="rows">
        <li v-for="post in posts" :key="post.url">
          <span class="date">{{ post.y }}</span>
          <div>
            <a class="title" :href="post.url" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
            <div class="desc">{{ post.src }}</div>
          </div>
        </li>
      </ul>
    </section>

    <footer>
      <a href="https://github.com/hijsato" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://x.com/dxeynzdxiy8" target="_blank" rel="noopener noreferrer">X</a>
      <a href="mailto:satohiji0808@outlook.com">Email</a>
    </footer>
  </main>
</template>

<script setup lang="ts">
const career = [
  { y: '2026.08', org: 'LINEヤフー株式会社', desc: 'LINE公式アカウントのサーバーサイド開発。' },
  { y: '2026.04', org: '株式会社サイバーエージェント', desc: 'CA Tech JOB。株式会社AbemaTV GrowthBackend team' },
  { y: '2025.08–10', org: 'LINEヤフー株式会社', desc: 'LINEスキマニのサーバーサイド開発。' },
  { y: '2025.09', org: '株式会社サイバーエージェント', desc: 'Universe。メディア事業のテーマに沿った短期集中のチーム開発。3日間のハッカソン形式で最優秀賞を受賞。' },
  { y: '2025.02–03', org: '株式会社サイバーエージェント', desc: 'Go College。Goの基本文法から実践的なバックエンド開発までを体系的に学習。' },
  { y: '2025.01–', org: '株式会社ラブグラフ', desc: '運用システムの新機能開発と既存機能の改修。' },
  { y: '2024.10–12', org: '株式会社ヴァル研究所', desc: '駅すぱあと搭載用の運賃データ・ダイヤデータ作成、および妥当性チェックツールの開発。' },
  { y: '2024.08–09', org: 'アスクル株式会社', desc: 'ASKULにおけるバックエンド開発業務。' },
]

const posts = [
  { y: '2026.09', title: 'Decaton Per-Key-Quotaによるプッシュ通知のスパイク制御', src: 'LINEヤフー Tech Blog', url: 'https://techblog.lycorp.co.jp/ja/20260928b' },
  { y: '2026.06', title: 'ABEMAの多層キャッシュ機構をリアーキテクチャした話', src: 'CyberAgent Developers Blog', url: 'https://developers.cyberagent.co.jp/blog/archives/64293/' },
  { y: '2025.10', title: 'Kafka×Decatonで80並列化した通知基盤', src: 'LINEヤフー Tech Blog', url: 'https://techblog.lycorp.co.jp/ja/20251028b' },
]
</script>

<style>
body {
  margin: 0;
  background: #fff;
  color: #111;
  font-family: 'EB Garamond', 'Shippori Mincho', serif;
  -webkit-font-smoothing: antialiased;
}

a {
  color: #111;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

main {
  max-width: 560px;
  margin: 0 auto;
  padding: 180px 16px 120px;
  display: flex;
  flex-direction: column;
  gap: 96px;
}

h1 {
  margin: 0;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.sub {
  margin: 6px 0 0;
  font-size: 14px;
  color: #666;
  letter-spacing: 0.2em;
}

section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h2 {
  margin: 0;
  font-size: 15px;
  font-weight: 400;
  font-style: italic;
  color: #666;
}

section > p {
  margin: 0;
  font-size: 15px;
  line-height: 2.1;
}

.rows {
  margin: 4px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.rows li {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 16px;
}

.date {
  font-size: 14px;
  color: #666;
}

.title {
  font-size: 15px;
  line-height: 1.8;
}

.desc {
  margin-top: 4px;
  font-size: 13px;
  line-height: 1.9;
  color: #666;
}

footer {
  display: flex;
  gap: 24px;
  font-size: 14px;
}

footer a {
  color: #666;
}

@media (max-width: 600px) {
  main {
    padding-top: 96px;
    gap: 72px;
  }

  .rows li {
    grid-template-columns: 1fr;
    gap: 2px;
  }
}
</style>
