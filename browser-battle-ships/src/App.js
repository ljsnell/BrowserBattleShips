
// Filename - App.js
import './App.css';
import BattleShip from './BattleShip';
import React from 'react';
import {
    Button
} from 'react-native';

const data = [
    { range: "Extreme", occupant: "" },
    { range: "Long", occupant: "" },
    { range: "Medium-Long", occupant: <BattleShip name="Ol' Wheez" country="🏴" previousAction="" /> },
    { range: "Medium", occupant: "" },
    { range: "Short", occupant: "" },
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
                <tr>
                    <Button
                        title="Close Range"
                        color="blue"                        
                    />
                    <br></br>
                    <Button
                        title="Offer Broadside"
                        color="blue"
                    />
                    <br></br>
                    <Button                        
                        title="Withdraw"                    
                        color="blue"
                    />
                </tr>
            </table>
        </div>

    );
}

export default App;