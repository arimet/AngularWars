export class Character {
    name: string;
    url: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;

    constructor() { }

    extractUrlId(): string {
        if (this.url != null) {
            const tab = this.url.split("/");
            return tab[tab.length - 2];
        }
        else {
            return undefined;
        }
    }
}