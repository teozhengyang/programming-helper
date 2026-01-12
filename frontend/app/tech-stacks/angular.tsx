export const angularSetUp = (
    <div className="space-y-6">
        <section className="space-y-4">
            <h3 className="text-md font-semibold">Setup Angular Project</h3>
            <ol className="list-decimal space-y-4 pl-5 text-sm">
                <li className="text-muted-foreground">
                    Ensure Node.js and npm are installed. Then install Angular CLI globally:
                    <pre className="rounded-md bg-muted p-4 text-xs overflow-x-auto border border-border">
                     {`npm install -g @angular/cli`}
                    </pre>
                </li>
                <li className="text-muted-foreground">
                    Create a new Angular project:
                    <pre className="rounded-md bg-muted p-4 text-xs overflow-x-auto border border-border">
                     {`ng new frontend`}
                    </pre>
                </li>
                <li className="text-muted-foreground">
                    Navigate into the project directory:
                    <pre className="rounded-md bg-muted p-4 text-xs overflow-x-auto border border-border">
                     {`cd frontend`}
                    </pre>  
                </li>
                <li className="text-muted-foreground">
                    Serve the application locally:
                    <pre className="rounded-md bg-muted p-4 text-xs overflow-x-auto border border-border">
                     {`ng serve`}
                    </pre>
                </li>
                <li className="text-muted-foreground">
                    Open your browser and navigate to <code className="text-xs bg-muted px-1 py-0.5 rounded">http://localhost:4200</code> to see your running Angular application.
                </li>
            </ol>
        </section>
    </div>
);