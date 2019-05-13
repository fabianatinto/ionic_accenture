import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { stringify } from '@angular/compiler/src/util';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public tarefas: string []= [];
  public tarefa: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    

  }
  
  adicionar(tarefas){

    this.tarefa = "tarefa";
    this.navCtrl.push(tarefa);
    console.log(this.tarefas);

  }
   
 


deletar(tarefa){
   this.navCtrl.pop(tarefa)
   this.tarefa;
   console.log(this.tarefas);

}
    
}
