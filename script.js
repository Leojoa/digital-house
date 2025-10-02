var miCatalogo = []
miCatalogo[0] = {
  nombre: "Sudadera Negra",
  imagen: "https://rematexperu.com/cdn/shop/products/16_1_533x.png?v=1652481146",
  descripcion: "Clásica y versátil, perfecta para un look casual y relajado en cualquier momento del año."
};

miCatalogo[1] = {
  nombre: "Camiseta Blanca",
  imagen: "https://texsamex.pe/wp-content/uploads/2021/11/11-2.png",
  descripcion: "Una prenda básica imprescindible, ideal para combinar con cualquier outfit."
};

miCatalogo[2] = {
  nombre: "Chaqueta Denim",
  imagen: "https://media.falabella.com.pe/falabellaPE/143570241_01/width=480,height=480,quality=70,format=webp,fit=pad",
  descripcion: "Una chaqueta de mezclilla con estilo atemporal que aporta un toque moderno a tu look."
};

miCatalogo[3] = {
  nombre: "Zapatillas Deportivas",
  imagen: "https://media.falabella.com.pe/falabellaPE/20768095_1/width=480,height=480,quality=70,format=webp,fit=pad",
  descripcion: "Cómodas y modernas, diseñadas para acompañarte todo el día con estilo deportivo."
};

miCatalogo[4] = {
  nombre: "Jeans Ajustados",
  imagen: "https://media.falabella.com.pe/falabellaPE/130663872_01/width=480,height=480,quality=70,format=webp,fit=pad",
  descripcion: "Entallados y versátiles, realzan tu figura y combinan con cualquier prenda."
};

miCatalogo[5] = {
  nombre: "Gorra Estilo Urbano",
  imagen: "https://media.falabella.com/falabellaPE/132888678_01/w=1500,h=1500,fit=pad",
  descripcion: "Con un diseño moderno, esta gorra añade actitud y frescura a tu estilo diario."
};

miCatalogo[6] = {
  nombre: "Mochila Casual",
  imagen: "https://media.falabella.com.pe/falabellaPE/140973441_01/width=480,height=480,quality=70,format=webp,fit=pad",
  descripcion: "Ideal para el día a día, esta mochila combina funcionalidad con un diseño contemporáneo."
};

miCatalogo[7] = {
  nombre: "Gafas de Sol",
  imagen: "https://media.falabella.com.pe/falabellaPE/138950803_01/width=480,height=480,quality=70,format=webp,fit=pad",
  descripcion: "Elegantes y funcionales, protegen tu vista mientras complementan tu look con estilo."
};

miCatalogo[8] = {
  nombre: "Reloj Deportivo",
  imagen: "https://media.falabella.com.pe/falabellaPE/131956132_01/width=480,height=480,quality=70,format=webp,fit=pad",
  descripcion: "Diseñado para un estilo de vida activo, con un look moderno y resistente."
};

miCatalogo[9] = {
  nombre: "Botas de Cuero",
  imagen: "https://media.falabella.com.pe/falabellaPE/20882394_1/width=480,height=480,quality=70,format=webp,fit=pad",
  descripcion: "Robustas y con estilo, estas botas elevan cualquier conjunto con un toque elegante."
};

miCatalogo[10] = {
  nombre: "Accesorios de Moda",
  imagen: "https://media.falabella.com.pe/falabellaPE/20915755_1/width=480,height=480,quality=70,format=webp,fit=pad",
  descripcion: "Detalles modernos que añaden personalidad y carácter a tu vestimenta diaria."
};

miCatalogo[11] = {
  nombre: "Guantes de Cuero",
  imagen: "https://media.falabella.com.pe/falabellaPE/135908509_01/width=480,height=480,quality=70,format=webp,fit=pad",
  descripcion: "Con estilo clásico y materiales premium, son perfectos para el frío con elegancia."
};

miCatalogo[12] = {
  nombre: "Gorra de Beisbol",
  imagen: "https://media.falabella.com.pe/falabellaPE/19889022_1/width=480,height=480,quality=70,format=webp,fit=pad",
  descripcion: "Un accesorio clásico que aporta un aire deportivo y relajado a tu look."
};

miCatalogo[13] = {
  nombre: "Bolso de Mano",
  imagen: "https://media.falabella.com.pe/falabellaPE/129566821_01/width=480,height=480,quality=70,format=webp,fit=pad",
  descripcion: "Pequeño pero elegante, ideal para llevar lo esencial con estilo y sofisticación."
};

miCatalogo[14] = {
  nombre: "Botines de Moda",
  imagen: "https://media.falabella.com.pe/tottusPE/43494760_1/width=480,height=480,quality=70,format=webp,fit=pad",
  descripcion: "Diseño moderno y versátil, perfectos para destacar en cualquier ocasión con estilo."
};

function buscarElemento(){
      var palabraBuscada = document.getElementById("inputBuscador").value
      var objetoEncontrado = miCatalogo.find(objeto => objeto.nombre == palabraBuscada)
      document.getElementById("encabezado").textContent = objetoEncontrado.nombre;
      document.getElementById("parrafoDescripcion").textContent = objetoEncontrado.descripcion;
      document.getElementById("imagen").src = objetoEncontrado.imagen
}
