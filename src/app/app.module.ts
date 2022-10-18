// modulos de funcionalidades extras
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// componentes a utilizar en nuestra aplicasion
// cualquier otro tipo de archivos que necesitemos, servicios, directivas, pipes
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './views/listado/listado.component';
import { EntradaComponent } from './views/listado/entrada/entrada.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';

// metadatos etiqueta @ngmodule declaramos todos los modulos componentes servicios que ocuparemos
@NgModule({
  // añadiremos todos los componentes modulos directivas a ocupar en el proyecto
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoComponent,
    EntradaComponent,
    PaginaNoEncontradaComponent,
    AcercaDeNosotrosComponent
  ],
  imports: [
    // modulos que añaden funcionalidad a nuestra app
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // añadiremos nuestros servicios a ocupar
  providers: [],
  // enlazamos nuestro componente principal de la app
  bootstrap: [AppComponent]
})
// aqui decimos que esta clase va a ser un modulo y tambien podemos exportar componentes de esta clase
export class AppModule { }