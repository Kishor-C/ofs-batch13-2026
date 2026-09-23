# =========================================================================
# Stage 1: Build the application using JDK 25
# =========================================================================
FROM eclipse-temurin:25-jdk-noble AS builder
WORKDIR /build

# Copy build configuration files first to leverage Docker layer caching
# Maven configuration
COPY pom.xml .
COPY .mvn .mvn
COPY mvnw .
RUN chmod +x mvnw
# Trigger a dependency download to cache them in this layer
RUN ./mvnw dependency:go-offline -B

# For Gradle projects, uncomment below and comment out the Maven section above:
# COPY build.gradle settings.gradle gradlew ./
# COPY gradle gradle
# RUN chmod +x gradlew
# RUN ./gradlew dependencies --no-daemon

# Copy source code and build the application
COPY src src
RUN ./mvnw clean package -DskipTests

# For Gradle projects, uncomment below instead:
# RUN ./gradlew clean bootJar -x test --no-daemon

# =========================================================================
# Stage 2: Minimal runtime image with JRE 25
# =========================================================================
FROM eclipse-temurin:25-jre-noble AS runtime
WORKDIR /app

# Create a non-root group and user for security compliance
RUN groupadd --system springboot && useradd --system --gid springboot springboot

# Expose the default Spring Boot port
EXPOSE 8080

# Configure production-safe JVM environment variables
# MaxRAMPercentage dynamically adjusts memory inside container boundaries
ENV JAVA_TOOL_OPTIONS="-XX:MaxRAMPercentage=75.0 -Djava.security.egd=file:/dev/./urandom"

# Copy the compiled JAR artifact from the builder stage
# Adjust 'target/*.jar' to 'build/libs/*.jar' if using Gradle
COPY --from=builder /build/target/*.jar app.jar

# Ensure the non-root user owns the application directory
RUN chown -R springboot:springboot /app

# Switch context to the non-root user
USER springboot

# Execute the Spring Boot fat JAR directly
ENTRYPOINT ["java", "-jar", "app.jar"]
#docker build -t demo-app .
#docker run -d -p 9090:8080 --name my-app demo-app:latest
