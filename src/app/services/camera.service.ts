import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  camera!: THREE.PerspectiveCamera;

  constructor() { }

  createCamera(): THREE.PerspectiveCamera {
    console.log('window.innerWidth', window.innerWidth);
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    return this.camera;
  }

  setCameraPosition(x: number, y: number, z: number) {
    this.camera.position.set(x, y, z);
  }
}
