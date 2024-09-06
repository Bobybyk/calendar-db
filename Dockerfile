# Utiliser une image Node.js officielle comme image de base
FROM node:14

# Créer et définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier les fichiers de migration et de configuration
COPY migrations /usr/src/app/migrations
COPY config /usr/src/app/config

# Exposer le port MongoDB (si nécessaire)
EXPOSE 27017

# Commande pour exécuter les migrations
CMD ["node", "migrations/2024-09-06-init.js"]
