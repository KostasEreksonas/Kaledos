import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GoodsAddComponent} from './components/goods-add/goods-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GoodsAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kaledos';
}
