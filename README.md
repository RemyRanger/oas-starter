# OpenAPI Documentation Manager with Redoc and Vue.js

## Overview

This project provides a solution for managing OpenAPI documentation efficiently by combining the power of **Redoc** for API visualization and a custom **Vue.js-based interface** for organizing and displaying technical specifications. The resulting documentation is deployed using **GitHub Pages**, enabling easy sharing and collaboration.

By treating documentation like a code project, this setup encourages modularity, scalability, and better collaboration for managing OpenAPI specifications.

---

## Features

- **Interactive API Documentation**: Leverages **Redoc** to render OpenAPI specifications into a clean, responsive, and interactive interface.
- **Vue.js-powered Customization**: Provides a Vue.js front-end for additional customization, enabling users to enhance the presentation and user experience of their API documentation.
- **GitHub Pages Deployment**: Automatically deploys the documentation to GitHub Pages for easy online access.
- **Version Control for API Specs**: Tracks changes to OpenAPI files, allowing versioning and collaborative improvements.

---

## Why Manage Documentation Like Code?

Managing API documentation as code promotes collaboration and maintainability. Here's why:

1. **Version Control**: Use Git to track changes, compare versions, and manage contributions to the documentation just like you would with source code.
2. **Modularity**: Breaking down the OpenAPI specifications into smaller components (schemas, endpoints, examples, etc.) ensures reusability and reduces duplication.
3. **Collaboration**: Developers and technical writers can contribute simultaneously using pull requests, code reviews, and Git workflows.
4. **Automation**: Leverage CI/CD pipelines to validate, build, and deploy documentation automatically.
5. **Scalability**: As the API evolves, managing it modularly makes it easier to update without introducing errors or inconsistencies.

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or later)
- **npm** (or **yarn**)
- A **GitHub repository** for hosting the project and deploying to GitHub Pages.

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:RemyRanger/oas-starter.git
   cd oas-starter
   ```

2. Install dependencies:
   ```bash
   yarn
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

4. Build the project for deployment:
   ```bash
   yarn build
   ```

---

## Deployment to GitHub Pages

[Visit Documentation hosted on GitHub pages](https://remyranger.github.io/oas-starter/)

## Acknowledgments

- [Vue.js](https://vuejs.org/) for the framework.
- [Redoc](https://redocly.github.io/redoc/) for API documentation visualization.
- [GitHub Pages](https://pages.github.com/) for hosting.

Enjoy managing your OpenAPI documentation like a pro! 🚀