import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Server is running on http://54.234.36.219/:3000');
  await app.listen(3000);
}
bootstrap();
