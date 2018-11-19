const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
  <body>
    <nav class="avenir pa4 pa4-ns bg-lightest-blue">
      <a class="link dim dark-gray    f6 f5-ns dib mr3" href="/" title="KUMO">KUMO</a>
      <a class="link dim dark-gray    f6 f5-ns dib mr3" href="/projects" title="Projects">Projects</a>
      <a class="link dim dark-gray    f6 f5-ns dib mr3" href="/members" title="Members">Members</a>
      <a class="link dim dark-gray    f6 f5-ns dib" href="/contact" title="Contact">Contact</a>
    </nav>
    <section class="pa6 pa6-ns bg-lightest-blue near-black">
      <h3 class="kokoro tc f5">クモコレクティブ</h3>
      <h1 class="title tc f-headline mb0">K U M O</h1>
      <h1 class="title tc f1 mt0 mb6">K o l l e c t i v e</h1>
      <div class="mw9 center ph2-ns">
        <div class="cf pa1 pa1-ns">
          <div class="fl w-100 w-third-ns pa2">
          </div>
          <div class="fl w-100 w-third-ns pa2">
          </div>
          <div class="fl w-100 w-third-ns pa2">
            <p class="avenir tr f6 lh-copy measure-narrow">when the format of comics meets algorithm-based image production means</p>
            <p class="avenir tr f6 lh-copy measure-narrow">漫画の形式がアルゴリズムベースの画像生成手段に会ったとき</p>
          </div>
        </div>
      </div>
    </section>
  </body>
  `

  function update (e) {
    emit('update', { value: e.target.value })
  }
}
