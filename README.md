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

This is the point of the whole thing.

**Open `Settings → This program`.** It shows the exact `.mcp.json` for your machine —
address and password already filled in — with a button to copy it. Paste it into
`.mcp.json` in the root of your project and run `/mcp` in Claude Code to see it
connected.

If you would rather have it on the terminal, the same thing:

```bash
DiagraMinder --mcp-config                 # the packaged app
python3 backend/server.py --mcp-config    # running from source
```

It looks like this — the address is where Claude Code will talk to the program, and
the token is this program's password:

```json
{
  "mcpServers": {
    "diagraminder": {
      "command": "/path/to/DiagraMinder",
      "args": ["--mcp-diagrams"],
      "env": {
        "DMD_URL": "http://127.0.0.1:8765",
        "DMD_TOKEN": "…this program's password…"
      }
    }
  }
}
```

Four tools to work with a diagram as JSON: `list_diagrams`, `read_diagram`,
`diagram_schema`, `write_diagram`.

And eight to use organigrams and canvases as a **memory**, a node at a time, without
reading or rewriting the whole file: `memory_overview` (the map), `memory_search`,
`memory_read` (a few nodes with their neighbours), `memory_add` (a child, sibling or
parent next to another node, in a free spot), `memory_update` (edit or append),
`memory_link` / `memory_unlink` (canvas arrows) and `memory_delete`.
Writes show up **live** on your screen; no reload.

> The config contains your access token. Treat it like a password: whoever has it can
> read and change your projects.

### What you let it do

A switch with three levels, in **Settings → This program → What the MCP can do**. It
starts **on** and at the lowest one:

| Level | What the agent gets |
|---|---|
| **Diagrams only** *(default)* | the diagram and memory tools above |
| **Diagrams + files** | also read, write, edit, search, version and git — **only inside a folder you pick** |
| **Diagrams + files + commands** | also run commands |

Asking for a file level without picking a folder does **not** open your whole disk: it
falls back to diagrams. The check lives in the program, not in the window — once the
`.mcp.json` is pasted, the client already has the address and the password.

### From Claude web

Claude web runs on Anthropic's servers, so it cannot reach `127.0.0.1`. Under **Reach
it from Claude web** the app can open a **Cloudflare tunnel** and show you a public
address like `https://something.trycloudflare.com/mcp` — add that in Claude web as a
custom connector, and it asks for this program's password once.

It needs `cloudflared`. The panel tells you whether you have it and the exact command
to install it (`brew install cloudflared` on macOS); **the app never downloads it for
you**, and it never opens the tunnel on its own. While the tunnel is open, anyone with
the address *and* the password reaches this machine at the level above. It dies when
you turn it off or close the app.

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
