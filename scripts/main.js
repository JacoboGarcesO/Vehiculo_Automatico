'use strict';
var btn_Freno_Mano=document.getElementById('btn_Freno_Mano');
var btn_Reversa=document.getElementById('btn_Reversa');
var btn_Neutro=document.getElementById('btn_Neutro');
var btn_Freno_Pie=document.getElementById('btn_Fr');
var btn_Encendido=document.getElementById('btn_On');
var btn_Acelerar=document.getElementById('btn_Ac');
var btn_Clutch=document.getElementById('btn_Cl');
var btn_Dr_Iz=document.getElementById('btn_Dr_Iz');
var btn_Dr_De=document.getElementById('btn_Dr_De');
var btn_Parqueo=document.getElementById('btn_Parqueo');
var btn_1ra=document.getElementById('btn_1ra');
var btn_2da=document.getElementById('btn_2da');
var btn_3ra=document.getElementById('btn_3ra');
var btn_4ta=document.getElementById('btn_4ta');
var btn_5ta=document.getElementById('btn_5ta');
var btn_6ta=document.getElementById('btn_6ta');
var tecla=0;
var parqueo=false;
var encendido=false;
var giroIz=false;
var giroDe=false
var reversa=false;
var freno_Pie=false;
var acelerar=false;
var _1ra=false;
var _2da=false;
var _3ra=false;
var _4ta=false;
var _5ta=false;
var _6ta=false;
var clutch=false;
var neutro=false;
var freno_Mano=false;
var marcha=false;

