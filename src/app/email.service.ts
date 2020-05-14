import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Email } from './email';
import { InputEmail, SpamEmail, DeletedEmail, CustomFolderEmail } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  getInputEmail(): Observable<Email[]> {    
    return of(InputEmail);
  }

  getSpamEmail(): Observable<Email[]> {    
    return of(SpamEmail);
  }

  getDeletedEmail(): Observable<Email[]> {    
    return of(DeletedEmail);
  }

  getCustomFolderEmail(): Observable<Email[]> {    
    return of(CustomFolderEmail);
  }
}
