import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { AnimationLoopService } from './animation.service';
import { ObjectService } from './object.service';

@Injectable({
  providedIn: 'root'
})
export class RenderService {
  renderer!: THREE.WebGLRenderer;

  constructor(
    private ObjectService: ObjectService,
    private animationLoopService: AnimationLoopService,
  ) {
  }
  createRenderer() {
    if (!this.renderer) {
      this.renderer = new THREE.WebGLRenderer();
      const renderBox = document.getElementById('scene');
      if (renderBox) {
        const { width, height } = renderBox.getBoundingClientRect();
        this.renderer.setSize(width, height);
        renderBox.appendChild(this.renderer.domElement);
      }
      return this.renderer;
    } else {
      return null;
    }
  }
  renderScene(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    this.renderer.setAnimationLoop(() => {
      this.animationLoopService.theAnimationLoop();
      this.renderer.render(scene, camera);
    });
  }
}
