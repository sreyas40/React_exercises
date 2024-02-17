import "./ColorBox.css"
import IColor from "./IColor"

export default function ColorBox({colors}) {
    return (
        <div className="ColorBox">
            <IColor colors={colors} />
            <IColor colors={colors} />
            <IColor colors={colors} />
            <IColor colors={colors} />
            <IColor colors={colors} />
            <IColor colors={colors} />
            <IColor colors={colors} />
            <IColor colors={colors} />
            <IColor colors={colors} />
        </div>
    )
}