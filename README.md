🎰 Máquina Tragaperras – "Detalles Diarios Para Tu Pareja"

Proyecto en JavaScript para practicar clases, módulos ES6, manipulación del DOM y gestión de estado con localStorage.
La aplicación simula una máquina tragaperras de un solo rodillo que muestra “detalles románticos diarios para tu pareja”.
Una vez aparece un detalle, se guarda en localStorage para que no pueda volver a salir en días siguientes, pudiendo resetarse a conveniencia.


✨ Características

- Un único rodillo con elementos animados.
- Lista de "detalles para tu novia" seleccionados aleatoriamente.
- Registro de resultados en localStorage, para evitar repetir un detalle ya mostrado.
- Arquitectura modular orientada a objetos.
- Estructuración por capas:
    - models (lógica del dominio)
    - services (persistencia / almacenamiento)
    - ui (interfaz y manejo del DOM)
    - data (datos estáticos)
- Código escalable y fácil de mantener.


📁 Estructura del proyecto

/ (raíz del proyecto)
├─ index.html
├─ /src
│  ├─ main.js               # Punto de entrada de la app
│  ├─ /models
│  │   ├─ Reel.js           # Clase que representa el rodillo
│  │   └─ SlotMachine.js    # Lógica principal de la tragaperras
│  ├─ /services
│  │   └─ HistoryService.js # Gestión de localStorage
│  ├─ /data
│  │   └─ gifts.js          # Lista de detalles disponibles
│  ├─ /ui
│  │   ├─ DomBindings.js    # Referencias al DOM
│  │   └─ UiController.js   # Controlador visual y eventos de la UI
└─ /styles
   └─ styles.css            # Estilos y animaciones


🚀 Requisitos

- Navegador moderno compatible con ES Modules.
- No necesita backend, solo abrir index.html.


🧱 Instalación y ejecución

1. Clona este repositorio:
    git clone https://github.com/tu-usuario/tragaperras-detalles.git
2. Entra en la carpeta:
    cd tragaperras-detalles
3. Instalas Serve
    npm install --save-dev serve
3. Inicias el programa
    npm start
4. Entras en el localhost levantado, por ejemplo: http://localhost:3000/


🛠️ Tecnologías utilizadas

- JavaScript ES6+
- HTML5
- CSS3
- localStorage API
- Programación orientada a objetos (OOP)


🧩 Funcionamiento básico

1. El usuario tira de la palanca.
2. La clase Reel genera un símbolo aleatorio de la lista disponible.
3. La clase SlotMachine valida que ese símbolo no esté usado.
4. Si es válido:
    - Se guarda en localStorage mediante HistoryService.
    - Se muestra el detalle en pantalla.
5. Cuando quedan pocos detalles, la máquina puede mostrar un mensaje especial o pedir reinicio.
6. Se puede resetear manualmente los detalles disponibles en todo momento.


🔧 Extensiones y mejoras futuras

- Añadir más rodillos.
- Incluir animaciones más complejas de giro.
- Sonidos al girar.
- UI más parecida a una máquina real (SVG, imágenes, etc.).
- Dark/Light mode.


🧑‍💻 Autor y propósito

Desarrollado por Juan Mayor Rocher, ingeniero de software con experiencia profesional construyendo interfaces y aplicaciones web utilizando jQuery y React. Aunque mi trayectoria ha estado muy centrada en frameworks y librerías, no he trabajado con frecuencia en JavaScript puro ni en paradigmas de programación orientada a objetos (OOP) dentro del lenguaje. Este proyecto nace como una iniciativa personal para reforzar esas bases, mejorar mi dominio de JavaScript moderno y practicar una arquitectura modular sin depender de herramientas externas.


📄 Licencia

MIT License – Puedes usar, modificar y distribuir este proyecto libremente.
