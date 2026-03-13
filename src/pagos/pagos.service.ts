import { Injectable } from '@nestjs/common';
import { Pago } from './Models/pago';
import { CreatePagoDto } from './Dto/create-pago-dto';

@Injectable()
export class PagosService {

    private pagos: Pago[] = [];
    private contId: number = 1;

    //Método para crearPago
    createPago(nuevoPago: CreatePagoDto): Pago {
        const pago : Pago = {
            id: this.contId,
            metodo: nuevoPago.metodo,
            fecha: nuevoPago.fecha,
            monto: nuevoPago.monto
        }

        this.pagos.push(pago);
        this.contId = this.contId+1;

        return pago;
    }

    getAllPagos(): Pago[]{
        return this.pagos;
    }

    getPagoById(id: number): Pago {
        return this.pagos.find((pago) => pago.id == id)!;
    }

    updatePago(id: number, pagoActualizado: CreatePagoDto): Pago {
        const pago: Pago = this.getPagoById(id);
        if (pago){
            pago.metodo = pagoActualizado.metodo,
            pago.fecha = pagoActualizado.fecha,
            pago.monto = pagoActualizado.monto
        }

        return pago;
    }

    borrarPago(id:number): void {
        this.pagos = this.pagos.filter((pago) => pago.id != id);
    }
}
