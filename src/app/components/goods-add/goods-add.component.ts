import { Component } from '@angular/core';
import {GoodsService} from '../../services/goods.service';
import {Good} from '../../models/good';

@Component({
  selector: 'app-goods-add',
  standalone: true,
  imports: [],
  templateUrl: './goods-add.component.html',
  styleUrl: './goods-add.component.css'
})
export class GoodsAddComponent {
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
