(function() {
  function initPublicationFilters() {
    const list = document.querySelector('[data-publication-list]');
    if (!list) return;

    const buttons = document.querySelectorAll('[data-publication-filter]');
    const papers = list.querySelectorAll('.publication-entry');
    const emptyMessage = document.querySelector('[data-publication-empty]');

    papers.forEach(function(paper) {
      const badge = paper.querySelector('.publication-venue-badge');
      if (badge && paper.dataset.status === 'preprint') {
        badge.textContent = 'Preprint';
      }
    });

    function applyFilter(status) {
      let visibleCount = 0;
      papers.forEach(function(paper) {
        const matches = status === 'all' || paper.dataset.status === status;
        paper.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      buttons.forEach(function(button) {
        const selected = button.dataset.publicationFilter === status;
        button.classList.toggle('active', selected);
        button.setAttribute('aria-pressed', String(selected));
      });

      if (emptyMessage) {
        emptyMessage.hidden = visibleCount > 0;
        emptyMessage.textContent = status === 'preprint'
          ? 'No preprints to display yet.'
          : status === 'accepted'
            ? 'No accepted papers to display yet.'
            : 'No publications to display yet.';
      }
    }

    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        applyFilter(button.dataset.publicationFilter);
      });
    });

    applyFilter('all');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPublicationFilters);
  } else {
    initPublicationFilters();
  }
})();
