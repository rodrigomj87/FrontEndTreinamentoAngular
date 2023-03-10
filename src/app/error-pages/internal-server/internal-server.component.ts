import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-server',
  templateUrl: './internal-server.component.html',
  styleUrls: ['./internal-server.component.css']
})
export class InternalServerComponent implements OnInit {
  errorMessage: string = "NÓS COMETEMOS UM ERRO. SENTIMOS MUITO POR ISSO E VAMOS RESOLVER O MAIS BREVE POSSÍVEL!!!!";
  constructor() { }

  ngOnInit() {
  }

}
