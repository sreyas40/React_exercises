import Property from "./Property"
export default function PropertyListing({ properties }) {
    return (
        <div>
            {properties.map(p => {
               return <Property key={p.id} {...p} />
            })}
        </div>
    )
}