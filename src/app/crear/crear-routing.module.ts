import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageFormComponent } from "./pages/page-form/page-form.component";

const routes:Routes=[
    {path:'',component:PageFormComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})

export class CrearRoutingModule{}