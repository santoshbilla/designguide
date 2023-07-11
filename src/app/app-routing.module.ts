import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ColorsComponent } from "./components/colors/colors.component";
import { RouterModule, Routes } from "@angular/router";
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { ExamplesComponent } from "./components/examples/examples.component";
import { TypographyComponent } from "./components/typography/typography.component";
const routes: Routes = [
    {
        path: "colors",
        component: ColorsComponent,
    },
    {
        path: "buttons",
        component: ButtonsComponent,
    },
    {
        path: "examples",
        component: ExamplesComponent,
    },
    {
        path: "typography",
        component: TypographyComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