class InteraccionesCompletas{
    constructor(btn_Parqueo,btn_Dr_De,btn_Dr_Iz,btn_Freno_Pie,btn_Acelerar,btn_Encendido, btn_Clutch, btn_Neutro, btn_Freno_Mano,btn_Reversa,btn_1ra,btn_2da,btn_3ra,btn_4ta,btn_5ta,btn_6ta){
        this.btn_Encendido=btn_Encendido;
        this.btn_Parqueo=btn_Parqueo;
        this.btn_Clutch=btn_Clutch;
        this.btn_Neutro=btn_Neutro;
        this.btn_Freno_Mano=btn_Freno_Mano;
        this.btn_Reversa=btn_Reversa;
        this.btn_1ra=btn_1ra;
        this.btn_2da=btn_2da;
        this.btn_3ra=btn_3ra;
        this.btn_4ta=btn_4ta;
        this.btn_5ta=btn_5ta;
        this.btn_6ta=btn_6ta;
        this.btn_Acelerar=btn_Acelerar;
        this.btn_Freno_Pie=btn_Freno_Pie;
        this.btn_Dr_Iz=btn_Dr_Iz;
        this.btn_Dr_De=btn_Dr_De;
    };
};
let contadorFreno=5;
let intervalFreno=0;
class Acciones extends InteraccionesCompletas{
    constructor(btn_Parqueo,btn_Dr_De,btn_Dr_Iz,btn_Freno_Pie,btn_Acelerar,btn_Encendido, btn_Clutch, btn_Neutro, btn_Freno_Mano,btn_Reversa,btn_1ra,btn_2da,btn_3ra,btn_4ta,btn_5ta,btn_6ta){
        super(btn_Parqueo,btn_Dr_De,btn_Dr_Iz,btn_Freno_Pie,btn_Acelerar,btn_Encendido, btn_Clutch, btn_Neutro, btn_Freno_Mano,btn_Reversa,btn_1ra,btn_2da,btn_3ra,btn_4ta,btn_5ta,btn_6ta);
    };
    estacionarias(){
        this.btn_Parqueo.addEventListener('click',()=>{
            if(parqueo==false){
                document.body.classList.add("bg-dark");
                parqueo=true;
                document.getElementById('btn_Freno_Mano').classList.add('bg-dark');
                document.getElementById('btn_Reversa').classList.add('bg-dark');
                document.getElementById('btn_Neutro').classList.add('bg-dark');
                document.getElementById('btn_Fr').classList.add('bg-dark');
                document.getElementById('btn_On').classList.add('bg-dark');
                document.getElementById('btn_Ac').classList.add('bg-dark');
                document.getElementById('btn_Cl').classList.add('bg-dark');
                document.getElementById('btn_Dr_Iz').classList.add('bg-dark');
                document.getElementById('btn_Dr_De').classList.add('bg-dark');
                document.getElementById('btn_Parqueo').classList.add('bg-warning');
                document.getElementById('btn_1ra').classList.add('bg-dark');
                document.getElementById('btn_2da').classList.add('bg-dark');
                document.getElementById('btn_3ra').classList.add('bg-dark');
                document.getElementById('btn_4ta').classList.add('bg-dark');
                document.getElementById('btn_5ta').classList.add('bg-dark');
                document.getElementById('btn_6ta').classList.add('bg-dark');
                document.getElementById('Alerts').innerHTML=`<div class="bg-danger alert alert-warning alert-dismissible fade show" role="alert">
                <img width="150px" height="150px" src="./images/icons8-stop-sign-100.png" alt="">
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
            }else{
                parqueo=false;
                document.body.classList.remove("bg-dark");
                document.getElementById('Alerts').innerHTML='';
                document.getElementById('btn_Freno_Mano').classList.remove('bg-dark');
                document.getElementById('btn_Reversa').classList.remove('bg-dark');
                document.getElementById('btn_Neutro').classList.remove('bg-dark');
                document.getElementById('btn_Fr').classList.remove('bg-dark');
                document.getElementById('btn_On').classList.remove('bg-dark');
                document.getElementById('btn_Ac').classList.remove('bg-dark');
                document.getElementById('btn_Cl').classList.remove('bg-dark');
                document.getElementById('btn_Dr_Iz').classList.remove('bg-dark');
                document.getElementById('btn_Dr_De').classList.remove('bg-dark');
                document.getElementById('btn_Parqueo').classList.remove('bg-warning');
                document.getElementById('btn_1ra').classList.remove('bg-dark');
                document.getElementById('btn_2da').classList.remove('bg-dark');
                document.getElementById('btn_3ra').classList.remove('bg-dark');
                document.getElementById('btn_4ta').classList.remove('bg-dark');
                document.getElementById('btn_5ta').classList.remove('bg-dark');
                document.getElementById('btn_6ta').classList.remove('bg-dark');
            }
        });
    }
    pedales(){
        this.btn_Freno_Pie.addEventListener('click', ()=>{
            if(freno_Pie==false){
                freno_Pie=true;
                intervalFreno=setInterval(() => {
                    if(contadorFreno==0){
                        contadorFreno=5;
                        clearInterval(intervalFreno);
                    }else{
                        contadorFreno-=1;
                        document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                        <strong class='text-body'>¡Frenando en...${contadorFreno}!</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
                    }

                }, 1000);
                
            }else{
                freno_Pie=false;
                document.getElementById('Alerts').innerHTML=`<div class="bg-danger alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>Soltó el freno</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`
            }
        });
        this.btn_Acelerar.addEventListener('click', ()=>{
            if(acelerar==false){
                acelerar=true;
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡Acelerando...!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`
            }else{
                acelerar=false
                document.getElementById('Alerts').innerHTML=`<div class="bg-danger alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>Soltó el acelerador</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`
            }
        });
        this.btn_Clutch.addEventListener('click', ()=>{
            if(clutch==false){
                clutch=true;
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡Clutch presionado!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`
            }else{
                clutch=false
                console.log('Cluth sin presionar');
                document.getElementById('Alerts').innerHTML=`<div class="bg-danger alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>Soltó el clutch</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`
            }
        });
        this.btn_Freno_Mano.addEventListener('click', ()=>{
            if(freno_Mano==false){
                freno_Mano=true;
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡Freno de mano puesto!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`
            }else{
                freno_Mano=false;
                document.getElementById('Alerts').innerHTML=`<div class="bg-danger alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>Freno de mano abajo, tenga cuidado</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`
            }
        });
    };
    cambios(){
        this.btn_Reversa.addEventListener('click', ()=>{
            if(reversa==false){
                reversa=true;
                _1ra=false;
                _2da=false;
                _3ra=false;
                _4ta=false;
                _5ta=false;
                _6ta=false;
                neutro=false;
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡En reversa!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`
            }
        });
        this.btn_1ra.addEventListener('click', ()=>{
            if(_1ra==false){
                _1ra=true;
                _2da=false;
                _3ra=false;
                _4ta=false;
                _5ta=false;
                _6ta=false;
                reversa=false;
                neutro=false;
                console.log('En primera');
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡En primera!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
                if(marcha&&clutch){
                    interval=setInterval("actualizar()",1000);
                    contadorSeg+=getRandomInt(700, 800);
                    velocidades.push(contadorTotalKM/(contadorSeg/3600));
                };
            };
        });
        this.btn_2da.addEventListener('click', ()=>{
            if(_2da==false){
                _2da=true;
                _1ra=false;
                _3ra=false;
                _4ta=false;
                _5ta=false;
                _6ta=false;
                reversa=false;
                neutro=false;
                console.log('En segunda');
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡En segunda!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
                if(marcha&&clutch){
                    interval=setInterval("actualizar()",1000);
                    contadorSeg+=getRandomInt(500, 600);
                    velocidades.push(contadorTotalKM/(contadorSeg/3600));
                };
            };
        });
        this.btn_3ra.addEventListener('click', ()=>{
            if(_3ra==false){
                _3ra=true;
                _1ra=false;
                _2da=false;
                _4ta=false;
                _5ta=false;
                _6ta=false;
                reversa=false;
                neutro=false;
                console.log('En tercera');
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡En tercera!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
                if(marcha&&clutch){
                    interval=setInterval("actualizar()",1000);
                    contadorSeg+=getRandomInt(250, 350);
                    velocidades.push(contadorTotalKM/(contadorSeg/3600));
                };
            };
        });
        this.btn_4ta.addEventListener('click', ()=>{
            if(_4ta==false){
                _4ta=true;
                _1ra=false;
                _3ra=false;
                _2da=false;
                _5ta=false;
                _6ta=false;
                reversa=false;
                neutro=false;
                console.log('En cuarta');
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡En cuarta!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
                if(marcha&&clutch){
                    interval=setInterval("actualizar()",1000);
                    contadorSeg+=getRandomInt(100, 150);
                    velocidades.push(contadorTotalKM/(contadorSeg/3600));
                };
            };
        });
        this.btn_5ta.addEventListener('click', ()=>{
            if(_5ta==false){
                _5ta=true;
                _1ra=false;
                _3ra=false;
                _2da=false;
                _4ta=false;
                _6ta=false;
                reversa=false;
                neutro=false;
                console.log('En quinta');
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡En quinta!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
                if(marcha&&clutch){
                    interval=setInterval("actualizar()",1000);
                    contadorSeg+=getRandomInt(20, 80);
                    velocidades.push(contadorTotalKM/(contadorSeg/3600));
                };
            };
        });
        this.btn_6ta.addEventListener('click', ()=>{
            if(_6ta==false){
                _6ta=true;
                _1ra=false;
                _3ra=false;
                _2da=false;
                _4ta=false;
                _5ta=false;
                reversa=false
                neutro=false;
                console.log('En sexta');
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡En sexta!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
                if(marcha&&clutch){
                    interval=setInterval("actualizar()",1000);
                    velocidades.push(contadorTotalKM/(contadorSeg/3600));
                };
            };
        });
        this.btn_Neutro.addEventListener('click', ()=>{
            if(neutro==false){
                neutro=true;
                _6ta=false;
                _1ra=false;
                _3ra=false;
                _2da=false;
                _4ta=false;
                _5ta=false;
                reversa=false
                console.log('En neutro');
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡En neutro!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`
            }
        });
    };
    encender(){
        this.btn_Encendido.addEventListener('click', ()=>{
            if(clutch==true&&neutro==true&&freno_Mano==true){
                encendido=true; 
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡Carro encendido!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`
            }else{
                if (contadorTotalKM>=distancia&&acelerar==false&&freno_Mano) {
                    let sumaVEL=0;
                    for (let index = 0; index < velocidades.length; index++) {
                        sumaVEL+=velocidades[index];
                    }
                    sumaVEL/=velocidades.length;
                    document.getElementById('Alerts').innerHTML=`<div class="bg-danger alert alert-warning alert-dismissible fade show" role="alert">
                    <h1 class='text-body'>Carro apagado</h1>
                    <strong class='text-body'>
                        El tiempo total que duró el viaje fue: ${Math.round(contadorSeg/60)} minutos <br>
                        La velocidad máxima que alcanzó durante el viaje fue: ${Math.round(velocidades.pop())} Km/h <br>
                        La velocidad promedio fue: ${Math.round(sumaVEL)} Km/h
                    </strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
                }else{document.getElementById('Alerts').innerHTML=`<div class="bg-danger alert alert-warning alert-dismissible fade show" role="alert">
                    <strong class='text-body'>Asegurese de hacerlo todo bien</strong>
                </div>`}
            }
        });
    };
    arrancar(){
        this.btn_1ra.addEventListener('click',()=>{
            if(encendido&&clutch==true&&freno_Pie==true&&freno_Mano==false&&_1ra==true){
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡Ya puede arrancar!, suelte el freno de pie, suelte el clutch y pise el acelerador.</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
                this.btn_Acelerar.addEventListener('click',()=>{
                    if(encendido&&freno_Pie==false&&acelerar==true&&clutch==false){
                        marcha=true;
                        interval=setInterval("actualizar()",1000);
                        contadorSeg+=getRandomInt(700, 800);
                        velocidades.push(contadorTotalKM/(contadorSeg/3600));
                    };
                });
            };
        });
    };
    giros(){
        this.btn_Dr_Iz.addEventListener('click',()=>{
            if(giroIz==false){
                giroIz=true;
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡Direccional izquierda activada!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
            }else{
                giroIz=false;
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                        <strong class='text-body'>Direccional izquierda apagada</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
            };
        });
        this.btn_Dr_De.addEventListener('click',()=>{
            if(giroDe==false){
                giroDe=true;
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>¡Direccional derecha activada!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
            }else{
                giroDe=false;
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                        <strong class='text-body'>Direccional derecha apagada</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
            };
        });
        window.addEventListener( "keydown", evento=>{
            tecla = evento.keyCode;
            if(tecla==76&&giroIz==true&&encendido){
                console.log('marcha '+marcha);
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>Giro a la izquierda realizado, recuerde apagar la direccional</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
            }
            else if(tecla==82&&giroDe==true&&encendido){
                console.log('marcha '+marcha);
                document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <strong class='text-body'>Giro a la Derecha realizado, recuerde apagar la direccional</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
            }else{document.getElementById('Alerts').innerHTML=`<div class="bg-danger alert alert-warning alert-dismissible fade show" role="alert">
            <strong class='text-body'>Asegurate de haber hecho bien todo</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`}
            }, false );

    };

};
class Destino{
    constructor(distancia){
        this.distancia=distancia;
    };
    mostrarDatosDestino(){
            document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
                <h1 class='text-body'>Distancia del viaje</h1>
                <h4><strong class='text-body'>
                ${this.distancia} Km <br>
             </strong></h4>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`;
        return this.distancia;
    };
    
};
let destino=new Destino( getRandomInt(21,201));
let interaccionesCompletas=new InteraccionesCompletas(btn_Parqueo,btn_Dr_De,btn_Dr_Iz,btn_Freno_Pie,btn_Acelerar,btn_Encendido, btn_Clutch, btn_Neutro, btn_Freno_Mano,btn_Reversa,btn_1ra,btn_2da,btn_3ra,btn_4ta,btn_5ta,btn_6ta);
let acciones=new Acciones(btn_Parqueo,btn_Dr_De,btn_Dr_Iz,btn_Freno_Pie,btn_Acelerar,btn_Encendido, btn_Clutch, btn_Neutro, btn_Freno_Mano,btn_Reversa,btn_1ra,btn_2da,btn_3ra,btn_4ta,btn_5ta,btn_6ta);
console.log(acciones.pedales());
console.log(acciones.encender());
console.log(acciones.cambios());
console.log(acciones.arrancar());
console.log(acciones.giros());
console.log(acciones.estacionarias());


console.log(destino.mostrarDatosDestino());
let distancia=destino.mostrarDatosDestino()
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var velocidades=[];
let cont=20;
let interval=0;
let contadorTotalKM=0;
let contadorSeg=0;
function actualizar(){
    if (cont==0){
        clearInterval(interval);
        cont=20;
        document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
        <strong class='text-body'>
        Presione rapidamente el clutch y haga el siguiente cambio, recuerde soltar el clutch luego de hacer el cambio
        </strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }else{
        cont-=1;
        document.getElementById('Alerts').innerHTML=`<div class="bg-success alert alert-warning alert-dismissible fade show" role="alert">
        <strong class='text-body'>
            Distancia que falta para ek cambio: ${cont}Km <br>
            Información del destino: ${contadorTotalKM}Km/ ${distancia}Km <br>
        </strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
    contadorSeg+=getRandomInt(40,60);
    contadorTotalKM+=1;
}





