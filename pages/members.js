const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
  <body class="avenir bg-lightest-blue">
    <nav class="avenir pa4 pa4-ns">
      <a class="link dim dark-gray    f6 f5-ns dib mr3" href="/" title="KUMO">KUMO</a>
      <a class="link dim dark-gray    f6 f5-ns dib mr3" href="/projects" title="Projects">Projects</a>
      <a class="link dim dark-gray    f6 f5-ns dib mr3" href="/members" title="Members">Members</a>
      <a class="link dim dark-gray    f6 f5-ns dib" href="/contact" title="Contact">Contact</a>
    </nav>
    <section class="pa3 pa4-ns" id="projects">
      <h1 class="title tc f1">Members</h1>
      <h3 class="kokoro tr f4 lh-copy">メンバーズ</h3>
    </section>
    <section class="mw9 center ph3-ns">
    <div class="cf pa2 pa2-ns ph2-ns">
      <article class="fl mw5 bg-white br3 pa4 pa4-ns ma3-ns">
        <div class="tc">
          <img src="./assets/members/avatar-1.png" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
          <h1 class="f4">Akashi Samejima</h1>
        </div>
        <p class="lh-copy measure center f6 black-70">
          Bio: 準備中です。しばらくお待ちください。
          Quote: 準備中です。しばらくお待ちください。
          Works: 準備中です。しばらくお待ちください。
        </p>
      </article>
      <article class="fl mw5 bg-white br3 pa4 pa4-ns ma3-ns">
        <div class="tc">
          <img src="./assets/members/avatar-2.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
          <h1 class="f4">Haruhara Kurumi</h1>
        </div>
        <p class="lh-copy measure center f6 black-70">
          Bio: 準備中です。しばらくお待ちください。
          Quote: 準備中です。しばらくお待ちください。
          Works: 準備中です。しばらくお待ちください。
        </p>
      </article>
      <article class="fl mw5 bg-white br3 pa4 pa4-ns ma3-ns">
        <div class="tc">
          <img src="./assets/members/avatar-3.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
          <h1 class="f4">Mizaho Sagi</h1>
        </div>
        <p class="lh-copy measure center f6 black-70">
          Bio: 準備中です。しばらくお待ちください。
          Quote: 準備中です。しばらくお待ちください。
          Works: 準備中です。しばらくお待ちください。
        </p>
      </article>
      <article class="fl mw5 bg-white br3 pa4 pa4-ns ma3-ns">
        <div class="tc">
          <img src="./assets/members/avatar-4.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
          <h1 class="f4">Iroha Kaname</h1>
        </div>
        <p class="lh-copy measure center f6 black-70">
          Bio: 準備中です。しばらくお待ちください。
          Quote: 準備中です。しばらくお待ちください。
          Works: 準備中です。しばらくお待ちください。
        </p>
      </article>
      <article class="fl mw5 bg-white br3 pa4 pa4-ns ma3-ns">
        <div class="tc">
          <img src="./assets/members/avatar-5.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
          <h1 class="f4">Serika Makise</h1>
        </div>
        <p class="lh-copy measure center f6 black-70">
          Bio: 準備中です。しばらくお待ちください。
          Quote: 準備中です。しばらくお待ちください。
          Works: 準備中です。しばらくお待ちください。
        </p>
      </article>
      <article class="fl mw5 bg-white br3 pa4 pa4-ns ma3-ns">
        <div class="tc">
          <img src="./assets/members/avatar-6.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
          <h1 class="f4">Chizuru Sagawa</h1>
        </div>
        <p class="lh-copy measure center f6 black-70">
          Bio: 準備中です。しばらくお待ちください。
          Quote: 準備中です。しばらくお待ちください。
          Works: 準備中です。しばらくお待ちください。
        </p>
      </article>
      <article class="fl mw5 bg-white br3 pa4 pa4-ns ma3-ns">
        <div class="tc">
          <img src="./assets/members/avatar-7.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
          <h1 class="f4">Mirai Akemi</h1>
        </div>
        <p class="lh-copy measure center f6 black-70">
          Bio: 準備中です。しばらくお待ちください。
          Quote: 準備中です。しばらくお待ちください。
          Works: 準備中です。しばらくお待ちください。
        </p>
      </article>
      </div>
    </section>
  </body>
  `

  function update (e) {
    emit('update', { value: e.target.value })
  }
}