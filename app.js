// 🔥 DATOS QUEMADOS (TIENDAS ALIADAS + BARRIOS / CONJUNTOS + TARIFAS)
//
//  - Cada clave principal es una TIENDA ALIADA.
//  - Dentro de cada tienda, las claves son barrios / conjuntos (en minúscula)
//    y el valor es la tarifa del domicilio en pesos colombianos.
//
//
//  Nota: puedes escribir acentos o mayúsculas en los comentarios,
//  pero en las claves del objeto usa siempre minúscula y sin tildes
//  para que el buscador funcione bien.

// 📱 NÚMEROS DE WHATSAPP POR TIENDA
// Aquí configuras el número de teléfono al que le llegarán los pedidos de cada tienda.
// Si una tienda DEBE IR A WHATSAPP, pon su número (ej: "573001234567").
// Si una tienda SOLO DEBE MOSTRAR EL PRECIO (sin ir a WhatsApp), déjala vacía ("").
const numerosWhatsApp = {
    "Arroz Paisa": "",
    "Bali": "573028031697",
    "Belleza Andrea": "573028031697", 
    "Belleza y algo mas": "573028031697",
    "Bogotana de Pizza": "",
    "Con amor": "573028031697",
    "Cosechas": "",
    "Crispeland": "",
    "Detalles Magicos": "573028031697",
    "Dprisa Granada": "",
    "Dprisa Clarita": "",
    "Elizs Burger": "573028031697",
    "Epa Q Arepa": "",
    "Floristeria la Sabana": "",
    "Floristeria Yeral Raigoza": "",
    "Full Carbon": "",
    "Koryo Streed Food": "",
    "La Donita": "573028031697",
    "La mejor Fast Food": "573028031697",
    "La Perfumeria": "573028031697",
    "La Vaca Peca": "",
    "Le Dulche": "573028031697",
    "Luxury Store": "",
    "Magic Hair": "573028031697",
    "Magangue": "",
    "Master Wok": "",
    "Mary Sex": "",
    "Megadulzon": "",
    "Meraki": "",
    "Molino Rojo": "",
    "Mr ramen": "",
    "Nerihe": "",
    "Nifu Nifa": "",
    "Parrilla del Llano": "",
    "Pizzas del Granada": "",
    "Primitivo": "573028031697",
    "Que Kuka": "",
    "Sabor de Casa": "",
    "Skyled": "",
    "Smasher": "",
    "Super Perros": "",
    "Ta cabron - Av Centenario": "",
    "Ta cabron - Nueva Cecilia": "",
    "Tati Samudio": "",
    "Yeye Gran Colombia": "",
    "Cocheros": ""
};

const numeroPorDefecto = ""; // Si una nueva tienda no se encuentra arriba, no irá a WhatsApp por defecto



