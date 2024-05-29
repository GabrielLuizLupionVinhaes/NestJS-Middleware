import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './produtos/common/middleware/logger.middleware';
import { ProdutosModule } from './produtos/produtos.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/produtos', {
    connectionName: 'produtos',
  }),
  MongooseModule.forRoot('mongodb://localhost/users', {
    connectionName: 'users',
  })],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('produtos');
  }
}
