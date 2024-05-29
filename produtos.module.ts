import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { Produtos, ProdutosSchema } from './schema/produtos.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Produtos.name, schema: ProdutosSchema }])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
