import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IpcRendererService } from './service/ipcRenderer';
// import { SanitizePipe } from './pipe/sanitize';
// import { BackDirective } from './directive/back/back.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [],
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [IpcRendererService],
    };
  }
}
