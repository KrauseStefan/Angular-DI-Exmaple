import {Injectable} from '@angular/core';
import {A} from './A';
import {All} from './All';

@Injectable()
export class B {
  constructor(a: A, all: All) {
    console.log('Instantiated sucessfully')
  }
}