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

## 4. Write the app-hero-form

This is mostly regular html, with some additions from Angular. 

## 4.1 Looping with *ngFor

Loop through an array passed from the .ts file. Variables can be displayed using the double-curly-brace syntax: {{  }};

```html
<select class="form-control" id="power">
    <option *ngFor="let pow of powers" [value]="pow">{{ pow }}</option>
</select>
```

## 4.2 Two-way data binding with ngModel

We want to bind the form to the model, allowing us to display, listen, and extract at the same time. This is done through the ```[(ngModel)]``` syntax.

Add these fields to the name input. Using a name attribute is required when using ```[(ngModel)]```.

```html
<input 
    [(ngModel)]="model.name"
    name="name"
>
```

Also update the form tag with ```#heroForm="ngForm"```

```html
<form #heroForm="ngForm">
```

## 4.3 Create a template reference variable

We want to include a message that shows when the selection is invalid. This is done by creating a template reference variable (which is a reference to a DOM element) on the element we want to trigger from.

In this case we add it to the name input because we want to inform the user when this field has an invalid entry.

```html
<input 
    type="text"
    class="form-control"
    id="name"
    required
    [(ngModel)]="model.name"
    name="name"
    #name="ngModel" <!-- this is the template reference variable -->
>
```

Then we can create a div which will be hidden when the class on the input is untouched or pristine (these classes are given automatically by ngModel).

```html
<div 
    [hidden]="name.valid || name.pristine"
    class="alert alert-danger"    
>
```