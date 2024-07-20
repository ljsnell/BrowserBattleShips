
// Filename - App.js
import './App.css';
import BattleShip from './BattleShip';
import React, { useState } from 'react';
import {
    Button
} from 'react-native';
import { pickAction } from './ShipAI';

const emptyOcean = [{ range: "Extreme", occupant: "" },
{ range: "Long", occupant: "" },
{ range: "Medium-Long", occupant: "" },
{ range: "Medium", occupant: "" },
{ range: "Short", occupant: "" }]

function App() {
    const [shipIndex, setShipIndex] = useState(2)
    const [shipData, setShipData] = useState(<BattleShip name="Ol' Wheez" country="🏴" previousAction="" />)
    const [oceanData, setOceanData] = useState(emptyOcean)
    return (
        <div className="App">
            <table>
                <tr>
                    <th>Range</th>
                    <th>Enemy Ships</th>
                </tr>
                {oceanData.map((val, key) => {
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
                        onPress={() => moveShip(1, shipIndex, shipData, setShipIndex)}
                    />
                    <br></br>
                    <Button
                        title="Offer Broadside"
                        color="blue"
                        onPress={() => moveShip(0)}
                    />
                    <br></br>
                    <Button
                        title="Withdraw"
                        color="blue"
                        onPress={() => moveShip(-1)}
                    />
                </tr>
            </table>
        </div>
    );
}

function moveShip(movementInstruction, shipIndex, shipData, setShipIndex) {
    emptyOcean[shipIndex].occupant = ""
    setShipIndex(shipIndex + movementInstruction)
    emptyOcean[shipIndex + movementInstruction].occupant = shipData
    
}

export default App;