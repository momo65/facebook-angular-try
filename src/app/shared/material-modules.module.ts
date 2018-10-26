import {NgModule} from '@angular/core';
import {MatButtonModule, MatInputModule,MatRadioModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports:[
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatRadioModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatRadioModule
  ]
})
export class MaterialModulesModule{}
