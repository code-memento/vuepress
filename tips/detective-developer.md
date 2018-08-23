# A detective developper 


The title of this article consists of two different jobs, a detective and a developer, but believe me they have a lot in common. It's not about solving murders or about catching thieves, it's about making your code confess.

In this article, I'll try to lay out some of the skills you have to master as a developer so you can find the cause of the toughest bugs.

## Approach

Looking for the suspect without a plan is like looking for a needle in a haystack. The first thing is to have a way to proceed in an organized fashion.

### Reproduce the bug

If you can reproduce the bug go to the next section, if not then you have to gather as much information as possible about the problem. This is important because how is it possible to validate your solution if you cannot reproduce the bug ?

### Correct the bug

Once the bug is reproduced, it's time to correct. But sometimes correcting the problem can be challenging. It might need the heavy artillery, here is some tips to pinpoint the problem :

#### It worked before

How is it possible that an application that did work for quite some time suddenly stops working. As strange as it may seem, this use case is very recurrent. In these cases, log files don't tell much or you have to dive in very long log files.

To solve this problem, you first need to look for the application's dependencies :

* Does the application consume a Web Service ?
* Is the database working as expected ?
* Is it a network / firewall / proxy problem ?
* Does the application use some credentials that has expired ?
* You got the idea, your application did not change, so it must be something else.

#### It worked in a prior version

In the new version of your application, a use case is not working anymore. The easiest to do is to look in the code's history using SVN or Git.

#### The process of elimination

As Wikipedia states : 

> Process of elimination is a method to identify an entity of interest among several ones by excluding all other entities.

As they say an example is worth a thousand words, so let's say you have a CSS problem, some component is acting weirdly. With your browser's tools (*Firebug, etc.*) deactivate all the component's CSS then activate the properties one by one until you find the guilty property.

#### How it should be done

In many cases, the bug is due a shallow use of the tools. Did you use the framework properly ? Do you have enough knowledge of the platform ? If so, take some time to study the tools.

#### It's random

If the bug is random and the classics didn't work, there is a high chance that there is a performance issue. Use some profiling tool to pinpoint the problem.

#### Test your patch

Now that you found the suspect and you solved the problem, reproduce the bug using the scenarios in the first step.