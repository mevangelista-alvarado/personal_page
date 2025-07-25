# Página Personal de Miguel Evangelista-Alvarado

Este repositorio contiene el código fuente de la página personal de Miguel Evangelista-Alvarado. El sitio está hecho con HTML, CSS y JavaScript puro, y es completamente estático.

## Levantar el sitio en local

Puedes ver el sitio en tu máquina local de dos formas:

### Opción 1: Usando Python (recomendado)

1. Abre una terminal en la carpeta raíz del proyecto.
2. Ejecuta el siguiente comando:
   
   ```sh
   python3 -m http.server 8000
   ```
3. Abre tu navegador y visita: [http://localhost:8000](http://localhost:8000)

### Opción 2: Usando la extensión Live Server de VSCode

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Instala la extensión "Live Server".
3. Haz clic derecho en `index.html` y selecciona "Open with Live Server".

---

## Publicar en GitHub Pages

1. Sube todo el contenido del repositorio a un repositorio público en GitHub.
2. Ve a la configuración del repositorio en GitHub (Settings > Pages).
3. En "Source", selecciona la rama principal (`main` o `master`) y la carpeta raíz (`/`).
4. Guarda los cambios. GitHub generará una URL del tipo:
   
   `https://<tu-usuario>.github.io/<nombre-del-repo>/`

5. Espera unos minutos y accede a la URL para ver tu sitio publicado.

---

## Estructura del proyecto

```
├── index.html
├── cv/
│   └── index.html
├── papers/
│   └── index.html
├── talks/
│   └── index.html
├── teaching/
│   └── index.html
├── students/
│   └── index.html
├── misc/
│   └── index.html
├── static/
│   ├── style.css
│   └── script.js
├── me.jpeg
├── favicon.ico
└── README.md
```

---

## Notas
- Puedes editar los archivos HTML directamente para actualizar el contenido.
- Los enlaces de redes sociales y plataformas académicas están en el footer de cada página.
- Si cambias la estructura de carpetas, asegúrate de actualizar los enlaces relativos en los menús y footers.

---

¿Dudas? Contacta a Miguel Evangelista-Alvarado. 

---

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles. 