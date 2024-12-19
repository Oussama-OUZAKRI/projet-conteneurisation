# Étape 1 : Construction avec Maven
# Use a newer version of Alpine (3.18 is the latest stable at the time)
FROM alpine:3.18 AS base

# Update and upgrade all packages to the latest versions
RUN apk update && \
    apk upgrade --available && \
    apk add --no-cache \
    busybox \
    openssl \
    zlib

# Build stage using openjdk:17-jdk-alpine and upgrading packages inside the image
FROM openjdk:17-jdk-alpine AS build

# Update and upgrade all packages within the OpenJDK image
RUN apk update && \
    apk upgrade --available && \
    apk add --no-cache maven

# Créer un répertoire de travail
WORKDIR /workspace

# Copier les fichiers pom.xml et le répertoire src
COPY pom.xml .
COPY src /workspace/src

# Lancer la construction avec Maven (générer le fichier .jar dans le répertoire target)
RUN mvn clean package -DskipTests

# Vérification : afficher le contenu du répertoire target
RUN ls -l /workspace/target

# Étape 2 : Image finale (sans Maven, seulement Java)
FROM openjdk:17-jdk-alpine

# Update and upgrade packages within the OpenJDK image
RUN apk update && \
    apk upgrade --available

# Créer un répertoire de travail pour l'application
WORKDIR /app

# Copier le fichier JAR généré par Maven dans le conteneur final
COPY --from=build /workspace/target/*.jar app.jar

# Exposer le port sur lequel l'application écoute
EXPOSE 8080

# Lancer l'application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]