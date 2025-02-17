const proyectosContainer = document.getElementById("proyectosContainer");
const aside = document.getElementsByTagName("aside")[0];
const descargarPDFBoton = document.getElementById("descargarPDF");
descargarPDFBoton.addEventListener("click",()=> descargarPDF(document.body))

const getTecnologias = (tecnologias) => {
  let res = "";
  tecnologias.forEach((tecnologia) => {
    res += `<span class='tecnologia'>${tecnologia}</span> `;
  });
  return res;
};

const getProyecto = (proyecto) => `
  <img src='img/proyectos/${proyecto.imagen}' alt='${proyecto.titulo} loading="lazy"' class="no-print">
  <div>
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <p>Tecnologías: ${getTecnologias(proyecto.tecnologias)}</p>
  </div>

  <a ${proyecto.link ? 'href='+proyecto.link : "class='disabled no-print'"} target="_blank" class="no-print">Ver proyecto</a>
`;

const makePresentacion = () => {
  const nuevaPresentación = document.createElement("div");
  nuevaPresentación.classList = "presentacion";
  nuevaPresentación.innerHTML +=`
    <img src="${informacionPersonal.imagen}">
  `
  // nuevaPresentación.innerHTML += `
  // <h2>${informacionPersonal.nombre}<h2>
  // `
  informacionPersonal.otros.forEach(dato => {
    nuevaPresentación.innerHTML += `
    <div>
      <span>${dato[0]}:</span>
      <span>${dato[1]}</span>
    </div>
    `
  })
  aside.insertBefore(nuevaPresentación,descargarPDFBoton);
}

const makeIdiomas = () => {
  const nuevoIdiomas = document.createElement("div");
  nuevoIdiomas.classList = "idiomas";
  informacionPersonal.idiomas.forEach(dato => {
    nuevoIdiomas.innerHTML += `
    <div>
      <span>${dato[0]}:</span>
      <span>${dato[1]}</span>
    </div>
    `
  })
  aside.insertBefore(nuevoIdiomas,descargarPDFBoton);
}

const makeTecnologias = () => {
  const nuevoTecnologias = document.createElement("div");
  nuevoTecnologias.id = "tecnologias";
  nuevoTecnologias.innerHTML += `<span>Tecnologías: </span>`
  informacionPersonal.tecnologias.forEach(dato => {
    nuevoTecnologias.innerHTML += `
    <div class="no-print">
      <span>${dato[0]}</span>
      <span>${dato[1]}</span>
    </div>
      <progress max="10" value="${dato[1]}" class="no-print">
    `
    nuevoTecnologias.innerHTML += `
    <span class="only-print">${dato[0]}</span>
    `
  })
  aside.insertBefore(nuevoTecnologias,descargarPDFBoton);
}

const makeRedes = () => {
  const nuevoRedes = document.createElement("div");
  nuevoRedes.id = "redes";
  informacionPersonal.redes.forEach(dato => {
    if(dato[1]!== ""){
      nuevoRedes.innerHTML += `
      <a href=${dato[1]} target="_blank" class="no-print">
        <img src=${getIconoRed(dato[0])}>
      </a>
      `
      nuevoRedes.innerHTML += `
      <p target="_blank" class="only-print">
        ${dato[0]}: ${dato[1]}
      </p>
      `
    }
    })
  aside.insertBefore(nuevoRedes,descargarPDFBoton);
}

const getIconoRed = (red)=>{
  const urlBase = "img/iconos/";
  switch(red){
    case "Instagram":
      return urlBase+"instagram.svg";
    case "Linkedin":
      return urlBase+"linkedin.svg";
    case "Facebook":
      return urlBase+"square-facebook.svg";
    case "Twitter":
      return urlBase+"twitter.svg";
    case "Youtube":
      return urlBase+"youtube.svg";
    case "Github":
      return urlBase+"github.svg";
    default:
      return urlBase+"globe-solid.svg";
  }
}

async function descargarPDF(element){
  descargarPDFBoton.style.display = "none";
  console.log("A ver que recibí",element)
  const params = {
    margin: 0,
    filename: "Calo PuntoJson.pdf",
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: 'px',
      format: [document.body.getBoundingClientRect().height/2 , document.body.getBoundingClientRect().width],
      orientation: 'portrait',
      floatPrecision: 512,
    },
    pagebreak: { mode: 'css' },
  };
  await html2pdf().set(params).from(element).save();//Lo guardo como PDF
  descargarPDFBoton.style.display = "inline";
}

//Ejecución
makePresentacion();
makeIdiomas();
makeTecnologias();
makeRedes();
proyectos.forEach((proyecto) => {
  const nuevoProyecto = document.createElement("div");
  nuevoProyecto.classList = "proyecto tarjeta";
  nuevoProyecto.innerHTML = getProyecto(proyecto);
  proyectosContainer.appendChild(nuevoProyecto);
});