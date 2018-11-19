import {
  Component,
  SimpleChanges,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h2>Hello from hello component</h2>
    <p>{{ text }} from parent</p>

    <div *ngFor="let item of (object | keyvalue)">{{ item.key }}:{{ item.value }}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {
  @Input() text: string;
  @Input() object: any;

  ngOnInit(): void {
    console.log('Child OnInit ran');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child OnChanges ran', { changes });
  }
  ngOnDestroy(): void {
    console.log('Child OnDestroy ran');
  }
  ngAfterViewInit(): void {
    console.log('Child AfterViewInit ran');
  }
  ngAfterContentInit(): void {
    console.log('Child AfterContentInit ran');
  }
  ngAfterViewChecked(): void {
    console.log('Child AfterViewChecked ran');
  }
  ngAfterContentChecked(): void {
    console.log('Child AfterContentChecked ran');
  }
}
