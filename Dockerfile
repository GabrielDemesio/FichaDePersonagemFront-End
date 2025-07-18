FROM eclipse-temurin:23-jdk-alpine AS build

RUN apk add --no-cache maven

WORKDIR /app
COPY pom.xml .
COPY .mvn/ .mvn/
RUN mvn dependency:go-offline
COPY src/ src/
RUN mvn package -DskipTests

FROM eclipse-temurin:23-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]