import { Logger } from "@nestjs/common";

export class Wire {
    private readonly id: number;
    private wire1: string;
    private wire2: string;
    private distance?: number;
    private logger: Logger = new Logger('Wire Model');

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
        let wire1Path = this.getPath(this.wire1);
        let wire2Path = this.getPath(this.wire2);

        function intersect(a: Array<any>, b: Array<any>) {
            var t;
            if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
            return a.filter(function (e) {
                return b.indexOf(e) > -1;
            });
        }
        
        let intersection = intersect(
            Array.from(wire1Path.keys()),
            Array.from(wire2Path.keys())
        );

        for(let i=0; i<intersection.length; i++){
            let coords = intersection[i].split(',');

            intersection[i] = Math.abs(Number(coords[0])) + Math.abs(Number(coords[1]));
        }

        return Math.min(...intersection);
    }


    private getPath(points: string): Map<string, number> {
        let x = 0;
        let y = 0;
        let length = 0;
        let ans = new Map<string, number>();

        let mapX = {'L': -1, 'R': 1, 'U': 0, 'D': 0}
        let mapY = {'L': 0, 'R': 0, 'U': 1, 'D': -1}

        let move = function(direction: string): string {
            x += mapX[direction];
            y += mapY[direction];
            
            return x.toString() +  ',' + y.toString();
        }

        points.split(',').forEach(instruction => {
            let direction = instruction.slice(0, 1);
            let distance = Number(instruction.slice(1));

            for(let i=0; i<distance; i++){
                let coord = move(direction);
                length += 1;

                if(!ans[coord]){
                    ans.set(coord, length);
                }
            }
        });

        return ans;
    }

}
