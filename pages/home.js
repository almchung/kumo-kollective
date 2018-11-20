const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
  <html>
    <header>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
      <link rel="stylesheet" type="text/css" href="assets/index.css">
      <link rel="stylesheet" type="text/css" href="assets/webfonts.css">
    </header>
    <body class="bg-lightest-blue">
    <nav class="avenir pa2 pa4-l">
      <a class="link dim dark-gray    f6 f5-ns dib mh3" title="KUMO">KUMO</a>
      <a class="link dim dark-gray    f6 f5-ns dib mr3" href="projects" title="Projects">Projects</a>
      <a class="link dim dark-gray    f6 f5-ns dib mr3" href="members" title="Members">Members</a>
      <a class="link dim dark-gray    f6 f5-ns dib" href="contact" title="Contact">Contact</a>
    </nav>
      <section class="pt5 pt6-m pa6-l near-black">
        <h3 class="kokoro tc f6 f5-l">クモコレクティブ</h3>
        <h1 class="title tc f1 f-headline-l mb0">K U M O</h1>
        <h1 class="title tc f3 f1-l mt0 mb4 mb5-m mb6-l">K o l l e c t i v e</h1>
        <div class="mw9 center pa3 pa1-l">
          <div class="fr w-100-l w-third-l pa2 pa2-l">
            <p class="avenir tr f7 f6-ns lh-copy measure-narrow">when the format of comics meets algorithm-based image production means</p>
            <p class="avenir tr f7 f6-ns lh-copy measure-narrow">漫画の形式がアルゴリズムベースの画像生成手段に会ったとき</p>
          </div>
        </div>
      </section>
    </body>
  </html>
  `

  function update (e) {
    emit('update', { value: e.target.value })
  }
}
