// Clases en JS (Disponibles desde ECMAScript 6)

// Las clases en POO sirven para dos cosas
//  - Estructurar datos en objetos (molde)
//  - Mecanismo para a través de sus métodos
//    definir bloques de código a ejecutar
//    en diferentes partes del programa

class Vehicle { // Importante usar DoubleCamelCase en el nombre de la clase

    brand;
    model;
    color;
    price;

    constructor(brandIn, modelIn, colorIn, priceIn) {
        this.brand = brandIn;
        this.color = colorIn;
        this.model = modelIn;
        this.price = priceIn;
    }

    getColor() {
        return this.color;
    }

    setColor(colorIn) {
        this.color = colorIn;
    }

    // Resto de getters y setters de las otras propiedades

    getPriceWithTaxes(tax) {
        return this.price + this.price * tax;
    }

}

// Instancia de objetos (generación de objetos a partir de una clase)

let vehicle1 = new Vehicle('Renault','Megane','Gris', 20000); // Invocar al constructor

console.log(vehicle1);

vehicle1.setColor('Rojo');
console.log(vehicle1);

let vehicle1PriceWithTax = vehicle1.getPriceWithTaxes(0.21);
console.log(vehicle1PriceWithTax);