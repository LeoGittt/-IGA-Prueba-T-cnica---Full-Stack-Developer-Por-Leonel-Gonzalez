import { IsEmail, IsString, IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class CreateInscripcioneDto {
  @IsString({ message: 'El nombre debe ser texto' })
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  nombreAlumno: string;

  @IsEmail({}, { message: 'Debe ingresar un email válido' })
  @IsNotEmpty({ message: 'El email es requerido' })
  email: string;

  @IsString({ message: 'El celular debe ser texto' })
  @IsNotEmpty({ message: 'El celular es requerido' })
  @MinLength(8, { message: 'El celular debe tener al menos 8 dígitos' })
  celular: string;

  @IsNumber({}, { message: 'El ID del curso debe ser un número' })
  cursoId: number;
}