const tarifas = {

    "Arroz Paisa": {
        "centro": 5000,
        "granada": 5000,
        "sur (despues de los puentes de la cejita hasta el romboy de naranjos)": 6000,
        "puerto espejo": 7000,
        "norte (depues del romboy del coliseo hasta san juan de dios) ": 6000

    },
    "Bali": {
        "centro": 5000,
        "granada": 5000,
        "sur (despues de los puentes de la cejita hasta el romboy de naranjos)": 6000,
        "puerto espejo": 7000,
        "norte (depues del romboy del coliseo hasta san juan de dios) ": 6000
    },
    "Belleza Andrea": {
        "centro": 5000,
        "granada": 5000,
        "sur (despues de los puentes de la cejita hasta el romboy de naranjos)": 6000,
        "puerto espejo": 7000,
        "norte (depues del romboy del coliseo hasta san juan de dios) ": 6000
    },
    "Belleza y algo mas": {
        "centro": 5000,
        "granada": 5000,
        "sur (despues de los puentes de la cejita hasta el romboy de naranjos)": 6000,
        "puerto espejo": 7000,
        "norte (depues del romboy del coliseo hasta san juan de dios) ": 6000
    },
    "Bogotana de Pizza": {
        "centro": 5000,
        "granada": 5000,
        "sur (despues de los puentes de la cejita hasta el romboy de naranjos)": 6000,
        "puerto espejo": 7000,
        "norte (depues del romboy del coliseo hasta san juan de dios) ": 6000
    },


    "Con amor": {
        "centro": 5000,
        "granada": 5000,
        "sur (despues de los puentes de la cejita hasta el romboy de naranjos)": 6000,
        "puerto espejo": 7000,
        "norte (depues del romboy del coliseo hasta san juan de dios) ": 6000
    },
    "Cosechas": {
        "centro": 5000,
        "granada": 5000,
        "sur (despues de los puentes de la cejita hasta el romboy de naranjos)": 6000,
        "puerto espejo": 7000,
        "norte (depues del romboy del coliseo hasta san juan de dios) ": 6000
    },
    "Crispeland": {
        "centro": 5000,
        "granada": 5000,
        "sur (despues de los puentes de la cejita hasta el romboy de naranjos)": 6000,
        "puerto espejo": 7000,
        "norte (depues del romboy del coliseo hasta san juan de dios) ": 6000
    },
    "Detalles Magicos": {
        "centro": 5000,
        "granada": 5000,
        "sur (despues de los puentes de la cejita hasta el romboy de naranjos)": 6000,
        "puerto espejo": 7000,
        "norte (depues del romboy del coliseo hasta san juan de dios) ": 6000
    },
    "Dprisa Granada": {
        "centro": 5000,
        "granada": 5000,
        "sur (despues de los puentes de la cejita hasta el romboy de naranjos)": 6000,
        "puerto espejo": 7000,
        "norte (depues del romboy del coliseo hasta san juan de dios) ": 6000
    },


    "Dprisa Clarita": {
        "centro": 5000,
        "granada": 5000,
        "sur (despues de los puentes de la cejita hasta el romboy de naranjos)": 6000,
        "puerto espejo": 7000,
        "norte (depues del romboy del coliseo hasta san juan de dios) ": 6000
    },
    "Elizs Burger": {
        "centro": 5000,
        "granada": 5000,
        "sur (despues de los puentes de la cejita hasta el romboy de naranjos)": 6000,
        "puerto espejo": 7000,
        "norte (depues del romboy del coliseo hasta san juan de dios) ": 6000
    },
    "Epa Q Arepa": {
        "centro": 5000,
        "granada": 5000,
        "sur (despues de los puentes de la cejita hasta el romboy de naranjos)": 6000,
        "puerto espejo": 7000,
        "norte (depues del romboy del coliseo hasta san juan de dios) ": 6000
    },
    "Floristeria la Sabana": {
        "uribe": 5800,
        "miraflores": 5900
    },
    "Floristeria Yeral Raigoza": {
        "ciudadela del sur": 6500,
        "los barrios": 6400
    },


    "Full Carbon": {
        "mercar occidente": 5200,
        "las colinas": 5300
    },
    "Koryo Streed Food": {
        "la clarita": 5400,
        "villa del campo": 5500
    },
    "La Donita": {
        "ciudad dorada": 5600,
        "simon bolivar": 5500
    },
    "La mejor Fast Food": {
        "corbones": 5800,
        "quimbaya bajo": 5900
    },
    "La Perfumeria": {
        "puerto espejo": 6500,
        "parque industrial": 6600
    },


    "La Vaca Peca": {
        "las veraneras": 5200,
        "urbanizacion las mercedes": 5300
    },
    "Le Dulche": {
        "los kioscos": 5000,
        "urbanizacion los guaduales": 5100
    },
    "Luxury Store": {
        "la fachada": 5200,
        "urbanizacion san diego": 5300
    },
    "Magic Hair": {
        "la florida": 5400,
        "urbanizacion el prado": 5500
    },
    "Magangue": {
        "bosques de pinares": 5600,
        "portales del quindio": 5700
    },


    "Master Wok": {
        "conjunto acacias": 5200,
        "acacias campestre": 5300
    },
    "Mary Sex": {
        "conjunto lisboa": 5400,
        "lisboa": 5400
    },
    "Megadulzon": {
        "conjunto san jorge": 5500,
        "san jorge bajo": 5600
    },
    "Meraki": {
        "conjunto ciudadela": 5700,
        "ciudadela quindio": 5700
    },
    "Molino Rojo": {
        "robledales": 5800,
        "conjunto robledales": 5800
    },

    "Mr ramen": {
        "la aurora": 5100
    },
    "Nerihe": {
        "la milagrosa": 5200
    },
    "Nifu Nifa": {
        "la adiela": 5300
    },
    "Parrilla del Llano": {
        "el paraiso": 5400
    },
    "Pizzas del Granada": {
        "guaduales del cafe": 5600
    },
    "Primitivo": {
        "portal del quindio": 5800
    },
    "Que Kuka": {
        "altos de la riviera": 5900
    },
    "Sabor de Casa": {
        "villa claudia": 5500
    },
    "Skyled": {
        "urbanizacion la mina": 5600
    },
    "Smasher": {
        "nueva cecilia": 5700
    },
    "Super Perros": {
        "portal del eden": 6000
    },
    "Ta cabron - Av Centenario": {
        "el nogal": 6100
    },
    "Ta cabron - Nueva Cecilia": {
        "san jose de la salle": 5800
    },
    "Tati Samudio": {
        "villa del rio": 5900
    },
    "Yeye Gran Colombia": {
        "arrayanes de la villa": 6000
    },
    "Cocheros": {
        "camino del quindio": 6200
    },

    // =======================================================================
    //  🚧  SECCIÓN ESPECIAL PARA QUE TÚ AGREGUES MÁS BARRIOS Y CONJUNTOS  🚧
    // =======================================================================
    //
    //  Esta parte está hecha PARA TI. Son más de 120 líneas de comentarios
    //  con ejemplos vacíos donde puedes pegar y organizar tus propios
    //  barrios y conjuntos especiales que no aparecen en internet.
    //
    //  RECOMENDACIÓN:
    //  - Copia uno de los bloques de ejemplo.
    //  - Cambia el nombre de la tienda aliada.
    //  - Cambia los nombres de barrios / conjuntos y las tarifas.
    //  - Respeta comas, llaves y comillas para no dañar el código.
    //
    //  EJEMPLO RÁPIDO:
    //  "Tienda 47 - Tu Aliado Especial": {
    //      "barrio privado x": 7000,
    //      "conjunto campestre y": 7500
    //  },
    //
    //  A partir de aquí puedes ir pegando y modificando:
    //

    // ---- Bloque libre 01 ----
    // "Tienda XX - Nombre Aliado 01": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 02 ----
    // "Tienda XX - Nombre Aliado 02": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 03 ----
    // "Tienda XX - Nombre Aliado 03": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 04 ----
    // "Tienda XX - Nombre Aliado 04": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 05 ----
    // "Tienda XX - Nombre Aliado 05": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 06 ----
    // "Tienda XX - Nombre Aliado 06": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 07 ----
    // "Tienda XX - Nombre Aliado 07": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 08 ----
    // "Tienda XX - Nombre Aliado 08": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 09 ----
    // "Tienda XX - Nombre Aliado 09": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 10 ----
    // "Tienda XX - Nombre Aliado 10": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 11 ----
    // "Tienda XX - Nombre Aliado 11": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 12 ----
    // "Tienda XX - Nombre Aliado 12": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 13 ----
    // "Tienda XX - Nombre Aliado 13": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 14 ----
    // "Tienda XX - Nombre Aliado 14": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 15 ----
    // "Tienda XX - Nombre Aliado 15": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 16 ----
    // "Tienda XX - Nombre Aliado 16": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 17 ----
    // "Tienda XX - Nombre Aliado 17": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 18 ----
    // "Tienda XX - Nombre Aliado 18": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 19 ----
    // "Tienda XX - Nombre Aliado 19": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 20 ----
    // "Tienda XX - Nombre Aliado 20": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 21 ----
    // "Tienda XX - Nombre Aliado 21": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 22 ----
    // "Tienda XX - Nombre Aliado 22": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 23 ----
    // "Tienda XX - Nombre Aliado 23": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 24 ----
    // "Tienda XX - Nombre Aliado 24": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 25 ----
    // "Tienda XX - Nombre Aliado 25": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 26 ----
    // "Tienda XX - Nombre Aliado 26": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 27 ----
    // "Tienda XX - Nombre Aliado 27": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 28 ----
    // "Tienda XX - Nombre Aliado 28": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 29 ----
    // "Tienda XX - Nombre Aliado 29": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // ---- Bloque libre 30 ----
    // "Tienda XX - Nombre Aliado 30": {
    //     "barrio o conjunto 01": 7000,
    //     "barrio o conjunto 02": 7200
    // },

    // (Si necesitas aún más espacio, puedes seguir copiando
    //  y pegando estos bloques hacia abajo sin problema.)

};

