import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { SceneService } from './scene.service';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  box!: THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial, THREE.Object3DEventMap>;

  constructor(
    private sceneService: SceneService,
  ) { }

  createPlane() {
    //plne geometry and material
    const planeGeometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    const planeMaterial = new THREE.MeshStandardMaterial({
      color: THREE.Color.NAMES['pink'],
      side: THREE.DoubleSide,
    });
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.x = Math.PI / 2;
    return plane;
  }

  createBox() {
    //box geometry and material
    const boxGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const boxMaterial = new THREE.MeshStandardMaterial({
      color: THREE.Color.NAMES['blue'],
    });
    this.box = new THREE.Mesh(boxGeometry, boxMaterial);
    this.box.position.y = 0.05;
    this.box.castShadow = true;
    this.box.castShadow = true;
    return this.box;
  }
}
