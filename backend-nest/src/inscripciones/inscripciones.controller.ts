import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { InscripcionesService } from './inscripciones.service';
import { CreateInscripcioneDto } from './dto/create-inscripcione.dto';

@Controller('inscripciones')
export class InscripcionesController {
  constructor(private readonly inscripcionesService: InscripcionesService) {}

  @Post()
  create(@Body() createInscripcioneDto: CreateInscripcioneDto) {
    return this.inscripcionesService.create(createInscripcioneDto);
  }

  @Get()
  findByEmail(@Query('email') email: string) {
    return this.inscripcionesService.findAllByEmail(email);
  }
}