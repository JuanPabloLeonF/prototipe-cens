# Prototipo CENS - Sistema de Gestión de Usuarios

Bienvenido al prototipo de interfaz de usuario para el sistema de gestión de usuarios del CENS. Esta aplicación está desarrollada con React, TypeScript y Redux, utilizando Vite como herramienta de construcción.

## 🚀 Demo

Puedes ver una demostración en vivo del proyecto aquí:  
[Ver Demo](https://juanpabloleonf.github.io/prototipe-cens/)

## ✨ Características

- Interfaz de inicio de sesión
- Formulario de registro de usuarios
- Diseño responsivo
- Estado global gestionado con Redux
- Enrutamiento con React Router
- Validación de formularios
- Estructura de proyecto escalable

## 🛠️ Tecnologías Utilizadas

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- ![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## 📦 Estructura del Proyecto

```
src/
├── domain/
│   ├── models/         # Modelos de datos e interfaces
│   ├── reduces/        # Reducers de Redux
│   └── statesGlobal/   # Configuración del store de Redux
├── ui/
│   ├── layouts/        # Componentes de diseño reutilizables
│   └── pages/          # Páginas de la aplicación
└── main.tsx            # Punto de entrada de la aplicación
```

## 🚀 Cómo Empezar

### Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JuanPabloLeonF/prototipe-cens.git
   cd prototipe-cens
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre tu navegador en [http://localhost:5173](http://localhost:5173)

### Construcción para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
# o
yarn build
```

## 🎨 Diseño

La aplicación cuenta con un diseño limpio y moderno con:
- Formularios intuitivos
- Mensajes de validación
- Diseño adaptable a diferentes tamaños de pantalla
- Interfaz de usuario amigable

## 📝 Características de la Autenticación

- Inicio de sesión de usuarios existentes
- Registro de nuevos usuarios
- Validación de formularios en el cliente
- Manejo de estado de autenticación

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, lee nuestras pautas de contribución para más detalles.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📧 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o contactar al equipo de desarrollo.

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
