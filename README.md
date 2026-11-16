# Grammarly Landing Page

A responsive SaaS landing page created for the Sankar Group front-end development assignment. It presents a writing assistant product through a focused hero editor preview, feature overview, usage steps, pricing plans, demo request form, login form, and footer navigation.

## Features

- Responsive navigation with desktop links and a mobile menu.
- Hero section with a product editor preview and interactive suggestion.
- Three product feature cards and a three-step explanation of the workflow.
- Free and Pro pricing plans.
- Frontend-only demo request form with required-field and email validation.
- Frontend-only login modal with email and password validation.
- No backend, authentication service, payment system, or external API is required.

## Run locally

```bash
npm install
npm run dev
```

The production build can be checked with `npm run build`, and code quality with `npm run lint`.

To preview the production build locally:

```bash
npm run build
npm run preview
```

## Technologies

- React 19
- Vite
- Plain CSS with responsive media queries
- Lucide React icons

## Interactions

- Navigation links scroll to the relevant page sections.
- The mobile navigation opens and closes with an accessible toggle.
- The Log in action opens a validated frontend-only login form with a success state.
- The hero suggestion can be applied and undone.
- The demo form validates required name and email fields and displays a success state after submission.

## Design notes

The design uses a calm green and white palette to support the writing-assistant concept without distracting from the content. The editor preview communicates the product immediately, while simple cards and clear spacing keep the remaining sections easy to scan. Responsive grids collapse into a single-column layout on smaller screens. The main challenge was turning a static product concept into a complete experience with useful frontend-only interactions and no backend dependency.

## Project structure

```text
src/
	components/
		DemoForm.jsx
		Features.jsx
		Footer.jsx
		Hero.jsx
		HowItWorks.jsx
		LoginModal.jsx
		Navbar.jsx
		Pricing.jsx
	App.jsx
	index.css
	main.jsx
```

## Validation

The project is checked with:

```bash
npm run lint
npm run build
```


