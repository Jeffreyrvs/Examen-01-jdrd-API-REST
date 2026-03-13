import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { Pago } from './Models/pago';
import { CreatePagoDto } from './Dto/create-pago-dto';

@Controller('pagos')
export class PagosController {

    constructor(private pagoService: PagosService){
        
    }

    //Métodos GET
    @Get()
    GetAll(): Pago[] {
        return this.pagoService.getAllPagos();
    }

    @Get(':id')
    GetById(@Param('id') id:number): Pago {
        return this.pagoService.getPagoById(id);
    }

    //Método POST
    @Post()
    create(@Body() nuevoPago: CreatePagoDto): Pago {
        return this.pagoService.createPago(nuevoPago);
    }

    //Método PUT
    @Put(':id')
    update(@Param('id') id: number, @Body() pagoActualizado: CreatePagoDto): Pago {
        return this.pagoService.updatePago(id, pagoActualizado);
    }

    //Método DELETE
    @Delete(':id')
    borrar(@Param('id') id: number): void {
        this.pagoService.borrarPago(id);
    }
}
