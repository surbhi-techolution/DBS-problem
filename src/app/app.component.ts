import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public submitTimeout: any;
  entryForm: FormGroup;
  constructor(public service: AppService) {

  }
  ngOnInit() {
    this.entryForm = new FormGroup({
      text: new FormControl()
    });
  }
  /**
   * @name onKeyUp
   * @param event
   * @returns none
   * @description getting called on every key press
   * @memberOf AppComponent
   */
  onKeyUp(event) {
    clearTimeout(this.submitTimeout);
    const VALUE: string = event.target.value;
    if (VALUE.length % 20 === 0) {
      this.saveData(VALUE);
      return;
    }
    this.setDelayTime(VALUE);
  }
  /**
   * @name setDelayTime
   * @param event
   * @returns none
   * @description calling the service after every 5sec
   * @memberOf AppComponent
   */
  public setDelayTime(VALUE: string) {
    this.submitTimeout = setTimeout(() => {
      this.saveData(VALUE);
    }, 5000);
  }
  /**
   * @name saveData
   * @param event
   * @returns none
   * @description calling this service to post data to the server
   * @memberOf AppComponent
   */
  public saveData(VALUE: string) {
    this.service.postSavedData(VALUE).subscribe((res) => {
      console.log('Saved Data to API');
    });
  }
}
