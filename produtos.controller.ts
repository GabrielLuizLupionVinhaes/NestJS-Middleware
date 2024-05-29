import { Controller, ValidationPipe, Get, Post, Body, HttpException, HttpStatus, ForbiddenException } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';



@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  async create(
  @Body(new ValidationPipe()) createCatDto: CreateProdutoDto,
) {
  this.produtosService.create(createCatDto);
}

  @Get()
  async findAll() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    throw new ForbiddenException();

  }


}
