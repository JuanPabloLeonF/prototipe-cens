# CENS - Sistema de Gestión de Usuarios

Bienvenido al prototipo de interfaz de usuario para el sistema de gestión de usuarios del CENS. Esta aplicación está desarrollada con React 19, TypeScript, Redux Toolkit y Vite, ofreciendo un rendimiento óptimo y una excelente experiencia de desarrollo.

## 🚀 Demo

Puedes ver una demostración en vivo del proyecto aquí:  
[Ver Demo](https://juanpabloleonf.github.io/prototipe-cens/)

## ✨ Características Principales

- **Autenticación de Usuarios**
  - Inicio de sesión seguro
  - Registro de nuevos usuarios
  - Gestión de perfiles de usuario

- **Interfaz Moderna**
  - Diseño responsivo que se adapta a cualquier dispositivo
  - Animaciones fluidas con Framer Motion

- **Gestión de Estado**
  - Estado global con Redux Toolkit
  - Persistencia de datos
  - Gestión eficiente del estado de autenticación

- **Rendimiento**
  - Carga rápida con Vite
  - Código dividido por rutas
  - Optimizado para producción

## 🛠️ Tecnologías Utilizadas

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) React 19
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) TypeScript 5.8
- ![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white) Redux Toolkit
- ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) Vite 7.0
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) React Router DOM 7.6
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white) Framer Motion 12.2
- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) Axios 1.10

## 🏗️ Estructura del Proyecto

```
src/
├── domain/
│   ├── apis/           # Llamadas a la API y configuración de Axios
│   ├── hooks/          # Custom hooks reutilizables
│   ├── models/         # Modelos de datos e interfaces TypeScript
│   ├── reduces/        # Slices y reducers de Redux Toolkit
│   └── statesGlobal/   # Configuración del store de Redux
├── ui/
│   ├── components/     # Componentes reutilizables
│   │   ├── FormularyLogin/    # Componente de inicio de sesión
│   │   └── FormularyRegister/ # Componente de registro
│   │
│   ├── layouts/        # Componentes de diseño (headers, footers, etc.)
│   │   ├── HeaderMain/
│   │   └── HeaderSecondary/
│   │
│   └── pages/          # Páginas de la aplicación
│       ├── History/    # Historial de actividades
│       ├── Login/      # Página de inicio de sesión
│       └── Profile/    # Perfil de usuario
│
├── App.tsx             # Componente raíz de la aplicación
├── main.tsx            # Punto de entrada de la aplicación
└── vite-env.d.ts       # Tipos de Vite
```

## 🚀 Comenzando

### Requisitos Previos

- Node.js (v18 o superior)
- npm (v9 o superior) o yarn (v1.22 o superior)
- Git

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

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   VITE_API_URL=tu_url_de_api
   # Otras variables de entorno según sea necesario
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. Abre tu navegador en [http://localhost:5173](http://localhost:5173)

### Construcción para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
# o
yarn build
```

Esto generará los archivos optimizados en la carpeta `dist/`.

## 🔍 Desarrollo

### Estructura de Código

- **Componentes**: Siguen el patrón de diseño atómico
- **Estilos**: CSS modular por componente
- **Tipado**: TypeScript estricto
- **Estado**: Redux Toolkit para gestión de estado global

### Convenciones de Código

- Nombres de componentes en PascalCase
- Nombres de archivos en kebab-case
- Hooks personalizados comienzan con 'use'
- Interfaces y tipos en archivos separados
