import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activado:boolean = false;


  loggin(){
    this.activado = true 

    setTimeout(()=>{
      this.activado = false
    },5000)
  }

}
