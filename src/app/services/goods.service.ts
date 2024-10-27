import { Injectable } from '@angular/core';
import {Good} from '../models/good';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private http:HttpClient) { }

  public addGood(item:Good) {
    this.http.post("https://knygu-sarasas-2be35-default-rtdb.europe-west1.firebasedatabase.app/goods.json", item).subscribe(()=>{});
  }

  public loadGoods() {
    return this.http.get<{[key:string]:Good}>("https://knygu-sarasas-2be35-default-rtdb.europe-west1.firebasedatabase.app/goods.json");
  }
}
