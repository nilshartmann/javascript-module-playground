# Eine React-Anwendung, die eine React Komponenten Lib verwendet

- Im Root-Verzeichnis `yarn install` ausführen
- `frontend` hat Zugriff auf Komponenten lib `lib`
  - Beispiel siehe `App.tsx`
- Wenn eine Komponente in `lib` verändert wurde:
  - `cd lib`
  - `yarn build`
- Wenn eine Komponente neu in `lib` ergänzt wurde:
  - die neue Komponente in `src/index.ts` exportieren
