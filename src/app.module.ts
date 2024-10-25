import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.usuario',
      entities: [__dirname + '/**/**/*.entity.{js,ts}'],
      synchronize: true,
      logging: true
    }),
    UsuarioModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
