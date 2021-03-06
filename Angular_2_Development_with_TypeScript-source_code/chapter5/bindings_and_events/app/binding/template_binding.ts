import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <button (click)="flag = !flag">Toggle flag's value</button>

    <p>
      Flags's value: {{flag}}
    </p>

    <p>
     1. span with *ngIf="flag": <span *ngIf="flag">Flag is true</span>
    </p>

    <p>
      2. template with [ngIf]="flag": <template [ngIf]="flag">Flag is true</template>
    </p>
  `
})
class AppComponent {
    flag: boolean = true;
}

bootstrap(AppComponent);