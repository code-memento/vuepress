---
sidebar: false
prev: false
next: ./lab-1
---

# Lab 0 - Un Hello World en Angular



### Objectifs

- Installer son environnement de travail
- Se familiariser avec Angular CLI
- Créer sa première application Angular

### Informations transverses

| Durée      | 20 min                        |
| ---------- | ----------------------------- |
| Difficulté | Facile                        |
| Pré-requis | Aucun                         |
| Mots-clés  | `Angular CLI` `npm` `VS Code` |



### A la fin du Lab

Vous aurez quelque chose qui ressemble à ça :

![](./img/home.png)









### Commençons !

Préparons d'abord l'environnement de travail, pour celà récupérer le zip `env.zip` qui contient tout ce dont vous aurez besoin.

###### Installation de NodeJs

Installer NodeJS à l'aide de l'installeur, ouvrir la console et exécuter ces deux commandes :

```
$ node -v
$ npm -v
```

Si tout ce passe bien, ces deux commandes doivent afficher les versions de ces deux outils.



> Si vous êtes derrière un proxy, l'installation de node à l'aide de l'installeur permet de détecter la configuration Internet. Si toutefois ça ne marche pas, utiliser les deux commandes suivantes :
>
> ```
> $ npm config set proxy http://username:password@host:port
> $ npm config set https-proxy http://username:password@host:port
> ```



###### Installation d'angular/cli

Angular/cli est un outil de ligne de commande qui facilite la création et la manipulation des projets Angular, cet outil sera installé via `npm` :

```
$ npm install -g @angular/cli
```

Une fois installé, vous pouvez accéder à l'outil CLI en tapant `ng`.

Pour vérifier la version de votre CLI Angular, tapez :

```
$ ng -v

    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/

Angular CLI: 1.5.0
Node: 6.10.0
OS: win32 x64
Angular:
...
```



###### Génération de votre premier projet

Pour générer votre premier projet, exécuter la commande suivante :

```
$ ng new hello-world
```

Choisissez le nom qui vous convient.

Cette commande prend du temps vu que `npm` télécharge tout ce dont il a besoin.

```
...
create hello-world/e2e/app.e2e-spec.ts (293 by
create hello-world/e2e/app.po.ts (208 bytes)  
create hello-world/e2e/tsconfig.e2e.json (235 
create hello-world/karma.conf.js (923 bytes)  
create hello-world/package.json (1296 bytes)  
create hello-world/protractor.conf.js (722 byt
create hello-world/README.md (1026 bytes)     
create hello-world/tsconfig.json (363 bytes)  
create hello-world/tslint.json (3012 bytes)   
create hello-world/.angular-cli.json (1246 byt
create hello-world/.editorconfig (245 bytes)  
create hello-world/.gitignore (544 bytes)     
...   
```

Après, lancer la commande  `ng serve` pour démarrer l'application en local, enfin vous aurez la page suivante :

![](./img/home.png)

### Options Angular CLI

Nous  avons lancé la commande `ng new my-project`, qui est la configuration minimale requise pour utiliser l'interface CLI pour démarrer un nouveau projet.

Cependant, il existe d'autres indicateurs que vous pouvez transmettre à la commande `ng new`. La  page wiki officielle d'[Angular CLI](https://github.com/angular/angular-cli/wiki) vous montrera toutes les commandes, et si vous cliquez sur la commande [new](https://github.com/angular/angular-cli/wiki/new), vous constaterez qu'elle supporte les drapeaux suivants :

```
directory
dry-run
inline-style
inline-template
minimal
prefix
routing
skip-commit
skip-git
skip-install
skip-tests
source-dir
style
verbose
```



### Ce qu'il faut retenir

A travers ce premier **Lab**, vous avez pu préparer votre environnement de travail et faire connaissance des différents outils que vous allez utiliser à travers cette formation.

```typescript
// Pour installer un package npm
$ npm install -g @angular/cli

// Pour créer un projet angular
$ ng new my-project

// Pour lancer le projet en mode dev
ng serve
```

