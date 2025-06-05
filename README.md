# Trii Roboadvisor Prototipo

Este es un prototipo funcional de un roboadvisor simple para la fintech Trii, inspirado en el modelo de GestiónPRO de Protección S.A. El objetivo es permitir que un usuario responda un par de preguntas y reciba una recomendación de inversión en un portafolio diversificado, aplicando el estilo visual de Trii.

## Características

-   **Interfaz Sencilla:** El usuario solo responde dos preguntas: edad y salario mensual.
-   **Cálculo de Perfil de Riesgo:** Basado en la lógica simplificada:
    -   `Agresivo`: Edad < 35 Y Salario > 4MM COP
    -   `Moderado`: (Edad entre 35-50) O (Salario entre 2-4MM COP)
    -   `Conservador`: Edad > 50 O Salario < 2MM COP
-   **Portafolios Simulados:** Se asignan portafolios ficticios con porcentajes de distribución.
-   **Diseño Trii:** Implementa la paleta de colores, tipografías (se asumen las fuentes 'Formula Condensed' y 'DM Sans' disponibles) y estilo visual de la marca Trii.
-   **Validación de Inputs:** Validación básica para edad (18-80 años) y salario (mayor a 0).
-   **Visualización de Portafolio:** Muestra una gráfica de dona con la distribución del portafolio.
-   **Simulación de Inversión:** Proyección simple de crecimiento a 5 años basada en una inversión inicial ficticia y un multiplicador de rendimiento por perfil.

## Requisitos Técnicos

-   Node.js (v14 o superior)
-   npm (v6 o superior) o Yarn

## Cómo Ejecutar el Prototipo

Sigue estos pasos para poner en marcha el proyecto en tu máquina local:

1.  **Clonar el Repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/trii-roboadvisor-prototipo.git](https://github.com/tu-usuario/trii-roboadvisor-prototipo.git)
    cd trii-roboadvisor-prototipo
    ```
    (Nota: Tendrías que crear el repositorio en tu GitHub y subir este código allí)

2.  **Instalar Dependencias:**
    ```bash
    npm install
    # Si aún no lo has hecho, instala Tailwind CSS
    npm install -D tailwindcss
    npx tailwindcss init
    ```

3.  **Asegurar las Fuentes (Importante):**
    El prototipo está diseñado con las fuentes 'Formula Condensed' y 'DM Sans'. 'DM Sans' se ha importado desde Google Fonts en `public/index.html`. Para 'Formula Condensed', si tienes el archivo de la fuente, deberías importarlo vía `@font-face` en `src/index.css`. Si no, el navegador usará una fuente genérica `sans-serif`.

4.  **Iniciar la Aplicación:**
    ```bash
    npm start
    ```
    Esto iniciará la aplicación en modo desarrollo. Abre tu navegador y navega a `http://localhost:3000` (o el puerto que te indique la terminal).

## Estructura del Proyecto