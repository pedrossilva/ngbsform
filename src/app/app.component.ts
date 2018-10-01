import { Component } from '@angular/core';
//
import {OptionsForm} from './form/OptionsForm';
import {ControlConfig, ControlValidator, GroupConfig} from './form/control.interface';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: any;
  // @ts-ignore
  pessoaFormOptions = new OptionsForm<Pessoa>(Pessoa, {
    // order: [
    //   'nome',
    //   'email',
    //   'telefone',
    //   'endereco',
    //   'ativo',
    // ],
    groups: {
      endereco: new OptionsForm<Endereco>(Endereco)
    }
  });

  controlsConfig: Array<ControlConfig> = [];

  constructor() {
    // const opts = new OptionsForm<Pessoa>(Pessoa);
    console.log('pessoaFormOptions', this.pessoaFormOptions);
    this.controlsConfig = this.getConfig();
  }


  getConfig(): Array<ControlConfig> {

    // const cfg = (name: string, required: true, type = 'input') => ({name, type, validators: required ? [Validators.required] : []});
    const requiredVal = {
      name: 'required',
      message: 'Campo obrigatório',
      validator: Validators.required
    }
    const cfg = (name: string, required = false, type = 'input') => ({name, type, validations: required ? [requiredVal] : null});

    const controlsConfig: Array<ControlConfig> = [
      cfg('test', true),
      {
        name: 'nome',
        type: 'input',
        validations: [requiredVal]
      },
      {
        name: 'email',
        type: 'input'
      },
      {
        name: 'telefone',
        type: 'input'
      },
      {
        name: 'endereco',
        type: 'group',
        config: [
          {
            name: 'cep',
            type: 'input'
          },
          {
            name: 'logradouro',
            type: 'input'
          },
          {
            name: 'bairro',
            type: 'input'
          },
          {
            name: 'cidade',
            type: 'input'
          },
          {
            name: 'estado',
            type: 'input'
          }
        ]
      }
    ];
    return controlsConfig;

  }

}

class Pessoa {
  nome: string = 'Pedro';
  email: string = null;
  telefone: string = null;
  endereco = new Endereco();
  ativo: boolean = true;
}

class Endereco {
  cep: string = '72878-060';
  logradouro: string = null;
  bairro: string = null;
  cidade: string = null;
  estado: string = null;
}
