# 🙊💻 BookMonkey mit Server-Side Rendering

Dieser BookMonkey enthält Server-Side Rendering und Statisches Pre-Rendering.

> 📕⚠️ **Bitte lesen Sie dazu das Kapitel 19 "Server-Side Rendering mit Angular Universal" im Angular-Buch (2. Auflage) ab Seite 537.**

Die Grundlage dieses Projekts ist der BookMonkey mit dem [Stand nach Iteration 7 "Internationalisierung (i18n)"](https://github.com/book-monkey3/iteration-7-i18n) – ohne SSR.

## Demo

Eine Livedemo mit Pre-Rendering finden Sie unter https://bm3-ssr.angular-buch.com.

## Dynamisches Server-Side Rendering

Um Server-Side Rendering im Projekt aufzusetzen, wurde der folgende Befehl genutzt.
Dieser Schritt ist bereits erledigt und muss nicht erneut durchgeführt werden:

```bash
ng add @nguniversal/express-engine --clientProject BookMonkey
```

Um dieses Projekt auszuführen, müssen Sie das Repo klonen und mithilfe `npm install` alle Abhängigkeiten installieren.
Anschließend können Sie das Projekt bauen:

```bash
npm run build:client-and-server-bundles
```

Der Serverprozess zur Auslieferung der gerenderten HTML-Seiten ist bereits aufgesetzt.
Nach dem Build kann der Server wie folgt gebaut und gestartet werden:

```bash
npm run compile:server
npm run serve:ssr
```

Anschließend ist die Anwendung unter http://localhost:4000 erreichbar.
Werfen Sie doert einen Blick in den ausgelieferten HTML-Code: Sie werden die vorgerenderte Angular-Anwendung erkennen.


## Statisches Pre-Rendering

Für das Pre-Rendering wurde die Datei `prerender.js` angelegt.
Darin befindet sich eine Liste der Routen, für die bereits beim Build eine HTML-Seite erzeugt und im Dateisystem abgelegt werden soll.

Passen Sie diese Liste ggf. an und führen Sie dann das Skript mithilfe von Node.js aus:

```bash
node prerender
```

Den Ordner `dist/browser` können Sie danach mit einem einfachen Webserver ausliefern.


