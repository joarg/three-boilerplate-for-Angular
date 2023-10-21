import { Component } from '@angular/core';
import { CameraService } from '../services/camera.service';
import { SceneService } from '../services/scene.service';
import { RenderService } from '../services/render.service';
import { LightsService } from '../services/lights.service';
import { ObjectService } from 'src/app/services/object.service';
import { HelpersService } from '../services/helpers.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent {
  scene: THREE.Scene;
  constructor(
    private sceneService: SceneService,
    private cameraService: CameraService,
    private renderService: RenderService,
    private lightsService: LightsService,
    private objectService: ObjectService,
    private helperService: HelpersService,
  ) {

    //make a scene with camera, render, and lights
    this.scene = this.sceneService.createScene();
    this.scene.add(this.cameraService.createCamera());
    this.renderService.createRenderer();
    this.scene.add(...this.lightsService.makeLights());

    this.helperService.createOrbitControls(this.cameraService.camera, this.renderService.renderer);
    this.scene.add(this.helperService.createAxesHelper());
    this.scene.add(...this.helperService.createGridAndLightHelper());

    this.scene.add(this.objectService.createPlane());
    this.scene.add(this.objectService.createBox());

    this.helperService.createDatGUI();

    this.cameraService.setCameraPosition(0, 1, 3);
    this.renderService.renderScene(this.scene, this.cameraService.camera)


  }
}
