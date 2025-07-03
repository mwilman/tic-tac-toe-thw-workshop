import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class TicTacToeApp implements AfterViewInit {
  // Spielfeld: 9 Felder (0-8), leer = '', X oder O
  board: string[] = ['', '', '', '', '', '', '', '', ''];

  // Aktueller Spieler
  currentPlayer: 'X' | 'O' = 'X';

  // Ist das Spiel aktiv?
  gameActive: boolean = true;

  // Alle möglichen Gewinnkombinationen
  winConditions: number[][] = [
    [0, 1, 2], // Erste Reihe
    [3, 4, 5], // Zweite Reihe
    [6, 7, 8], // Dritte Reihe
    [0, 3, 6], // Erste Spalte
    [1, 4, 7], // Zweite Spalte
    [2, 5, 8], // Dritte Spalte
    [0, 4, 8], // Diagonale \
    [2, 4, 6]  // Diagonale /
  ];

  ngAfterViewInit(): void {
    this.updateDisplay();
    this.updateStatusMessage();
  }

  // AUFGABE 1: makeMove() Funktion - EXAKT WIE IN LOESUNG
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

  // AUFGABE 2: checkWinner() Funktion - EXAKT WIE IN LOESUNG
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

  // AUFGABE 3: restartGame() Funktion - EXAKT WIE IN LOESUNG
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

  // Hilfsfunktionen - vereinfacht
  private switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.updateStatusMessage();
  }

  private isBoardFull(): boolean {
    return this.board.every(cell => cell !== '');
  }

  private updateDisplay(): void {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
      const cellElement = cell as HTMLElement;
      cellElement.textContent = this.board[index];
    });
  }

  private updateStatusMessage(): void {
    const statusElement = document.getElementById('game-status');
    if (statusElement && this.gameActive) {
      statusElement.textContent = `Spieler ${this.currentPlayer} ist dran`;
    }
  }

  private showWinnerMessage(winner: string): void {
    const statusElement = document.getElementById('game-status');
    if (statusElement) {
      if (winner === 'draw') {
        statusElement.textContent = 'Unentschieden!';
      } else {
        statusElement.textContent = `Spieler ${winner} hat gewonnen!`;
      }
    }
  }

  // Für Template-Binding
  getCellValue(index: number): string {
    return this.board[index];
  }

  getStatusMessage(): string {
    if (this.gameActive) {
      return `Spieler ${this.currentPlayer} ist dran`;
    }
    return '';
  }
}
