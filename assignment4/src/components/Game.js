import animals from "./data/AnimalDb";
import "./assets/game.css";
import { useState } from "react";

export default function Game(){
    const [targetAnimal, setTargetAnimal] = useState(getRandomAnimal());
    const [result, setResult] = useState(null);

    function getRandomAnimal(){
        const randomIndex = Math.floor(Math.random()*animals.length);
        return animals[randomIndex];
    }

    const handleAnimalClick = (id) =>{
        if(id === targerAnimal.id){
            setResult("Win");
        } else {
            setResult("Lose");
        }
    };
}


