// ===================== AVISO DE ESTADÍSTICAS (2026-10-08) =====================
// Cuántas personas REALES entran a diagraminder.com, con Cloudflare Web Analytics, y
// SOLO si la persona acepta. Archivo suelto a propósito (no va en el bundle): lo cargan
// la app (index.html) y la doc (/docs), y así no pasa por el ofuscador ni por el orden
// de inicialización de event.js. Vive en `legal/` porque el backend local solo sirve
// raíces de una lista blanca (WEB_ROOTS) y `legal/` ya está: en la raíz daba 404 en el
// desktop, donde igual no hace nada.
//
// - Solo en el sitio público. En el desktop (la app servida por el backend local) y en
//   localhost no aparece nunca: ahí no hay nada que medir y no es nuestro servidor.
// - Aceptar carga el beacon; ese primer request ES el «fetch de aceptación». Después el
//   beacon reporta solo (y con `spa` sigue los cambios de ruta). No usa cookies.
// - Si Cloudflare ya lo inyectó por su cuenta (la «configuración automática» del panel
//   sigue prendida), NO se carga otro: contaría doble. Para que el consentimiento valga
//   de verdad, esa inyección automática se apaga en el panel de Cloudflare.
// - La elección se recuerda (localStorage `dmConsent`: "yes" | "no").
(function () {
  "use strict";
  var HOSTS = ["diagraminder.com", "www.diagraminder.com"];
  var TOKEN = "ebda25d74e664b518c87dcca374a4662";   // el del sitio en Cloudflare: es público
  var BEACON = "https://static.cloudflareinsights.com/beacon.min.js";
  var KEY = "dmConsent";

  if (window.__DM_DESKTOP__ || HOSTS.indexOf(location.hostname) < 0) return;

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function beaconYaEsta() {
    var s = document.querySelectorAll("script[src]");
    for (var i = 0; i < s.length; i++) if (s[i].src.indexOf("cloudflareinsights.com") >= 0) return true;
    return false;
  }
  function cargarBeacon() {
    if (beaconYaEsta()) return;
    var sc = document.createElement("script");
    sc.defer = true;
    sc.src = BEACON;
    sc.setAttribute("data-cf-beacon", JSON.stringify({ token: TOKEN, spa: true }));
    document.head.appendChild(sc);
  }

  if (get() === "yes") { cargarBeacon(); return; }
  if (get() === "no") return;

  // Mismo idioma que la app y la doc (comparten la clave `ui-lang`).
  var es;
  try { es = (localStorage.getItem("ui-lang") || navigator.language || "en").toLowerCase().indexOf("es") === 0; }
  catch (e) { es = false; }
  var TXT = es ? {
    msg: "Contamos cuántas personas entran al sitio con Cloudflare Web Analytics: sin cookies y sin datos personales. ¿Nos dejás?",
    yes: "Aceptar", no: "No, gracias", more: "Privacidad"
  } : {
    msg: "We count how many people visit this site with Cloudflare Web Analytics: no cookies, no personal data. Is that OK?",
    yes: "Accept", no: "No thanks", more: "Privacy"
  };

  function mostrar() {
    var st = document.createElement("style");
    st.textContent =
      ".dm-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:560px;margin:0 auto;" +
      "display:flex;flex-wrap:wrap;align-items:center;gap:10px 14px;padding:14px 16px;border-radius:12px;" +
      "background:#2b2e37;color:#f2f4f7;border:1px solid #5b6272;box-shadow:0 10px 40px rgba(0,0,0,.35);" +
      "font:400 13.5px/1.5 Inter,-apple-system,system-ui,sans-serif}" +
      ".dm-consent p{margin:0;flex:1 1 260px}" +
      ".dm-consent a{color:#7b9ce0}" +
      ".dm-consent .dm-c-btns{display:flex;gap:8px;margin-left:auto}" +
      ".dm-consent button{padding:8px 14px;border-radius:9px;border:1px solid #5b6272;background:transparent;" +
      "color:inherit;font:600 13px/1 Inter,system-ui,sans-serif;cursor:pointer}" +
      ".dm-consent button.dm-c-yes{background:#3f6bc9;border-color:#3f6bc9;color:#fff}" +
      // claro: el tema de la APP manda (html[data-theme]); la doc, que no tiene, sigue al sistema
      "html[data-theme=light] .dm-consent{background:#fff;color:#1a1d24;border-color:#c3c8d1}" +
      "html[data-theme=light] .dm-consent a{color:#3f6bc9}html[data-theme=light] .dm-consent button{border-color:#c3c8d1}" +
      "@media (prefers-color-scheme:light){html:not([data-theme]) .dm-consent{background:#fff;color:#1a1d24;border-color:#c3c8d1}" +
      "html:not([data-theme]) .dm-consent a{color:#3f6bc9}html:not([data-theme]) .dm-consent button{border-color:#c3c8d1}}" +
      "html[data-theme=light] .dm-consent button.dm-c-yes,html:not([data-theme]) .dm-consent button.dm-c-yes{border-color:#3f6bc9}";
    document.head.appendChild(st);

    var box = document.createElement("div");
    box.className = "dm-consent";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-live", "polite");
    var p = document.createElement("p");
    p.textContent = TXT.msg + " ";
    var a = document.createElement("a");
    a.href = "/privacidad"; a.textContent = TXT.more;
    p.appendChild(a);
    var btns = document.createElement("div");
    btns.className = "dm-c-btns";
    var no = document.createElement("button"); no.type = "button"; no.className = "dm-c-no"; no.textContent = TXT.no;
    var yes = document.createElement("button"); yes.type = "button"; yes.className = "dm-c-yes"; yes.textContent = TXT.yes;
    btns.appendChild(no); btns.appendChild(yes);
    box.appendChild(p); box.appendChild(btns);
    // `translate="no"`: el traductor de la app recorre el DOM; este texto ya viene en
    // el idioma correcto y no está en su diccionario.
    box.setAttribute("translate", "no");
    document.body.appendChild(box);

    yes.addEventListener("click", function () { set("yes"); box.remove(); cargarBeacon(); });
    no.addEventListener("click", function () { set("no"); box.remove(); });
  }

  if (document.body) mostrar();
  else document.addEventListener("DOMContentLoaded", mostrar);
})();
