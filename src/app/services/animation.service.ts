import { Injectable } from '@angular/core';
import { RenderService } from './render.service';
import { CameraService } from './camera.service';
import { SceneService } from './scene.service';
import { ObjectService } from './object.service';

@Injectable({
  providedIn: 'root'
})
export class AnimationLoopService {

  constructor(
    private objectService: ObjectService
  ) { }

  theAnimationLoop() {
    let time  = 100
    //everything you want to animate put in here
    this.objectService.box.rotation.y += 1 / time;
  }
}
