# Phase 1: Build the frontend
FROM node:18-alpine AS builder
WORKDIR /app

# Installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le code source et construire l'application
COPY . ./
RUN npm run build

# Phase 2: Serve the frontend
FROM nginx:1.27.3-alpine-slim AS production

# Mettre à jour les paquets Alpine pour corriger les vulnérabilités éventuelles
RUN apk update && apk upgrade --no-cache

# Définir l'environnement de production
ENV NODE_ENV=production

# Copier les fichiers générés depuis la phase de build
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer le serveur NGINX
CMD ["nginx", "-g", "daemon off;"]
