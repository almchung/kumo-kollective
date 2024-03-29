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
      <section class="pa3 pa4-ns">
        <h1 class="title tc f2 f1-l">Contact</h1>
        <h3 class="kokoro tr f5 f4-l lh-copy">コンタクト</h3>
      </section>
      <article class="mw5 center bg-white br3 pa3 pa4-ns mv3">
      <h3 class="title tc f5 pb2 pb3-ns">Let's be friends \´･ᴗ･\` </h3>
        <div class="tc pb3">
          <a class="link hover-silver near-black dib mh3 tc" href="https://www.instagram.com/kumokollective/" title="Instagram">
            <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
            <span class="f6 db">Instagram</span>
          </a>
          <a class="link near-black hover-silver dib mh3 tc" title="GitHub">
            <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
            <span class="f6 db">GitHub</span>
          </a>
        </div>
      </article>
      <article class="mw6 center br3 pa4 pa5-ns mv3 measure">
        <p class="dark-gray f6">Inquiries regarding our anthology books and comic book exchange projects please contact our editor : <a class="dark-gray f6" href="http://almchng.com">AlM CHNG</a></p>
      </article>
    </body>
  </html>
  `

  function update (e) {
    emit('update', { value: e.target.value })
  }
}
