export const springBootSetUp = (
    <div className="space-y-6">
        <section className="space-y-4">
            <h3 className="text-md font-semibold">Setup with Spring Initializr</h3>
            <ol className="list-decimal space-y-4 pl-5 text-sm">
                <li className="text-muted-foreground">
                    Visit <a href="https://start.spring.io/" className="text-blue-500 underline">start.spring.io</a> and configure:
                    <ul className="mt-2 ml-4 space-y-1 list-disc text-muted-foreground">
                        <li>Build: Maven</li>
                        <li>Language: Java</li>
                        <li>Spring Boot: Latest non-snapshot release</li>
                        <li>Java: 21</li>
                        <li>Packaging: JAR</li>
                        <li>Config format: Properties</li>
                    </ul>
                </li>
                <li className="text-muted-foreground">
                    Add dependencies: Spring Web, Spring Security, Validation, Spring Data JPA, PostgreSQL Driver, Flyway Migration, Lombok, Spring Boot Actuator. Then generate, download, and unzip.
                </li>
                <li className="space-y-2">
                    <p className="text-muted-foreground">Set up PostgreSQL with Docker Compose (<code className="text-xs bg-muted px-1 py-0.5 rounded">docker-compose.yml</code>):</p>
                    <pre className="rounded-md bg-muted p-4 text-xs overflow-x-auto border border-border">
{`services:
    postgres:
        image: postgres:17.5
        container_name: postgres
        restart: unless-stopped
        environment:
            - POSTGRES_DB=backend
            - POSTGRES_USER=postgres
            - POSTGRES_PASSWORD=changemeinprod
        ports:
            - "5432:5432"
        volumes:
            - postgres-data:/var/lib/postgresql/data

volumes:
postgres-data:`}
                    </pre>
                </li>
                <li className="space-y-2">
                    <p className="text-muted-foreground">Configure database in <code className="text-xs bg-muted px-1 py-0.5 rounded">src/main/resources/application.properties</code>:</p>
                    <pre className="rounded-md bg-muted p-4 text-xs overflow-x-auto border border-border">
{`spring.application.name=backend

spring.datasource.url=jdbc:postgresql://localhost:5432/backend
spring.datasource.username=postgres
spring.datasource.password=changemeinprod
spring.datasource.driver-class-name=org.postgresql.Driver

spring.jpa.hibernate.ddl-auto=validate
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

spring.flyway.enabled=true
spring.flyway.locations=classpath:db/migration`}
                    </pre>
                </li>
                <li className="text-muted-foreground">
                    Start the PostgreSQL container: <code className="text-xs bg-muted px-1 py-0.5 rounded">docker-compose up -d</code>
                </li>
                <li className="text-muted-foreground">
                    Run the application: <code className="text-xs bg-muted px-1 py-0.5 rounded">./mvnw spring-boot:run</code> (available at <a href="http://localhost:8080" className="text-blue-500 underline">localhost:8080</a>)
                </li>
                <li className="text-muted-foreground">
                    Verify with Postman: Send an HTTP request to confirm the service responds.
                </li>
            </ol>
        </section>
    </div>
)