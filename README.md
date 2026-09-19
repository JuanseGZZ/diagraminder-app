# DiagraMinder — desktop app

**The context of your project, where your agent can reach it.** A canvas you and
Claude Code edit at the same time — you watch it change while it works.

Everything runs on your machine. Your files stay on your disk. No account, no cloud.

---

## Get it

### Download (recommended)

Grab the file for your system from **[Releases](../../releases/latest)**:

| System | File | How to open it |
|---|---|---|
| **Windows** | `DiagraMinder-win.exe` | Double-click it. |
| **macOS** | `DiagraMinder-mac.zip` | Unzip and drag `DiagraMinder-mac.app` to Applications. |
| **Linux** | `DiagraMinder-linux` | `chmod +x DiagraMinder-linux && ./DiagraMinder-linux` |

It opens in its own window. There is nothing to install and nothing to configure.

> **macOS, first run:** the app is not signed yet, so macOS will refuse it with
> *"cannot be opened because the developer cannot be verified"*. Right-click the app →
> **Open** → **Open**. You only do this once.

### Or run it from source, with Python

The app is in this repo: `web/` is the interface, `backend/` is the program behind it.
**No dependencies to install** — it is plain standard library.

```bash
git clone https://github.com/JuanseGZZ/diagraminder-app.git
cd diagraminder-app
DMN_WEB_DIR="$PWD/web" python3 backend/server.py
```

It opens the same window as the packaged app. On Windows use PowerShell:

```powershell
$env:DMN_WEB_DIR="$PWD\web"; python3 backend\server.py
```

**Requirements:** Python 3.10 or newer. On Linux you may also need `python3-tk`
(`sudo apt install python3-tk`) — it is what draws the "choose a folder" dialog.

`DMN_WEB_DIR` is the whole trick: it tells the backend where the interface lives. With
it, the backend serves the app from `/` and the page can tell it is running on your
machine, so it connects by itself.

---

## Connect Claude Code to your diagrams

This is the point of the whole thing. One command prints the config:

```bash
DiagraMinder --mcp-config          # the packaged app
python3 backend/server.py --mcp-config    # running from source
```

Paste the output into `.mcp.json` in your project, and Claude Code can read every
diagram before touching your code — and write back what it did and what is left.
In Claude Code, `/mcp` shows it connected.

Four tools: `list_diagrams`, `read_diagram`, `diagram_schema`, `write_diagram`.
Writes show up **live** on your screen; no reload.

> The config contains your access token. Treat it like a password: whoever has it can
> read and change your projects.

---

## Options

| Flag | What it does |
|---|---|
| `--port N` | Listen on another port (default `8765`). |
| `--no-ui` | Do not open a window. Useful to leave it running in the background. |
| `--mcp-config` | Print the MCP config, ready to paste. |
| `--mcp-diagrams` | Run as an MCP server over stdio (this is what Claude Code launches). |

**Closing the window closes the program.** Your projects live outside the app — in
`~/Library/Application Support/DiagraMind` (macOS), `%LOCALAPPDATA%\DiagraMind`
(Windows) or `~/.local/share/DiagraMind` (Linux) — so updating or reinstalling never
touches them. The app tells you the exact paths under **Settings → This program**.

Want just the backend, to use with the website instead of the packaged app?
That is **[diagraminder-backend](https://github.com/JuanseGZZ/diagraminder-backend)**.

---

## ⚠️ This repository is GENERATED — do not edit it

Everything here is produced by `release.sh`, which lives in the private repo that
holds the interface source:

| Folder | Comes from | What it is |
|---|---|---|
| `web/` | the private front-end repo | the **obfuscated** bundle plus its stylesheet, fonts, vendor libraries, docs and legal |
| `backend/` | [`diagraminder-backend`](https://github.com/JuanseGZZ/diagraminder-backend) | the backend, as is |

**A change made here is lost on the next release.** If something is wrong, it gets
fixed in the repo it came from.

Why this repo exists at all: the interface source lives in a **private** repo, and
**nobody can download from a private repo**. So the two halves that do get
distributed — an obfuscated bundle, the same one the public website already serves to
anyone, and the backend — are joined here, and the Releases are cut from here.

`.github/workflows/release.yml` builds the three systems with PyInstaller, embedding
`web/` inside the executable, and runs each binary before publishing it: if the
payload is incomplete, it never reaches Releases. It triggers on a `v*` tag.
