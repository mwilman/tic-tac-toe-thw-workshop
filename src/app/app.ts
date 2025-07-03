import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'tic-tac-toe';

  // ========================================
  // SPIELVARIABLEN (BEREITS VORGEGEBEN)
  // ========================================

  // Das Spielfeld als Array mit 9 Feldern (0-8)
  board: string[] = ['', '', '', '', '', '', '', '', ''];

  // Aktueller Spieler (X oder O)
  currentPlayer: string = 'X';

  // Status des Spiels
  gameActive: boolean = true;

  // Alle möglichen Gewinnkombinationen
  winConditions: number[][] = [
    [0, 1, 2], // Erste Reihe
    [3, 4, 5], // Zweite Reihe
    [6, 7, 8], // Dritte Reihe
    [0, 3, 6], // Erste Spalte
    [1, 4, 7], // Zweite Spalte
    [2, 5, 8], // Dritte Spalte
    [0, 4, 8], // Diagonale von links oben nach rechts unten
    [2, 4, 6]  // Diagonale von rechts oben nach links unten
  ];

  // ========================================
  // AUFGABE 1: SPIELZUG MACHEN
  // ========================================

  protected makeMove(index: number): void {
    // TODO: Diese Funktion müsst ihr implementieren!
    //
    // Was soll passieren:
    // 1. Prüfen ob das Feld schon belegt ist (board[index] !== '')
    // 2. Prüfen ob das Spiel noch aktiv ist (gameActive)
    // 3. Falls beide Bedingungen erfüllt sind:
    //    - Setze den aktuellen Spieler in das Feld: board[index] = this.currentPlayer
    //    - Aktualisiere die Anzeige: this.updateDisplay()
    //    - Prüfe auf Gewinner: this.checkWinner()
    //    - Wechsle den Spieler: this.switchPlayer()

    console.log("🎯 Spielzug auf Feld", index, "- Implementiert diese Funktion!");

    // HINWEIS: Entfernt diese Zeile und schreibt eure eigene Implementierung:
    alert("⚠️ Diese Funktion muss noch implementiert werden!");
  }

  // ========================================
  // AUFGABE 2: GEWINNER PRÜFEN
  // ========================================

  protected checkWinner(): void {
    // TODO: Diese Funktion müsst ihr implementieren!
    //
    // Was soll passieren:
    // 1. Durchlaufe alle Gewinnkombinationen (this.winConditions)
    // 2. Für jede Kombination prüfe:
    //    - Sind alle drei Felder gleich und nicht leer?
    //    - Falls ja: Gewinner gefunden!
    // 3. Falls Gewinner gefunden:
    //    - Setze gameActive = false
    //    - Zeige Gewinnermeldung an
    // 4. Falls kein Gewinner aber Spielfeld voll:
    //    - Unentschieden!

    console.log("🏆 Prüfe auf Gewinner - Implementiert diese Funktion!");

    // HINWEIS: Hier ist ein Beispiel für eine Gewinnkombination:
    // let [a, b, c] = this.winConditions[0]; // [0, 1, 2]
    // if (this.board[a] !== '' && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
    //   // Gewinner gefunden!
    // }
  }

  // ========================================
  // AUFGABE 3: SPIEL NEUSTARTEN
  // ========================================

  protected restartGame(): void {
    // TODO: Diese Funktion müsst ihr implementieren!
    //
    // Was soll passieren:
    // 1. Leere das Spielfeld: board = ['', '', '', '', '', '', '', '', '']
    // 2. Setze Startspieler: currentPlayer = 'X'
    // 3. Aktiviere das Spiel: gameActive = true
    // 4. Aktualisiere die Anzeige: this.updateDisplay()

    console.log("🔄 Spiel wird neugestartet - Implementiert diese Funktion!");

    // HINWEIS: Entfernt diese Zeile und schreibt eure eigene Implementierung:
    alert("⚠️ Diese Funktion muss noch implementiert werden!");
  }

  // ========================================
  // HILFSFUNKTIONEN (BEREITS IMPLEMENTIERT)
  // ========================================

  // Wechselt zwischen den Spielern X und O
  private switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.updateStatusMessage();
  }

  // Aktualisiert die Spielfeld-Anzeige
  private updateDisplay(): void {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
      const button = cell as HTMLButtonElement;
      button.textContent = this.board[index];

      // Färbe X und O unterschiedlich
      if (this.board[index] === 'X') {
        button.style.color = '#e74c3c';
      } else if (this.board[index] === 'O') {
        button.style.color = '#3498db';
      }
    });
  }

  // Aktualisiert die Statusnachricht
  private updateStatusMessage(): void {
    const statusElement = document.getElementById('status');
    if (statusElement) {
      if (this.gameActive) {
        statusElement.textContent = `Spieler ${this.currentPlayer} ist dran`;
      }
    }
  }

  // Zeigt eine Gewinnermeldung an
  protected showWinnerMessage(winner: string): void {
    const statusElement = document.getElementById('status');
    if (statusElement) {
      if (winner === 'draw') {
        statusElement.textContent = '🤝 Unentschieden!';
      } else {
        statusElement.textContent = `🎉 Spieler ${winner} hat gewonnen!`;
      }
    }
  }

  // Prüft ob das Spielfeld voll ist
  protected isBoardFull(): boolean {
    return this.board.every(cell => cell !== '');
  }

  // ========================================
  // INITIALISIERUNG
  // ========================================

  ngOnInit(): void {
    this.updateDisplay();
    this.updateStatusMessage();
    console.log("🎮 Tic Tac Toe Workshop gestartet!");
    console.log("📝 Eure Aufgaben:");
    console.log("   1. makeMove() Funktion implementieren");
    console.log("   2. checkWinner() Funktion implementieren");
    console.log("   3. restartGame() Funktion implementieren");
  }
}
