This is a basic package for customize ion-content element's scrollbar style.

Usage

`app.module.ts`

```
...

import { IonContentScrollbarModule } from 'ion-content-scrollbar';

@NgModule({

imports: [

...

IonContentScrollbarModule

],

})
```

`scrollbarWidth` Scrollbar's `width` and `height` value. Type: number, Default: 3

`scrollbarColor` Scrollbar Thumb's background color value. Type: string, Default: 'var(--ion-color-primary)'

`scrollbarRound` Scrollbar's Thumb's is rounded value. Type: boolean, Default: true.

`firefoxThin` Scrollbar's Thumb's is thin value (For Firefox). Type: boolean, Default: true.

`firefoxBackground` Scrollbar's background color value (For Firefox). Type: string, Default: 'transparent'

`firefoxThumbColor` Scrollbar thumb's background color value (For Firefox). Type: string, Default: 'var(--ion-color-primary)'

`<ion-content appIonScrollbar [scrollbarWidth]="5" scrollbarColor="#000000" [scrollbarRound]="true"></ion-content>`
