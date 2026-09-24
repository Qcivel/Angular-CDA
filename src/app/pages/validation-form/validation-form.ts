import { Component, signal, computed, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  imports: [FormsModule],
  selector: 'app-validation-form',
  styleUrl: './validation-form.css',
  templateUrl: './validation-form.html',
})
export class ValidationForm {

  mail = signal<string>("");
  phone = signal<string>("");
  password = signal<string>("");
  showPassword = signal<boolean>(false);
  typePassword = signal<string>("password")
  message = signal<string>("");
  buttonDisabled = signal<boolean>(true)

  isEmailValid = computed(() => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.mail());
});

  isPasswordValid = computed(()=>{
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(this.password())
  });

  isPhoneValid = computed(()=>{
    return /^(?:(?:\+|00)33|0)[1-9](?:[\s.-]?\d{2}){4}$/.test(this.phone())
  })

  isFormValid = computed(() => {
    console.log("Email :" + this.isEmailValid());
    console.log("Password :" + this.isPasswordValid());
    console.log("Phone : " + this.isPhoneValid());
    
    return this.isEmailValid() && this.isPasswordValid() && this.isPhoneValid(); 
  });

  displayPassword(){
    this.showPassword.update(v => !v);
    this.typePassword.set(this.showPassword() ? "text" : "password");
  }

  emailMessage = computed(() => {
    if (this.mail() === "") return "";
    return this.isEmailValid() ? "" : "L'email ne correspond pas";
  });

  passwordMessage = computed(() => {
    if (this.password() === "") return "";
    return this.isPasswordValid() ? "" : "Le mot de passe ne correspond pas";
  });
  phoneMessage = computed(() => {
    if (this.phone() === "") return "";
    return this.isPhoneValid() ? "" : "Le téléphone n'est pas conforme";
  });
 

  
}
