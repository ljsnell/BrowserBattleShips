
// Filename - App.js
import './App.css';
import BattleShip from './BattleShip';

const data = [
    { range: "Extreme", occupant: ""},
    { range: "Long", occupant: ""},
    { range: "Medium-Long", occupant: <BattleShip name="Ol' Wheez"/>},
    { range: "Medium", occupant: ""},
    { range: "Short", occupant: ""},
]
 
function App() {
    return (
        <div className="App">
            <table>
                <tr>
                    <th>Range</th>
                    <th>Enemy Ships</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.range}</td>
                            <td>{val.occupant}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default App;