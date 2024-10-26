import { Component } from '@angular/core';
import {GoodsService} from '../../services/goods.service';
import {Good} from '../../models/good';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-goods-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './goods-add.component.html',
  styleUrl: './goods-add.component.css'
})
export class GoodsAddComponent {
  public recipient:string|null = null;
  public description:string|null = null;
  public status:string|null = null;

  public constructor(private goodsService:GoodsService) {

  }

  public addNewGood(){
    const tmp:Good= {
      description: "Šalikas",
      recipient: "Žmona",
      status: "Suplanuotas",
      id: null
    }
    this.goodsService.addGood(tmp);
  }
}
