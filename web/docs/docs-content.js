// Contenido de la documentación pública (/docs).
//
// UNA sola lista con los dos idiomas pegados: `t` (título) y `b` (cuerpo) llevan
// `{ en, es }`. Así una sección nueva nace en los dos idiomas o no nace — con dos
// archivos separados se desincronizan a la segunda edición.
//
// `g` agrupa en el índice de la izquierda. El `id` es el ancla de la URL (/docs#id):
// NO se cambia una vez publicado, o se rompen los links que la gente guardó.
//
// El cuerpo es HTML plano (lo pinta docs.html tal cual). Sin dependencias.

const GROUPS = {
  start:  { en: "Getting started", es: "Empezar" },
  modes:  { en: "The modes",       es: "Los modos" },
  ai:     { en: "The AI",          es: "La IA" },
  cloud:  { en: "Cloud & team",    es: "Nube y equipo" },
  ref:    { en: "Reference",       es: "Referencia" },
};

const DOCS = [
// ============================ EMPEZAR ============================
{
  id: "what-is", g: "start",
  t: { en: "What DiagraMinder is", es: "Qué es DiagraMinder" },
  b: {
    en: `<p class="lead">A local-first canvas where diagrams are also tools: trees, flows, object models, real code folders and teams of AI agents — all versioned and reversible.</p>
<p>Most diagramming apps draw pictures. Here a diagram can <b>do things</b>: an object model that hits your real API endpoints, an activity diagram that computes the critical path, a folder of code an AI can edit, a canvas of agents that actually runs.</p>
<h2>Three ideas worth knowing up front</h2>
<ul>
  <li><b>Local-first.</b> Your projects live in your browser and, if you install the local software, on your own machine. The cloud is optional.</li>
  <li><b>Everything is versioned.</b> Changes are snapshotted with date and author, so anything you —or an AI— did can be rolled back.</li>
  <li><b>The AI is a guest, not the owner.</b> You choose which AI runs (a local CLI or your own API key) and what it can touch.</li>
</ul>
<div class="note"><b>Beta.</b> DiagraMinder is in beta: keep your own copies of anything that matters. The app exports to Obsidian, PDF, PNG and Word.</div>`,
    es: `<p class="lead">Un lienzo local-first donde los diagramas además son herramientas: árboles, flujos, modelos de objetos, carpetas reales de código y equipos de agentes IA — todo versionado y reversible.</p>
<p>La mayoría de las apps de diagramas dibujan. Acá un diagrama puede <b>hacer cosas</b>: un modelo de objetos que pega contra los endpoints reales de tu API, un diagrama de actividades que calcula el camino crítico, una carpeta de código que una IA puede editar, un lienzo de agentes que efectivamente corre.</p>
<h2>Tres ideas para arrancar</h2>
<ul>
  <li><b>Local-first.</b> Tus proyectos viven en tu navegador y, si instalás el software local, en tu propia máquina. La nube es opcional.</li>
  <li><b>Todo queda versionado.</b> Los cambios se guardan con fecha y autor, así todo lo que hiciste —o hizo una IA— se puede deshacer.</li>
  <li><b>La IA es invitada, no dueña.</b> Vos elegís qué IA corre (un CLI local o tu propia API key) y qué puede tocar.</li>
</ul>
<div class="note"><b>Beta.</b> DiagraMinder está en beta: guardá tus propias copias de lo que te importe. La app exporta a Obsidian, PDF, PNG y Word.</div>`,
  },
},
{
  id: "folders-projects", g: "start",
  t: { en: "Folders and projects", es: "Carpetas y proyectos" },
  b: {
    en: `<p class="lead">A <b>project</b> is one diagram. A <b>folder</b> groups projects and decides where they live.</p>
<h2>The folder decides the connector</h2>
<p>Every folder has a connector — the place its projects are stored and the thing that gives them their powers:</p>
<table>
  <tr><th>Connector</th><th>Where the projects live</th></tr>
  <tr><td><b>Browser</b></td><td>Only in this browser, on this machine. Nothing leaves it.</td></tr>
  <tr><td><b>Local software</b></td><td>Real files on your machine, in a folder you choose. Needed for the editor and the orchestrator engine.</td></tr>
  <tr><td><b>Cloud (your own or the shared free one)</b></td><td>A multi-user server: several people, permissions per folder, live sync.</td></tr>
</table>
<p>In the top bar, the first box is the <b>folder</b> and the second the <b>project</b> open inside it. The name navigates; the little arrow opens the list to switch.</p>
<div class="note">Switching folder changes the project list with it: a folder only ever shows its own projects.</div>`,
    es: `<p class="lead">Un <b>proyecto</b> es un diagrama. Una <b>carpeta</b> agrupa proyectos y decide dónde viven.</p>
<h2>La carpeta decide el conector</h2>
<p>Cada carpeta tiene un conector — el lugar donde se guardan sus proyectos y lo que les da sus poderes:</p>
<table>
  <tr><th>Conector</th><th>Dónde viven los proyectos</th></tr>
  <tr><td><b>Navegador</b></td><td>Solo en este navegador, en esta máquina. No sale nada.</td></tr>
  <tr><td><b>Software local</b></td><td>Archivos reales en tu máquina, en una carpeta que elegís. Hace falta para el editor y para el motor del orquestador.</td></tr>
  <tr><td><b>Nube (la tuya o la free compartida)</b></td><td>Un server multiusuario: varias personas, permisos por carpeta, sincronización en vivo.</td></tr>
</table>
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
  <li><b>File, Edit, View</b>: only inside a project. In an organigram, <b>File → To freestyle</b> converts it into a free canvas.</li>
  <li><b>Skills</b>: files you hand to any AI so it answers in DiagraMinder's format.</li>
  <li><b>AI</b>: the chat panel. <b>Settings</b>: connections, API keys, theme. <b>Account</b>: cloud, sharing and invitations.</li>
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
  <li><b>Archivo, Editar, Ver</b>: solo dentro de un proyecto. En un organigrama, <b>Archivo → A freestyle</b> lo convierte en lienzo libre.</li>
  <li><b>Skills</b>: archivos que le das a cualquier IA para que responda en el formato de DiagraMinder.</li>
  <li><b>IA</b>: el panel de chat. <b>Ajustes</b>: conexiones, API keys, tema. <b>Cuenta</b>: nube, compartir e invitaciones.</li>
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
{
  id: "mode-cart", g: "modes",
  t: { en: "Organigram", es: "Organigrama" },
  b: {
    en: `<p class="lead">A hierarchical tree of cards, drawn top-down like an org chart: each card hangs off its parent.</p>
<h2>Working with it</h2>
<ul>
  <li><b>Add to root</b> creates a top-level card; from there every card can have children.</li>
  <li>Double-click a card to edit it (rich text: headings, lists, tables, links between nodes).</li>
  <li>Drag to reorder and to change a card's parent.</li>
</ul>
<h2>Options</h2>
<p>In <b>Options</b> you get line colors and a compact mode that packs the chart by outlines when it gets wide.</p>
<h2>Converting to a free canvas</h2>
<p><b>File → To freestyle</b> turns the organigram into a <b>Freestyle</b> canvas — a copy with the same nodes and connections, laid out as the organigram had them. Useful when the hierarchy starts getting in the way.</p>`,
    es: `<p class="lead">Un árbol jerárquico de cartas, dibujado de arriba hacia abajo como un organigrama: cada carta cuelga de su padre.</p>
<h2>Cómo se trabaja</h2>
<ul>
  <li><b>Agregar a la raíz</b> crea una carta de primer nivel; de ahí en más, cada carta puede tener hijas.</li>
  <li>Doble clic en una carta para editarla (texto rico: títulos, listas, tablas, links entre nodos).</li>
  <li>Arrastrá para reordenar y para cambiarle el padre a una carta.</li>
</ul>
<h2>Opciones</h2>
<p>En <b>Opciones</b> tenés colores de líneas y un modo compacto que aprieta el diagrama por contornos cuando se hace ancho.</p>
<h2>Convertirlo en lienzo libre</h2>
<p><b>Archivo → A freestyle</b> convierte el organigrama en un lienzo <b>Freestyle</b> — una copia con los mismos nodos y conexiones, ubicados como los tenía el organigrama. Sirve cuando la jerarquía te empieza a molestar.</p>`,
  },
},
{
  id: "mode-freestyle", g: "modes",
  t: { en: "Freestyle: free canvas", es: "Freestyle: lienzo libre" },
  b: {
    en: `<p class="lead">Loose nodes with no hierarchy: put them wherever you want and join them with arrows.</p>
<ul>
  <li>Double-click the empty canvas to create a node, or use <b>Add node</b>.</li>
  <li><b>Shapes</b>: frames, arrows and figures to group and annotate what you drew.</li>
  <li><b>Options</b>: node and arrow colors, default size, grid, and clearing the canvas.</li>
</ul>
<p>It is the mode for whatever does not fit a tree: architecture sketches, notes, maps of ideas, documentation of a system.</p>`,
    es: `<p class="lead">Nodos sueltos sin jerarquía: los ponés donde querés y los unís con flechas.</p>
<ul>
  <li>Doble clic en el lienzo vacío para crear un nodo, o usá <b>Agregar nodo</b>.</li>
  <li><b>Formas</b>: marcos, flechas y figuras para agrupar y anotar lo que dibujaste.</li>
  <li><b>Opciones</b>: colores de nodos y flechas, tamaño por defecto, grilla, y limpiar el lienzo.</li>
</ul>
<p>Es el modo para lo que no entra en un árbol: bocetos de arquitectura, notas, mapas de ideas, documentación de un sistema.</p>`,
  },
},
{
  id: "mode-activities", g: "modes",
  t: { en: "Activities: flow and schedule", es: "Actividades: flujo y cronograma" },
  b: {
    en: `<p class="lead">The flow of a system or a project: each activity in its column, placed by the precedences you declare.</p>
<ul>
  <li><b>Time unit</b>: hours, days or weeks — it is what durations and the schedule are read in.</li>
  <li><b>Levels</b>: shows the level divisions, i.e. what can run at the same time.</li>
  <li><b>Critical path</b>: highlights the chain that decides the total duration — what you have to shorten to finish earlier.</li>
  <li><b>Gantt view</b>: the same diagram as a schedule over time.</li>
</ul>
<p>You do not place activities by hand in a timeline: you declare what depends on what, and the diagram works out the columns, the levels and the critical path.</p>`,
    es: `<p class="lead">El flujo de un sistema o de un proyecto: cada actividad en su columna, ubicada por las precedencias que declarás.</p>
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
  id: "mode-questionnaire", g: "modes",
  t: { en: "Questionnaire: study", es: "Cuestionario: estudiar" },
  b: {
    en: `<p class="lead">A canvas of study nodes: open questions, multiple choice and tests that grade you.</p>
<p>The usual flow is to load material into an organigram or freestyle project, ask the AI to turn it into questions, and review here. Pick the kind of node in <b>Add node</b>.</p>`,
    es: `<p class="lead">Un lienzo de nodos de estudio: preguntas abiertas, multiple choice y tests que te corrigen.</p>
<p>El flujo habitual es cargar el material en un organigrama o un proyecto freestyle, pedirle a la IA que lo convierta en preguntas, y repasar acá. El tipo de nodo se elige en <b>Agregar nodo</b>.</p>`,
  },
},
{
  id: "mode-editor", g: "modes",
  t: { en: "Editor: a real folder of code", es: "Editor: una carpeta real de código" },
  b: {
    en: `<p class="lead">A folder of your machine (or of a connector) opened inside DiagraMinder: browse its files, edit them — and let the AI do the same, confined to that folder.</p>
<h2>What it needs</h2>
<ul>
  <li>The <b>local software</b> connected (or a connector you administer).</li>
  <li>A <b>target</b>: the real folder it points at. Without it the project exists but has nothing to work on.</li>
</ul>
<h2>Why it matters</h2>
<p>It is the mode that lets an AI actually implement things instead of describing them. The file tools are confined to the target: everything resolves inside that folder and nothing outside it can be read or written.</p>
<div class="note">This mode takes over the whole board, so the app's explorer and Versions step aside: file history lives inside the editor.</div>`,
    es: `<p class="lead">Una carpeta de tu máquina (o de un conector) abierta adentro de DiagraMinder: recorrés sus archivos, los editás — y la IA también, confinada a esa carpeta.</p>
<h2>Qué necesita</h2>
<ul>
  <li>El <b>software local</b> conectado (o un conector del que seas admin).</li>
  <li>Un <b>target</b>: la carpeta real a la que apunta. Sin eso el proyecto existe pero no tiene sobre qué trabajar.</li>
</ul>
<h2>Por qué importa</h2>
<p>Es el modo que le permite a una IA implementar de verdad en vez de describir. Las herramientas de archivos están confinadas al target: todo se resuelve adentro de esa carpeta y nada de afuera se puede leer ni escribir.</p>
<div class="note">Este modo se toma el board entero, así que el explorador y Versiones de la app se corren: el historial de archivos vive adentro del editor.</div>`,
  },
},
{
  id: "mode-orchestrator", g: "modes",
  t: { en: "AI Orchestrator: a company of agents", es: "Orquestador IA: una empresa de agentes" },
  b: {
    en: `<p class="lead">A canvas where the nodes are AI employees with a role, and the other projects of the folder are the resources they work with. The diagram is the runtime, the documentation and the memory of that company.</p>
<h2>How it works</h2>
<ul>
  <li><b>Agents</b> have a role, their own AI (an API model or a local CLI) and their own memory.</li>
  <li><b>Resources</b> are the projects of the folder: an editor to write code, an object model to test endpoints, an activities diagram as the plan.</li>
  <li><b>The wiring decides the tools</b>: connecting an agent to a resource is what gives it the tools of that resource — nothing more.</li>
  <li><b>Presets</b>: ready-made companies and sectors (PM, devs, tester, security) you insert and edit.</li>
  <li><b>Runs</b>: the history of every execution — who did what, what it cost, and the snapshot to roll back to.</li>
  <li><b>Keys</b>: the API keys the company runs on. They live in its connector, never inside the diagram.</li>
</ul>
<h2>Rules that keep it sane</h2>
<ul>
  <li><b>One orchestrator per folder</b>, and its reach is only that folder.</li>
  <li><b>Budget and stop button</b>: a cap on turns per run, and pause/kill.</li>
  <li><b>Snapshot before writing</b>: every turn that writes saves the previous state first, so you can undo what an agent did.</li>
  <li>An agent can <b>stop and ask you</b>, and you answer in its own mini-chat.</li>
</ul>
<div class="note">The engine runs on the connector of its folder: with a local folder, on your machine — so the orchestrator needs the local software connected.</div>`,
    es: `<p class="lead">Un lienzo donde los nodos son empleados IA con un rol, y los otros proyectos de la carpeta son los recursos con los que trabajan. El diagrama es a la vez el runtime, la documentación y la memoria de esa empresa.</p>
<h2>Cómo funciona</h2>
<ul>
  <li>Los <b>agentes</b> tienen un rol, su propia IA (un modelo de API o un CLI local) y su propia memoria.</li>
  <li>Los <b>recursos</b> son los proyectos de la carpeta: un editor para escribir código, un modelo object para probar endpoints, un diagrama de actividades como plan.</li>
  <li><b>El cableado decide las herramientas</b>: conectar un agente a un recurso es lo que le da las tools de ese recurso — nada más.</li>
  <li><b>Presets</b>: empresas y sectores ya armados (PM, devs, tester, seguridad) que insertás y editás.</li>
  <li><b>Runs</b>: el historial de cada ejecución — quién hizo qué, cuánto costó, y el snapshot al que volver.</li>
  <li><b>Keys</b>: las API keys con las que corre la empresa. Viven en su conector, nunca adentro del diagrama.</li>
</ul>
<h2>Reglas que lo mantienen sano</h2>
<ul>
  <li><b>Un orquestador por carpeta</b>, y su alcance es solo esa carpeta.</li>
  <li><b>Presupuesto y botón de freno</b>: tope de turnos por run, y pausa/kill.</li>
  <li><b>Snapshot antes de escribir</b>: cada turno que escribe guarda primero el estado anterior, así se deshace lo que hizo un agente.</li>
  <li>Un agente puede <b>frenar y preguntarte</b>, y le respondés en su propio mini-chat.</li>
</ul>
<div class="note">El motor corre en el conector de su carpeta: con una carpeta local, en tu máquina — por eso el orquestador necesita el software local conectado.</div>`,
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
<div class="note">Without the local software the documents stay <b>only in this browser</b>. Connect it (or a cloud connector) to keep them somewhere real.</div>`,
    es: `<p class="lead">Una biblioteca de documentos para el proyecto — PDFs, imágenes, audio y texto — con visor incluido.</p>
<ul>
  <li>El explorador de la izquierda tiene tus documentos y carpetas; <b>Agregar documentos</b> trae archivos de tu máquina.</li>
  <li>El visor de la derecha lee, anota y exporta lo que elijas.</li>
  <li>La IA puede leer estos documentos, que es el punto: son el material del que trabaja.</li>
</ul>
<div class="note">Sin el software local los documentos quedan <b>solo en este navegador</b>. Conectalo (o un conector de nube) para tenerlos en un lugar real.</div>`,
  },
},

// ============================ LA IA ============================
{
  id: "ai-chat", g: "ai",
  t: { en: "The chat", es: "El chat" },
  b: {
    en: `<p class="lead">The chat works on the project you choose and edits it through tools. It needs an AI behind it — that is the first thing to set up.</p>
<h2>Where the AI comes from</h2>
<table>
  <tr><th>Backend</th><th>What it is</th></tr>
  <tr><td><b>Local · Claude Code / Codex / Gemini CLI</b></td><td>The AI already installed on your machine, through the local software. No tokens metered by us, no per-call cost.</td></tr>
  <tr><td><b>An API key</b></td><td>Anthropic, OpenAI, Google or any OpenAI-compatible endpoint. You add the key in Settings and it stays in your browser.</td></tr>
</table>
<p>The selector at the top of the chat only offers what you can use <b>right now</b>: with no local connection it shows your APIs plus <b>Connect to local</b>, and <b>Add API key</b>. Without either, the chat stays off until you set one up.</p>
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
  <tr><th>Backend</th><th>Qué es</th></tr>
  <tr><td><b>Local · Claude Code / Codex / Gemini CLI</b></td><td>La IA que ya tenés instalada en tu máquina, a través del software local. Sin tokens medidos por nosotros ni costo por llamada.</td></tr>
  <tr><td><b>Una API key</b></td><td>Anthropic, OpenAI, Google o cualquier endpoint compatible con OpenAI. La clave la cargás en Ajustes y queda en tu navegador.</td></tr>
</table>
<p>El selector de arriba del chat solo ofrece lo que podés usar <b>ahora</b>: sin conexión local muestra tus APIs más <b>Conectar al local</b>, y <b>Agregar API key</b>. Sin ninguna de las dos, el chat queda apagado hasta que configures una.</p>
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
  id: "local-software", g: "ai",
  t: { en: "The local software", es: "El software local" },
  b: {
    en: `<p class="lead">A small program you run on your machine. The browser cannot start processes or open your folders — that is what it is for.</p>
<h2>What it unlocks</h2>
<ul>
  <li>Projects saved as real files on your disk.</li>
  <li>The <b>local CLIs</b> (Claude Code, Codex, Gemini CLI) as the chat's backend.</li>
  <li><b>Editor</b> mode: a real folder of code.</li>
  <li>The <b>orchestrator engine</b>.</li>
</ul>
<h2>Connecting it</h2>
<ol>
  <li><b>Settings → Download local</b> and run it (there is a ready-to-use executable, no installation).</li>
  <li><b>Settings → Connect local</b>. If it asks for a password, it is in <code>token.txt</code> in the program's folder, or printed in its console when it starts.</li>
</ol>
<div class="note">It listens only on your own machine. Nothing of this goes through our servers.</div>`,
    es: `<p class="lead">Un programita que corrés en tu máquina. El navegador no puede lanzar procesos ni abrir tus carpetas — para eso está.</p>
<h2>Qué habilita</h2>
<ul>
  <li>Proyectos guardados como archivos reales en tu disco.</li>
  <li>Los <b>CLIs locales</b> (Claude Code, Codex, Gemini CLI) como backend del chat.</li>
  <li>El modo <b>Editor</b>: una carpeta real de código.</li>
  <li>El <b>motor del orquestador</b>.</li>
</ul>
<h2>Conectarlo</h2>
<ol>
  <li><b>Ajustes → Descargar local</b> y ejecutalo (hay un ejecutable listo para usar, sin instalación).</li>
  <li><b>Ajustes → Conectar local</b>. Si te pide contraseña, está en <code>token.txt</code> en la carpeta del programa, o impresa en su consola al arrancar.</li>
</ol>
<div class="note">Escucha solo en tu propia máquina. Nada de esto pasa por nuestros servidores.</div>`,
  },
},
{
  id: "skills", g: "ai",
  t: { en: "Skills", es: "Skills" },
  b: {
    en: `<p class="lead">Files you hand to <b>any</b> AI, in whatever chat you already use, so its answer comes straight in as a project.</p>
<p>Download one from <b>Skills</b> in the top bar and paste it into your AI of choice. It teaches the format DiagraMinder reads, so you can ask for "a summary of this book as a tree" in a chat that knows nothing about us, and bring the answer in.</p>
<div class="note">Useful when the AI you like lives somewhere else, or when you would rather not connect anything to the app.</div>`,
    es: `<p class="lead">Archivos que le das a <b>cualquier</b> IA, en el chat que ya uses, para que su respuesta entre directo como proyecto.</p>
<p>Descargá uno desde <b>Skills</b> en la barra de arriba y pegalo en la IA que prefieras. Le enseña el formato que DiagraMinder lee, así podés pedirle "un resumen de este libro como árbol" a un chat que no sabe nada de nosotros, y traer la respuesta.</p>
<div class="note">Sirve cuando la IA que te gusta vive en otro lado, o cuando preferís no conectar nada a la app.</div>`,
  },
},

// ============================ NUBE Y EQUIPO ============================
{
  id: "account", g: "cloud",
  t: { en: "Account", es: "Cuenta" },
  b: {
    en: `<p class="lead">You can use DiagraMinder without an account. You need one to keep folders in the cloud, share projects and receive invitations.</p>
<p>Sign in from <b>Account</b> in the top bar. When you sign up, a cloud folder is provisioned for you on the shared free instance.</p>
<div class="note">The free instance is meant for trying things out and for small teams. Some heavier modes (editor, orchestrator) are not hosted there — for those, run the local software or your own connector.</div>`,
    es: `<p class="lead">Podés usar DiagraMinder sin cuenta. Hace falta para tener carpetas en la nube, compartir proyectos y recibir invitaciones.</p>
<p>Iniciá sesión desde <b>Cuenta</b> en la barra de arriba. Al registrarte se te provisiona una carpeta en la nube, en la instancia free compartida.</p>
<div class="note">La instancia free es para probar y para equipos chicos. Algunos modos pesados (editor, orquestador) no se alojan ahí — para esos, corré el software local o tu propio conector.</div>`,
  },
},
{
  id: "external-connector", g: "cloud",
  t: { en: "External connector (your own cloud)", es: "Conector externo (tu propia nube)" },
  b: {
    en: `<p class="lead">A multi-user server you (or your company) run. Its folders are shared: several people work on the same projects, with permissions and live sync.</p>
<h2>What it gives you</h2>
<ul>
  <li><b>Shared folders</b> with per-folder permissions: read, write, admin.</li>
  <li><b>Live sync</b>: what someone changes shows up for the others without reloading, and revoking access cuts it immediately.</li>
  <li><b>Git versioning</b> of the projects and an admin dashboard.</li>
  <li><b>MCP</b>: an address you give to an external AI so it can read and write those projects.</li>
</ul>
<h2>Setting it up</h2>
<ol>
  <li><b>Settings → Download external</b> and run it on your server (Docker or Python).</li>
  <li><b>Settings → Add external connector</b> with its address and your user.</li>
  <li>Folders created there are hosted on that server; only an admin of the connector can create them.</li>
</ol>
<div class="note">The local software is for one machine — yours. The external connector is for a team.</div>`,
    es: `<p class="lead">Un server multiusuario que corrés vos (o tu empresa). Sus carpetas son compartidas: varias personas trabajan sobre los mismos proyectos, con permisos y sincronización en vivo.</p>
<h2>Qué te da</h2>
<ul>
  <li><b>Carpetas compartidas</b> con permisos por carpeta: lectura, escritura, admin.</li>
  <li><b>Sincronización en vivo</b>: lo que cambia alguien aparece en los demás sin recargar, y revocar el acceso lo corta al instante.</li>
  <li><b>Versionado con git</b> de los proyectos y un panel de administración.</li>
  <li><b>MCP</b>: una dirección que le das a una IA externa para que lea y escriba esos proyectos.</li>
</ul>
<h2>Cómo se pone</h2>
<ol>
  <li><b>Ajustes → Descargar externo</b> y corrélo en tu server (Docker o Python).</li>
  <li><b>Ajustes → Agregar conector externo</b> con su dirección y tu usuario.</li>
  <li>Las carpetas que se creen ahí viven en ese server; solo un admin del conector puede crearlas.</li>
</ol>
<div class="note">El software local es para una máquina — la tuya. El conector externo es para un equipo.</div>`,
  },
},
{
  id: "sharing", g: "cloud",
  t: { en: "Sharing and invitations", es: "Compartir e invitaciones" },
  b: {
    en: `<p class="lead">Share a project with someone else and they get an invitation; accept it and the project appears in their app.</p>
<ul>
  <li>Permissions are <b>per project or per folder</b>: read or write.</li>
  <li>Invitations arrive without reloading — you get a red dot on your account pill and a sound.</li>
  <li><b>Revoking is immediate</b>: the other person loses access on the spot, and the project is removed from their app.</li>
</ul>
<div class="note">Permissions are enforced by the server, not by hiding buttons: what you cannot do is refused even if you go around the interface.</div>`,
    es: `<p class="lead">Compartís un proyecto con alguien y le llega una invitación; la acepta y el proyecto le aparece en su app.</p>
<ul>
  <li>Los permisos son <b>por proyecto o por carpeta</b>: lectura o escritura.</li>
  <li>Las invitaciones llegan sin recargar — te aparece un punto rojo sobre el pill de la cuenta y suena un aviso.</li>
  <li><b>Revocar es inmediato</b>: la otra persona pierde el acceso al instante, y el proyecto se le saca de la app.</li>
</ul>
<div class="note">Los permisos los hace cumplir el servidor, no el esconder botones: lo que no podés hacer se rechaza aunque le des la vuelta a la interfaz.</div>`,
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
    en: `<p class="lead">Where each thing lives, in one place.</p>
<table>
  <tr><th>What</th><th>Where</th></tr>
  <tr><td>Projects of a browser folder</td><td>Only in that browser.</td></tr>
  <tr><td>Projects of a local folder</td><td>Files on your machine.</td></tr>
  <tr><td>Projects of a cloud folder</td><td>The server of that connector.</td></tr>
  <tr><td>Your API keys</td><td>Your browser (and, for an orchestrator, its own connector). Never in the diagram.</td></tr>
  <tr><td>The local software's password</td><td>Your machine.</td></tr>
</table>
<p>Full text: <a href="/privacidad">Privacy Policy</a> · <a href="/terminos">Terms of Service</a>.</p>`,
    es: `<p class="lead">Dónde vive cada cosa, en un solo lugar.</p>
<table>
  <tr><th>Qué</th><th>Dónde</th></tr>
  <tr><td>Proyectos de una carpeta de navegador</td><td>Solo en ese navegador.</td></tr>
  <tr><td>Proyectos de una carpeta local</td><td>Archivos en tu máquina.</td></tr>
  <tr><td>Proyectos de una carpeta en la nube</td><td>El server de ese conector.</td></tr>
  <tr><td>Tus API keys</td><td>Tu navegador (y, para un orquestador, su propio conector). Nunca en el diagrama.</td></tr>
  <tr><td>La contraseña del software local</td><td>Tu máquina.</td></tr>
</table>
<p>Texto completo: <a href="/privacidad">Política de Privacidad</a> · <a href="/terminos">Condiciones del Servicio</a>.</p>`,
  },
},
];
