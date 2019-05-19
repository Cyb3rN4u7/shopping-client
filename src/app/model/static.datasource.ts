import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, from } from 'rxjs';

@Injectable()

export class StaticDataSource {
   private products: Product[] = [
      {
        id: 1,
        name: 'Black Keyboard',
        description: 'Programmers keyboard resistant to hits',
        price: 12.00,
        categories: ['Electronics']
      },
      {
        id: 2,
        name: 'Black Mouse',
        description: 'Programmers mouse resistant to hits',
        price: 11.99,
        categories: ['Electronics']
      },
      {
        id: 3,
        name: 'How to code modern MVC applications with C#',
        description: 'A guide to the ASP NET Core programming with C# and Angular 2+',
        price: 49.99,
        categories: ['Books', 'C#', 'Programming', 'Software Engineering', 'MVC']
      },
      {
        id: 5,
        name: 'Critical Thinking Fundamentals',
        description: 'Start your journey to critical thinking skills with this awesome guide!',
        price: 39.99,
        categories: ['Books', 'Interpersonal Skills', 'Critical Thinking']
      },
      {
        id: 5,
        name: 'The MVC demystified',
        description: 'What is that MVC that all (not really) are so hyped about',
        price: 49.99,
        categories: ['Books', 'MVC', 'Programming']
      },

   ];


   getProducts(): Observable<Product[]> {
     return from([this.products]);
     }
}
