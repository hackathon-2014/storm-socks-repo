function Viewer (canvasId) {

  this._blocks = [];

  this.canvas = document.getElementById(canvasId)
  this.engine = new BABYLON.Engine(this.canvas, true);
  document.engine = this.engine;
  this.scene = new BABYLON.Scene(this.engine);
  this.camera = new BABYLON.FreeCamera("camera1",
                                       new BABYLON.Vector3(0, 5, -10), this.scene);
  this.camera.attachControl(this.canvas, false);
  this.light =  new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this.scene);
  this.light.intensity = 0.5;
  var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, this.scene);  
  sphere.position.y = 1;

  this.run = function() {
    window.addEventListener("resize", function () {
      document.engine.resize();
    });

    this.scene.render();
  };

  this.addBlock = function(){
    var block = BABYLON.Mesh.CreateBox("box", 4.0, this.scene);
    block.position = new BABYLON.vector3(0, 1, 0);
    this._blocks.push(block);
  };

  return this;
};

module.exports = Viewer;
