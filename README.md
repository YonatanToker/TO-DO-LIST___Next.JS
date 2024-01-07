## TO-DO-LIST_APP
Edit: I wrote too much here...
Long story short: first time building a todo-list app using context and localStorage, viewing it after 2-3 months it's just bad, if you create an app that uses localStorage across your application you should associate the localStorage with the context and that's it, you don't write anywhere in your app anything to do with localStorage, only change the context and take the context and the context is in sync with localStorage. Either use the context API of React or use a state management solution like Redux or whatever.
Some photos of the website:
![Dark Theme](./first.png)
You can delete "to-do"s:
![remove todos](./delete.png)
Light Theme:
![Light Theme](./white.png)
It is Responsive:
![Responsive](./phone.png)      
The web kit I used for this project was: Next.JS, React, TypeScript and CSS.
The main goal of this project was to practice my React skills with TypeScript & localStorage
