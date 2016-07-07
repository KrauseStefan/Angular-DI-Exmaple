import {ReflectiveInjector, Injector, Injectable} from '@angular/core';
import {A} from './A';
import {B} from './B';
import {All} from './All';


function it(description: string, spec: () => void) {
  console.log('it ' + description)
  try {
    spec();
    console.log('PASSED')
    console.log(' ')
  } catch(e) {
    console.log('FAILED', e)
    console.log(' ')
  }
}

console.log(' ')

it('Should be able to instantiate "B" if "All" is declared first', ()  => {

  const injector = ReflectiveInjector.resolveAndCreate([
    All,
    A,
    B,
  ]);

  const b: B = injector.get(B);
});

it('Should be able to instantiate "B" if "All" is declared last', ()  => {

  const injector = ReflectiveInjector.resolveAndCreate([
    All,
    A,
    B,
  ]);

  const b: B = injector.get(B);
});
