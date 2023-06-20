# README

Ce fichier Readme fournit les instructions nécessaires pour lancer le BO de l'application sur votre local.

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

## API Authentification
| URL        | Déscription   | Type  |
| ------|-----|-----|
| [http://localhost:8010/api/auth/login](http://localhost:8010/api/auth/login)	| Authentification	| POST
| [http://localhost:8010/api/auth](http://localhost:8010/api/auth)	| Ajout user	| POST

## API Assignement
| URL        | Déscription   | Type  |
| ------|-----|-----|
| [http://localhost:8010/api/assignments](http://localhost:8010/api/assignments)	| Enregistré un assignement	| POST
| [http://localhost:8010/api/assignments](http://localhost:8010/api/assignments)	| Liste assignement	| GET
| [http://localhost:8010/api/assignments](http://localhost:8010/api/assignments)	| Modification assignement	| PUT
| [http://localhost:8010/api/assignments/{id}](http://localhost:8010/api/assignments/{id})	| Effacer assignement	| DELETE
| [http://localhost:8010/api/assignments/{id}](http://localhost:8010/api/assignments/{id})	| Rechercher par id d'un assignement| GET

## API Matière
| URL        | Déscription   | Type  |
| ------|-----|-----|
| [http://localhost:8010/api/matiere](http://localhost:8010/api/matiere)	| Enregistré une Matière	| POST
| [http://localhost:8010/api/matiere](http://localhost:8010/api/matiere)	| Liste  Matière	| GET
| [http://localhost:8010/api/matiere](http://localhost:8010/api/matiere)	| Modification d'une Matière	| PUT
| [http://localhost:8010/api/matiere/{id}](http://localhost:8010/api/matiere/{id})	| Effacer une Matière	| DELETE


## API Auteur
| URL        | Déscription   | Type  |
| ------|-----|-----|
| [http://localhost:8010/api/auteur](http://localhost:8010/api/auteur)	| Enregistré un auteur	| POST
| [http://localhost:8010/api/auteur](http://localhost:8010/api/auteur)	| Liste auteur	| GET
| [http://localhost:8010/api/auteur](http://localhost:8010/api/auteur)	| Modification d'un auteur	| PUT
| [http://localhost:8010/api/auteur/{id}](http://localhost:8010/api/auteur/{id})	| Effacer un auteur	| DELETE


Pour plus d'informations sur l'utilisation de l'application et les fonctionnalités disponibles, veuillez vous référer à la documentation fournie.
