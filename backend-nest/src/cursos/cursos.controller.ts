import { Controller, Get } from '@nestjs/common';
import { CursosService } from './cursos.service';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Get()
  findAll() {
    return this.cursosService.findAll();
  }

  @Get('admin/stats')
  getAdminStats() {
    return this.cursosService.getStatsForAdmin();
  }
}