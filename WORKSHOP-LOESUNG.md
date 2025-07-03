# 🎮 Tic Tac Toe Workshop - Musterlösung

Diese Datei enthält die Lösungen für die drei Aufgaben. Zeigen Sie diese den Teilnehmern erst, wenn sie selbst versucht haben!

## Aufgabe 1: makeMove() Funktion

```typescript
makeMove(index: number): void {
  // Prüfen ob das Feld schon belegt ist oder das Spiel beendet ist
  if (this.board[index] !== '' || !this.gameActive) {
    return; // Nichts tun, wenn Feld belegt oder Spiel beendet
  }
  
  // Spielzug ausführen
  this.board[index] = this.currentPlayer;
  this.updateDisplay();
  this.checkWinner();
  
  // Nur Spieler wechseln, wenn das Spiel noch aktiv ist
  if (this.gameActive) {
    this.switchPlayer();
  }
}
```

## Aufgabe 2: checkWinner() Funktion

```typescript
checkWinner(): void {
  // Alle Gewinnkombinationen durchgehen
  for (let condition of this.winConditions) {
    let [a, b, c] = condition;
    
    // Prüfen ob alle drei Felder gleich und nicht leer sind
    if (this.board[a] !== '' && 
        this.board[a] === this.board[b] && 
        this.board[a] === this.board[c]) {
      
      // Gewinner gefunden!
      this.gameActive = false;
      this.showWinnerMessage(this.board[a]);
      return;
    }
  }
  
  // Prüfen auf Unentschieden (alle Felder voll, aber kein Gewinner)
  if (this.isBoardFull()) {
    this.gameActive = false;
    this.showWinnerMessage('draw');
  }
}
```

## Aufgabe 3: restartGame() Funktion

```typescript
restartGame(): void {
  // Spielfeld leeren
  this.board = ['', '', '', '', '', '', '', '', ''];
  
  // Spieler zurücksetzen
  this.currentPlayer = 'X';
  
  // Spiel aktivieren
  this.gameActive = true;
  
  // Anzeige aktualisieren
  this.updateDisplay();
  this.updateStatusMessage();
}
```

## 💡 Zusätzliche Verbesserungen (für Fortgeschrittene)

### 1. Spieler-Namen anpassen
```typescript
// Oben in der Klasse hinzufügen:
playerNames = { 'X': 'Alice', 'O': 'Bob' };

// In updateStatusMessage() ändern:
statusElement.textContent = `${this.playerNames[this.currentPlayer]} ist dran`;
```

### 2. Gewinn-Animation
```typescript
// In checkWinner() nach Gewinner gefunden:
this.highlightWinningCells(condition);

private highlightWinningCells(winningCondition: number[]): void {
  const cells = document.querySelectorAll('.cell');
  winningCondition.forEach(index => {
    const cell = cells[index] as HTMLElement;
    cell.style.backgroundColor = '#4CAF50';
    cell.style.animation = 'pulse 1s infinite';
  });
}
```

### 3. Spielstatistiken
```typescript
// Oben in der Klasse hinzufügen:
stats = { X: 0, O: 0, draws: 0 };

// In showWinnerMessage() hinzufügen:
if (winner !== 'draw') {
  this.stats[winner]++;
} else {
  this.stats.draws++;
}
console.log('Statistiken:', this.stats);
```

## 🎯 Workshop-Tipps für Betreuer

1. **Schritt für Schritt**: Lassen Sie die Teilnehmer erst `makeMove()` implementieren, bevor sie zu `checkWinner()` übergehen.

2. **Debugging**: Zeigen Sie den Teilnehmern die Browser-Konsole (F12) - dort sehen sie ihre console.log() Ausgaben.

3. **Gemeinsam testen**: Nach jeder implementierten Funktion das Spiel zusammen testen.

4. **Erweiterungen**: Für schnelle Teilnehmer gibt es die Zusatzaufgaben oben.

5. **Fehlerbehandlung**: Häufige Fehler:
   - Vergessen von `this.` vor Variablen
   - Falsche Array-Indizes (0-8, nicht 1-9)
   - Vergessen der Klammern bei Funktionsaufrufen
