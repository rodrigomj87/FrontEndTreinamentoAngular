import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from 'src/app/_interfaces/produto.model';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutosRepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  /**
   * getProdutos = 
route: string  =>  */
  public getProdutos = (route: string) => {
    return this.http.get<Produto[]>(this.createCompleteRoute(route, this.envUrl.urlAddress)); 
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }
}
