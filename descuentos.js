function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; 

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value; 

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento son: $" + precioConDescuento;

}


//Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del  descuento, pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.