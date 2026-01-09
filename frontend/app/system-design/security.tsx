export const securityConcepts = (
    <div className="space-y-6">
        <section className="space-y-3">
            <h3 className="text-md font-semibold">CIA Triad (Security Objectives)</h3>
            <p className="text-muted-foreground">
                Confidentiality, integrity and availability form the foundation of security design. 
                Every security control should map back to one of these objectives.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
                <li><strong>Confidentiality:</strong> Restrict access to authorised parties only (e.g., JWT-based auth and database access controls on a user profile service).</li>
                <li><strong>Integrity:</strong> Prevent unauthorised modification (e.g., server-side validation and immutable audit logs).</li>
                <li><strong>Availability:</strong> Keep the system usable under failure or attack (e.g., rate limiting and replicated instances behind a load balancer).</li>
            </ul>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-semibold">STRIDE Threat Modeling</h3>
            <p className="text-muted-foreground">
                The STRIDE framework categorises common threat types to systematically identify risks of a system.
            </p>
            <div className="overflow-x-auto rounded-md border border-border/40">
                <table className="w-full text-left text-sm">
                    <thead className="bg-accent/40">
                        <tr>
                            <th className="px-3 py-2">Threat</th>
                            <th className="px-3 py-2">Description</th>
                            <th className="px-3 py-2">Example</th>
                            <th className="px-3 py-2">Mitigation</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                        <tr>
                            <td className="px-3 py-2">Spoofing</td>
                            <td className="px-3 py-2">Impersonating a legitimate user or service</td>
                            <td className="px-3 py-2">Fake service calls an internal API</td>
                            <td className="px-3 py-2">Mutual TLS, service identity</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Tampering</td>
                            <td className="px-3 py-2">Altering data in transit or at rest</td>
                            <td className="px-3 py-2">Modified request payload</td>
                            <td className="px-3 py-2">Request signing, strict validation</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Repudiation</td>
                            <td className="px-3 py-2">Denying performed actions</td>
                            <td className="px-3 py-2">User denies an action</td>
                            <td className="px-3 py-2">Append-only audit logs</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Information Disclosure</td>
                            <td className="px-3 py-2">Eavesdropping on sensitive data</td>
                            <td className="px-3 py-2">Accidental leak of user data</td>
                            <td className="px-3 py-2">Access control, encryption</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Denial of Service</td>
                            <td className="px-3 py-2">Making services unavailable</td>
                            <td className="px-3 py-2">Traffic flood exhausts resources</td>
                            <td className="px-3 py-2">Rate limiting, autoscaling</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Privilege Escalation</td>
                            <td className="px-3 py-2">Gaining higher access than allowed</td>
                            <td className="px-3 py-2">User hits admin-only APIs</td>
                            <td className="px-3 py-2">Strict authorization checks</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-semibold">Authentication vs Authorisation</h3>
            <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-md border border-border/40 bg-accent/40 p-4">
                    <h4 className="font-semibold">Authentication (Who are you?)</h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>- Open Authorisation 2.0 (OAuth2)/OpenID Connect (OIDC)/JSON Web Tokens (JWTs)/sessions</li>
                        <li>- Multi-factor authentication (MFA)</li>
                        <li>- API keys/workload identity/Message Authentication Code (MAC)</li>
                    </ul>
                </div>
                <div className="rounded-md border border-border/40 bg-accent/40 p-4">
                    <h4 className="font-semibold">Authorisation (What can you do?)</h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>- Role-based access (e.g., user vs admin)</li>
                        <li>- Attribute-based checks such as resource ownership</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-semibold">Principle of Least Privilege</h3>
            <p className="text-muted-foreground">
                Users and services should have only the minimum access necessary to perform their functions. 
                This limits the blast radius of compromised accounts or services.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
                <li><strong>Examples:</strong></li>
                <li>IAM: Service A cannot access Service B’s database.</li>
                <li>Database accounts split into read-only and write users.</li>
                <li>Kubernetes: namespace-scoped RBAC per workload.</li>
            </ul>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-semibold">Zero Trust</h3>
            <p className="text-muted-foreground">
                Users and services in the same network are never trusted by default and all access is verified continuously.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
                <li><strong>Examples:</strong></li>
                <li>Service-to-service calls require short-lived tokens or mutual TLS.</li>
                <li>Internal admin endpoints protected just like external ones.</li>
            </ul>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-semibold">Encryption</h3>
            <p className="text-muted-foreground">
                Protects data confidentiality and integrity both in transit and at rest.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
                <li><strong>Examples:</strong></li>
                <li>In transit: TLS for client↔API, service↔service, and service↔database.</li>
                <li>At rest: Encrypt databases, object storage, and backups.</li>
                <li>Key management: Managed KMS, automatic rotation, no hardcoded secrets.</li>
            </ul>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-semibold">Personally Identifiable Information (PII) & Privacy</h3>
            <p className="text-muted-foreground">
                Prevents unauthorised access and exposure of sensitive user data.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
                <li><strong>Examples:</strong></li>
                <li>Limit who can access PII; prefer tiered data access.</li>
                <li>Encrypt PII at rest and in transit; mask or redact in logs.</li>
                <li>Document retention, consent, and deletion workflows.</li>
            </ul>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-semibold">Observability & Incident Response</h3>
            <p className="text-muted-foreground">
                Logging and monitoring to detect and respond to security incidents.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
                <li><strong>Examples:</strong></li>
                <li>Authentication and access events captured in tamper-evident audit logs.</li>
                <li>Alerts for unusual traffic, repeated auth failures, or policy violations.</li>
                <li>Runbooks to revoke tokens, rotate secrets, and block offending IPs or accounts.</li>
            </ul>
        </section>
    </div>
);