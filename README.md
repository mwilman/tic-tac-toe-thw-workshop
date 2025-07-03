# 🎮 Tic Tac Toe Workshop - Anleitung für Betreuer

## 📋 Workshop-Übersicht

**Zielgruppe**: 14-18 Jahre, THW-Jugend  
**Dauer**: 2-3 Stunden  
**Niveau**: Programmier-Anfänger  
**Lernziele**: Grundlagen JavaScript/TypeScript, Logisches Denken, Problemlösung

## 🚀 Vorbereitung (15 Min)

### 1. Projekt starten
```bash
cd /Users/mwilman/WebstormProjects/tic-tac-toe
npm install
npm start
```

### 2. Browser öffnen
- Navigiere zu `http://localhost:4200`
- Zeige den Teilnehmern das Interface
- Erkläre, dass die Buttons noch nicht funktionieren

### 3. Code-Editor zeigen
- Öffne `src/app/app.ts`
- Zeige die TODO-Bereiche
- Erkläre die Struktur

## 📚 Workshop-Ablauf

### Phase 1: Einführung (20 Min)

**1. Was ist Tic Tac Toe?**
- Kurz die Spielregeln erklären
- 3x3 Feld, X und O abwechselnd
- Ziel: 3 in einer Reihe

**2. Programmierung erklärt**
```typescript
// Zeige diese Konzepte:
let spieler = 'X';           // Variable
board[0] = spieler;          // Array
if (board[0] === 'X') {      // Bedingung
  console.log('X ist hier'); // Ausgabe
}
```

**3. Projekt-Struktur**
- HTML = Aussehen der Webseite
- CSS = Design und Farben
- TypeScript = Funktionalität und Logik

### Phase 2: Aufgabe 1 - makeMove() (45 Min)

**Erkläre die Aufgabe:**
```typescript
makeMove(index: number): void {
  // 1. Ist das Feld frei?
  // 2. Ist das Spiel noch aktiv?
  // 3. Wenn ja: Spielzug ausführen
}
```

**Schritt-für-Schritt Anleitung:**

1. **Bedingung prüfen**
```typescript
if (this.board[index] !== '' || !this.gameActive) {
  return; // Früh beenden
}
```

2. **Spielzug ausführen**
```typescript
this.board[index] = this.currentPlayer;
this.updateDisplay();
this.checkWinner();
this.switchPlayer();
```

**Häufige Fehler:**
- `board[index]` statt `this.board[index]`
- Vergessene Klammern bei Funktionsaufrufen
- Falsche Bedingungen

### Phase 3: Aufgabe 2 - checkWinner() (45 Min)

**Erkläre Gewinnbedingungen:**
- 3 in einer Reihe (horizontal, vertikal, diagonal)
- Alle möglichen Kombinationen sind in `winConditions` gespeichert

**Lösungsansatz:**
```typescript
// 1. Durch alle Gewinnkombinationen gehen
for (let condition of this.winConditions) {
  let [a, b, c] = condition; // Array-Destructuring
  
  // 2. Prüfen ob alle drei gleich und nicht leer
  if (this.board[a] !== '' && 
      this.board[a] === this.board[b] && 
      this.board[a] === this.board[c]) {
    // Gewinner gefunden!
  }
}
```

**Zusätzlich: Unentschieden prüfen**
```typescript
if (this.isBoardFull()) {
  this.showWinnerMessage('draw');
}
```

### Phase 4: Aufgabe 3 - restartGame() (30 Min)

**Einfachste Aufgabe:**
```typescript
restartGame(): void {
  this.board = ['', '', '', '', '', '', '', '', ''];
  this.currentPlayer = 'X';
  this.gameActive = true;
  this.updateDisplay();
  this.updateStatusMessage();
}
```

### Phase 5: Testen und Erweitern (30 Min)

**Gemeinsam testen:**
- Alle Funktionen durchspielen
- Edge-Cases testen (volles Feld, etc.)
- Bugs gemeinsam fixen

**Mögliche Erweiterungen:**
- Spieler-Namen anpassen
- Punktezähler hinzufügen
- Animationen einbauen

## 🎯 Didaktische Tipps

### Für Anfänger
- **Langsam erklären**: Jede Zeile Code einzeln besprechen
- **Viel testen**: Nach jeder Änderung das Spiel ausprobieren
- **Fehler sind normal**: Debugging als wichtigen Skill vermitteln
- **Visuelle Hilfen**: Browser-Konsole und Developer Tools zeigen

### Motivation aufrechterhalten
- **Kleine Erfolge feiern**: Jede funktionierende Funktion ist ein Erfolg
- **Teamwork fördern**: Teilnehmer sollen sich gegenseitig helfen
- **Kreativität erlauben**: Eigene Ideen für Erweiterungen

### Troubleshooting
```typescript
// Häufige Fehler und Lösungen:

// ❌ Falsch:
board[index] = currentPlayer;

// ✅ Richtig:
this.board[index] = this.currentPlayer;

// ❌ Falsch: 
if (board[a] == board[b] == board[c])

// ✅ Richtig:
if (this.board[a] === this.board[b] && this.board[a] === this.board[c])
```

## 📱 Technische Hinweise

### Browser-Konsole nutzen
- F12 oder Rechtsklick → "Untersuchen"
- Console-Tab öffnen
- `console.log()` Ausgaben werden hier angezeigt

### Live-Reload
- Änderungen werden automatisch im Browser aktualisiert
- Bei Fehlern: Seite neu laden (F5)

### Backup-Plan
- Falls TypeScript zu komplex: In `WORKSHOP-LOESUNG.md` sind alle Lösungen
- Einzelne Funktionen können kopiert werden, wenn Teilnehmer nicht weiterkommen

## 🎉 Abschluss

### Reflektion (15 Min)
- Was habt ihr gelernt?
- Was war schwierig?
- Welche Ideen habt ihr für weitere Projekte?

### Nächste Schritte
- HTML/CSS Grundlagen vertiefen
- Weitere JavaScript/TypeScript Projekte
- Frameworks wie Angular, React erkunden

**Erfolg gemessen an:**
- Funktionierendes Tic Tac Toe Spiel
- Verständnis für Grundkonzepte
- Spaß am Programmieren entwickelt
