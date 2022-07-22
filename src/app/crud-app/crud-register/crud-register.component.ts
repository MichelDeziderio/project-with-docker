import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiService } from 'src/app/services/services.service';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastAlertComponent } from 'src/app/shared/toast-alert/toast-alert.component';

@Component({
  selector: 'app-crud-register',
  templateUrl: './crud-register.component.html',
  styleUrls: ['./crud-register.component.scss']
})
export class CrudRegisterComponent implements OnInit {

  registerLauche: FormGroup;
  title: any;
  listCategorys: any;

  constructor(
    public formBuilder: FormBuilder,
    public service: apiService,
    private dateAdapter: DateAdapter<any>,
    public router: Router,
    public alert: ToastAlertComponent
  ) {
    this.registerLauche = formBuilder.group({
      description: ['', Validators.required],
      date: ['', Validators.required],
      category: ['', Validators.required],
      value: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.dateAdapter.setLocale('br');
    this.title = 'Criar lançamento';
    this.getCategorys();
  }

  getCategorys() {
    this.service.getCategorys().subscribe(result => {

      this.listCategorys = result;

    })
  }

  backPage() {
    this.router.navigate(['lauches']);
  }

  register() {
    const description = this.registerLauche.get('description');
    const date = this.registerLauche.get('date');
    const value = this.registerLauche.get('value');
    const category = this.registerLauche.get('category');

    const send = {
      description: description?.value,
      date: new Date(date?.value).toLocaleDateString(),
      idCategoria: category?.value,
      value: Number(value?.value)
    }

    this.service.postLaunches(send).subscribe(result => {
      this.openAlerts('Seu lançamento foi cadastrado! 😊');
      this.backPage();
    }, erro => {
      this.openAlerts('Erro ao cadastrar!');
    })
  }

  openAlerts(message: string) {
    this.alert.open(
      message,
      'Fechar',
      {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 1000 * 14
      });
  }
}
