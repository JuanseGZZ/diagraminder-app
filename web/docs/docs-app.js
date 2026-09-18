// docs/docs-app.js
// El render de la documentación pública (/docs).
//
// ⚠ Esto vivía INLINE en index.html y la CSP de producción lo bloqueaba
// (`script-src 'self'` sin unsafe-inline): la página quedaba en blanco, con el
// header y el buscador vacíos. Tiene que seguir siendo un archivo servido por el
// mismo origen — NO devolverlo a un <script> inline ni agregar unsafe-inline a la
// CSP por esto. Ver bitácora §51.
// ---------------------------------------------------------------------------
// La documentación se PINTA desde docs-content.js: el índice, el contenido y el
// pie anterior/siguiente salen de la misma lista, así no hay tres lugares que
// mantener sincronizados. Sin dependencias: la sirve nginx tal cual.
// ---------------------------------------------------------------------------
var UI = {
  search:  { es: "Buscar…",       en: "Search…" },
  app:     { es: "Abrir la app",  en: "Open the app" },
  docs:    { es: "Documentación", en: "Docs" },
  empty:   { es: "Nada coincide.", en: "Nothing matches." },
  prev:    { es: "Anterior",      en: "Previous" },
  next:    { es: "Siguiente",     en: "Next" },
};

// El idioma se recuerda, y se comparte con la app: es la MISMA clave que usa
// app/i18n.js, así quien puso la app en español entra acá en español.
var LANG_KEY = "ui-lang";
function lang() {
  try { return localStorage.getItem(LANG_KEY) === "en" ? "en" : "es"; } catch (e) { return "es"; }
}
function setLang(v) {
  try { localStorage.setItem(LANG_KEY, v); } catch (e) {}
  render();
}

var elIndex = document.getElementById("index");
var elDoc = document.getElementById("doc");
var elFoot = document.getElementById("navfoot");
var elQ = document.getElementById("q");
var elLang = document.getElementById("lang");

function current() {
  var id = (location.hash || "").replace(/^#/, "");
  var found = DOCS.filter(function (d) { return d.id === id; })[0];
  return found || DOCS[0];
}

function renderIndex(L) {
  var q = (elQ.value || "").trim().toLowerCase();
  // el filtro mira título Y cuerpo: buscar "gantt" tiene que encontrar la sección
  // de actividades aunque la palabra no esté en el título
  var list = DOCS.filter(function (d) {
    if (!q) return true;
    return (d.t[L] + " " + d.b[L]).toLowerCase().indexOf(q) !== -1;
  });
  elIndex.innerHTML = "";
  if (!list.length) {
    var e = document.createElement("p");
    e.className = "empty";
    e.textContent = UI.empty[L];
    elIndex.appendChild(e);
    return;
  }
  var lastGroup = null;
  var cur = current().id;
  list.forEach(function (d) {
    if (d.g !== lastGroup) {
      lastGroup = d.g;
      var g = document.createElement("p");
      g.className = "group";
      g.textContent = GROUPS[d.g][L];
      elIndex.appendChild(g);
    }
    var a = document.createElement("a");
    a.href = "#" + d.id;
    a.textContent = d.t[L];
    if (d.id === cur) a.className = "active";
    a.addEventListener("click", function () { document.body.classList.remove("side-open"); });
    elIndex.appendChild(a);
  });
}

function renderDoc(L) {
  var d = current();
  document.title = d.t[L] + " — DiagraMinder";
  elDoc.innerHTML = "<h1>" + d.t[L] + "</h1>" + d.b[L];
  // pie: anterior / siguiente en el orden de la lista
  var i = DOCS.indexOf(d);
  elFoot.innerHTML = "";
  if (i > 0) {
    var p = DOCS[i - 1];
    elFoot.innerHTML += '<a href="#' + p.id + '"><small>' + UI.prev[L] + "</small>" + p.t[L] + "</a>";
  }
  if (i < DOCS.length - 1) {
    var n = DOCS[i + 1];
    elFoot.innerHTML += '<a class="next" href="#' + n.id + '"><small>' + UI.next[L] + "</small>" + n.t[L] + "</a>";
  }
}

function render() {
  var L = lang();
  document.documentElement.lang = L;
  elLang.value = L;
  elQ.placeholder = UI.search[L];
  document.getElementById("to-app").textContent = UI.app[L];
  document.getElementById("top-docs").textContent = UI.docs[L];
  renderIndex(L);
  renderDoc(L);
  window.scrollTo(0, 0);
}

elLang.addEventListener("change", function () { setLang(elLang.value); });
elQ.addEventListener("input", function () { renderIndex(lang()); });
window.addEventListener("hashchange", render);
document.getElementById("menu-btn").addEventListener("click", function () {
  document.body.classList.toggle("side-open");
});
render();
