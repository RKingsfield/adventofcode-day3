export class Wire {
    private readonly id: number;
    private wire1: string;
    private wire2: string;
    private distance?: number

    constructor(wire1: string, wire2: string){
        this.wire1 = wire1;
        this.wire2 = wire2;
    }

    public getID(): number {
        return this.id;
    }

    public getWire1(): string {
        return this.wire1;
    }

    public getWire2(): string {
        return this.wire2;
    }

    public getDistance(): number {
        if(!this.distance){
            this.distance = this.calcuateSmallestDistance();
        }
        return this.distance;
    }

    /**
     * This calculates the manhattan distance from the entry point to the closest intersection between two wires.
     */
    private calcuateSmallestDistance(): number {
        return 0;
    }


    
}
