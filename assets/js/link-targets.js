(function () {
  function initLinkTargets() {
    var current = new URL(window.location.href);

    document.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href').trim();
      if (!href || href.charAt(0) === '#') return;

      var destination = new URL(href, document.baseURI);
      if (!['http:', 'https:', 'mailto:'].includes(destination.protocol)) return;

      // Keep navigation within the current page in this tab.
      if (destination.origin === current.origin &&
          destination.pathname === current.pathname &&
          destination.search === current.search) return;

      link.target = '_blank';
      link.relList.add('noopener');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLinkTargets);
  } else {
    initLinkTargets();
  }
})();
