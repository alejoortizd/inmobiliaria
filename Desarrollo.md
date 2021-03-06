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
      - [x] method-override
      - [x] connect-flash
      - [x] express-session
      - [x] passport
      - [x] passport-local
      - [x] multer
      - [x] uuid
      - [x] cloudinary
      - [x] cors
      - [x] mongoose
      - [x] bcryptjs
    - [x] Crear la instancia app para ejecutar express en ella.
      - [x] Configurar puerto
        - [x] Cambiar puerto para variable de entorno
      - [x] Configurar cors
      - [x] Configurar body-parser para entender json y urlenconded
    - [x] Exportar modulo
    - [x] configurar multer y cloudinary
    - [x] agregar el controller y ruta home
    - [x] agregar flash para manejo de errores y mensajes y pintarlos en front
    - [x] agregar el controller y ruta user
    - [x] Inicializar passport en el server para que identifique la estrategia
  - [x] modificar package.json para incluir los scripts de dev
  - [x] Crear folder public
    - [x] Crear folder img
      - [x] Crear folder upload
  - [x] Crear archivo .env y .env.example
    - [x] Agregar la variables de entorno de la bd para iniciar sesion y agregar al .env.example que variables se requieren
  - [x] Crear folder config
    - [x] Crear archivo index.js
    - [x] Crear archivo db.js
      - [x] Importar orm
      - [x] Configurar uri
      - [x] Generar conexion con bd
    - [x] Crear passport Strategy
  - [x] Crear folder model
    - [x] crear Users.js
      -[x] Crear name
      -[x] Crear email
      -[x] Crear password
  - [x] crear Inmuebles.js
    - [x] Crear name
    - [x] Crear description
    - [x] Crear price
    - [x] Crear adress
    - [x] Crear state
      - [x] Validar que sea menor o igual a 2
    - [x] Crear city
    - [x] Crear zip
      - [x] Validar que sea menor o igual a 5
    - [x] Crear country
      - [x] Validar que sea menor o igual a 2
    - [x] Crear photo
    - [x] Crear status para validar si esta disponible o alquilado
    - [x] Crear user para hacer un "foreing key"
  - [x] crear folder api
    - [x] crear folder home
      - [x] crear routes.js
        - [x] Crear ruta get del "/"
        - [x] Crear ruta get del "/inmuebles"
      - [x] crear services.js
    - [x] crear folder user
      - [x] crear routes.js
        - [x] crear ruta get "/inmuebles/create"
        - [x] crear ruta post "/inmuebles/create"
        - [x] crear ruta get "/login"
        - [x] crear ruta post "/login"
        - [x] crear ruta get "/logout"
      - [x] crear services.js
    - [x] create folder inmuebles
      - [x] crear routes.js
        - [x] crear ruta get '/misinmuebles/inmuebles/create'
        - [x] crear ruta post '/misinmuebles/new'
        - [x] crear ruta get '/misinmuebles/inmuebles/edit/:inmuebleId'
        - [x] crear ruta post '/misinmuebles/inmuebles/edit/:inmuebleId'
        - [x] crear ruta get '/misinmuebles'
      - [x] crear services.js
  - [x] Crear folder utils
    - [x] crear auth.js
- [ ] Definir engine para proyectar front
  ##### Se decide trabajar con Handlebars para el proyecto
    - [x] Configuar engine de Handlebars en server
    - [x] crear folder views
      - [x] crear folder layout
        - [x] crear archivo main.hbs
          - [x] configurar bootstrap
          - [x] configurar los bloques para mostrar las views
            - [x] messages
            - [x] errors
            - [x] body
      - [x] crear folder inmuebles
      - [x] crear folder partials
        - [x] crear navigation.hbs
        - [x] 
      - [x] crear folder users
        - [x] crear login.hbs
        - [x] crear create.hbs
      - [x] crear index.hbs
- [ ] Integrar back y front
