const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
  <html>
    <header>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
      <link rel="stylesheet" type="text/css" href="../assets/index.css">
      <link rel="stylesheet" type="text/css" href="../assets/webfonts.css">
    </header>
    <body class="avenir bg-lightest-blue">
      <nav class="avenir pa2 pa4-l">
        <a class="link dim dark-gray    f6 f5-ns dib mh3" href="../" title="KUMO">KUMO</a>
        <a class="link dim dark-gray    f6 f5-ns dib mr3" href="../projects" title="Projects">Projects</a>
        <a class="link dim dark-gray    f6 f5-ns dib mr3" href="../members" title="Members">Members</a>
        <a class="link dim dark-gray    f6 f5-ns dib" href="../contact" title="Contact">Contact</a>
      </nav>
      <section class="pa3 pa4-ns" id="projects">
        <h1 class="title tc f2 f1-l">Members</h1>
        <h3 class="kokoro tr f5 f4-l lh-copy">メンバーズ</h3>
      </section>
      <section class="center mw6 mw7-l cf pa2 pa4-ns">
        <img src="https://www.dropbox.com/s/72uxlmzbu4pi56z/rl-chart.jpg?dl=1" class="mw-100" alt="relationship-chart">
      </section>
      <section class="center mw6 mw8-l cf pa2 pa4-ns">
        <article class="fr-l mw5-l bg-white br3 pa4 ma4 pa4-l ma3-l">
          <div class="tc pt3-l">
            <img src="../assets/members/avatar-1.png" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">Akashi Samejima</h1>
          </div>
          <p class="lh-copy measure center f7 black-70 h5-l pt3">
            Askashi Samejimaの真のアイデンティティーは、漫画家であるが、彼女は美術史でも、古いトリックと質問に戻る。平面内シムボルリジュムが濃縮されたイミッジ - パラメターをスライドする小さな動きで彼女は、画像の構成と文脈の中内製された物語を複雑化する試みを試みている。
          </p>
          <p class="lh-copy measure center f6 black-70">
            Favorite 🍦 : matcha
          </p>
        </article>
        <article class="fr-l mw5-l bg-white br3 pa4 ma4 pa4-l ma3-l">
          <div class="tc pt3-l">
            <img src="../assets/members/avatar-6.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">Haruhara Kurumi</h1>
          </div>
          <p class="lh-copy measure center f7 black-70 h5-l pt3">
            Haruhara Kurumi作家の周辺の人たちは、彼女をゲーマーであり、オタクと呼ぶ。現在主業とデザインスタジオに通う彼女は、自分が乗る - ゲーマーであり、脱 - オタク的美学を発明していると主張する。Maximalismとジャンル - ジャンシクミに沈潜しやすい他のオタク出身の同僚とは異なり、彼女はオタク的な経験をminimalに捕捉して出そうとする野心がある。
          </p>
          <p class="lh-copy measure center f6 black-70">
            Favorite 🍦 : birthday cake
          </p>
        </article>
        <article class="fr-l mw5-l bg-white br3 pa4 ma4 pa4-l ma3-l">
          <div class="tc pt3-l">
            <img src="../assets/members/avatar-4.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">Mizuho Sagi</h1>
          </div>
          <p class="lh-copy measure center f7 black-70 h5-l pt3">
            Mizuho Sagiは、技術の発展過程の中で編入、あるいは発明されるアイデンティティーとそれらの間の権力構造を見つけ可視化するのに努力している。現在、彼女はシリコンバレー内のアジアン言語借用について研究中である。
          </p>
          <p class="lh-copy measure center f6 black-70">
            Favorite 🍦 : rose and saffron
          </p>
        </article>
        <article class="fr-l mw5-l bg-white br3 pa4 ma4 pa4-l ma3-l">
          <div class="tc pt3-l">
            <img src="../assets/members/avatar-2.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">Iroha Kaname</h1>
          </div>
          <p class="lh-copy measure center f7 black-70 h5-l pt3">
            Iroha Kanameは現グローバルシステム構成の過程の中で、静かに権威を継承されたシンボルに関心を払う。彼女は、機械的な方法で、日常の中のイメージを分解した後、その過程の中で生成された作品を油断している読者に隠された神話の証拠品として再 - 提示する。
          </p>
          <p class="lh-copy measure center f6 black-70">
            Favorite 🍦 : burbon toffee
          </p>
        </article>
        <article class="fr-l mw5-l bg-white br3 pa4 ma4 pa4-l ma3-l">
          <div class="tc pt3-l">
            <img src="../assets/members/avatar-5.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">Serika Makise</h1>
          </div>
          <p class="lh-copy measure center f7 black-70 h5-l pt3">
            Serika Makiseは作家という言葉よりも先に普通の科学ドラに自分自身を紹介する。力学システムの内在した詩的エレメントを可視化する作業をしている。他の言葉で、定数とかというものについて簡単に導かれてしまういくつかの特定の種類の耽美主義の自己探求かもしれない。
          </p>
          <p class="lh-copy measure center f6 black-70">
            Favorite 🍦 : olive oil and salt
          </p>
        </article>
        <article class="fr-l mw5-l bg-white br3 pa4 ma4 pa4-l ma3-l">
          <div class="tc pt3-l">
            <img src="../assets/members/avatar-7.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">Chizuru Sagawa</h1>
          </div>
          <p class="lh-copy measure center f7 black-70 h5-l pt3">
            Chizuru Sagawaは今日もすぐに次の都市で飛ぶ準備ができていた。彼女は彼女の作品が見られるのまま、すべてのもの堂々と言う。彼女はそっと見せ、次の都市で収集するアンダーグラウンド書籍のリストは、有名なデザイナーが手作りしようと試みたエコレシピブックからアンダーグラウンドクィアエロ漫画まで多様だった。
          </p>
          <p class="lh-copy measure center f6 black-70">
            Favorite 🍦 : lychee coconut
          </p>
        </article>
        <article class="fr-l mw5-l bg-white br3 pa4 ma4 pa4-l ma3-l">
          <div class="tc pt3-l">
            <img src="../assets/members/avatar-3.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">Mirai Akemi</h1>
          </div>
          <p class="lh-copy measure center f7 black-70 h5-l pt3">
            Mirai Akemi作家はどこか少しおかしい。自分の作業について説明してほしいという要求にAkemiさんはjpeg画像圧縮時に発生する欠損についてエディタに二時間の間に連続メッセージを送ってきた。あふれ出るテキスト出力にどうしても誤ったコマンドを入力してしまったような気分になった... とにかく、最初はかなりなじみ見えるAkemiさんの作品だが、computer vision、machine learningなど、現在ホットtechキーワードが目に入ってくる瞬間、その作品が置かれた状況に対して在庫になる。
          </p>
          <p class="lh-copy measure center f6 black-70">
            Favorite 🍦 : dark chocolate with milk chocolate chip cookie dough
          </p>
        </article>
      </section>
    </body>
  </html>
  `

  function update (e) {
    emit('update', { value: e.target.value })
  }
}