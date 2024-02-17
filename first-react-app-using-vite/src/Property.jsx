export default function Property({ name, rating, price }) {
    return (
        <div>
            <h1>{name}</h1>
            <h3>⭐{rating}</h3>
            <h5>{price}</h5>
        </div>
    )
}