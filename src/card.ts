export class Card {
    id: number;
    title: string;
    birthYear: number;
    power: number;
    speed: number;
    wealth: number;


    constructor(
        newId: number, 
        newTitle: string, 
        newBirthYear: number, 
        newPower: number,
        newSpeed: number,
        newWealth: number
    )
    {
        this.id = newId;
        this.title = newTitle;
        this.birthYear = newBirthYear;
        this.power = newPower;
        this.speed = newSpeed;
        this.wealth = newWealth;
    }
}