// Contenido de la documentación pública (/docs).
//
// UNA sola lista con los dos idiomas pegados: `t` (título) y `b` (cuerpo) llevan
// `{ en, es }`. Así una sección nueva nace en los dos idiomas o no nace — con dos
// archivos separados se desincronizan a la segunda edición.
//
// `g` agrupa en el índice de la izquierda. El `id` es el ancla de la URL (/docs#id):
// NO se cambia una vez publicado, o se rompen los links que la gente guardó. Por eso
// `local-software` sigue llamándose así aunque la sección hoy se titule "El backend":
// el título es visible y se cambia, el id es una llave y se deja (regla de CLAUDE.md).
//
// El cuerpo es HTML plano (lo pinta docs.html tal cual). Sin dependencias.

const GROUPS = {
  start:  { en: "Getting started", es: "Empezar" },
  modes:  { en: "The modes",       es: "Los modos" },
  ai:     { en: "The AI",          es: "La IA" },
  ref:    { en: "Reference",       es: "Referencia" },
};

const DOCS = [
// ============================ EMPEZAR ============================
{
  id: "what-is", g: "start",
  t: { en: "What DiagraMinder is", es: "Qué es DiagraMinder" },
  b: {
    en: `<p class="lead">Your project's context, on a canvas you and your agent edit at the same time.</p>
<p>It is not a diagramming app that happens to have AI. It is <b>shared memory between you and your coding agent</b>, which looks like a diagram because a diagram is the only way a human reads a graph of context at a glance.</p>
<p>Claude Code reads the organigram before touching the repo and writes down what is missing in the activities diagram — and you watch it change on screen, live, while it works.</p>
<h2>Three ideas worth knowing up front</h2>
<ul>
  <li><b>It runs on your machine.</b> Shared memory between you and your agent lives where your agent lives. Projects are stored in your browser and, with the backend running, as real files on your disk.</li>
  <li><b>Everything is versioned.</b> Changes are snapshotted with date and author, so anything you —or an AI— did can be rolled back.</li>
  <li><b>The AI is a guest, not the owner.</b> You choose which AI runs (a local CLI or your own API key) and what it can touch.</li>
</ul>
<div class="note"><b>Beta.</b> DiagraMinder is in beta: keep your own copies of anything that matters. The app exports to Obsidian, PDF, PNG and Word.</div>`,
    es: `<p class="lead">El contexto de tu proyecto, en un canvas que vos y tu agente editan a la vez.</p>
<p>No es un diagramador que además tiene IA. Es <b>memoria compartida entre vos y tu agente de código</b>, que se ve como un diagrama porque un diagrama es la única forma en que un humano lee un grafo de contexto de un vistazo.</p>
<p>Claude Code lee el organigrama antes de tocar el repo y escribe en el diagrama de actividades lo que falta — y vos lo ves cambiar en la pantalla, en vivo, mientras trabaja.</p>
<h2>Tres ideas para arrancar</h2>
<ul>
  <li><b>Corre en tu máquina.</b> La memoria compartida entre vos y tu agente vive donde vive tu agente. Los proyectos se guardan en tu navegador y, con el backend corriendo, como archivos reales en tu disco.</li>
  <li><b>Todo queda versionado.</b> Los cambios se guardan con fecha y autor, así todo lo que hiciste —o hizo una IA— se puede deshacer.</li>
  <li><b>La IA es invitada, no dueña.</b> Vos elegís qué IA corre (un CLI local o tu propia API key) y qué puede tocar.</li>
</ul>
<div class="note"><b>Beta.</b> DiagraMinder está en beta: guardá tus propias copias de lo que te importe. La app exporta a Obsidian, PDF, PNG y Word.</div>`,
  },
},
{
  id: "local-software", g: "start",
  t: { en: "The backend", es: "El backend" },
  b: {
    en: `<p class="lead">A small program you run on your machine. The browser cannot start processes, open your folders or talk to Claude Code — that is what the backend is for.</p>
<h2>What it unlocks</h2>
<ul>
  <li>Projects saved as <b>real files</b> on your disk.</li>
  <li>The <b>local CLIs</b> (Claude Code, Codex, Gemini CLI) as the chat's backend.</li>
  <li><b>MCP</b>: your coding agent reading and writing the diagrams.</li>
  <li>Agent folders and the <b>orchestrator engine</b>.</li>
</ul>
<h2>Two ways to run it</h2>
<table>
  <tr><th>Way</th><th>What you get</th></tr>
  <tr><td><b>The desktop app</b></td><td>One executable with the backend and the app inside. You open it and it works — nothing to connect, no password to copy. This is the recommended path.</td></tr>
  <tr><td><b>Backend + the website</b></td><td>You run the backend on your machine and keep using the app in your browser. Two pieces, and you connect them once.</td></tr>
</table>
<h2>Connecting it (only the second way)</h2>
<ol>
  <li><b>Settings → Download backend</b> and run it. There is a ready-to-use executable, and it also runs with plain Python.</li>
  <li><b>Settings → Connect backend</b>. If it asks for a password, it is on the backend's own window (the panel it opens when it starts), and in <code>token.txt</code> next to your data.</li>
</ol>
<p>The desktop app skips all of this: it serves the app itself, so it shares its origin and hands it the password on its own.</p>
<div class="note">It listens only on your own machine. Nothing of this goes through our servers.</div>`,
    es: `<p class="lead">Un programita que corrés en tu máquina. El navegador no puede lanzar procesos, abrir tus carpetas ni hablar con Claude Code — para eso está el backend.</p>
<h2>Qué habilita</h2>
<ul>
  <li>Proyectos guardados como <b>archivos reales</b> en tu disco.</li>
  <li>Los <b>CLIs locales</b> (Claude Code, Codex, Gemini CLI) como backend del chat.</li>
  <li><b>MCP</b>: que tu agente de código lea y escriba los diagramas.</li>
  <li>Las carpetas de agente y el <b>motor del orquestador</b>.</li>
</ul>
<h2>Dos formas de correrlo</h2>
<table>
  <tr><th>Forma</th><th>Qué obtenés</th></tr>
  <tr><td><b>La app de escritorio</b></td><td>Un ejecutable con el backend y la app adentro. Lo abrís y anda — nada que conectar, ninguna contraseña que copiar. Es el camino recomendado.</td></tr>
  <tr><td><b>El backend + la web</b></td><td>Corrés el backend en tu máquina y seguís usando la app en el navegador. Dos piezas, y las conectás una vez.</td></tr>
</table>
<h2>Conectarlo (solo en la segunda forma)</h2>
<ol>
  <li><b>Ajustes → Descargar backend</b> y ejecutalo. Hay un ejecutable listo para usar, y también corre con Python pelado.</li>
  <li><b>Ajustes → Conectar backend</b>. Si te pide contraseña, está en la ventana del propio backend (el panel que abre al arrancar), y en <code>token.txt</code>, al lado de tus datos.</li>
</ol>
<p>La app de escritorio se saltea todo esto: sirve la app ella misma, así que comparten origen y le pasa la contraseña sola.</p>
<div class="note">Escucha solo en tu propia máquina. Nada de esto pasa por nuestros servidores.</div>`,
  },
},
{
  id: "folders-projects", g: "start",
  t: { en: "Folders and projects", es: "Carpetas y proyectos" },
  b: {
    en: `<p class="lead">A <b>project</b> is one diagram. A <b>folder</b> groups projects and decides where they live.</p>
<h2>Where the projects live</h2>
<table>
  <tr><th>Without the backend</th><th>With the backend</th></tr>
  <tr><td>Only in this browser, on this machine. Nothing leaves it.</td><td>Real files on your disk, in a folder you choose — and readable by your agent through MCP.</td></tr>
</table>
<p>The app works whole without the backend: that is the default path, and you lose nothing of the drawing. What the backend adds is everything that has to touch your machine.</p>
<p>In the top bar, the first box is the <b>folder</b> and the second the <b>project</b> open inside it. The name navigates; the little arrow opens the list to switch.</p>
<div class="note">Switching folder changes the project list with it: a folder only ever shows its own projects.</div>`,
    es: `<p class="lead">Un <b>proyecto</b> es un diagrama. Una <b>carpeta</b> agrupa proyectos y decide dónde viven.</p>
<h2>Dónde viven los proyectos</h2>
<table>
  <tr><th>Sin el backend</th><th>Con el backend</th></tr>
  <tr><td>Solo en este navegador, en esta máquina. No sale nada.</td><td>Archivos reales en tu disco, en una carpeta que elegís — y que tu agente puede leer por MCP.</td></tr>
</table>
<p>La app funciona entera sin el backend: ese es el camino por default, y no perdés nada de lo que se dibuja. Lo que agrega el backend es todo lo que tiene que tocar tu máquina.</p>
<p>En la barra de arriba, la primera casilla es la <b>carpeta</b> y la segunda el <b>proyecto</b> abierto adentro. El nombre navega; la flechita despliega la lista para cambiar.</p>
<div class="note">Cambiar de carpeta cambia la lista de proyectos con ella: una carpeta solo muestra los suyos.</div>`,
  },
},
{
  id: "screen", g: "start",
  t: { en: "The screen", es: "La pantalla" },
  b: {
    en: `<h2>Top bar</h2>
<ul>
  <li><b>Folder / project</b>: where you are.</li>
  <li><b>File, Edit, View</b>: only inside a project. In an organigram, <b>File → To canvas</b> converts it into a free canvas.</li>
  <li><b>Skills</b>: files you hand to any AI so it answers in DiagraMinder's format.</li>
  <li><b>AI</b>: the chat panel. <b>Settings</b>: the backend connection, API keys, storage folder, theme.</li>
</ul>
<h2>Explorer (left)</h2>
<p>The whole project as a list, with a search box. Click an item and the board jumps to it — the fastest way back to something you left far away on the canvas.</p>
<h2>Toolbar (top of the board)</h2>
<p>It changes with the mode: each one brings its own controls. <b>Versions</b> is there in every diagram mode.</p>
<h2>Tutorials</h2>
<p>The first time you open the app —and the first time you open each mode— a short tutorial highlights each area. You can run it again from <b>Help → Tutorial</b>.</p>`,
    es: `<h2>Barra de arriba</h2>
<ul>
  <li><b>Carpeta / proyecto</b>: dónde estás.</li>
  <li><b>Archivo, Editar, Ver</b>: solo dentro de un proyecto. En un organigrama, <b>Archivo → A canvas</b> lo convierte en lienzo libre.</li>
  <li><b>Skills</b>: archivos que le das a cualquier IA para que responda en el formato de DiagraMinder.</li>
  <li><b>IA</b>: el panel de chat. <b>Ajustes</b>: la conexión del backend, las API keys, la carpeta de almacenamiento, el tema.</li>
</ul>
<h2>Explorador (izquierda)</h2>
<p>Todo el proyecto como lista, con buscador. Hacés clic en un ítem y el board salta hasta él — la forma más rápida de volver a algo que quedó lejos en el lienzo.</p>
<h2>Toolbar (arriba del board)</h2>
<p>Cambia según el modo: cada uno trae sus controles. <b>Versiones</b> está en todos los modos de diagrama.</p>
<h2>Tutoriales</h2>
<p>La primera vez que abrís la app —y la primera vez que abrís cada modo— un tutorial corto te va marcando cada área. Se puede volver a ver desde <b>Ayuda → Tutorial</b>.</p>`,
  },
},

// ============================ LOS MODOS ============================
//
// Los cinco primeros no son cinco tipos de diagrama: son cinco formas del contexto
// de un proyecto de software. Por eso van en este orden y con esta bajada.
{
  id: "mode-cart", g: "modes",
  t: { en: "Organigram: the documentation", es: "Organigrama: la documentación" },
  b: {
    en: `<p class="lead">A hierarchical tree of cards, drawn top-down like an org chart: each card hangs off its parent. In a software project it is <b>the map</b>: what exists, how it is put together and why it was decided that way.</p>
<h2>Working with it</h2>
<ul>
  <li><b>Add to root</b> creates a top-level card; from there every card can have children.</li>
  <li>Cards start <b>collapsed</b>: you see the title, and the ▲/▼ opens the body.</li>
  <li>Double-click a card to edit it (rich text: headings, lists, tables, links between nodes).</li>
  <li>Drag to reorder and to change a card's parent.</li>
</ul>
<h2>Options</h2>
<p>In <b>Options</b> you get line colors and a compact mode that packs the chart by outlines when it gets wide.</p>
<h2>Converting to a free canvas</h2>
<p><b>File → To canvas</b> turns the organigram into a <b>Canvas</b> — a copy with the same nodes and connections, laid out as the organigram had them. Useful when the hierarchy starts getting in the way.</p>`,
    es: `<p class="lead">Un árbol jerárquico de cartas, dibujado de arriba hacia abajo como un organigrama: cada carta cuelga de su padre. En un proyecto de software es <b>el mapa</b>: qué hay, cómo está armado y por qué se decidió así.</p>
<h2>Cómo se trabaja</h2>
<ul>
  <li><b>Agregar a la raíz</b> crea una carta de primer nivel; de ahí en más, cada carta puede tener hijas.</li>
  <li>Las cartas arrancan <b>colapsadas</b>: ves el título, y el ▲/▼ abre el cuerpo.</li>
  <li>Doble clic en una carta para editarla (texto rico: títulos, listas, tablas, links entre nodos).</li>
  <li>Arrastrá para reordenar y para cambiarle el padre a una carta.</li>
</ul>
<h2>Opciones</h2>
<p>En <b>Opciones</b> tenés colores de líneas y un modo compacto que aprieta el diagrama por contornos cuando se hace ancho.</p>
<h2>Convertirlo en lienzo libre</h2>
<p><b>Archivo → A canvas</b> convierte el organigrama en un <b>Canvas</b> — una copia con los mismos nodos y conexiones, ubicados como los tenía el organigrama. Sirve cuando la jerarquía te empieza a molestar.</p>`,
  },
},
{
  id: "mode-freestyle", g: "modes",
  t: { en: "Canvas: associative memory", es: "Canvas: memoria asociativa" },
  b: {
    en: `<p class="lead">Loose nodes with no hierarchy: put them wherever you want and join them with arrows. It is where what you learned about the project ends up when it does not fit a tree.</p>
<ul>
  <li>Double-click the empty canvas to create a node, or use <b>Add node</b>.</li>
  <li><b>Sectors</b> group nodes: a titled area you drag around with everything inside it.</li>
  <li><b>Shapes</b>: frames, arrows and figures to annotate what you drew.</li>
  <li><b>Options</b>: node and arrow colors, default size, grid, and clearing the canvas.</li>
</ul>
<p>It is the mode for architecture sketches, notes, maps of ideas, gotchas — the things you would otherwise re-explain to your agent every session.</p>`,
    es: `<p class="lead">Nodos sueltos sin jerarquía: los ponés donde querés y los unís con flechas. Es donde termina lo que fuiste aprendiendo del proyecto y no entra en un árbol.</p>
<ul>
  <li>Doble clic en el lienzo vacío para crear un nodo, o usá <b>Agregar nodo</b>.</li>
  <li>Los <b>sectores</b> agrupan nodos: un área con título que arrastrás con todo lo de adentro.</li>
  <li><b>Formas</b>: marcos, flechas y figuras para anotar lo que dibujaste.</li>
  <li><b>Opciones</b>: colores de nodos y flechas, tamaño por defecto, grilla, y limpiar el lienzo.</li>
</ul>
<p>Es el modo para bocetos de arquitectura, notas, mapas de ideas, trampas conocidas — lo que si no le volvés a explicar a tu agente en cada sesión.</p>`,
  },
},
{
  id: "mode-activities", g: "modes",
  t: { en: "Activities: what is missing, in order", es: "Actividades: lo que falta, en orden" },
  b: {
    en: `<p class="lead">The flow of a system or a project: each activity in its column, placed by the precedences you declare. It is the to-do your agent can read and write.</p>
<ul>
  <li><b>Time unit</b>: hours, days or weeks — it is what durations and the schedule are read in.</li>
  <li><b>Levels</b>: shows the level divisions, i.e. what can run at the same time.</li>
  <li><b>Critical path</b>: highlights the chain that decides the total duration — what you have to shorten to finish earlier.</li>
  <li><b>Gantt view</b>: the same diagram as a schedule over time.</li>
</ul>
<p>You do not place activities by hand in a timeline: you declare what depends on what, and the diagram works out the columns, the levels and the critical path.</p>`,
    es: `<p class="lead">El flujo de un sistema o de un proyecto: cada actividad en su columna, ubicada por las precedencias que declarás. Es el pendiente que tu agente puede leer y escribir.</p>
<ul>
  <li><b>Unidad de tiempo</b>: horas, días o semanas — es en lo que se leen las duraciones y el cronograma.</li>
  <li><b>Niveles</b>: muestra las divisiones de nivel, o sea qué puede correr al mismo tiempo.</li>
  <li><b>Camino crítico</b>: resalta la cadena que decide la duración total — lo que hay que acortar para terminar antes.</li>
  <li><b>Vista Gantt</b>: el mismo diagrama como cronograma en el tiempo.</li>
</ul>
<p>No ubicás actividades a mano en una línea de tiempo: declarás qué depende de qué, y el diagrama calcula las columnas, los niveles y el camino crítico.</p>`,
  },
},
{
  id: "mode-object", g: "modes",
  t: { en: "Object: model and test", es: "Object: modelar y probar" },
  b: {
    en: `<p class="lead">Classes and objects on a canvas — and the same diagram that models your system is the one that exercises it.</p>
<h2>The model</h2>
<p>Classes describe the domain (their fields and types). Instances of those classes are concrete cases: real data, not a drawing of data.</p>
<h2>The test</h2>
<p><b>Fetch</b> nodes hit real API endpoints, taking their body from the objects you built and leaving the response back on the canvas. That is what makes an object diagram a test bench: you model once and reuse it to check that the API answers what the model says.</p>
<div class="note">Because the objects are real data, you can also use this mode to <b>generate JSON</b> for fixtures, seeds or examples.</div>`,
    es: `<p class="lead">Clases y objetos en un lienzo — y el mismo diagrama que modela tu sistema es el que lo ejercita.</p>
<h2>El modelo</h2>
<p>Las clases describen el dominio (sus campos y tipos). Las instancias de esas clases son casos concretos: datos de verdad, no un dibujo de datos.</p>
<h2>La prueba</h2>
<p>Los nodos <b>Fetch</b> pegan contra endpoints reales de la API, tomando su body de los objetos que armaste y dejando la respuesta de vuelta en el lienzo. Eso es lo que convierte a un diagrama de objetos en un banco de pruebas: modelás una vez y lo reusás para chequear que la API responda lo que el modelo dice.</p>
<div class="note">Como los objetos son datos reales, este modo también sirve para <b>generar JSON</b> de fixtures, seeds o ejemplos.</div>`,
  },
},
{
  id: "mode-orchestrator", g: "modes",
  t: { en: "AI Orchestrator: the harness", es: "Orquestador IA: el arnés" },
  b: {
    en: `<p class="lead">A canvas where the nodes are AI employees with a role, and the other projects of the folder are the resources they work with. The diagram is the runtime, the documentation and the memory of that company.</p>
<h2>How it works</h2>
<ul>
  <li><b>Agents</b> have a role, their own AI (an API model or a local CLI) and their own memory.</li>
  <li><b>Resources</b> are the projects of the folder: an object model to test endpoints, an activities diagram as the plan, an organigram as the map.</li>
  <li><b>Agent folders</b> are real folders of your disk, each with its permission: that is how an agent gets to read and write code, confined to that folder and nothing outside it.</li>
  <li><b>The wiring decides the tools</b>: connecting an agent to a resource is what gives it the tools of that resource — nothing more.</li>
  <li><b>Runs</b>: the history of every execution — who did what, what it cost, and the snapshot to roll back to.</li>
  <li><b>Keys</b>: the API keys the company runs on. They live outside the diagram, never inside it.</li>
</ul>
<h2>Rules that keep it sane</h2>
<ul>
  <li><b>One orchestrator per folder</b>, and its reach is only that folder.</li>
  <li><b>Budget and stop button</b>: a cap on turns per run, and pause/kill.</li>
  <li><b>Snapshot before writing</b>: every turn that writes saves the previous state first, so you can undo what an agent did.</li>
  <li>An agent can <b>stop and ask you</b>, and you answer in its own mini-chat.</li>
</ul>
<div class="note">The engine runs on your machine, so the orchestrator needs the backend running.</div>`,
    es: `<p class="lead">Un lienzo donde los nodos son empleados IA con un rol, y los otros proyectos de la carpeta son los recursos con los que trabajan. El diagrama es a la vez el runtime, la documentación y la memoria de esa empresa.</p>
<h2>Cómo funciona</h2>
<ul>
  <li>Los <b>agentes</b> tienen un rol, su propia IA (un modelo de API o un CLI local) y su propia memoria.</li>
  <li>Los <b>recursos</b> son los otros proyectos de la carpeta: un modelo object para probar endpoints, un diagrama de actividades como plan, un organigrama como mapa.</li>
  <li>Las <b>carpetas de agente</b> son carpetas reales de tu disco, cada una con su permiso: así es como un agente llega a leer y escribir código, confinado a esa carpeta y a nada de afuera.</li>
  <li><b>El cableado decide las herramientas</b>: conectar un agente a un recurso es lo que le da las tools de ese recurso — nada más.</li>
  <li><b>Runs</b>: el historial de cada ejecución — quién hizo qué, cuánto costó, y el snapshot al que volver.</li>
  <li><b>Keys</b>: las API keys con las que corre la empresa. Viven afuera del diagrama, nunca adentro.</li>
</ul>
<h2>Reglas que lo mantienen sano</h2>
<ul>
  <li><b>Un orquestador por carpeta</b>, y su alcance es solo esa carpeta.</li>
  <li><b>Presupuesto y botón de freno</b>: tope de turnos por run, y pausa/kill.</li>
  <li><b>Snapshot antes de escribir</b>: cada turno que escribe guarda primero el estado anterior, así se deshace lo que hizo un agente.</li>
  <li>Un agente puede <b>frenar y preguntarte</b>, y le respondés en su propio mini-chat.</li>
</ul>
<div class="note">El motor corre en tu máquina, así que el orquestador necesita el backend corriendo.</div>`,
  },
},
{
  id: "mode-questionnaire", g: "modes",
  t: { en: "Questionnaire: study", es: "Cuestionario: estudiar" },
  b: {
    en: `<p class="lead">A canvas of study nodes: open questions, multiple choice and tests that grade you.</p>
<p>The usual flow is to load material into an organigram or a canvas project, ask the AI to turn it into questions, and review here. Pick the kind of node in <b>Add node</b>.</p>`,
    es: `<p class="lead">Un lienzo de nodos de estudio: preguntas abiertas, multiple choice y tests que te corrigen.</p>
<p>El flujo habitual es cargar el material en un organigrama o un proyecto canvas, pedirle a la IA que lo convierta en preguntas, y repasar acá. El tipo de nodo se elige en <b>Agregar nodo</b>.</p>`,
  },
},
{
  id: "mode-documents", g: "modes",
  t: { en: "Documents: a library", es: "Documentos: una biblioteca" },
  b: {
    en: `<p class="lead">A library of documents for the project — PDFs, images, audio and text — with a viewer built in.</p>
<ul>
  <li>The explorer on the left holds your documents and folders; <b>Add documents</b> brings files in from your machine.</li>
  <li>The viewer on the right reads, annotates and exports what you pick.</li>
  <li>The AI can read these documents, which is the point: it is the material it works from.</li>
</ul>
<div class="note">Without the backend the documents stay <b>only in this browser</b>, and there is a quota. Run the backend to keep them as real files.</div>`,
    es: `<p class="lead">Una biblioteca de documentos para el proyecto — PDFs, imágenes, audio y texto — con visor incluido.</p>
<ul>
  <li>El explorador de la izquierda tiene tus documentos y carpetas; <b>Agregar documentos</b> trae archivos de tu máquina.</li>
  <li>El visor de la derecha lee, anota y exporta lo que elijas.</li>
  <li>La IA puede leer estos documentos, que es el punto: son el material del que trabaja.</li>
</ul>
<div class="note">Sin el backend los documentos quedan <b>solo en este navegador</b>, y hay una cuota. Corré el backend para tenerlos como archivos reales.</div>`,
  },
},

// ============================ LA IA ============================
{
  id: "mcp", g: "ai",
  t: { en: "Claude Code and MCP", es: "Claude Code y el MCP" },
  b: {
    en: `<p class="lead">This is the point of the whole thing: your coding agent reads and writes these diagrams while it codes, and you watch the canvas move.</p>
<p>The backend exposes the diagrams over <b>MCP</b>, so Claude Code —or any MCP client— can use them as its context. Documentation stops rotting, because the one keeping it is the one writing the code.</p>
<h2>Connecting it</h2>
<p>Run the program with <code>--mcp-config</code> and it prints the JSON ready to paste into your <code>.mcp.json</code>, with the right path and password already filled in:</p>
<pre><code>DiagraMinder --mcp-config</code></pre>
<p>It exists because the alternative is building that JSON by hand, and a mistyped password fails with an error that tells you nothing.</p>
<h2>What the agent can do</h2>
<table>
  <tr><th>Tool</th><th>What it does</th></tr>
  <tr><td><b>list_diagrams</b></td><td>Which diagrams exist, by folder, with their type.</td></tr>
  <tr><td><b>read_diagram</b></td><td>Reads one whole.</td></tr>
  <tr><td><b>diagram_schema</b></td><td>The real schema of that diagram type.</td></tr>
  <tr><td><b>write_diagram</b></td><td>Replaces it. You see it on screen instantly, without reloading.</td></tr>
</table>
<h2>Why it cannot break your work</h2>
<ul>
  <li>If you edited the same diagram a moment ago, the write is <b>refused</b> and the agent is told to re-read and reapply — it never silently overwrites you.</li>
  <li>Changing a diagram's <b>type</b> is refused: the type is its identity.</li>
  <li>Invalid JSON is refused before anything touches the disk.</li>
  <li>Every write is versioned like any other, so <b>Versions</b> undoes it.</li>
</ul>
<h2>What you let it do</h2>
<p>It is a switch with three levels, in <b>Settings → This program → What the MCP can do</b> (or the <b>MCP</b> section of the backend's own panel). It starts <b>on</b> and at the lowest one.</p>
<table>
  <tr><th>Level</th><th>What the agent gets</th></tr>
  <tr><td><b>Diagrams only</b> (default)</td><td>The four tools above. Nothing else.</td></tr>
  <tr><td><b>Diagrams + files</b></td><td>Also read, write, edit, search, version and git — <b>only inside a folder you pick</b>.</td></tr>
  <tr><td><b>Diagrams + files + commands</b></td><td>Also run commands.</td></tr>
</table>
<p>Asking for a file level without picking a folder does not open your whole disk: it falls back to diagrams. And the check lives in the program, not in this page — once you paste the config, the agent already has the address and the password, so a switch in a web page would not switch anything off.</p>
<h2>From Claude web</h2>
<p>Claude web runs on Anthropic's servers, so it cannot reach <code>127.0.0.1</code>. The program can open a <b>tunnel</b> that gives you a public address to add in Claude web as a custom connector; it asks for this program's password once.</p>
<div class="note">The tunnel never opens by itself, and it dies when you turn it off or close the app. While it is open, anyone with the address <b>and</b> the password reaches this machine at the level you chose.</div>
<div class="note"><b>diagram_schema</b> is there so the agent never guesses the format. A diagram written with invented fields opens empty — and that is your work gone.</div>`,
    es: `<p class="lead">Este es el punto de todo: tu agente de código lee y escribe estos diagramas mientras codea, y vos ves moverse el canvas.</p>
<p>El backend expone los diagramas por <b>MCP</b>, así Claude Code —o cualquier cliente MCP— los usa como su contexto. La documentación deja de pudrirse, porque el que la mantiene es el mismo que escribe el código.</p>
<h2>Cómo se conecta</h2>
<p>Corré el programa con <code>--mcp-config</code> y te imprime el JSON listo para pegar en tu <code>.mcp.json</code>, con la ruta y la contraseña ya puestas:</p>
<pre><code>DiagraMinder --mcp-config</code></pre>
<p>Existe porque la alternativa es armar ese JSON a mano, y una contraseña mal copiada falla con un error que no dice nada.</p>
<h2>Qué puede hacer el agente</h2>
<table>
  <tr><th>Herramienta</th><th>Qué hace</th></tr>
  <tr><td><b>list_diagrams</b></td><td>Qué diagramas hay, por carpeta, con su tipo.</td></tr>
  <tr><td><b>read_diagram</b></td><td>Lee uno entero.</td></tr>
  <tr><td><b>diagram_schema</b></td><td>El esquema real de ese tipo de diagrama.</td></tr>
  <tr><td><b>write_diagram</b></td><td>Lo reemplaza. Lo ves en la pantalla al instante, sin recargar.</td></tr>
</table>
<h2>Por qué no te puede romper el trabajo</h2>
<ul>
  <li>Si vos editaste ese mismo diagrama hace un momento, la escritura se <b>rechaza</b> y al agente se le dice que vuelva a leer y reaplique — nunca te pisa en silencio.</li>
  <li>Cambiarle el <b>tipo</b> a un diagrama se rechaza: el tipo es su identidad.</li>
  <li>Un JSON inválido se rechaza antes de tocar el disco.</li>
  <li>Cada escritura queda versionada como cualquier otra, así que <b>Versiones</b> la deshace.</li>
</ul>
<h2>Qué le dejás hacer</h2>
<p>Es un interruptor con tres niveles, en <b>Ajustes → Este programa → Qué puede hacer el MCP</b> (o en la sección <b>MCP</b> del panel del backend). Arranca <b>prendido</b> y en el más bajo.</p>
<table>
  <tr><th>Nivel</th><th>Qué recibe el agente</th></tr>
  <tr><td><b>Solo diagramas</b> (default)</td><td>Las cuatro herramientas de arriba. Nada más.</td></tr>
  <tr><td><b>Diagramas + archivos</b></td><td>Además leer, escribir, editar, buscar, versionar y git — <b>solo adentro de una carpeta que elegís</b>.</td></tr>
  <tr><td><b>Diagramas + archivos + comandos</b></td><td>Además ejecutar comandos.</td></tr>
</table>
<p>Pedir un nivel de archivos sin elegir carpeta no abre tu disco entero: vuelve a diagramas. Y el chequeo vive en el programa, no en esta página — una vez que pegaste la config, el agente ya tiene la dirección y la contraseña, así que un interruptor en una web no apagaría nada.</p>
<h2>Desde Claude web</h2>
<p>Claude web corre en los servidores de Anthropic, así que no puede alcanzar <code>127.0.0.1</code>. El programa puede abrir un <b>túnel</b> que te da una dirección pública para agregar en Claude web como connector propio; te pide la contraseña de este programa una vez.</p>
<div class="note">El túnel nunca se abre solo, y se muere al apagarlo o al cerrar la app. Mientras esté abierto, cualquiera con la dirección <b>y</b> la contraseña llega a esta máquina con el nivel que elegiste.</div>
<div class="note"><b>diagram_schema</b> está para que el agente nunca adivine el formato. Un diagrama escrito con campos inventados abre vacío — y eso es tu trabajo perdido.</div>`,
  },
},
{
  id: "ai-chat", g: "ai",
  t: { en: "The chat", es: "El chat" },
  b: {
    en: `<p class="lead">The chat works on the project you choose and edits it through tools. It needs an AI behind it — that is the first thing to set up.</p>
<h2>Where the AI comes from</h2>
<table>
  <tr><th>Source</th><th>What it is</th></tr>
  <tr><td><b>Claude Code / Codex / Gemini CLI</b></td><td>The AI already installed on your machine, through the backend. No tokens metered by us, no per-call cost.</td></tr>
  <tr><td><b>An API key</b></td><td>Anthropic, OpenAI, Google or any OpenAI-compatible endpoint. You add the key in Settings and it stays in your browser.</td></tr>
</table>
<p>The selector at the top of the chat only offers what you can use <b>right now</b>: with the backend not connected it shows your APIs plus <b>Connect backend</b>, and <b>Add API key</b>. Without either, the chat stays off until you set one up.</p>
<h2>Modes</h2>
<ul>
  <li><b>Edit automatically</b>: it applies the changes.</li>
  <li><b>Plan mode</b>: it explores and proposes a plan before touching anything.</li>
</ul>
<h2>Commands</h2>
<p>The <b>/</b> button in the composer (or typing <code>/</code>) opens the commands. They do not send by themselves: they drop a long prompt into the box so you can read it and adjust it before sending.</p>
<ul>
  <li><code>/startproyect</code> — sets up a whole project around the orchestrator: it asks what the project is about, whether it already exists (so it reads the code first) and which diagrams to create.</li>
  <li><code>/help</code> — explains the app and answers what you ask.</li>
</ul>`,
    es: `<p class="lead">El chat trabaja sobre el proyecto que elijas y lo edita con herramientas. Necesita una IA detrás — eso es lo primero que hay que configurar.</p>
<h2>De dónde sale la IA</h2>
<table>
  <tr><th>Fuente</th><th>Qué es</th></tr>
  <tr><td><b>Claude Code / Codex / Gemini CLI</b></td><td>La IA que ya tenés instalada en tu máquina, a través del backend. Sin tokens medidos por nosotros ni costo por llamada.</td></tr>
  <tr><td><b>Una API key</b></td><td>Anthropic, OpenAI, Google o cualquier endpoint compatible con OpenAI. La clave la cargás en Ajustes y queda en tu navegador.</td></tr>
</table>
<p>El selector de arriba del chat solo ofrece lo que podés usar <b>ahora</b>: con el backend sin conectar muestra tus APIs más <b>Conectar backend</b>, y <b>Agregar API key</b>. Sin ninguna de las dos, el chat queda apagado hasta que configures una.</p>
<h2>Modos</h2>
<ul>
  <li><b>Editar automáticamente</b>: aplica los cambios.</li>
  <li><b>Modo plan</b>: explora y propone un plan antes de tocar nada.</li>
</ul>
<h2>Comandos</h2>
<p>El botón <b>/</b> del composer (o tipear <code>/</code>) abre los comandos. No se mandan solos: dejan un prompt largo en el cuadro para que lo leas y lo ajustes antes de enviar.</p>
<ul>
  <li><code>/startproyect</code> — arma un proyecto entero alrededor del orquestador: pregunta de qué se trata, si ya existe (entonces lee el código primero) y qué diagramas crear.</li>
  <li><code>/help</code> — explica la app y responde lo que le preguntes.</li>
</ul>`,
  },
},
{
  id: "skills", g: "ai",
  t: { en: "Skills", es: "Skills" },
  b: {
    en: `<p class="lead">Files you hand to <b>any</b> AI, in whatever chat you already use, so its answer comes straight in as a project.</p>
<p>Download one from <b>Skills</b> in the top bar and paste it into your AI of choice. It teaches the format DiagraMinder reads, so you can ask for "a summary of this book as a tree" in a chat that knows nothing about us, and bring the answer in.</p>
<div class="note">Useful when the AI you like lives somewhere else. If your agent runs on your machine, MCP is the better path: it reads and writes the diagrams directly.</div>`,
    es: `<p class="lead">Archivos que le das a <b>cualquier</b> IA, en el chat que ya uses, para que su respuesta entre directo como proyecto.</p>
<p>Descargá uno desde <b>Skills</b> en la barra de arriba y pegalo en la IA que prefieras. Le enseña el formato que DiagraMinder lee, así podés pedirle "un resumen de este libro como árbol" a un chat que no sabe nada de nosotros, y traer la respuesta.</p>
<div class="note">Sirve cuando la IA que te gusta vive en otro lado. Si tu agente corre en tu máquina, el MCP es el camino mejor: lee y escribe los diagramas directamente.</div>`,
  },
},

// ============================ REFERENCIA ============================
{
  id: "versions", g: "ref",
  t: { en: "Versions and undo", es: "Versiones y deshacer" },
  b: {
    en: `<p class="lead">Every diagram mode has a <b>Versions</b> button: the history of the project, with date and author.</p>
<ul>
  <li>Changes are snapshotted as you work, and you can restore any point.</li>
  <li>The author says whether it was you or an AI — and which agent, when it came from the orchestrator.</li>
  <li>The orchestrator saves a snapshot <b>before every turn that writes</b>, which is what makes an agent's work undoable.</li>
</ul>`,
    es: `<p class="lead">Todos los modos de diagrama tienen el botón <b>Versiones</b>: el historial del proyecto, con fecha y autor.</p>
<ul>
  <li>Los cambios se van guardando mientras trabajás, y podés restaurar cualquier punto.</li>
  <li>El autor dice si fuiste vos o una IA — y qué agente, cuando vino del orquestador.</li>
  <li>El orquestador guarda un snapshot <b>antes de cada turno que escribe</b>, que es lo que hace deshacible el trabajo de un agente.</li>
</ul>`,
  },
},
{
  id: "export", g: "ref",
  t: { en: "Exporting", es: "Exportar" },
  b: {
    en: `<p class="lead">Your diagrams are yours: take them anywhere.</p>
<table>
  <tr><th>Format</th><th>Good for</th></tr>
  <tr><td><b>Obsidian</b></td><td>The tree as linked markdown notes.</td></tr>
  <tr><td><b>PNG / PDF</b></td><td>The diagram as an image or a document, to share or print.</td></tr>
  <tr><td><b>Word</b></td><td>Organigram projects: the hierarchy becomes headings. The other modes have no hierarchy that maps to Word.</td></tr>
</table>
<div class="note">Keep your own copies: the app is in beta.</div>`,
    es: `<p class="lead">Tus diagramas son tuyos: llevátelos a donde quieras.</p>
<table>
  <tr><th>Formato</th><th>Para qué</th></tr>
  <tr><td><b>Obsidian</b></td><td>El árbol como notas markdown enlazadas.</td></tr>
  <tr><td><b>PNG / PDF</b></td><td>El diagrama como imagen o documento, para compartir o imprimir.</td></tr>
  <tr><td><b>Word</b></td><td>Proyectos organigrama: la jerarquía se convierte en títulos. Los otros modos no tienen jerarquía que se traduzca a Word.</td></tr>
</table>
<div class="note">Guardá tus propias copias: la app está en beta.</div>`,
  },
},
{
  id: "privacy", g: "ref",
  t: { en: "Privacy and data", es: "Privacidad y datos" },
  b: {
    en: `<p class="lead">Where each thing lives, in one place. Short version: on your machine.</p>
<table>
  <tr><th>What</th><th>Where</th></tr>
  <tr><td>Projects, without the backend</td><td>Only in that browser.</td></tr>
  <tr><td>Projects, with the backend</td><td>Files on your machine, in the storage folder you choose.</td></tr>
  <tr><td>Your API keys</td><td>Your browser. Never in the diagram.</td></tr>
  <tr><td>The backend's password</td><td>Your machine.</td></tr>
  <tr><td>What you send to an AI</td><td>Straight to the provider you chose, or to the CLI on your machine. Not through us.</td></tr>
</table>
<p>Full text: <a href="/privacidad">Privacy Policy</a> · <a href="/terminos">Terms of Service</a>.</p>`,
    es: `<p class="lead">Dónde vive cada cosa, en un solo lugar. La versión corta: en tu máquina.</p>
<table>
  <tr><th>Qué</th><th>Dónde</th></tr>
  <tr><td>Los proyectos, sin el backend</td><td>Solo en ese navegador.</td></tr>
  <tr><td>Los proyectos, con el backend</td><td>Archivos en tu máquina, en la carpeta de almacenamiento que elijas.</td></tr>
  <tr><td>Tus API keys</td><td>Tu navegador. Nunca en el diagrama.</td></tr>
  <tr><td>La contraseña del backend</td><td>Tu máquina.</td></tr>
  <tr><td>Lo que le mandás a una IA</td><td>Directo al proveedor que elegiste, o al CLI de tu máquina. No pasa por nosotros.</td></tr>
</table>
<p>Texto completo: <a href="/privacidad">Política de Privacidad</a> · <a href="/terminos">Condiciones del Servicio</a>.</p>`,
  },
},
];
