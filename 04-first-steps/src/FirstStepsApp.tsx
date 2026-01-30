import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemCart {
    productName: string;
    quantity: number;
}

const ItemInCart: ItemCart[] = [
    { productName: 'Nintendo DS', quantity: 1 },
    { productName: 'Nintendo Switch 2', quantity: 2 },
    { productName: 'Xbox Series S', quantity: 4 },
];

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de Compras</h1>

            {ItemInCart.map(({ productName, quantity }) => (
                <ItemCounter key={productName} name={productName} quantity={quantity} />
            ))}

            {/* <ItemCounter name="Nintendo Switch 2" quantity={0} />
            <ItemCounter name="Xbox Series S" quantity={1} />
            <ItemCounter name="Play Station 5" quantity={2} /> */}
        </>
    );

}