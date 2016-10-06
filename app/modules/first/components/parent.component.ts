import { Component } from '@angular/core';

@Component({
    selector: 'parent-component',
    template: `
        <h1>Parent</h1>
        <child-component>child...</child-component>
`
})
export class ParentComponent { }
