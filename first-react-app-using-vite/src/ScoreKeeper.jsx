
import { useState } from "react";
export default function ScoreKeeper({ playerCount, target }) {


    const resetScore = () => {
        SetScores(new Array(playerCount).fill(0))
    }
    const [Scores, SetScores] = useState(new Array(playerCount).fill(0))
    console.log(Scores)
    const updateScore = (idx) => {
        console.log(`id received${ idx }`)
        SetScores((previousScores) => {
           return previousScores.map((score, i) => {
                if (i === idx) {
                    return score + 1;
                } else return score;
            })
        })
    }

    return (

        <ul>
            {Scores.map((Score, idx) => {


                return (
                    
                        <li key={idx + 1}>player {idx + 1}: Score - {Score}
                            <button onClick={()=>updateScore(idx)}>+1</button>
                            {Score === target && <h3>Winner</h3>}
                        </li>)

                   
            })
            }
            <button onClick={resetScore}>Reset</button>

        </ul>
    )

}