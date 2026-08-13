// ============================================================
// site.js — the ONE script every page includes:
//     <script src="site.js"></script>
//
// This file is the single control panel for anything that should
// run or appear on every page. To add a new site-wide feature later
// (ads, a comments widget, analytics, a cookie banner, etc.), write
// a new function below and call it at the bottom — you will NOT
// need to touch index.html / missions.html / mission.html / any
// future page to make it show up everywhere.
// ============================================================

var Site = {};

// ---------- HEADER ----------
Site.renderHeader = function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';

  var navItems = [
    { href: 'index.html', label: 'Home', match: ['index.html', ''] },
    { href: 'missions.html', label: 'Missions', match: ['missions.html', 'mission.html'] },
    { href: 'comics.html', label: 'Comics', match: ['comics.html'] },
    { href: 'case-files.html', label: 'Case Files', match: ['case-files.html', 'case-file.html'] },
    { href: 'neighborhood.html', label: 'The Neighborhood', match: ['neighborhood.html'] }
  ];

  var navHtml = navItems.map(function (item) {
    var isActive = item.match.indexOf(path) !== -1;
    return '<a href="' + item.href + '" class="tab' + (isActive ? ' active' : '') + '">' + item.label + '</a>';
  }).join('');

  document.write(
    '<header>' +
      '<div class="wrap header-inner">' +
        '<div class="brand">' +
          '<div class="brand-badge"><img class="birdy-icon" src="images/birdy-icon.png" alt="Birdy Chirp icon"></div>' +
          '<div class="brand-name display">BIRDY CHIRP</div>' +
        '</div>' +
        '<nav>' + navHtml + '</nav>' +
      '</div>' +
    '</header>'
  );
};

// ---------- FUTURE SITE-WIDE FEATURES GO HERE ----------
// Example of the pattern to follow when you're ready for one of these:
//
// Site.renderFooter = function () {
//   document.write('<footer>...</footer>');
// };
//
// Site.initAnalytics = function () {
//   // tracking snippet, runs on every page automatically
// };
//
// Site.initCommentsWidget = function () {
//   // e.g. load Giscus/Disqus config shared by every mission's comment section
// };

// ---------- RUN EVERYTHING FOR THIS PAGE ----------
Site.renderHeader();
// Site.renderFooter();       // uncomment once it exists
// Site.initAnalytics();      // uncomment once it exists
