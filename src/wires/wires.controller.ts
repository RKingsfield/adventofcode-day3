import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { WiresService } from './wires.service';
import { CreateWireDTO } from './dto/create-wire.dto';

@Controller('wires')
export class WiresController {
    constructor(private wiresService: WiresService) { }

    @Get()
    async getWires() {
        const wires = await this.wiresService.getWires();
        return wires;
    }

    @Get(':wireID')
    async getWire(@Param('wireID') wireID) {
        const wire = await this.wiresService.getWire(wireID);
        return wire;
    }

    @Post()
    async addWire(@Body() createWireDTO: CreateWireDTO) {
        const wire = await this.wiresService.addWire(createWireDTO);
        return wire;
    }

    @Delete()
    async deleteWire(@Query() query) {
        const wires = await this.wiresService.deleteWire(query.wireID);
        return wires;
    }
}
