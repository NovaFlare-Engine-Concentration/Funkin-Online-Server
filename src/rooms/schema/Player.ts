import { Schema, Context, type } from "@colyseus/schema";

export class Player extends Schema {
    @type("number") score:number = 0;
    @type("number") misses: number = 0;
    @type("number") sicks: number = 0;
    @type("number") goods: number = 0;
    @type("number") bads: number = 0;
    @type("number") shits: number = 0;
    @type("string") name: string = "";
    @type("boolean") hasSong: boolean = false;
    @type("boolean") hasLoaded: boolean = false;
    @type("boolean") hasEnded: boolean = false;
}
