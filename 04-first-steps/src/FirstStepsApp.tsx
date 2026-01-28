import { ItemCounter } from "./shopping-cart/ItemCounter";


export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de Compras</h1>
            <ItemCounter name="Nintendo Switch 2" quantity={0} />
            <ItemCounter name="Xbox Series S" quantity={1} />
            <ItemCounter name="Play Station 5" quantity={2} />
        </>
    );

}