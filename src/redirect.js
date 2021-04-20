// Single Page Apps for GitHub Pages
// https://github.com/rafrex/spa-github-pages
// Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License

let redirect404 = () => {
  var segmentCount = 1;
  var location = window.location;

  const origin = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
  const base = location.pathname.split('/').slice(0, 1 + segmentCount).join('/');

  location.replace(
    origin +
    base + '/?p=/' +
    location.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
    (location.search ? '&q=' + location.search.slice(1).replace(/&/g, '~and~') : '') +
    location.hash
  );
};

let recieveRedirect = () => {
  (function(location) {
    if (location.search) {
      var q = {};
      location.search.slice(1).split('&').forEach(function(v) {
        var a = v.split('=');
        q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
      });
      if (q.p !== undefined) {
        window.history.replaceState(null, null,
          location.pathname.slice(0, -1) + (q.p || '') +
          (q.q ? ('?' + q.q) : '') +
          location.hash
        );
      }
    }
  }(window.location));
};
