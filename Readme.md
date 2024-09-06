# db-repo

## Description

Ce dépôt contient des scripts de migration et des configurations pour la base de données MongoDB.

## Structure

- `migrations/` : Contient les scripts de migration pour initialiser et modifier la base de données.
- `config/` : Contient les configurations pour MongoDB.
- `Dockerfile` : Utilisé pour créer l'image Docker pour les migrations.
- `docker-compose.yml` : Configure les services MongoDB et les migrations.

## Utilisation

1. **Construire l'image Docker :**

```bash
docker-compose build
```