// Barrios y conjuntos generales de Armenia
// (se aplican a TODAS las tiendas si no hay tarifa específica)
const barriosGenerales = {
    "centro": 5000,
    "granada": 5000,
    "la castellana": 5200,
    "laureles": 5200,
    "naciones unidas": 5200,
    "uribe": 5200,
    "miraflores": 5200,
    "fundadores": 5200,
    "las americas": 5200,
    "ciudadela del sur": 5500,
    "berlin": 5200,
    "nacederos": 5200,
    "los naranjos": 5200,
    "villa liliana": 5500,
    "bosques de pinares": 5500,
    "portales del quindio": 5500,
    "la florida": 5500,
    "la fachada": 5500,
    "la patria": 5500,
    "avenida 19": 5200,
    "puerto espejo": 6500,
    "parque industrial": 6500,
    "urbanizacion la mina": 5600,
    "nueva cecilia": 5700,
    "portal del eden": 6000,
    "el nogal": 6100,
    "san jose de la salle": 5800,
    "arrayanes de la villa": 6000,
    "camino del quindio": 6200,
    "universidad del quindio": 5500,
    "ciudadela del cafe": 5500,
    "los profesionales": 5400,
    "la pavona": 5400,
    "barrio las palmas": 5400,
    "villa juliana": 5600,
    "villa del rio": 5800,
    "conjunto acacias": 5400,
    "conjunto lisboa": 5400,
    "robledales": 5600,
    "ciudad dorada": 5600
};

