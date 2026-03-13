import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PagosModule } from './pagos/pagos.module';

@Module({
  imports: [PagosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
