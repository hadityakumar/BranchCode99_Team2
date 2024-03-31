@@ -1,7 +1,22 @@
# Transportion-service

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Transportion-service is a web application developed using React.js for managing Transportion timings.

Currently, two official plugins are available:
## Installation

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
1. **Run react server:**

    ```bash
    cd Frontend
    npm install
    npm run dev


2. **Run Backend server:**

    ```bash
    cd Backend
    npm install
    nodemon server.js
