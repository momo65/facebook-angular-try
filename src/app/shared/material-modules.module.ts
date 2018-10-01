import {NgModule} from '@angular/core';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports:[
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule
  ]
})
export class MaterialModulesModule{}
