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
      <h1 class="title tc f1">Projects</h1>
      <h3 class="kokoro tr f4 lh-copy">プロジェクト</h3>
    </section>
    <section class="cf pa4-ns">
      <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
        <div class="aspect-ratio aspect-ratio--1x1">
          <img style="background-image:url(../assets/projects/elongation-vol0-2-preview.jpg)" 
          class="db bg-center cover aspect-ratio--object" />
        </div>
          <h3 class="f5 f4-ns mb0 black-90">Elongation vol 0</h3>
          <h3 class="f6 f5 fw4 mt2 black-60">Nov 2018</h3>
      </article>
      <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
        <div class="aspect-ratio aspect-ratio--1x1">
          <img style="background-image:url(../assets/projects/exchange-preview.jpg)" 
          class="db bg-center cover aspect-ratio--object" />
        </div>
        <a href="https://almchng.itch.io/comic-exchange-feb2017" class="ph2 ph0-ns pb3 link db">
          <h3 class="f5 f4-ns mb0 black-90">Comic Book Exchange</h3>
          <h3 class="f6 f5 fw4 mt2 black-60">Feb 2017</h3>
        </a>
      </article>
      <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
        <div class="aspect-ratio aspect-ratio--1x1">
          <img style="background-image:url(../assets/projects/neko-futura-preview.jpg)" 
          class="db bg-center cover aspect-ratio--object" />
        </div>
          <h3 class="f5 f4-ns mb0 black-90">Neko Futura</h3>
          <h3 class="f6 f5 fw4 mt2 black-60">2017 - ongoing</h3>
      </article>
    </section>
  </body>
  `

  function update (e) {
    emit('update', { value: e.target.value })
  }
}
