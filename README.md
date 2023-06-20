# README

Ce fichier Readme fournit les instructions nécessaires pour lancer une application Node.js.

## Prérequis

Avant de pouvoir exécuter l'application, assurez-vous que les éléments suivants sont installés sur votre machine :

- [Node.js](https://nodejs.org) : La version recommandée est la dernière version stable.

## Installation

1. Clonez ce dépôt sur votre machine en utilisant la commande suivante :

```
git clone https://github.com/Tsiky-0512/Node_MBDS_Tsiky_53_Tovintsoa_23_ITU.git
```

2. Accédez au répertoire de l'application :

```
cd Node_MBDS_Tsiky_53_Tovintsoa_23_ITU
```

3. Installez les dépendances du projet en exécutant la commande suivante :

```
npm install
```


## Configuration

Aucune configuration n'est requise. L'url du serveur de BDD : 

```
mongodb+srv://mb:toto@cluster0.5e6cs7n.mongodb.net/assignments?retryWrites=true&w=majority
```

## Exécution

Pour lancer l'application, exécutez la commande suivante :

```
node server.js
```

L'application sera alors exécutée et sera accessible à l'adresse `http://localhost:8010` dans votre navigateur.

## API 
| URL        | Type  | Déscription  |
| [http://localhost:8010/api/auth/login](http://localhost:8010/api/auth/login)	| Authentification	| POST

Pour plus d'informations sur l'utilisation de l'application et les fonctionnalités disponibles, veuillez vous référer à la documentation fournie.
