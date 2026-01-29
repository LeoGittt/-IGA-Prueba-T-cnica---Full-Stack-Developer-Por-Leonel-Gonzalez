import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Inscripcione } from '../inscripciones/entities/inscripcione.entity'; 

@Entity('cursos')
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  detalle: string;

  
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  precio: number;

  @Column({ nullable: true })
  imagen: string;

  @OneToMany(() => Inscripcione, (inscripcion) => inscripcion.curso)
  inscripciones: Inscripcione[];
}