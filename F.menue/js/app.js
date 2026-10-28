(function () {
  var root = document.documentElement;
  var menu = window.MENU;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  root.classList.add("js");

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function icon(id, cls) {
    return '<svg class="ill' + (cls ? " " + cls : "") + '" aria-hidden="true"><use href="#' + id + '"/></svg>';
  }
  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, val);
    } catch (e) { return null; }
  }
  // drinks given only in English show the English name as the main name
  function mainName(it, cls) {
    return it.ar
      ? '<span class="' + cls + '">' + esc(it.ar) + "</span>"
      : '<span class="' + cls + '" lang="en">' + esc(it.en) + "</span>";
  }
  // real photo first, then the flat illustration, then the section's line icon
  function visual(it, sec) {
    if (it.img) return '<img src="' + esc(it.img) + '" alt="" loading="lazy">';
    var art = it.art || sec.art;
    if (art) return '<img class="art-img" src="images/illustrations/' + esc(art) + '.svg" alt="" loading="lazy">';
    return icon(sec.icon);
  }
  function photo(it, sec, cls) {
    var badge = it.special ? '<span class="badge-special">مميز</span>' : "";
    return '<div class="' + cls + '">' + badge + visual(it, sec) + "</div>";
  }

  /* ---------- renderers ---------- */
  function sandwichCards(sec) {
    // same compact card as every other item, with the ingredients where the prices would be
    return '<div class="igrid">' + sec.items.map(function (it) {
      var row = !it.img;
      return '<article class="icard' + (row ? " icard--row" : "") + ' reveal">' + photo(it, sec, row ? "iart" : "iphoto") +
        '<div class="ibody"><h3 class="i-ar">' + esc(it.ar) + "</h3>" +
        '<p class="i-ingr">' + it.ingredients.map(esc).join(" · ") + "</p></div></article>";
    }).join("") + "</div>";
  }

  function sandwichList(sec) {
    return '<div class="panel"><ul class="plist">' + sec.items.map(function (it) {
      return '<li class="pitem"><span class="names"><span class="n-ar">' + esc(it.ar) + "</span>" +
        '<span class="n-ingr">' + it.ingredients.map(esc).join("، ") + "</span></span></li>";
    }).join("") + "</ul></div>";
  }

  function itemCards(sec) {
    return '<div class="igrid">' + sec.items.map(function (it) {
      var prices = "";
      if (sec.type === "single") {
        prices = '<span class="i-one num">' + it.price + "</span>";
      } else if (sec.type === "sized") {
        prices = sec.sizes.map(function (sz, i) {
          var p = it.prices[i];
          return '<span class="ip' + (p == null ? " dash" : "") + '"><i>' + sz + '</i><b class="num">' +
            (p == null ? "—" : p) + "</b></span>";
        }).join("");
      }
      var name = it.ar
        ? '<h3 class="i-ar">' + esc(it.ar) + "</h3>" + (it.en ? '<p class="i-en" lang="en">' + esc(it.en) + "</p>" : "")
        : '<h3 class="i-ar" lang="en">' + esc(it.en) + "</h3>";
      // only items with a real photo get the tall card; the rest stay compact
      var row = !it.img;
      return '<article class="icard' + (row ? " icard--row" : "") + ' reveal">' + photo(it, sec, row ? "iart" : "iphoto") +
        '<div class="ibody">' + name +
        (it.note ? '<p class="i-note">' + esc(it.note) + "</p>" : "") +
        (prices ? '<div class="iprices">' + prices + "</div>" : "") +
        "</div></article>";
    }).join("") + "</div>";
  }

  function names(it) {
    var badge = it.special ? '<span class="badge-special">مميز</span>' : "";
    var main = mainName(it, "n-ar").replace(/<\/span>$/, badge + "</span>");
    return '<span class="names">' + main +
      (it.ar && it.en ? '<span class="n-en" lang="en">' + esc(it.en) + "</span>" : "") +
      (it.note ? '<span class="n-note">' + esc(it.note) + "</span>" : "") +
      "</span>";
  }

  function priceList(sec) {
    return '<div class="panel"><ul class="plist">' + sec.items.map(function (it) {
      return '<li class="pitem">' + names(it) + '<span class="leader" aria-hidden="true"></span>' +
        '<span class="price">' + it.price + "</span></li>";
    }).join("") + "</ul></div>";
  }

  function sizeTable(sec) {
    var head = '<div class="srow shead" role="row"><span></span>' + sec.sizes.map(function (s) {
      return '<span class="sz" role="columnheader">' + s + "</span>";
    }).join("") + "</div>";
    var rows = sec.items.map(function (it) {
      return '<div class="srow" role="row">' + names(it) + it.prices.map(function (p) {
        return p == null
          ? '<span class="sp dash" role="cell" aria-label="غير متوفر">—</span>'
          : '<span class="sp num" role="cell">' + p + "</span>";
      }).join("") + "</div>";
    }).join("");
    return '<div class="panel"><div class="stable" style="--n:' + sec.sizes.length + '" role="table">' +
      head + rows + "</div></div>";
  }

  function mojito(sec) {
    var badge = '<div class="mojito-badge"><span class="big num">' + sec.price + "</span>" +
      '<span class="lbl">سعر موحّد لكل النكهات<span class="sub" lang="en">One price, every flavour</span></span></div>';
    var last = sec.items.length - 1;
    var tiles = '<ul class="flavors">' + sec.items.map(function (it, i) {
      // an odd last tile spans the row on phones so nothing sits alone
      var wide = i === last && sec.items.length % 2 === 1 ? " wide" : "";
      return '<li class="flavor' + wide + '">' + icon(sec.icon) + esc(it.ar) + "</li>";
    }).join("") + "</ul>";
    return badge + '<div class="v-cards">' + itemCards(sec) + '</div><div class="v-list">' + tiles + "</div>";
  }

  function section(sec) {
    var body;
    if (sec.type === "sandwich") body = '<div class="v-cards">' + sandwichCards(sec) + '</div><div class="v-list">' + sandwichList(sec) + "</div>";
    else if (sec.type === "mojito") body = mojito(sec);
    else body = '<div class="v-cards">' + itemCards(sec) + '</div><div class="v-list">' +
      (sec.type === "single" ? priceList(sec) : sizeTable(sec)) + "</div>";

    return '<section class="section reveal' + (sec.signature ? " section--sig" : "") + '" id="' + sec.id + '" data-section>' +
      '<header class="section-head">' +
      (sec.signature ? '<span class="ribbon">التوقيع · Signature</span>' : "") +
      '<h2 class="sec-title">' + esc(sec.ar) + '</h2><p class="sec-en" lang="en">' + esc(sec.en) + "</p>" +
      '<svg class="squiggle" aria-hidden="true"><use href="#i-squiggle"/></svg>' + icon(sec.icon) +
      '</header><div class="section-body">' + body + "</div></section>";
  }

  /* ---------- build page ---------- */
  var tabsEl = document.getElementById("tabs");
  var panelsEl = document.getElementById("panels");

  tabsEl.innerHTML = menu.tabs.map(function (t) {
    return '<button class="tab" role="tab" type="button" id="tab-' + t.id + '" aria-controls="panel-' + t.id +
      '" data-tab="' + t.id + '">' + icon(t.icon) + "<span>" + t.label + "</span></button>";
  }).join("");

  panelsEl.innerHTML = menu.tabs.map(function (t) {
    var secs = menu.sections.filter(function (s) { return s.tab === t.id; });
    return '<div id="panel-' + t.id + '" role="tabpanel" aria-labelledby="tab-' + t.id + '" hidden>' +
      '<nav class="chips" aria-label="التصنيفات"><div class="chips-row">' +
      secs.map(function (s) {
        return '<button class="chip" type="button" data-target="' + s.id + '">' + esc(s.ar) + "</button>";
      }).join("") +
      '</div></nav><div class="wrap">' + secs.map(section).join("") + "</div></div>";
  }).join("");

  /* ---------- behaviour ---------- */
  var tabs = [].slice.call(tabsEl.querySelectorAll(".tab"));
  var tabsWrap = document.querySelector(".tabs-wrap");
  var panels = {};
  menu.tabs.forEach(function (t) { panels[t.id] = document.getElementById("panel-" + t.id); });
  var cur = menu.tabs[0].id;

  function bar() { return panels[cur].querySelector(".chips"); }

  function setActive(id) {
    var b = bar(), row = b.querySelector(".chips-row");
    [].forEach.call(b.querySelectorAll(".chip"), function (c) {
      if (c.getAttribute("data-target") === id) {
        if (c.getAttribute("aria-current") !== "true") {
          c.setAttribute("aria-current", "true");
          var cr = c.getBoundingClientRect(), rr = row.getBoundingClientRect();
          row.scrollTo({ left: row.scrollLeft + (cr.left + cr.width / 2 - (rr.left + rr.width / 2)), behavior: reduce ? "auto" : "smooth" });
        }
      } else c.removeAttribute("aria-current");
    });
  }

  function spy() {
    var b = bar(), secs = [].slice.call(panels[cur].querySelectorAll("[data-section]"));
    var line = b.offsetHeight + 32, act = secs[0];
    secs.forEach(function (s) { if (s.getBoundingClientRect().top <= line) act = s; });
    b.classList.toggle("is-stuck", tabsWrap.getBoundingClientRect().bottom < 0);
    setActive(act.id);
  }
  window.addEventListener("scroll", spy, { passive: true });

  function show(k) {
    cur = k;
    tabs.forEach(function (t) {
      var on = t.getAttribute("data-tab") === k;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
    });
    for (var key in panels) panels[key].hidden = key !== k;
    var top = tabsWrap.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY > top) window.scrollTo(0, top - 8);
    observe();
    spy();
  }
  tabs.forEach(function (t) {
    t.addEventListener("click", function () { show(t.getAttribute("data-tab")); });
  });

  panelsEl.addEventListener("click", function (e) {
    var c = e.target.closest(".chip[data-target]");
    if (!c) return;
    var sec = document.getElementById(c.getAttribute("data-target"));
    var y = sec.getBoundingClientRect().top + window.scrollY - bar().offsetHeight - 8;
    window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
  });

  var viewBtns = [].slice.call(document.querySelectorAll(".viewtog button"));
  function setView(v) {
    panelsEl.className = "panels view-" + v;
    viewBtns.forEach(function (x) { x.setAttribute("aria-pressed", x.getAttribute("data-view") === v ? "true" : "false"); });
    store("fk-view", v);
    observe();
    spy();
  }
  viewBtns.forEach(function (b) {
    b.addEventListener("click", function () { setView(b.getAttribute("data-view")); });
  });

  document.querySelector(".themebtn").addEventListener("click", function () {
    var t = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", t);
    store("fk-theme", t);
  });

  var io = null;
  function observe() {
    var els = panels[cur].querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      [].forEach.call(els, function (e) { e.classList.add("in"); });
      return;
    }
    if (!io) io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.04 });
    [].forEach.call(els, function (e) { io.observe(e); });
  }

  var savedView = store("fk-view");
  setView(savedView === "list" ? "list" : "cards");
  show(cur);
})();
