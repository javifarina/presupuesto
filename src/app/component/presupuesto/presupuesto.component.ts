import { corte } from './../../model/corte';
import { CorteService } from './../../servicio/corte.service';
import { ClienteService } from './../../servicio/cliente.service';
import { cliente } from './../../model/cliente';
import { MaterialService } from './../../servicio/material.service';
import { RouterModule } from '@angular/router';
import { material } from './../../model/material';
import { pedido } from './../../model/pedido';
import { Component, OnInit } from '@angular/core';
import { bolsa } from '../../model/bolsa'
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';




@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {
  cortes:corte[]=[]
  clientes:cliente[]=[]
  materiales:material[]=[]
  bolsa:bolsa[]
  pedido:pedido[]
  pasocalculado:number;
  preciox100:number;
  material:material[]
  forma:FormGroup

  constructor(private fb: FormBuilder,
              private _materialService:MaterialService,
              private _clienteService:ClienteService,
              private _corteService:CorteService) 
  
  {
      this.forma= this.fb.group({
      idCliente:['',Validators.required],
      fechaPedido:[Date()],
      idAgente:['9'],
      ancho:['60',Validators.required],
      largo:['90',Validators.required],
      espesor:['30',Validators.required],
      material:['',Validators.required],
      cantidad:['',Validators.required],
      precio:['',Validators.required],
      tipocorte:['',Validators.required],
      confuelle:['']
      
        
     })

   }

  ngOnInit():void {
    this.getMateriales()
    this.getClientes()
    this.getCortes()


  }
  enviar(){

  }
//Listar Materiales en la Vista
  getMateriales(){
    this._materialService.getMateriales().subscribe(data =>{
      this.materiales = data
      console.log(this.materiales)
    })
  }
  //listar los clientes para la Vista 
  getClientes(){
    this._clienteService.getClientes().subscribe(datacli =>{
      this.clientes = datacli
      //console.log(this.clientes)
    })
    
  }
  //Listar Tipos de Coretes de Bolsas Traidos del BD
  getCortes(){
    this._corteService.getCortes().subscribe(dataCorte =>{
      this.cortes = dataCorte
      //console.log(this.cortes)
    })
  }

}
