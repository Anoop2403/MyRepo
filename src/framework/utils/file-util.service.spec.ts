import { TestBed, inject } from '@angular/core/testing';

import { FileUtilService } from './file-util.service';
import { HttpHeaders } from '@angular/common/http';
describe('FileUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileUtilService]
    });
  });

  it('FileUtilService should be created', inject([FileUtilService], (service: FileUtilService) => {
    expect(service).toBeTruthy();
  }));
  it('FileUtilService: getFileNameFromContentDispositionHeader() should return filename from content-disposition header',
     inject([FileUtilService], (service: FileUtilService) => {
    const fileName = 'sample.txt'
    const myHeaders = new HttpHeaders()
      .set('Content-yType', 'application/json')
      .set('Accept', 'application/json')
      .set('Accept-Language', 'en')
      .set('content-disposition', 'inline; filename=' + fileName);
    expect(service.getFileNameFromContentDispositionHeader(myHeaders)).toBe(fileName);
    const myHeadersError = new HttpHeaders()
    expect(service.getFileNameFromContentDispositionHeader(myHeadersError)).toBeNull();
  }));
  it(`FileUtilService: isFileOfValidType() should return false if file format is wrong
      should return true if file format is correct`, inject([FileUtilService], (service: FileUtilService) => {
    const fileName = 'sample.txt'
    const fileExtensions = ['.pdf', '.txt', '.doc']
    expect(service.isFileOfValidType(fileName, fileExtensions)).toBeTruthy();
    expect(service.isFileOfValidType(undefined, fileExtensions)).toBeFalsy();
  }));
});
