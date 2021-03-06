import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { path } from "../config.module";
import "rxjs/add/operator/toPromise";

@Injectable()
export class UserService {
  headers = new Headers({'Content-Type': 'application/json'});
  private basePath:string = path.path;

  constructor(private http:Http) {
  }

  private handleError(error:any):Promise<any> {
    console.error("Ha ocurrido un error.")
    console.log(error)
    return Promise.reject(error.message || error)
  }

  //GET USUARIO
  public getAll():Promise<any> {
    let url = `${this.basePath}/user/`
    return this.http.get(url)
    .toPromise()
      .then(response => {
        return response.json()
      })
    .catch(this.handleError)
  }

  //GET USUARIO
  public getSingle(id:any):Promise<any> {
    let url = `${this.basePath}/user/${id}`
    return this.http.get(url)
    .toPromise()
      .then(response => {
        return response.json()
      })
    .catch(this.handleError)
  }

  //UPDATE USUARIO
  public updated(form:any):Promise<any> {
    let url = `${this.basePath}/user/${form.user_id}`
    return this.http.put(url, form)
    .toPromise()
      .then(response => {
        return response.json()
      })
    .catch(this.handleError)
  }

  //UPDATE USUARIO
  public create(form:any):Promise<any> {
    let url = `${this.basePath}/user/`
    return this.http.post(url, form)
    .toPromise()
      .then(response => {
        return response.json()
      })
    .catch(this.handleError)
  }

}
