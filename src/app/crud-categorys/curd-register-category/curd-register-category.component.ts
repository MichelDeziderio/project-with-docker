import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { apiService } from 'src/app/services/services.service';
import { ToastAlertComponent } from 'src/app/shared/toast-alert/toast-alert.component';

@Component({
  selector: 'app-curd-register-category',
  templateUrl: './curd-register-category.component.html',
  styleUrls: ['./curd-register-category.component.scss']
})
export class CurdRegisterCategoryComponent implements OnInit {

  regisCategory: FormGroup;
  title: any;

  constructor(
    public formBuilder: FormBuilder,
    public service: apiService,
    public router: Router,
    public alert: ToastAlertComponent
  ) {
    this.regisCategory = formBuilder.group({
      name: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.title = 'Criar categoria';
  }

  backPage() {
    this.router.navigate(['categorys']);
  }

  save(){
    const name = this.regisCategory.get('name');

    const send = {
      name: name?.value
    }

    this.service.postCategorys(send).subscribe(result => {
      this.openAlerts('Sua categoria foi cadastrada! 😊');
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