// 🔥 REFERENCIAS DEL DOM

const tiendaInput = document.getElementById("tiendaInput");
const barrioInput = document.getElementById("barrioInput");
const tiendaSuggestions = document.getElementById("tiendaSuggestions");
const barrioSuggestions = document.getElementById("barrioSuggestions");
const consultarBtn = document.getElementById("consultarBtn");
const resultado = document.getElementById("resultado");
const whatsappBtn = document.getElementById("whatsappBtn");

const direccionInput = document.getElementById("direccionInput");
const nombreInput = document.getElementById("nombreInput");
const telefonoInput = document.getElementById("telefonoInput");

const selectorTiendaContainer = document.getElementById("selectorTiendaContainer");
const tiendaActivaContainer = document.getElementById("tiendaActivaContainer");
const nombreTiendaActiva = document.getElementById("nombreTiendaActiva");

// 🔥 DETECTAR TIENDA DESDE LA URL O LOCALSTORAGE
let tiendaFija = null;

function inicializarTienda() {
    // 1. Buscar en la URL (ej: ?tienda=Arroz Paisa)
    const urlParams = new URLSearchParams(window.location.search);
    const tiendaUrl = urlParams.get('tienda');

    if (tiendaUrl && tarifas[tiendaUrl]) {
        tiendaFija = tiendaUrl;
    } else {
        // Opcional: 2. Buscar en localStorage si se guardó previamente
        // const tiendaGuardada = localStorage.getItem('tiendaAsignada');
        // if (tiendaGuardada && tarifas[tiendaGuardada]) tiendaFija = tiendaGuardada;
    }

    if (tiendaFija) {
        // Ocultar el selector y mostrar el nombre fijo
        selectorTiendaContainer.style.display = "none";
        tiendaActivaContainer.style.display = "block";
        nombreTiendaActiva.textContent = tiendaFija;

        // Bloquear el input oculto para que la lógica siga funcionando
        tiendaInput.value = tiendaFija;
        tiendaInput.disabled = true;

        // Opcional: Guardar en localStorage para que no se pierda si refresca sin URL
        // localStorage.setItem('tiendaAsignada', tiendaFija);
    }
}

// Ejecutar al cargar la página
inicializarTienda();

// 🔥 AUTOCOMPLETADO DE TIENDAS

