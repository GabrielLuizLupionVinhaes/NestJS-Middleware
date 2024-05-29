import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Produtos } from './schema/produtos.schema';
import { CreateProdutosDto } from './dto/create-produto.dto';

@Injectable()
export class ProdutosService {
  constructor(@InjectModel(Produtos.name) private produtosModel: Model<Produtos>) {}

  async create(createCatDto: CreateProdutosDto): Promise<Produtos> {
    const createdCat = new this.produtosModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Produtos[]> {
    return this.produtosModel.find().exec();
  }
}

