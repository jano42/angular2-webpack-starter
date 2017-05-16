import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';
import * as Materialize from 'angular2-materialize';
import { Option } from './option';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  template: `
  <h1>Hello from Detail</h1>
  <span>
    <a [routerLink]=" ['./child-detail'] ">
      Child Detail
    </a>

    <a materialize="tooltip" class="btn tooltipped" data-position="bottom" data-delay="10" data-tooltip="I am tooltip">Hover me!</a>

    <div class="row">
        <div class="input-field col s6">
              <select [ngModel]="initialValue" (ngModelChange)="change($event)" 
                      id="selectExample" materialize="material_select" 
                      [materializeSelectOptions]="options">
                <option value="" disabled selected>Select option ..</option>
                <option *ngFor="let op of options" [value]="op.value">{{op.name}}</option>
            </select>
        </div>
    </div>

  <!-- toast -->
  <a class="btn" onclick="Materialize.toast('I am a toast', 4000)">Toast 1!</a>
  <a class="btn" (click)="triggerToast()" materialize [materializeParams]="['I am also a toast',4000]" [materializeActions]="globalActions">Toast 2!</a>    

  </span>
  <router-outlet></router-outlet>
  `,
})
export class DetailComponent implements OnInit {
    @Input() public initialValue: string;
    @Output() public modelChange = new EventEmitter();
    public options: Option[] = [];
    public  globalActions = new EventEmitter<string | MaterializeAction>();
    public change(newValue) {
      Materialize.toast('child select: ' + newValue, 2000);
      this.modelChange.emit(newValue);
    }

    public ngOnInit() {
      console.log('hello `Detail` component');

      this.options.push(new Option('value1', 'name1'));
      this.options.push(new Option('value2', 'name2'));
      this.options.push(new Option('value3', 'name3'));
      this.options.push(new Option('value4', 'name4'));
    }

    public triggerToast() {
      this.globalActions.emit('toast');
    }
}
