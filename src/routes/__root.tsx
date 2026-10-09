import type { ReactNode } from "react";
import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { AuthProvider, useAuth } from "@/hooks/use-auth";
import "../styles.css";

function ServiceEndedScreen() {
  const { signOut } = useAuth();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="max-w-sm text-center">
        <h1 className="font-display text-xl font-bold text-foreground">Service period has ended</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Your access to the client portal has been paused. Please contact the clinic to renew your service.
        </p>
        <button
          onClick={() => signOut()}
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

function AccessGate({ children }: { children: ReactNode }) {
  const { accessDisabled } = useAuth();
  if (accessDisabled) return <ServiceEndedScreen />;
  return <>{children}</>;
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vitazia Wellness — Client Portal" },
      { name: "description", content: "Your personal nutrition journey" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <AuthProvider>
      <AccessGate>
        <Outlet />
      </AccessGate>
    </AuthProvider>
  );
}