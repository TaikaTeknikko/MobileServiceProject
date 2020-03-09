export class Card {
    id: number;
    title: string;
    birthYear: number;
    power: number;
    speed: number;
    wealth: number;
    pictureName: string;


    constructor(
        newId: number, 
        newTitle: string, 
        newBirthYear: number, 
        newPower: number,
        newSpeed: number,
        newWealth: number,
        newPictureName: string
    )
    {
        this.id = newId;
        this.title = newTitle;
        this.birthYear = newBirthYear;
        this.power = newPower;
        this.speed = newSpeed;
        this.wealth = newWealth;
        this.pictureName = newPictureName;
    }
}