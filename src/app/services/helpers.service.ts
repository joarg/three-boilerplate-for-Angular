import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { LightsService } from './lights.service';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(private lightService: LightsService) { }
  createGridAndLightHelper() {

    //grid helper
    const gridHelper = new THREE.GridHelper(1, 10, THREE.Color.NAMES['red'], THREE.Color.NAMES['blue']);

    //directional light helper
    const directionalLightHelper = new THREE.DirectionalLightHelper(this.lightService.directionalLight, 1);

    return [gridHelper, directionalLightHelper]
  }
  createAxesHelper() {
    return new THREE.AxesHelper(5);
  }
  createOrbitControls(camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) {
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.target.set(0, 0, 0);
    orbit.update();
    return orbit;
  }
}
