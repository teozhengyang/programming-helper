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
                        <li>- OAuth2/OIDC/JWTs/sessions/MFA</li>
                        <li>- API keys/workload identity/MAC</li>
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

export const securityNetwork = (
    <div className="space-y-6">
        <section className="space-y-3">
            <h3 className="text-md font-semibold">Physical Layer</h3>
            <p className="text-muted-foreground">
                Physical infrastructure and transmission media
            </p>
            <div className="overflow-x-auto rounded-md border border-border/40">
                <table className="w-full text-left text-sm">
                    <thead className="bg-accent/40">
                        <tr>
                            <th className="px-3 py-2">Type</th>
                            <th className="px-3 py-2">Purpose</th>
                            <th className="px-3 py-2">Examples</th>
                            <th className="px-3 py-2">Attacks Prevented</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                        <tr>
                            <td className="px-3 py-2">Facility & Access Security</td>
                            <td className="px-3 py-2">Restrict physical access to infrastructure</td>
                            <td className="px-3 py-2">Secure facilities, locked data centres, badge access, biometrics, CCTV, guards</td>
                            <td className="px-3 py-2">Theft, tampering, unauthorised access</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Hardware-Based Security</td>
                            <td className="px-3 py-2">Protect cryptographic keys and sensitive operations</td>
                            <td className="px-3 py-2">TPM, HSM, secure key storage, hardware-backed encryption, hardware isolation</td>
                            <td className="px-3 py-2">Key theft, unauthorised cryptographic operations, direct hardware attacks</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>  
        <section className="space-y-3">
            <h3 className="text-md font-semibold">Data Link Layer</h3>
            <p className="text-muted-foreground">
                Local network communications e.g. Media Access Control (MAC), switches, Address Resolution Protocol (ARP).
            </p>
            <div className="overflow-x-auto rounded-md border border-border/40">
                <table className="w-full text-left text-sm">
                    <thead className="bg-accent/40">
                        <tr>
                            <th className="px-3 py-2">Type</th>
                            <th className="px-3 py-2">Purpose</th>
                            <th className="px-3 py-2">Examples</th>
                            <th className="px-3 py-2">Attacks Prevented</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                        <tr>
                            <td className="px-3 py-2">Network Access Control</td>
                            <td className="px-3 py-2">Authenticate & restrict device access to the network</td>
                            <td className="px-3 py-2">IEEE 802.1X (RADIUS), MAC Filtering</td>
                            <td className="px-3 py-2">Unauthorised device access, rogue devices</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Port Security</td>
                            <td className="px-3 py-2">Control device behaviour per switch port</td>
                            <td className="px-3 py-2">Sticky MAC, MAC address limiting</td>
                            <td className="px-3 py-2">MAC flooding, switch port exhaustion</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">ARP Protection</td>
                            <td className="px-3 py-2">Validate ARP messages and bindings</td>
                            <td className="px-3 py-2">Dynamic ARP Inspection (DAI), static ARP entries</td>
                            <td className="px-3 py-2">ARP spoofing, MITM attacks, ARP cache poisoning</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Network Segmentation</td>
                            <td className="px-3 py-2">Isolate traffic by trust/function</td>
                            <td className="px-3 py-2">Virtual Local Area Networks (VLANs), private VLANs</td>
                            <td className="px-3 py-2">Lateral movement, broadcast storms</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Topology Protection</td>
                            <td className="px-3 py-2">Prevent unauthorised topology changes</td>
                            <td className="px-3 py-2">Spanning Tree Protection (BPDU Guard)</td>
                            <td className="px-3 py-2">Rogue switches, topology manipulation</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Traffic Encryption</td>
                            <td className="px-3 py-2">Encrypt data link layer traffic</td>
                            <td className="px-3 py-2">MACsec</td>
                            <td className="px-3 py-2">Packet sniffing, MITM attacks</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>       
        <section className="space-y-3">
            <h3 className="text-md font-semibold">Network Layer</h3>
            <p className="text-muted-foreground">
                IP routing and packet forwarding
            </p>
            <div className="overflow-x-auto rounded-md border border-border/40">
                <table className="w-full text-left text-sm">
                    <thead className="bg-accent/40">
                        <tr>
                            <th className="px-3 py-2">Type</th>
                            <th className="px-3 py-2">Purpose</th>
                            <th className="px-3 py-2">Examples</th>
                            <th className="px-3 py-2">Attacks Prevented</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                        <tr>
                            <td className="px-3 py-2">Network Encryption</td>
                            <td className="px-3 py-2">Encrypt and authenticate IP packets across networks</td>
                            <td className="px-3 py-2">IPsec, Virtual Private Networks (VPNs)</td>
                            <td className="px-3 py-2">Packet eavesdropping, tampering, replay attacks, MiTM</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Packet Filtering & Access Control</td>
                            <td className="px-3 py-2">Allow/deny traffic based on IP, port, protocol, direction</td>
                            <td className="px-3 py-2">Network firewalls, Security Groups, Network ACLs</td>
                            <td className="px-3 py-2">Unauthorised network access, IP-based attacks</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Anti-Spoofing Controls</td>
                            <td className="px-3 py-2">Verify source IP addresses; block spoofed packets</td>
                            <td className="px-3 py-2">Ingress filtering, Egress filtering</td>
                            <td className="px-3 py-2">IP spoofing, reflection attacks, DDoS amplification</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Control Plane Protection</td>
                            <td className="px-3 py-2">Limit diagnostic traffic abuse while allowing essential Internet Control Message Protocol (ICMP)</td>
                            <td className="px-3 py-2">Rate limiting, ICMP filtering</td>
                            <td className="px-3 py-2">Ping of death, ICMP floods, reconnaissance scans</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Routing Integrity</td>
                            <td className="px-3 py-2">Ensure routes are legitimate and trustworthy</td>
                            <td className="px-3 py-2">Border Gateway Protocol (BGP) prefix filtering, Resource Public Key Infrastructure (RPKI), Route Origin Authorisation (ROA) validation</td>
                            <td className="px-3 py-2">BGP hijacking, route injection, traffic redirection</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Network-level DDoS Protection</td>
                            <td className="px-3 py-2">Absorb or block volumetric traffic floods</td>
                            <td className="px-3 py-2">Rate limiting, traffic scrubbing, Anycast routing</td>
                            <td className="px-3 py-2">Volumetric DDoS, bandwidth exhaustion</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>       
        <section className="space-y-3">
            <h3 className="text-md font-semibold">Transport Layer</h3>
            <p className="text-muted-foreground">
                Connections
            </p>
            <div className="overflow-x-auto rounded-md border border-border/40">
                <table className="w-full text-left text-sm">
                    <thead className="bg-accent/40">
                        <tr>
                            <th className="px-3 py-2">Type</th>
                            <th className="px-3 py-2">Purpose</th>
                            <th className="px-3 py-2">Examples</th>
                            <th className="px-3 py-2">Attacks Prevented</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                        <tr>
                            <td className="px-3 py-2">Transport Encryption & Authentication</td>
                            <td className="px-3 py-2">Encrypt data in transit and authenticate endpoints</td>
                            <td className="px-3 py-2">Transport Layer Security (TLS), Secure Socket Layer (SSL), mTLS, Secure Remote Procedure Call (gRPC)</td>
                            <td className="px-3 py-2">Eavesdropping, MITM attacks, session hijacking, tampering</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Connection Flood Protection</td>
                            <td className="px-3 py-2">Prevent resource allocation for fake connections</td>
                            <td className="px-3 py-2">Synchronise (SYN) cookies, Transmission Control Protocol (TCP) backlog tuning, rate limiting</td>
                            <td className="px-3 py-2">SYN floods, half-open connection exhaustion</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Connection Lifecycle Controls</td>
                            <td className="px-3 py-2">Reclaim resources from stalled or slow connections</td>
                            <td className="px-3 py-2">Idle timeouts, max connection limits</td>
                            <td className="px-3 py-2">Slowloris attacks, connection pool exhaustion</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Session Integrity</td>
                            <td className="px-3 py-2">Make session prediction and takeover difficult</td>
                            <td className="px-3 py-2">TCP sequence number randomisation</td>
                            <td className="px-3 py-2">TCP hijacking, sequence prediction attacks</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Port Exposure Reduction</td>
                            <td className="px-3 py-2">Minimise attack surface and predictability</td>
                            <td className="px-3 py-2">Port whitelisting, ephemeral port randomisation</td>
                            <td className="px-3 py-2">Port scanning, service enumeration</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Modern Secure Transport</td>
                            <td className="px-3 py-2">Provide low-latency encrypted transport</td>
                            <td className="px-3 py-2">Quick User Datagram Protocol (UDP) Internet Connections (QUIC) with TLS 1.3 & 0-Round Trip Time (0-RTT)</td>
                            <td className="px-3 py-2">Eavesdropping, TLS downgrade attacks</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 className="text-md font-semibold">Other Layers</h3>
            <p className="text-muted-foreground">
                Covered below in database & application security sections
            </p>
        </section>       
    </div>
)

