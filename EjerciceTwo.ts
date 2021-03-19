class Cuenta{
 private _titular:string
 private _cantidad:number = 0;
 
 constructor(titular:string,cantidad:number=0){
     this._titular = titular;
     this._cantidad = cantidad;
 }

 set settTitular(a:string){
     this._titular = a ;
 }

 get getTitular():string{
     return this._titular;
 }
set setCuenta(a:number){
     this._cantidad = a ;
 }

 get getCuenta():number{
     return this._cantidad;
 }

mostrar(){

    console.log(` el titular es ${ this._titular } la cantidad es ${ this._cantidad }`);
}

ingresar(cantidad:number){
    if(cantidad > 0){
        this._cantidad += cantidad;
    }else
    {
        this._cantidad;
    }
}
retirar(retirar:number){
    this._cantidad -= retirar;
}

}

const personFirt = new Cuenta('wilmer',100);
personFirt.mostrar();
personFirt.ingresar(100);
personFirt.retirar(20);
personFirt.mostrar();
