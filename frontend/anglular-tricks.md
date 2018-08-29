# Angular tricks

## Disable a form element

```html
<input [attr.disabled]="disabled ? '' : null" />
```

## Toggle multiple classes

## Async Validators

## Routing

### Links

```html
<button routerLink="/applications/add" ... />
```



```typescript
public constructor(private router: Router, ..) { }

this.router.navigate(['/applications/list']);
```



RxJs

```typescript
this._authService.loginSso().finally(() => {
this.loading = false;
}).subscribe(data => {
this._authService.saveLoginData(data);

// Redirect to dashboard
this.router.navigate(['/dashboard']);
}, error => {
this.handleError(error);
});
```



Error handling



```typescript
handleError(error: any) {

    let message = null;

    switch (error.status) {
      case 401:
        // Unauthorized : When the login/password are not correct
        message = "Le login ou le mot de passe est incorrect";
        break;

      case 403:
        // Forbidden : when the user is disabled
        message = "Votre compte est désactivé";
        break;
    }

    if (message) {
      this._alert.error({
        title: 'Oops...',
        showConfirmButton: false,
        timer: 1500,
        text: message
      });
    }
  }
```

