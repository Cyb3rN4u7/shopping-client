import { Product } from './product';
export const PRODUCTS: Product[] = [
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
];
