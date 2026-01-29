import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursosModule } from './cursos/cursos.module';
import { Curso } from './cursos/curso.entity';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { Inscripcione } from './inscripciones/entities/inscripcione.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db', 
      port: 3306, 
      username: 'root',
      password: 'root',
      database: 'iga_db',
      entities: [Curso, Inscripcione], 
      synchronize: false, 
      charset: 'utf8mb4_unicode_ci',
      extra: {
    charset: 'utf8mb4_unicode_ci',
  },
      retryAttempts: 10,
      retryDelay: 5000,
      timezone: 'Z',
    }),
    CursosModule,
    InscripcionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}