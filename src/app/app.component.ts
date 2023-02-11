import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 
template: '<h1>Hello {{name}}</h1><a href={{link}}>Visit My React App</a>'
})

export class AppComponent {
  title = 'basicAngular';
  name = 'this is my demo angular app'
  link = 'https://bhuvnesh325219.github.io/react_demo_app/'
}
