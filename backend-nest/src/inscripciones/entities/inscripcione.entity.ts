import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Curso } from '../../cursos/curso.entity';

@Entity('inscripciones')
export class Inscripcione {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreAlumno: string;

  @Column()
  email: string;

  @Column()
  celular: string;

  @CreateDateColumn()
  fechaInscripcion: Date;

  @ManyToOne(() => Curso, (curso) => curso.inscripciones)
  curso: Curso;
}