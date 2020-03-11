import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

/**
 * File Utility service
 */
@Injectable()
export class FileUtilService {
  /**
   * FileUtilService constructor
   */
  constructor() {
  }

  /**
   * Get File name from content-disposition header
   * @param {string} headerValue
   * @returns {any}
   */
  public getFileNameFromContentDispositionHeader(httpHeaders: HttpHeaders) {
    try {
      const headerValue = httpHeaders.get('Content-Disposition');
      if (headerValue) {
        const filenameKeyIndex = headerValue.indexOf('filename');
        if (filenameKeyIndex !== -1) {
          const fileNameFullStr = headerValue.substring(filenameKeyIndex);
          const fileNameFullStrIdx = fileNameFullStr.indexOf('=');
          if (fileNameFullStrIdx !== -1) {
            const fileName = fileNameFullStr.substring(fileNameFullStrIdx + 1);
            if (fileName) {
              return fileName;
            }
          }
        }
      }
    } catch (error) {
      return null; // if exception occur during the extraction the filename
    }
    return null;
  }

  /**
   * Check whether file is valid type
   * @param {string} filename: filename to be tested
   * @param {Array<string>} fileExtensions: array of file-extension
   * @returns {boolean}
   */
  public isFileOfValidType(filename: string, fileExtensions: Array<string>) {
    if (filename) {
      return fileExtensions.some((fileExtension) => {
        return filename.indexOf(fileExtension) !== -1;
      });
    }
    return false;
  }
}


