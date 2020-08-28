import { Injectable, HttpException } from '@nestjs/common';
import { Wire } from './wire';

@Injectable()
export class WiresService {
    private wires: Wire[] = [];

    getWires(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.wires);
        });
    }

    getWire(wireID): Promise<any> {
        let id = Number(wireID);
        return new Promise(resolve => {
            const wire = this.wires.find(wire => wire.getID() === id);
            if (!wire) {
                throw new HttpException('Wire pair does not exist!', 404);
            }
            resolve(wire);
        });
    }

    addWire(input): Promise<any> {
        let wire = new Wire(
            input.wire1,
            input.wire2
        )
        return new Promise(resolve => {
            this.wires.push(wire);
            wire.getMinDistance();
            wire.getMinSteps();
            resolve(this.wires);
        });
    }

    deleteWire(wireID): Promise<any> {
        let id = Number(wireID);
        return new Promise(resolve => {
            let index = this.wires.findIndex(wire => wire.getID() === id);
            if (index === -1) {
                throw new HttpException('Wire pair does not exist!', 404);
            }
            this.wires.splice(1, index);
            resolve(this.wires);
        });
    }
}