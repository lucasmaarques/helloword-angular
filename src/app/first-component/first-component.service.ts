import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstComponentService {

  constructor() { }

  getList(){
    return ['Teste 1','Teste 2', 'Teste 3'];
  }
}
