export class Card {
    id: number;
    title: string;
    birthYear: number;
    power: number;

    constructor(
        newId: number, 
        newTitle: string, 
        newBirthYear: number, 
        newPower: number
    )
    {
        this.id = newId;
        this.title = newTitle;
        this.birthYear = newBirthYear;
        this.power = newPower;
    }
}