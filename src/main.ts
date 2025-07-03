import { bootstrapApplication } from '@angular/platform-browser';
import { TicTacToeApp } from './app/app';

bootstrapApplication(TicTacToeApp)
  .catch(err => console.error(err));
