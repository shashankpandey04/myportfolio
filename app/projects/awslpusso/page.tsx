import ProjectPage from "@/components/projects/ProjectPage";

export default function Page() {
  return (
    <ProjectPage
      title="AWS LPU SSO - Identity Platform"
      description="A centralized identity platform providing secure Single Sign-On across the AWS LPU ecosystem using OAuth 2.0 and OpenID Connect."

      image="/projects/awslpusso.png"

      tech={[
        "Next.js",
        "Supabase",
        "TypeScript",
        "OAuth 2.0",
        "OpenID Connect",
      ]}

      overview="
        AWS LPU SSO is a centralized identity platform designed to provide a single authentication system across applications in the AWS LPU ecosystem.

        Instead of requiring users to create and manage separate accounts for every application, AWS LPU SSO provides one identity that can be used across connected services.

        The platform acts as an identity provider and implements OAuth 2.0 and OpenID Connect authentication flows. Applications can redirect users to AWS LPU SSO for authentication and receive authorization codes and identity information without directly handling user passwords.

        The system also provides account management, user profiles, role management, application authorization, and developer documentation for integrating new applications with the platform.
      "

      problem="
        As the AWS LPU ecosystem grows, different applications require authentication and user identity management.

        Without a centralized identity system, every application would need to independently implement authentication, maintain user accounts, manage passwords, and handle user profiles.

        This creates several problems:

        • Users need separate accounts and passwords for different applications.
        • Each application becomes responsible for securely handling authentication.
        • User identity and profile information becomes fragmented across services.
        • Applications cannot easily share authentication state.
        • Developers need to repeatedly build authentication systems for new projects.
        • Managing access and user roles becomes increasingly difficult as more applications are added.

        A centralized identity platform was needed to provide a secure and reusable authentication system for the entire ecosystem.
      "

      solution="
        I built AWS LPU SSO as a centralized identity provider that applications can integrate with using standard OAuth 2.0 and OpenID Connect protocols.

        Users authenticate directly with AWS LPU SSO instead of individual applications. Connected applications redirect users to the authorization endpoint and receive authorization codes after successful authentication.

        Applications can then exchange authorization codes for tokens and retrieve user identity information using protected endpoints.

        The platform supports the Authorization Code Flow with PKCE, state validation, and nonce handling to provide a more secure authentication flow.

        Users also have access to a centralized dashboard where they can manage their profile information, while administrators can access additional management capabilities based on their assigned role.
      "

      features={[
        "Centralized Single Sign-On across connected AWS LPU applications",
        "OAuth 2.0 Authorization Code Flow implementation",
        "OpenID Connect support for standardized user identity",
        "PKCE support for secure authorization flows",
        "State and nonce validation for authentication security",
        "Centralized user account and profile management",
        "Immutable email identity managed through the authentication provider",
        "Role-based access control for members and administrators",
        "Application authorization with registered redirect URIs",
        "Authorization code exchange for access and identity tokens",
        "Protected user information endpoint",
        "OpenID Connect discovery configuration",
        "JWKS endpoint for token verification",
        "Developer documentation for application integration",
        "Test OAuth client for validating the complete authentication flow",
      ]}

      architecture={[
        {
          title: "Application Layer",
          description:
            "AWS LPU SSO is built with Next.js and TypeScript, handling both the user-facing application and server-side platform logic. This includes authentication flows, authorization endpoints, the account dashboard, application management, and developer documentation.",
        },
        {
          title: "Identity & Authentication",
          description:
            "Supabase Auth provides the underlying authentication infrastructure and manages user identity securely. The platform uses this layer to handle account authentication while keeping identity concerns separate from application-specific user data.",
        },
        {
          title: "Profile & Application Data",
          description:
            "Application-specific profile information is stored separately from authentication identity. This separation allows the platform to preserve secure authentication data while maintaining additional user information required across the AWS LPU ecosystem.",
        },
        {
          title: "OAuth & OpenID Connect",
          description:
            "Connected applications integrate with AWS LPU SSO through OAuth 2.0 and OpenID Connect flows. Applications redirect users to the authorization endpoint, receive authorization codes through registered callback URLs, exchange those codes for tokens, and retrieve authenticated user information.",
        },
        {
          title: "Authorization & Security",
          description:
            "The authorization flow includes PKCE, authorization code validation, state validation, nonce validation, registered redirect URI verification, and role-based access checks to help secure application integrations and authentication requests.",
        },
      ]}

      challenges={[
        "Designing a secure OAuth 2.0 authorization flow while keeping the implementation suitable for applications in the AWS LPU ecosystem",
        "Implementing Authorization Code Flow with PKCE to support secure public clients",
        "Preventing unauthorized redirect URIs and validating registered application callbacks",
        "Managing the separation between authentication identities and application profile data",
        "Ensuring user roles are preserved correctly without allowing users to escalate their own permissions",
        "Handling authentication redirects while preserving the original authorization request and return destination",
        "Supporting existing authenticated users without interrupting the OAuth authorization flow",
        "Implementing OpenID Connect endpoints including discovery configuration, user information, and JWKS support",
        "Building a reusable developer experience so future AWS LPU applications can integrate without rebuilding authentication"
      ]}

      outcome="
        AWS LPU SSO provides a reusable identity foundation for the AWS LPU ecosystem.

        New applications can integrate with a centralized authentication system instead of independently implementing user registration, login, password handling, and identity management.

        Users benefit from a single account and a consistent authentication experience across connected applications.

        The platform also establishes a scalable foundation for future services by using widely adopted standards such as OAuth 2.0 and OpenID Connect. This allows the AWS LPU ecosystem to grow while maintaining a centralized and secure approach to identity and authentication.
      "

      liveLink="https://sso.awslpu.in"
      githubLink="https://github.com/awsbuilderslpu/SSO"
    />
  );
}