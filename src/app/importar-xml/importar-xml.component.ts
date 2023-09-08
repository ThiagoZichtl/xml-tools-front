import { Component } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import { LoadingXmlComponent } from '../dialog-loading-xml/loading-xml.component';
import { MatDialog } from '@angular/material/dialog';
import { ErrorXmlComponent } from '../dialog-error-xml/error-xml.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessXmlComponent } from '../dialog-success-xml/success-xml.component';
import { NullXmlComponent } from '../dialog-warning-xml/null-xml.component';

@Component({
  selector: 'app-importar-xml',
  templateUrl: './importar-xml.component.html',
  styleUrls: ['./importar-xml.component.scss'],
})
export class ImportarXmlComponent {
  fileName: string = '';
  fileList: Array<File> = [];
  wrongFormat: boolean = true;

  constructor(
    private fileUploadService: FileUploadService,
    private dialog: MatDialog
  ) {}

  onFileSelect(input: HTMLInputElement): void {}

  addFiles(event: Event) {
    this.fileName = '';
    const target: HTMLInputElement = event.target as HTMLInputElement;
    for (let t = 0; t < target.files?.length; t++) {
      if (target.files.item(t).type !== 'text/xml') {
        this.wrongFormat = true;
        const dialogRef = this.dialog.open(ErrorXmlComponent, {
          width: '300px',
        });
      } else {
        this.fileName = this.fileName.concat(
          target.files.item(t).name
        );
        this.fileList.push(target.files.item(t));
      }
    }
  }

  filesDropped(files: File[]): void {
    this.fileName = '';
    for (let t = 0; t < files?.length; t++) {
      if (files.at(t).type !== 'text/xml') {
        this.wrongFormat = true;
        const dialogRef = this.dialog.open(ErrorXmlComponent, {
          width: '300px',
        });
      } else {
        this.fileName = this.fileName.concat(files.at(t).name, '<br> ');
        this.fileList.push(files.at(t));
      }
    }
  }

  uploadFiles(arquivo: File[]): void {
    const dialogLoading = this.dialog.open(LoadingXmlComponent, {
      width: '300px',
    });

    if (this.fileList.length == 0) {
      const dialogWarning = this.dialog.open(NullXmlComponent, {
        width: '300px',
      });
      setTimeout(() => {
        dialogLoading.close();
      }, 500);
    } else {
      this.fileUploadService.uploadFile(this.fileList).subscribe({
        next: (resposta) => {
          resposta;
        },
        error: (err) => {
          alert('Não foi possível fazer a importação');
        },
        complete: () => {
          setTimeout(() => {
            dialogLoading.close();
          }, 1000);

          const dialogSuccess = this.dialog.open(SuccessXmlComponent, {
            width: '300px',
          });
          setTimeout(() => {
            dialogSuccess.close();
          }, 3000);

          this.fileList = [];
        },
      });
    }
  }
}
