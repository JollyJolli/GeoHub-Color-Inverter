# GeoHub Color Inverter

[🇪🇸](#) | [🇬🇧](docs/README_EN.md) | [🇫🇷](docs/README_FR.md) | [🇩🇪](docs/README_DE.md)

Una extensión de Chrome que invierte automáticamente los colores durante las partidas de GeoHub para mejorar la visibilidad y reducir la fatiga visual.

## Origen del Proyecto

Este proyecto nació de un problema común al jugar en GeoHub: el esquema de colores por defecto está invertido, lo que dificulta ver claramente durante el juego. Esto me llevó a crear esta extensión para manejar automáticamente la inversión de colores y mejorar la experiencia de juego.

## Características

- Inversión automática de colores en las páginas de juego de GeoHub
- Corrección de imágenes para evitar la doble inversión
- Actualización dinámica para cambios en tiempo real

## Instalación

1. Descarga o clona este repositorio
2. Abre Chrome y ve a `chrome://extensions/`
3. Activa el "Modo desarrollador" en la esquina superior derecha
4. Haz clic en "Cargar descomprimida" y selecciona la carpeta de la extensión

## Estructura del Proyecto

```
├── manifest.json     # Configuración de la extensión
├── content.js       # Script principal de la extensión
├── icon48.svg       # Icono de la extensión (48x48)
└── icon128.svg      # Icono de la extensión (128x128)
```

## Funcionamiento Técnico

La extensión utiliza las siguientes tecnologías y características:

- **Manifest V3**: La última versión del sistema de manifiestos de Chrome
- **MutationObserver**: Para detectar cambios dinámicos en la página
- **CSS Filters**: Para aplicar la inversión de colores

El script principal (`content.js`) se inyecta automáticamente en las páginas de juego de GeoHub y aplica la inversión de colores tanto al cargar la página como cuando se detectan cambios dinámicos en el contenido.

## Permisos

La extensión solo requiere el permiso `activeTab` para funcionar, lo que significa que solo puede acceder a la página actual cuando el usuario está interactuando activamente con ella.

## Contribuir

Si deseas contribuir al proyecto, siéntete libre de crear un pull request o abrir un issue para discutir nuevas características o mejoras.