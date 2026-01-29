import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inscripcione } from './entities/inscripcione.entity';
import { CreateInscripcioneDto } from './dto/create-inscripcione.dto';

@Injectable()
export class InscripcionesService {
  constructor(
    @InjectRepository(Inscripcione)
    private inscripcionesRepository: Repository<Inscripcione>,
  ) {}

  create(createInscripcioneDto: CreateInscripcioneDto) {
    const nuevaInscripcion = this.inscripcionesRepository.create({
      nombreAlumno: createInscripcioneDto.nombreAlumno,
      email: createInscripcioneDto.email,
      celular: createInscripcioneDto.celular,
      curso: { id: createInscripcioneDto.cursoId } as any,
    });
    return this.inscripcionesRepository.save(nuevaInscripcion);
  }

  async findAllByEmail(email: string) {
    return this.inscripcionesRepository.find({
      where: { email: email },
      relations: ['curso'], 
      order: { fechaInscripcion: 'DESC' }, 
    });
  }
}