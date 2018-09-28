import { Component } from '@angular/core';
//
import {OptionsForm} from './form/OptionsForm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: any;
  pessoaFormOptions = new OptionsForm<Pessoa>(Pessoa);

  constructor() {
    // const opts = new OptionsForm<Pessoa>(Pessoa);
    // console.log('opts', opts);
  }
}

class Pessoa {
  nome: string = 'Pedro';
  email: string = null;
  telefone: string = null;
  endereco = new Endereco();
}

class Endereco {
  cep: string = '72878-060';
  logradouro: string = null;
  bairro: string = null;
  cidade: string = null;
  estado: string = null;
}
