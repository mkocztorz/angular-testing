import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ParentComponent} from "./components/parent.component";
import {ChildComponent} from "./components/child.component";


@NgModule({
    imports: [
        BrowserModule
    ],
    exports: [
        ParentComponent,
        ChildComponent
    ],
    declarations: [
        ParentComponent,
        ChildComponent
    ],
    bootstrap: [
        ParentComponent,
        ChildComponent
    ]
})
export class FirstModule {
}
