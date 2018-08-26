---
title: Java type to choose
---
# What type to choose ? 


Usually, when developping we don't ask ourselve a lot of questions about the type of a variable, a class's field or anything that has a type. Sometimes, we use a jack-of-all-trades type like String. But, is it the right choice ?

Choosing a type can be trivial. A bad choice though, can lead to polluted code and maintenance problems and sometimes to performance concerns.

Let's take a look at this piece of code :

```java
// Minimum date
private String dateMin ;

// …
// Person's age
private String age ;

// …
private int valid;
```



The first field is a *stringified* date, if we want to display this date we have to convert it to the right format thus needing a pattern, an information that we don't have. It becomes more challenging if we have a multi-language app where the date must be displayed correctly depending on the language.

::: tip
This field should be a date.
:::

The second field represents a person's age, this data needs more memory than an integer, and comparing two ages cannot be performed without conversion.

::: tip
This field should be an integer.
:::

I'll let you guess what kind the third field should be, you're right, the validity should be expressed as a boolean.

You must keep in mind that you have to **Choose the type that expresses the data the most**.

If we are dealing with a set of constants (*states, types, categories, etc.*) you should create an enumeration.
