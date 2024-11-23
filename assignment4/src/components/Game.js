import animals from "./data/AnimalDb";
import "./assets/game.css";
import { useState } from "react";

export default function Game(){
    const [targetAnimal, setTargetAnimal] = useState(getRandomAnimal());
    const [result, setResult] = useState(null);
}


