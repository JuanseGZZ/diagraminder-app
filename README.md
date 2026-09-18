# DiagraMinder — app de escritorio

**La app y su backend en un solo ejecutable.** Lo abrís y funciona, sin conexión y sin
instalar nada.

## Descargar

Las últimas versiones están en **[Releases](../../releases/latest)**: un archivo por
sistema (`DiagraMinder-win.exe`, `DiagraMinder-mac`, `DiagraMinder-linux`).

Abrilo y se abre solo en una ventana. Tus proyectos quedan en tu disco.

> ¿Querés solo el backend, para usarlo con la web?
> Está en **[diagraminder-backend](https://github.com/JuanseGZZ/diagraminder-backend)**.

---

## ⚠️ Este repo es GENERADO — no se edita a mano

Todo lo que hay acá lo produce `release.sh` desde los repos donde vive el código:

| Carpeta | Viene de | Qué es |
|---|---|---|
| `web/` | el repo privado del front | el bundle **ofuscado** + la hoja de estilos, vendor, docs, legal, brand |
| `backend/` | [`diagraminder-backend`](https://github.com/JuanseGZZ/diagraminder-backend) | el backend, tal cual |

**Un cambio hecho acá se pierde en el próximo release.** Si algo está mal, se arregla
en el repo de origen.

Por qué existe este repo separado: el front vive en un repo **privado** (su código
fuente no se publica) y de un repo privado **nadie puede descargar**. Acá se junta lo
que sí se distribuye —un bundle ofuscado, el mismo que ya sirve la web pública— con el
backend, y de acá salen las Releases.

## Cómo se arma

`.github/workflows/release.yml` compila los tres sistemas con PyInstaller, metiendo
`web/` adentro del ejecutable. Se dispara al pushear un tag `v*`.

En runtime el backend sirve esa `web/` desde `GET /` con el token inyectado: la app y
la API comparten origen, y eso es lo que hace que la app sepa que está en modo
escritorio y se conecte sola.
