# Making a code review

## Why ?

It's undeniable that code reviews are very useful and can avoid us some deadly bugs or some bad design upfront. When developing we can miss some trivial points that can lead to performance issues or maintainance nightmares.

Now, the question is how we can make a code review ?

## How ?

When I started doing code reviews for our projects, I needed a template or some guidelines to get started. Unfortunately,  I did not find anything on the Internet so I had to do it myself. Here's how :

### An objective code review

On thing is sure, code reviews must not be subjective. It's not because you don't like the code or you hate the guy who developed it that you'll start criticizing it. Your code review must be backed up by well known rules and conventions.

And especially, do not make fun of the code in front of you, it's not cool :laughing:.

### Rules and conventions

Before reviewing the code, the developer has to be aware of the rules and conventions. You can use my [Java coding guidelines](coding-guidelines.md) to get started.

You can make your own rules, and there are a lot of resources that you can use just for that :

#### Effective Java

![](https://images-na.ssl-images-amazon.com/images/I/51IcaSKfPAL.jpg)

This is an amazing book which contains tons of good practical advice for programmers, but more importantly explains the *why* behind various topics.

#### Refactoring Guru

![](https://refactoring.guru/images/refactoring/social/facebook-share-preview.png)



This website covers a lot of interesting topics :

* **Code smells** : When a method is long, a class is large, etc.
* **Refactoring patterns** : How you resolve code smells,
*  **Design patterns** : Typical solutions to commonly occurring problems.

#### Java Coding Guidelines

![](https://images-na.ssl-images-amazon.com/images/I/518zqHN5u3L._SX381_BO1,204,203,200_.jpg)



The book is a recommended lecture to every Java programmer. It's a easy and straightforward.

## Getting started

I think that the topics that you should take into consideration are :

* **Project structure** : the project is well-structured, and all the files are where they should be,

* **Coding conventions** : All the packages, classes, methods, variables, etc. are correctly named,

* **Architectural choices** : The used libraries are secure and up-to-date, 

* **Algorithms** : Algorithms are efficient and easy to understand and to maintain,

* **Design patterns** : The code respects and implements design patterns correctly,

* **Restful services** : The rest services are restful, they use the right HTTP method,

* **Logging** : The exceptions are traced, and the right logging level is used,

* **DAO Layer** : The project uses a datasource pooling system, the queries are optimal and pagination is implemented,

* **Security** : The application is not prone to known attacks and sensitive data is encrypted,


## Code review example

You can find a code review template right [here](#). The structure is straightforward and easy to follow.

First, I begin by explaining the rule then I enumerate all the instances in the code.

## Conclusion

Code reviews especially for big projects can be cumbersome, thus it's important to start making them from the early stages of the project. And more importantly, the team must be aware of the rules and conventions so they could avoid the mistakes from the first line of code.