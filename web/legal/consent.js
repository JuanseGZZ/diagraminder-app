// ===================== AVISO DE ESTADÍSTICAS =====================
// Cuántas personas REALES entran a diagraminder.com y qué usan, con Google Analytics 4
// (desde el 2026-10-09; antes Cloudflare Web Analytics), y SOLO si la persona acepta.
// Archivo suelto a propósito (no va en el bundle): lo cargan la app (index.html) y la
// doc (/docs), y así no pasa por el ofuscador ni por el orden de inicialización de
// event.js. Vive en `legal/` porque el backend local solo sirve raíces de una lista
// blanca (WEB_ROOTS) y `legal/` ya está: en la raíz daba 404 en el desktop.
//
// - Solo en el sitio público. En el desktop (la app servida por el backend local) y en
//   localhost no aparece nunca: ahí no hay nada que medir y no es nuestro sitio.
// - gtag.js se pide RECIÉN al aceptar: antes no sale nada a Google. Va con Consent
//   Mode v2: medición sí, publicidad no (ad_storage / ad_user_data / ad_personalization
//   en denied).
// - La elección se recuerda (localStorage `dmConsent`). El «sí» viejo ("yes") era para
//   Cloudflare, que no usaba cookies; GA sí las usa, así que a esa persona se le vuelve
//   a preguntar. El «no» se respeta: no se le pregunta de nuevo.
// - `window.dmTrack(nombre, params)`: eventos propios. No hace nada si no se aceptó.
//   Los de acá (descargas, exports, backend conectado) se escuchan sin tocar el bundle;
//   el bundle solo manda `create_diagram`.
(function () {
  "use strict";
  var HOSTS = ["diagraminder.com", "www.diagraminder.com"];
  var GA_ID = "G-Z5EXZSQFXR";   // el ID de medición es público (va en el HTML de cualquier sitio)
  var KEY = "dmConsent";
  var SI = "ga";                // valor guardado al aceptar GA

  window.dmTrack = function () {};   // no-op hasta que acepten (y para siempre si no)
  if (window.__DM_DESKTOP__ || HOSTS.indexOf(location.hostname) < 0) return;

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  var cargado = false;
  function cargarGA() {
    if (cargado) return;
    cargado = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", {
      analytics_storage: "granted", ad_storage: "denied",
      ad_user_data: "denied", ad_personalization: "denied",
    });
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    var sc = document.createElement("script");
    sc.async = true;
    sc.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(sc);
    window.dmTrack = function (nombre, params) { window.gtag("event", nombre, params || {}); };
    escucharEventos();
  }

  // Lo que se mide además de las páginas, sin tocar el bundle.
  var EXPORTS = { "export-png": "png", "export-pdf": "pdf", "export-word": "word",
                  "export-obsidian": "obsidian", "export-dmer": "dmer" };
  function escucharEventos() {
    document.addEventListener("click", function (ev) {
      var el = ev.target && ev.target.closest ? ev.target.closest("a, button") : null;
      if (!el) return;
      var href = el.getAttribute("href") || "";
      if (href.indexOf("/releases/") >= 0) {
        // DiagraMinder-win.exe, DiagraMinder-Backend-mac, …: el archivo dice qué y para qué SO
        window.dmTrack("download", { file: href.split("/").pop() });
      } else if (EXPORTS[el.id]) {
        window.dmTrack("export", { format: EXPORTS[el.id] });
      }
    }, true);
    var conectado = false;
    document.addEventListener("local-backend-connected", function () {
      if (conectado) return;          // una vez por visita: reconectar no es otro usuario
      conectado = true;
      window.dmTrack("backend_connected");
    });
  }

  if (get() === SI) { cargarGA(); return; }
  if (get() === "no") return;

  // Mismo idioma que la app y la doc (comparten la clave `ui-lang`).
  var es;
  try { es = (localStorage.getItem("ui-lang") || navigator.language || "en").toLowerCase().indexOf("es") === 0; }
  catch (e) { es = false; }
  var TXT = es ? {
    msg: "Usamos Google Analytics para saber cuántas personas entran y qué partes usan. Guarda cookies de medición, sin publicidad. ¿Nos dejás?",
    yes: "Aceptar", no: "No, gracias", more: "Privacidad"
  } : {
    msg: "We use Google Analytics to know how many people visit and which parts they use. It sets measurement cookies, no advertising. Is that OK?",
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

    yes.addEventListener("click", function () { set(SI); box.remove(); cargarGA(); });
    no.addEventListener("click", function () { set("no"); box.remove(); });
  }

  if (document.body) mostrar();
  else document.addEventListener("DOMContentLoaded", mostrar);
})();
