import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  emails : Email[]; 
  selectedFolder : string; 
  selectedEmail : Email;
  inputUnreadCount: number;
  spamUnreadCount: number;
  deleteUnreadCount: number;
  customUnreadCount: number;

  constructor(private emailService : EmailService) { }

  ngOnInit(): void {   
    this.getSpamEmail(); 
    this.getDeletedEmail();  
    this.getCustomFolderEmail();
    this.getInputEmail();
    this.selectedFolder = 'inbox';
    this.selectedEmail = this.emails[0];
  }

  onClick(folder: string): void {
    this.selectedFolder = folder;   

    switch(this.selectedFolder){
      case "inbox": {
                      this.getInputEmail();                    
                      break;
                    }
      case "spam":  {
                      this.getSpamEmail();
                      break;
                    }
      case "delete": {
                      this.getDeletedEmail();
                      break;
                    }
      case "custom":  {
                      this.getCustomFolderEmail();
                      break;}
          default:  { 
                      this.getInputEmail();
                      break; 
                    } 
    } 
     this.selectedEmail = this.emails[0];
  }

  displayContent(content: Email, index: number): void{
    this.selectedEmail = content;
    
    if(this.selectedEmail.mId === this.emails[index].mId){
      this.emails[index].unread = false;

      switch(this.selectedFolder){
        case "inbox": {
                        if(this.inputUnreadCount > 0)
                        this.inputUnreadCount --;                    
                        break;
                      }
        case "spam":  {
                        if(this.spamUnreadCount > 0)
                        this.spamUnreadCount --;
                        break;
                      }
        case "delete": {
                        if(this.deleteUnreadCount > 0)
                        this.deleteUnreadCount --;
                        break;
                      }
        case "custom":  {
                          if(this.customUnreadCount > 0)
                          this.customUnreadCount --;
                          break;
                        }           
      } 
    }
  }

  getInputEmail(): void {
    this.emailService.getInputEmail()
        .subscribe(emails => this.emails = emails);
    
    this.inputUnreadCount = 0;
    this.emails.forEach(email => {
      if (email.unread) {
        this.inputUnreadCount ++;
      }      
    });
  }

  getSpamEmail(): void {
    this.emailService.getSpamEmail()
        .subscribe(emails => this.emails = emails);

    this.spamUnreadCount = 0;
    this.emails.forEach(email => {
      if (email.unread) {
        this.spamUnreadCount ++;
      }      
    });
  }

  getDeletedEmail(): void {
    this.emailService.getDeletedEmail()
        .subscribe(emails => this.emails = emails);

    this.deleteUnreadCount = 0;
    this.emails.forEach(email => {
      if (email.unread) {
        this.deleteUnreadCount ++;
      }      
    });
  }

  getCustomFolderEmail(): void {
    this.emailService.getCustomFolderEmail()
        .subscribe(emails => this.emails = emails);

    this.customUnreadCount = 0;
    this.emails.forEach(email => {
      if (email.unread) {
        this.customUnreadCount ++;
      }      
    });
  } 

  flagEmail(mail: Email): void{
    mail.flagged = !mail.flagged;
  }
}
