import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './curso.entity';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso)
    private cursosRepository: Repository<Curso>,
  ) {}

  findAll(): Promise<Curso[]> {
    return this.cursosRepository.find();
  }

  async getStatsForAdmin() {
    return this.cursosRepository.find({
      relations: {
        inscripciones: true,
      },
    });
  }
}