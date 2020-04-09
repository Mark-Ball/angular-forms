# Angular Forms

This project was created by following the lesson on template-driven forms in the Angular docs: https://angular.io/guide/forms

## 1. Create the model and form component

## 2. Import forms module into app.module
```javascript
import { FormsModule } from '@angular/forms';

imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // add this
],
```

## 3. Display the new component in app.component.html

```html
<app-hero-form></app-hero-form>
```