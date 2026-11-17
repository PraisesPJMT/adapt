# Adapt

Adapt is a private company project for the Adapt website and its
supporting reservations platform.

The public-facing website presents Adapt and its resort offering. The
application is being structured to support multiple languages on public
pages, while the reservations dashboard is intended for internal use and
remains English-only.

> **Project status:** Update this section as the application moves
> through development. Do not treat planned features, facilities,
> opening dates, environmental commitments, community benefits, or other
> forward-looking statements as established facts unless they have been
> verified and approved for publication.

## Project structure

The application uses the Next.js App Router. The intended structure
separates the public website from the internal dashboard while sharing
global styles and typography.

``` text
app/
├── globals.css
├── layout.tsx
└── [locale]/
    ├── layout.tsx
    ├── (website)/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── about/
    │   ├── accommodations/
    │   ├── contact/
    │   ├── experience/
    │   ├── faqs/
    │   └── reservation/
    └── (dashboard)/
        └── dashboard/
            ├── layout.tsx
            ├── page.tsx
            ├── bookings/
            └── settings/

components/
├── website/
└── dashboard/

i18n/
messages/
```

The exact folders may evolve as the application develops. Route groups
such as `(website)` and `(dashboard)` organise code without adding those
group names to URLs.

## Core application conventions

-   **Public website:** Locale-prefixed routes, such as `/en/about` and
    `/fr/about`.
-   **Dashboard:** Internal reservations interface, intended to remain
    in English.
-   **Layouts:** The public website uses its own shared header and
    footer. The dashboard uses a separate dashboard layout and must not
    inherit the public website header or footer.
-   **Internationalisation:** Use `next-intl` for public-facing
    translations. Keep user-facing strings in the appropriate message
    files rather than hardcoding them throughout components.
-   **Typography:** Cormorant Garamond is the display typeface; Figtree
    is used for body copy and interface text.
-   **Styling:** Tailwind CSS and the Adapt design tokens defined in
    `app/globals.css`.
-   **Accessibility:** Use semantic HTML, descriptive link text,
    keyboard-accessible controls, visible focus states, and meaningful
    alternative text for images.

## Brand direction

The Adapt identity is guided by the idea **"Shaped by the place."**

The visual system uses the Tideline palette:

  ------------------------------------------------------------------------
  Token                                    Hex value Intended use
  --------------------- ---------------------------- ---------------------
  Shell                                    `#F1EEE7` Main light background

  Linen                                    `#E1DACE` Secondary light
                                                     surface

  Mangrove                                 `#14231C` Primary dark, text
                                                     and dark surfaces

  Canopy                                   `#263A32` Secondary dark
                                                     surface

  Root                                     `#54382C` Warm dark accent

  Tide                                     `#43606D` Secondary colour

  Estuary                                  `#8D897C` Neutral secondary
                                                     colour

  Old Brass                                `#9D8653` Decorative lines and
                                                     ornaments; not small
                                                     text on Shell

  Champagne                                `#D5C29C` Accent on dark
                                                     backgrounds

  Logo Blue                                `#00AFEF` Logo use only
  ------------------------------------------------------------------------

Use brand colours and typography consistently. Do not use colour alone
to communicate meaning. Maintain sufficient text contrast.

## Getting started

### Requirements

-   Node.js version supported by the installed Next.js release.
-   npm (or the package manager used by this repository).
-   Access to the project's environment variables and any required
    external services.

### Install dependencies

``` bash
npm install
```

### Run the development server

``` bash
npm run dev
```

Open <http://localhost:3000> in a browser. With locale prefixes enabled,
the public homepage may be available at a path such as `/en`.

### Create a production build

``` bash
npm run build
```

### Run the production server

``` bash
npm run start
```

Check `package.json` for the scripts and package-manager commands
configured in this repository. The commands above assume the standard
Next.js npm scripts exist.

## Configuration

Create a local environment file when the application requires
environment variables:

``` bash
cp .env.example .env.local
```

If the repository does not contain `.env.example`, ask the project
maintainer for the required variable names and values. Do not commit
`.env.local`, API keys, credentials, database URLs, signing secrets, or
other private configuration.

Document new environment variables in `.env.example` using placeholder
values only.

## Internationalisation

Public website translations are managed through the configured
`next-intl` setup and message files, for example:

``` text
messages/
├── en.json
└── fr.json
```

English is the source language unless the project owner specifies
otherwise. Translations should preserve Adapt's calm, specific, warm and
exact brand voice. Do not translate property names, place names, or
local-language terms automatically without checking their approved
spelling and usage.

The reservations dashboard is intended to be English-only. Keep its
interface, operational labels, booking statuses and administrative
workflows in English unless this requirement is deliberately changed.

## Security and privacy

-   The dashboard is an internal application area. Protect it with
    server-side authentication and authorisation.
-   Do not rely only on hiding links or redirecting from a layout. Check
    permissions in server actions, route handlers, and data-access
    functions.
-   Validate and authorise access to every booking and guest record on
    the server.
-   Never commit secrets or real guest information to the repository.
-   Use synthetic data in development, screenshots, tests and
    documentation.
-   Follow applicable privacy and data-protection requirements when
    collecting or processing guest information.

## Content and publishing safeguards

Adapt's public communications must distinguish between verified facts,
commitments, intentions and matters still being explored. Do not publish
unverified claims about land ownership, environmental conditions,
community benefits, facilities, approvals, financing or opening dates.

Use approved brand assets only. Images depicting identifiable people
require the appropriate permission. Label visualisations as artist's
impressions where applicable.

## Contributing and change control

This is a private company codebase. Access is limited to people
authorised by the company.

Before submitting changes:

1.  Follow the existing project conventions.
2.  Keep components reusable and appropriately separated between public
    and dashboard experiences.
3.  Keep translations complete for every supported public locale.
4.  Test affected routes in each supported locale.
5.  Run the production build and resolve build errors.
6.  Do not introduce public-facing claims or brand assets without the
    required approval.

The project owner or designated maintainer should review and approve
changes before deployment.

## Deployment

Deployment configuration depends on the hosting provider and the
project's environment. For Netlify, use the official Next.js
integration/plugin and ensure the build settings match the current
Next.js deployment guidance. Do not configure the `.next` directory as a
generic static export unless the application is intentionally configured
for static export and all required features support it.

Keep production environment variables in the hosting provider's secure
environment settings, not in source control.

## Ownership and licence

This repository and its contents are proprietary and confidential to
Adapt and/or the applicable rights-holding company. All rights are
reserved. No permission to use, copy, modify, distribute, sublicense, or
commercially exploit this code is granted except as expressly authorised
in writing by the rights holder.

See the accompanying `LICENSE` file for the project's proprietary-use
notice. This README is project documentation and does not grant any
additional rights.
