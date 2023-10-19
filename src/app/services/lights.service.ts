import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class LightsService {
  ambientLight!: THREE.AmbientLight;
  directionalLight!: THREE.DirectionalLight;

  constructor() { }
  makeLights() {
    //make lights
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    //set light position
    this.directionalLight.position.set(2, 2, 2);
    this.directionalLight.castShadow = true;
    return [this.ambientLight, this.directionalLight];
  }
}
