interface Props {
    name: string;
    quantity: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10
        }}>
            <span style={{
                width: 150
            }}>{name}</span>
            <button>-10</button>
            <span>{quantity}</span>
            <button>+10</button>
        </section>

    )
}
