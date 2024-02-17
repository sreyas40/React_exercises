export default function CasinoSlots({ s1, s2, s3 }) {
    const isSame = s1 === s2 && s1 === s3;
    return (
        <div>
            <h1>{s1} {s2} {s3}</h1>
            <h2 style={{ color: isSame ? "green" : "red" }}>{isSame ? "You win!" : "You lose"}</h2>
            {isSame && <h3>congrats</h3> }

        </div>
    )
}