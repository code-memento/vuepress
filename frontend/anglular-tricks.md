# Angular tricks

You can find in this article some Angular 4+ code snippets that will spare you from searching on Google.

Some of the snippets are from angular's official docummentation.

## Built-in directives

### NgIf

Simple form:

- `<div *ngIf="condition">...</div>`
- `<ng-template [ngIf]="condition"><div>...</div></ng-template>`

Form with an else block:

```html
<div *ngIf="condition; else elseBlock">...</div>
<ng-template #elseBlock>...</ng-template>
```

Form with a `then` and `else` block:

```html
<div *ngIf="condition; then thenBlock else elseBlock"></div>
<ng-template #thenBlock>...</ng-template>
<ng-template #elseBlock>...</ng-template>
```

Form with storing the value locally:

```html
<div *ngIf="condition as value; else elseBlock">{{value}}</div>
<ng-template #elseBlock>...</ng-template>
```

### NgSwitch

```html
<container-element [ngSwitch]="switch_expression">
  <some-element *ngSwitchCase="match_expression_1">...</some-element>
  <some-element *ngSwitchCase="match_expression_2">...</some-element>
  <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
  <ng-container *ngSwitchCase="match_expression_3">
    <!-- use a ng-container to group multiple root nodes -->
    <inner-element></inner-element>
    <inner-other-element></inner-other-element>
  </ng-container>
  <some-element *ngSwitchDefault>...</some-element>
</container-element>
```



## Modifying attributes

### Disable a form element

```html
<input [attr.disabled]="disabled ? '' : null" /> <!-- Works also for buttons -->
```

### Activating classes

#### One Class

```html
<div [class.is-active]="condition"></div>
```

#### Multiple classes

```html
<div [ngClass]="{
  'is-active': condition,
  'is-inactive': !condition,
  'is-focused': condition && anotherCondition,
}">
</div>
```



## Routing

### Links

#### In template

```html
<button routerLink="/applications/add" ... />
```

#### Programatically

```typescript
public constructor(private router: Router, ..) { }

this.router.navigate(['/applications/list']);
```



## RxJs

### finally

If you want to call a function when observable completes or errors (*executes in all cases*)

```typescript
this._service.doSomething().finally(() => {
    // Always
	this.loading = false;
}).subscribe(data => {
	// Success
}, error => {
	// Failure
});
```