tiendaInput.addEventListener("input", () => {

    const valor = tiendaInput.value.toLowerCase();
    tiendaSuggestions.innerHTML = "";

    if (valor === "") return;

    Object.keys(tarifas).forEach(tienda => {
        if (tienda.toLowerCase().includes(valor)) {

            const div = document.createElement("div");
            div.textContent = tienda;

            div.addEventListener("click", () => {
                tiendaInput.value = tienda;
                tiendaSuggestions.innerHTML = "";
                barrioInput.value = "";
                barrioSuggestions.innerHTML = "";
            });

            tiendaSuggestions.appendChild(div);
        }
    });
});



// 🔥 AUTOCOMPLETADO DE BARRIOS SEGÚN TIENDA

barrioInput.addEventListener("input", () => {

    const tienda = tiendaInput.value.trim();
    const valor = barrioInput.value.toLowerCase();
    barrioSuggestions.innerHTML = "";

    if (valor === "") return;

    const barriosTienda = tarifas[tienda] ? Object.keys(tarifas[tienda]) : [];
    const todosBarrios = new Set([...barriosTienda, ...Object.keys(barriosGenerales)]);

    todosBarrios.forEach(barrio => {
        if (barrio.includes(valor)) {

            const div = document.createElement("div");
            div.textContent = barrio.toUpperCase();

            div.addEventListener("click", () => {
                barrioInput.value = barrio;
                barrioSuggestions.innerHTML = "";
            });

            barrioSuggestions.appendChild(div);
        }
    });
});

// 🔥 BOTÓN CONSULTAR
consultarBtn.addEventListener("click", function (e) {

    e.preventDefault();

    const tienda = tiendaInput.value.trim();
    const barrio = barrioInput.value.toLowerCase().trim();
    const direccion = direccionInput.value.trim();
    const nombre = nombreInput.value.trim();
    const telefono = telefonoInput.value.trim();

    if (!direccion || !nombre || !telefono) {
        alert("Completa todos los datos.");
        return;
    }

    if (!tarifas[tienda]) {
        alert("Selecciona una tienda válida.");
        return;
    }

    let precio;

    if (tarifas[tienda][barrio] !== undefined) {
        precio = tarifas[tienda][barrio];
    } else if (barriosGenerales[barrio] !== undefined) {
        precio = barriosGenerales[barrio];
    }

    if (precio === undefined) {
        alert("No hay tarifa configurada.");
        return;
    }

    // 🔥 BUSCAR EL NÚMERO DE WHATSAPP DE LA TIENDA ELEGIDA 🔥
    // Si la tienda está en el objeto, tomamos su valor. Si no, usamos el defecto.
    // Usar hasOwnProperty nos permite saber si la clave existe, incluso si está vacía "".
    let numero = numeroPorDefecto;
    if (numerosWhatsApp.hasOwnProperty(tienda)) {
        numero = numerosWhatsApp[tienda];
    }

    // 🔥 LÓGICA CONDICIONAL: ¿TIENE NÚMERO O ESTÁ VACÍO? 🔥
    if (numero && numero.trim() !== "") {
        // Opción A: Tiene número configurado. Lo enviamos a WhatsApp igual que antes.
        const mensaje = `Hola quiero realizar un pedido 
    
Tienda: ${tienda}
Barrio: ${barrio.toUpperCase()}
Domicilio: $${precio.toLocaleString()}
    
Nombre: ${nombre}
Dirección: ${direccion}
Teléfono: ${telefono}`;

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");

        // Opcional: mostrar también un mensaje visual en la página
        resultado.innerHTML = `<strong>Enviando pedido a WhatsApp...</strong><br>El valor del domicilio es: $${precio.toLocaleString()}`;
        resultado.style.display = "block";
    } else {
        // Opción B: No tiene número (está vacío ""). Solo mostramos la información en pantalla.
        resultado.innerHTML = `
            <div style="text-align: left;">
                <h3 style="margin-top:0; color:var(--primary);">Detalles de la consulta</h3>
                <strong>Tienda:</strong> ${tienda}<br>
                <strong>Destino:</strong> ${barrio.toUpperCase()}<br>
                <div style="font-size: 1.2rem; margin-top: 10px; padding: 10px; background: #e0f7fa; border-radius: 8px; color: #006064; text-align: center;">
                    <strong>Tarifa de Domicilio:</strong> $${precio.toLocaleString()}
                </div>
            </div>
        `;
        resultado.style.display = "block";
    }
});