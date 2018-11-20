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
      <section class="center mw6 mw8-l cf pa2 pa4-ns">
        <article class="fr-l mw5-l bg-white br3 pa4 ma4 pa4-l ma3-l">
          <div class="tc">
            <img src="../assets/members/avatar-1.png" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">Akashi Samejima</h1>
          </div>
          <p class="lh-copy measure center f6 black-70">
            Bio: 準備中です。しばらくお待ちください。
            Quote: 準備中です。しばらくお待ちください。
            Works: 準備中です。しばらくお待ちください。
          </p>
        </article>
        <article class="fr-l mw5-l bg-white br3 pa4 ma4 pa4-l ma3-l">
          <div class="tc">
            <img src="../assets/members/avatar-2.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">Haruhara Kurumi</h1>
          </div>
          <p class="lh-copy measure center f6 black-70">
            Bio: 準備中です。しばらくお待ちください。
            Quote: 準備中です。しばらくお待ちください。
            Works: 準備中です。しばらくお待ちください。
          </p>
        </article>
        <article class="fr-l mw5-l bg-white br3 pa4 ma4 pa4-l ma3-l">
          <div class="tc">
            <img src="../assets/members/avatar-3.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">Mizuho Sagi</h1>
          </div>
          <p class="lh-copy measure center f6 black-70">
            Bio: 準備中です。しばらくお待ちください。
            Quote: 準備中です。しばらくお待ちください。
            Works: 準備中です。しばらくお待ちください。
          </p>
        </article>
        <article class="fr-l mw5-l bg-white br3 pa4 ma4 pa4-l ma3-l">
          <div class="tc">
            <img src="../assets/members/avatar-4.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">Iroha Kaname</h1>
          </div>
          <p class="lh-copy measure center f6 black-70">
            Bio: 準備中です。しばらくお待ちください。
            Quote: 準備中です。しばらくお待ちください。
            Works: 準備中です。しばらくお待ちください。
          </p>
        </article>
        <article class="fr-l mw5-l bg-white br3 pa4 ma4 pa4-l ma3-l">
          <div class="tc">
            <img src="../assets/members/avatar-5.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">Serika Makise</h1>
          </div>
          <p class="lh-copy measure center f6 black-70">
            Bio: 準備中です。しばらくお待ちください。
            Quote: 準備中です。しばらくお待ちください。
            Works: 準備中です。しばらくお待ちください。
          </p>
        </article>
        <article class="fr-l mw5-l bg-white br3 pa4 ma4 pa4-l ma3-l">
          <div class="tc">
            <img src="../assets/members/avatar-6.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">Chizuru Sagawa</h1>
          </div>
          <p class="lh-copy measure center f6 black-70">
            Bio: 準備中です。しばらくお待ちください。
            Quote: 準備中です。しばらくお待ちください。
            Works: 準備中です。しばらくお待ちください。
          </p>
        </article>
        <article class="fr-l mw5-l bg-white br3 pa4 ma4 pa4-l ma3-l">
          <div class="tc">
            <img src="../assets/members/avatar-7.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">Mirai Akemi</h1>
          </div>
          <p class="lh-copy measure center f6 black-70">
            Bio: 準備中です。しばらくお待ちください。
            Quote: 準備中です。しばらくお待ちください。
            Works: 準備中です。しばらくお待ちください。
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