export const securityDevOps = (
    <div className="space-y-6">
        <section className="space-y-3">
            <h3 className="text-md font-semibold">Cloud</h3>
            <p className="text-muted-foreground">
                Deployment and infrastructure security
            </p>
            <div className="overflow-x-auto rounded-md border border-border/40">
                <table className="w-full text-left text-sm">
                    <thead className="bg-accent/40">
                        <tr>
                            <th className="px-3 py-2">Type</th>
                            <th className="px-3 py-2">Purpose</th>
                            <th className="px-3 py-2">Examples</th>
                            <th className="px-3 py-2">Attacks Prevented</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                        <tr>
                            <td className="px-3 py-2">Identity & Access Management</td>
                            <td className="px-3 py-2">Control who can access cloud resources and what they can do</td>
                            <td className="px-3 py-2">IAM roles, least-privilege policies, MFA</td>
                            <td className="px-3 py-2">Unauthorised access, privilege escalation</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Network Isolation</td>
                            <td className="px-3 py-2">Isolate workloads and control traffic flow</td>
                            <td className="px-3 py-2">Virtual Private Cloud (VPCs), subnets (public/private), security groups</td>
                            <td className="px-3 py-2">Unauthorised network access</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Secrets Management</td>
                            <td className="px-3 py-2">Secure storage and controlled access to secrets</td>
                            <td className="px-3 py-2">Cloud Key Management Service (KMS), Secrets Manager, Parameter Store</td>
                            <td className="px-3 py-2">Credential leakage</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Monitoring & Auditing</td>
                            <td className="px-3 py-2">Track activity and detect suspicious behavior</td>
                            <td className="px-3 py-2">CloudTrail, audit logs, access logs</td>
                            <td className="px-3 py-2">Undetected breaches, insider threats</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>  
        <section className="space-y-3">
            <h3 className="text-md font-semibold">Docker</h3>
            <p className="text-muted-foreground">
                Images and containers
            </p>
            <div className="overflow-x-auto rounded-md border border-border/40">
                <table className="w-full text-left text-sm">
                    <thead className="bg-accent/40">
                        <tr>
                            <th className="px-3 py-2">Type</th>
                            <th className="px-3 py-2">Purpose</th>
                            <th className="px-3 py-2">Examples</th>
                            <th className="px-3 py-2">Attacks Prevented</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                        <tr>
                            <td className="px-3 py-2">Image Security, Integrity & Trust</td>
                            <td className="px-3 py-2">Reduce vulnerabilities in container images & ensure image authenticity</td>
                            <td className="px-3 py-2">Minimal base images, image scanning, image signing, trusted registries</td>
                            <td className="px-3 py-2">Vulnerable dependencies, image tampering</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Container Isolation</td>
                            <td className="px-3 py-2">Isolate containers to prevent interference and limit attack surface</td>
                            <td className="px-3 py-2">Namespaces, cgroups, seccomp, AppArmor, SELinux</td>
                            <td className="px-3 py-2">Container breakout, privilege escalation</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Privilege Restriction</td>
                            <td className="px-3 py-2">Limit what containers can do on the host</td>
                            <td className="px-3 py-2">Capabilities dropping, non-root containers</td>
                            <td className="px-3 py-2">Privilege escalation, host compromise</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Secrets Management</td>
                            <td className="px-3 py-2">Avoid embedding secrets in images</td>
                            <td className="px-3 py-2">Docker secrets, env var injection (secured)</td>
                            <td className="px-3 py-2">Credential Leaks</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Resource Limiting</td>
                            <td className="px-3 py-2">Prevent one container from exhausting resources</td>
                            <td className="px-3 py-2">CPU and memory limits, cgroups</td>
                            <td className="px-3 py-2">Denial of Service (DoS) attacks</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Runtime Security</td>
                            <td className="px-3 py-2">Restrict system calls and runtime behavior</td>
                            <td className="px-3 py-2">Seccomp, AppArmor, SELinux</td>
                            <td className="px-3 py-2">Malicious container actions</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>       
        <section className="space-y-3">
            <h3 className="text-md font-semibold">Kubernetes</h3>
            <p className="text-muted-foreground">
                Cluster and workload security
            </p>
            <div className="overflow-x-auto rounded-md border border-border/40">
                <table className="w-full text-left text-sm">
                    <thead className="bg-accent/40">
                        <tr>
                            <th className="px-3 py-2">Type</th>
                            <th className="px-3 py-2">Purpose</th>
                            <th className="px-3 py-2">Examples</th>
                            <th className="px-3 py-2">Attacks Prevented</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                        <tr>
                            <td className="px-3 py-2">Authentication & Authorisation</td>
                            <td className="px-3 py-2">Control who can access cluster resources</td>
                            <td className="px-3 py-2">Role-based Access Control (RBAC), service accounts</td>
                            <td className="px-3 py-2">Unauthorised API access, privilege escalation</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Pod Security Controls</td>
                            <td className="px-3 py-2">Enforce secure pod configurations</td>
                            <td className="px-3 py-2">Pod Security Standards, SecurityContext</td>
                            <td className="px-3 py-2">Privileged containers, unsafe workloads</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Secrets Management</td>
                            <td className="px-3 py-2">Securely inject secrets into pods</td>
                            <td className="px-3 py-2">Kubernetes Secrets, external secret stores</td>
                            <td className="px-3 py-2">Credential Leaks</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Network Security</td>
                            <td className="px-3 py-2">Control pod-to-pod and pod-to-service traffic</td>
                            <td className="px-3 py-2">Network Policies, CNI plugins</td>
                            <td className="px-3 py-2">Lateral movement inside cluster</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Node Security</td>
                            <td className="px-3 py-2">Protect worker nodes</td>
                            <td className="px-3 py-2">Node isolation, OS hardening, auto-patching</td>
                            <td className="px-3 py-2">Node compromise, cluster takeover</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Admission Control</td>
                            <td className="px-3 py-2">Validate and enforce security rules on deploy</td>
                            <td className="px-3 py-2">Admission controllers, policy engines (OPA/Gatekeeper)</td>
                            <td className="px-3 py-2">Misconfigured or insecure deployments</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Observability & Auditing</td>
                            <td className="px-3 py-2">Detect suspicious or malicious activity</td>
                            <td className="px-3 py-2">Logging, monitoring, audit trails</td>
                            <td className="px-3 py-2">Undetected attacks, delayed response</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2">Supply Chain Security</td>
                            <td className="px-3 py-2">Ensure trusted software reaches the cluster</td>
                            <td className="px-3 py-2">Image scanning, signed images, SBOMs</td>
                            <td className="px-3 py-2">Supply-chain attacks</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>  
    </div>
)