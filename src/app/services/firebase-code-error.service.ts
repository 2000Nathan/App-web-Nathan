import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

   //mensajes de Alert-errores
    codeError(code: string) {
    switch (code) {
      //El correo ya existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe'
        //contraseña debiñ
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy debil'
        //correo no valido
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Correor invalido'
        //Contraseña incorrecta
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'La Contraseña incorrecta'
        //No se encuentra el usuario
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'Usuario no existe'
      default:
        return 'Error desconocido'
    }
  }
}
