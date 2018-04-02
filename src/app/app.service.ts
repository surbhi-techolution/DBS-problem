import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class AppService {
  // using dummy service call
  public url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(public http: HttpClient) { }

  /**
   * @name postSavedData
   * @param data
   * @param description post the data to API.
   */
  public postSavedData(data: string): Observable <any> {
    return this.http.post(this.url, data);
  }
}
