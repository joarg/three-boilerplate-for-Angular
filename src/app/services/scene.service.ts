import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class SceneService {
  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;

  constructor() { }
  createScene(): THREE.Scene {
    return new THREE.Scene();
  }





}
