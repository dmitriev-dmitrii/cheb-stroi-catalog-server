import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/catalog/');
  await app.listen(3000);

  console.log('app listen: http://localhost:3000/api/catalog/');
}
bootstrap();
