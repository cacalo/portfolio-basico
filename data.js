const proyectos = [
  {
    titulo: "Generador de listas de precios",
    descripcion:
      "Sistema web que permite a un encargado de cuentas generar listas de precios personalizadas para sus clientes, permitiendo alterar los descuentos y recargos por cliente y por producto, generando PDFs para cada cliente.",
    link: "",
    fecha: "01/07/2024",
    imagen: "NDA.png",
    tecnologias: ["HTMl","CSS","PDF","Google Sheets","Appscript"],
  },
  {
    titulo: "Curso juego online multiplayer con Angular 18 + NodeJs",
    descripcion:
      "Curso largo y completo: Creamos una juego online multiplayer, de principio a fin sin saltearnos nada usando Angular 18 y NodeJs con Socket.IO.",
    link: "https://www.youtube.com/playlist?list=PL3Qv7aeTNq0dyuTX0bAO5DVuFe8w93f0z",
    fecha: "06/06/2024",
    imagen: "curso-ta-te-ti.png",
    tecnologias:["Angular 18","Typescript","SCSS","HTML","NodeJs","Socket.IO","Express"],
  },
  {
    titulo: "CRM personalizado",
    descripcion:
      "CRM creado desde cero para administrar la relación con los clientes de una empresa de seguros. Incluye la gestión de leads desde distintos roles, parametrización viva, roles y permisos. El proyecto está actualmente en curso.",
    link: "",
    fecha: "01/12/2023",
    imagen: "NDA.png",
    tecnologias: ["Angular"],
  },
  {
    titulo: "Curso Front end con Angular",
    descripcion:
      "Curso que se compone de 8 horas de puro contenido separado en 17 videos en donde enseño como crear aplicaciones web utilizando Angular.",
    link: "https://www.youtube.com/playlist?list=PL3Qv7aeTNq0eChWdLTbxelz-5d6ZTBp3i",
    fecha: "01/06/2023",
    imagen: "curso_angular_1.png",
    tecnologias: ["Angular 16","HTML","CSS","Javascript"],
  },
  {
    titulo: "Conector Facebook Ads → Engage CRM",
    descripcion:
      "Servicio web que permite sincronizar los leads de una campaña de marketing de Facebook Ads con un CRM llamado Engage.",
    link: "",
    fecha: "01/08/2023",
    imagen: "NDA.png",
    tecnologias: ["HTML","CSS","Javascript"],
  },
  {
    titulo: "Conector Wordpress Contact Form → Engage CRM",
    descripcion:
      "Plugin para wordpress que conecta los datos de un formulario de registro con los leads de Engage CRM",
    link: "",
    fecha: "01/08/2023",
    imagen: "NDA.png",
    tecnologias: ["PHP"],
  },
  {
    titulo: "Cotizador comercial",
    descripcion:
      "Herramienta online que permite cotizar servicios a distintos clientes, hecho para una empresa masiva.",
    link: "",
    fecha: "01/06/2023",
    imagen: "NDA.png",
    tecnologias: ["HTML","CSS","Javascript"],
  },
  {
    titulo: "Compositor online de música",
    descripcion:
      "Página web con compositor online de música. Front y Back completos hechos por mí.",
    link: "https://musicboxmelodies.com/",
    fecha: "01/01/2022",
    imagen: "mbm.png",
    tecnologias: ["Angular", "Typescript", "SCSS", "NodeJs","GraphQL","ToneJs","Paypal","Social Login"],
  },
  {
    titulo: "Pong",
    descripcion:
      "Creación de un juego sencillo estilo Pong, hecho para explicar el uso de la programación orientada a objetos.",
    link: "https://cacalo.github.io/pong-html/",
    fecha: "29/03/2023",
    imagen: "pong.png",
    tecnologias: ["Javascript"],
  },
  {
    titulo: "Landing puntoJson",
    descripcion:
      "Landing del canal de YouTube puntoJson",
    link: "https://puntojson.com/",
    fecha: "22/03/2023",
    imagen: "paginaoficial.png",
    tecnologias: ["Angular", "Typescript", "SCSS"],
  },
  {
    titulo: "Pokédex",
    descripcion:
      "Herramienta para ver información de distintos pokémon, inspirada en la pokedex de pokemon diamante brillante. Obtiene los datos de una API.",
    link: "https://pokedex-puntojson.netlify.app/",
    fecha: "29/02/2023",
    imagen: "pokedex.jpg",
    tecnologias: ["Angular", "Typescript", "SCSS", "PokeApi"],
  },
  {
    titulo: "Calo responde",
    descripcion:
      "Juego para hacer creer a la gente de que hay una inteligencia artificial que sabe todo sobre tí.",
    link: "https://cacalo.github.io/Calo-responde/",
    fecha: "29/02/2023",
    imagen: "calo responde.png",
    tecnologias: ["HTML","CSS","Javascript"],
  },
  {
    titulo: "Mega curso HTML",
    descripcion:
      "Curso completo de HTML, en donde explico desde lo más básico (¿Qué es una etiqueta?) hasta conceptos complejos (ARIA).",
    link: "https://youtu.be/xF5HIi84Few",
    fecha: "29/02/2023",
    imagen: "html mega curso.png",
    tecnologias: ["HTML"],
  },
  {
    titulo: "Test de mecanografía",
    descripcion:
      "Juego para ver quién puede escribir más rápido. Se te da un minuto y tenés que escribir la mayor cantidad de letras correctas evitando escribir letras incorrectas.",
    link: "https://cacalo.github.io/test-mecanografia/",
    fecha: "29/02/2023",
    imagen: "mecanografia.png",
    tecnologias: ["HTML","CSS","Javascript","APIs"],
  },
  {
    titulo: "Contador de truco",
    descripcion:
      "Herramienta para ver información de distintos pokémon, inspirada en la pokedex de pokemon diamante brillante. Obtiene los datos de una API.",
    link: "https://cacalo.github.io/Contador-truco/",
    fecha: "29/02/2023",
    imagen: "truco.png",
    tecnologias: ["HTML","CSS","Javascript"],
  },
  {
    titulo: "Porfolio",
    descripcion:
      "Sitio web donde se pueden ver todos los proyectos que hice, las visualización de los proyectos se genera en tiempo de ejecución desde una constante por lo cual es de fácil mantenimiento.",
    link: "https://cacalo.github.io/portfolio-basico/",
    fecha: "08/02/2023",
    imagen: "portfolio.png",
    tecnologias: ["HTML", "CSS", "Javascript"],
  },
  {
    titulo: "Ruelta personalizable",
    descripcion:
      "Herramienta para generar un sorteo entre opciones y visualizarlo como si fuese una ruleta. Para practicar eventos y para demostrar el uso que puede tener la matemática en un proyecto.",
    link: "https://cacalo.github.io/Ruleta-cusomizable/",
    fecha: "08/02/2023",
    imagen: "ruleta.png",
    tecnologias: ["HTML", "CSS", "Javascript"],
  },
  {
    titulo: "Reloj digital",
    descripcion:
      "Práctica en donde usamos limitaciones en el código para programar algo 'sensillo' de una manera más compleja, terminando en un reloj programado segmento a segmento. Se usa mucho los distintos tipos de posicionamiento básicos, el relativo y el absoluto.",
    link: "https://cacalo.github.io/reloj-digital/",
    fecha: "08/02/2023",
    imagen: "reloj digital.png",
    tecnologias: ["HTML", "CSS", "Javascript"],
  },
  {
    titulo: "Herramienta para un 'amigo invisible'",
    descripcion:
      "Herramienta que nos permite gestionar varios sorteos de amigos invisibles (una actividad en donde se hacen regalos entre grupos de amigos). Está creada pensada en su eso en teléfonos.",
    link: "https://amigo-inivisible.netlify.app/",
    fecha: "08/02/2023",
    imagen: "amigo invisible.png",
    tecnologias: ["Angular", "Ionic", "Typescript"],
  },
  
  {
    titulo: "Página Shopify",
    descripcion:
      "Copia de la landing en front del sitio web de Shopify.dev",
    link: "https://cacalo.github.io/shopify.dev-clone/",
    fecha: "05/03/2023",
    imagen: "shopify.png",
    tecnologias: ["HTML", "CSS"],
  },
  {
    titulo: "Página Abstract",
    descripcion:
      "Copia de la landing en front del sitio web help.abstract.com",
    link: "https://cacalo.github.io/Abstract---Copia-sitio-web/",
    fecha: "07/07/2023",
    imagen: "abstract.png",
    tecnologias: ["HTML", "CSS"],
  },
 
  {
    titulo: "Prototipo jugable de juego 3D para teléfonos",
    descripcion:
      "Proyecto presentado como proyecto final del curso de HardvardX CS50G: Introduction to game design, en donde trabajé sólo.",
    link: "https://youtu.be/eyWDOrnd4is",
    fecha: "23/09/2020",
    imagen: "cs50g.png",
    tecnologias: ["C#","Unity"],
  },
  {
    titulo: "Proyectos de práctica de game design",
    descripcion:
      "Proyectos de desarrollo de videojuegos donde en cada uno hice distintas tareas de programación.",
    link: "https://www.youtube.com/playlist?list=PLUDCcCQZZvrYtu83ASqPK-tphTrJSkZek",
    fecha: "01/07/2020",
    imagen: "cs50g-2.png",
    tecnologias: ["Lua","Love2D","C#","Unity"],
  },
  {
    titulo: "Automatización de subida de videos a YouTube",
    descripcion:
      "Script en Python, que junto al script de creación de videos, me permite crear y subir a internet alrededor de 20 videos por hora de trabajo.",
    fecha: "08/02/2023",
    imagen: "python.png",
    tecnologias: ["Python"],
  },
  {
    titulo: "Herramienta de gestión de trabajos pendientes",
    descripcion:
      "Script en python, que acelera mi productividad en musicboxmelodies.com creando carpetas de proyecto para proyectos nuevos y envía los finalizados por mail a los clientes. Dejando registro en su respectiva base de datos.",
    fecha: "08/01/2019",
    imagen: "python.png",
    tecnologias: ["Python","Pyautogui","Gspread"],
  },
  {
    titulo: "Script de Adobe After Effects",
    descripcion:
      "Script en Javascript, que me ayuda crear videos rapidamente completando datos preescritos en una base de datos dentro de mis videos.",
    fecha: "08/01/2020",
    imagen: "after-effects.jpg",
    tecnologias: ["Javascript","JSX"],
  },
  {
    titulo: "Calculadora",
    descripcion:
      "Proyecto de práctica de calculadora sencilla.",
    link: "https://cacalo.github.io/calculadora-basica/",
    fecha: "08/02/2023",
    imagen: "calculadora.png",
    tecnologias: ["HTML", "CSS", "Javascript"],
  },
  {
    titulo: "Ta-Te-Ti",
    descripcion:
      "Proyecto sencillo de un juego de Ta-te-ti, en donde vemos lo básico de algoritmos y generamos uno para detectar si algún jugador ganó la partida.",
    link: "https://cacalo.github.io/Ta-Te-Ti/",
    fecha: "08/02/2023",
    imagen: "tateti.png",
    tecnologias: ["HTML", "CSS", "Javascript"],
  },
  {
    titulo: "Página sencilla",
    descripcion:
      "Proyecto orientado para que alguien que esté dando sus primeros pasos en el desarrollo web se pueda copiar",
    link: "https://cacalo.github.io/introduccion-basica-html-css/",
    fecha: "08/02/2023",
    imagen: "introduccion basica.png",
    tecnologias: ["HTML", "CSS", "Javascript"],
  },
];

const informacionPersonal = {
  nombre: "Gonzalo Bechara Baladi",
  subtitulo: "Desarrollador web",
  imagen: "img/calo1.png",
  otros: [
    ["Nacionalidad", "Argentino"],
    [
      "Edad",
      new Date(new Date() - new Date("1993/12/27")).getFullYear()-1970 + " años",
    ],
  ],
  idiomas: [
    ["Español", "Nativo"],["Inglés", "Muy bueno"],
  ],
  tecnologias: [
    ["Html", 9],["Css", 8],["Javascript", 9],["Typescript", 8],["Angular", 9],
    ["Ionic",7],["Node",6],["Python",5],["C#",3]
  ],
  redes: [
    ["github", "https://github.com/cacalo"],
    ["linkedin", "https://www.linkedin.com/in/gonzalo-bechara-baladi-05b14353/"],
    ["youtube", "https://www.youtube.com/@puntoJson"],
    ["instagram", ""],
  ]
};
