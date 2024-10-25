import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, MinLength } from "class-validator";

export class CreateUsuarioDto {
    @IsNotEmpty()
    @MinLength(3, {message: (validationArguments) => {
        return `${validationArguments.property} deve ser maior ou igual a ${validationArguments.constraints[0]} caracteres`;
    }})
    nome: string;
    
    @IsNotEmpty({message: (validationArguments) => {
        return `${validationArguments.property} não deve ser vazio`;
    }})
    @IsEmail(undefined, {message: (validationArguments) => {
        return `${validationArguments.property} deve ser um email válido`;
    }})
    email: string;
    
    @IsOptional()
    @IsPhoneNumber("BR", {message: (validationArguments) => {
        return `${validationArguments.property} deve ser um telefone válido`;
    }})
    telefone: string;
    
    @IsOptional()
    endereco: string;
}
