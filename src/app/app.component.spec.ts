import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

const EVENT = {
  target: {
    value: 'value'
  }
};
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [AppService]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should post data to API after 5 sec', () => {
    spyOn(component, 'setDelayTime');
    spyOn(component, 'saveData');
    component.onKeyUp(EVENT);
    fixture.detectChanges();
    expect(component.setDelayTime).toHaveBeenCalledWith(EVENT.target.value);
    setTimeout(() => {
      expect(component.saveData).toHaveBeenCalledWith(EVENT.target.value);
    }, 5200);
  });
  it('should post data to API for 20,40,60 etc char lengths', () => {
    EVENT.target.value = 'This is Surbhi Gupta';
    spyOn(component, 'setDelayTime');
    spyOn(component, 'saveData');
    component.onKeyUp(EVENT);
    fixture.detectChanges();
    expect(component.setDelayTime).not.toHaveBeenCalled();
    expect(component.saveData).toHaveBeenCalledWith(EVENT.target.value);
  });
});
