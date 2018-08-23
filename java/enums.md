---
title: Java Enums
---

# Java Enums

In most cases when I make code reviews, I notice that many developpers prefer flat constants like these :

```java
// Constantes : Cars
public static final int ELECTRIC_CAR = 0;
public static final int HYBRID_CAR = 1;
public static final int DIESEL_CAR = 2;

// Constantes : Status
public static final int ON = 0;
public static final int OFF = 1;
```

This technique was *à la mode* in languages like C, but nowadays it has many flaws :

* There is no validation, I can set any value,
* When debugging, we only see a values that do not have any sense,
* If these values are hard-coded, the code will be a maintainance nightmare,
* etc.

The solution to this anti-pattern is a type that has been present in Java since its 1.5 version : **Enumerations**.

```java
public enum Car { ELECTRIC, HYBRID, DIESEL }
public enum Status { ON, OFF }
```



Using enumerations has many advantages, to name a few :

* They are explicit, the name of the constant is its value,
* They are easy to test (using the `==` operator),
* They can be verified by the compiler,
* Can be used in JPA entities,
* They are serializable, singleton, etc.

So, what are you waiting for ?
