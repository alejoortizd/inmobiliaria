# Inmobiliaria

## Plan de Accion

- [x] Crear el flujo del proyecto
- [x] Crear .gitignore
  - [x] Agregar node_modules
  - [x] Agregar .env
- [x] Definir la base de datos a utilizar
  - [x] Crear la bd en mongo db
    - [x] Crear cluster free
    - [x] Crear usuario admin global
    - [x] Dar permisos globales para uso de la bd desde cualquier parte
- [x] Definir la estructura del backend
  ##### Se decide trabajar con Node.Js para el proyecto
  - [x] Inicializar proyecto en Node.Js
  - [x] Crear archivo index.js
    - [x] Iniciar app con la instancia server
    - [x] Iniciar bd con la instancia db
  - [ ] Crear archivo server.js
    - [x] Instalar dependecias de Node.Js
      - [x] express
      - [x] nodemon
      - [x] path
      - [x] dotenv
      - [x] express-handlebars
      - [x] body-parser
      - [x] body-parser
      - [x] method-override
      - [x] method-override
      - [x] connect-flash
      - [x] express-session
      - [x] passport
      - [x] multer
      - [x] uuid
      - [x] cloudinary
      - [x] cors
      - [x] mongoose
    - [x] Crear la instancia app para ejecutar express en ella.
      - [x] Configurar puerto
        - [x] Cambiar puerto para variable de entorno
      - [x] Configurar cors
      - [x] Configurar body-parser para entender json y urlenconded
      - [x] Exportar modulo
  - [x] modificar package.json para incluir los scripts de dev.
  - [x] Crear archivo .env y .env.example
    - [x] Agregar la variables de entorno de la bd para iniciar sesion y agregar al .env.example que variables se requieren
  - [ ] Crear carpeta config
    - [x] Crear archivo index.js
    - [x] Crear archivo db.js
      - [x] Importar orm
      - [x] Configurar uri
      - [x] Generar conexion con bd
- [ ] Definir engine para proyectar front
  ##### Se decide trabajar con Handlebars para el proyecto
- [ ] Integrar back y front
