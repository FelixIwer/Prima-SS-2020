"use strict";
var L01_HelloWorld;
(function (L01_HelloWorld) {
    var fudge = FudgeCore;
    window.addEventListener("load", hndLoad);
    let viewport;
    let quad1 = new fudge.Node("Quad1");
    let quad2 = new fudge.Node("Quad2");
    function hndLoad(_event) {
        const canvas = document.querySelector("canvas");
        fudge.RenderManager.initialize();
        fudge.Debug.log(canvas);
        let node = createQuads();
        quad1.cmpTransform.local.translateX(-1);
        quad2.cmpTransform.local.translateX(1);
        quad2.cmpTransform.local.rotateY(80);
        let cmpCamera = new fudge.ComponentCamera();
        cmpCamera.pivot.translateZ(10);
        cmpCamera.pivot.rotateY(180);
        viewport = new fudge.Viewport();
        viewport.initialize("Viewport", node, cmpCamera, canvas);
        fudge.Debug.log(viewport);
        viewport.draw();
    }
    function createQuads() {
        let node = new fudge.Node("Pong");
        //Farben
        let mtrSolidRed = new fudge.Material("SolidRed", fudge.ShaderUniColor, new fudge.CoatColored(fudge.Color.CSS("Red")));
        let mtrSolidBlue = new fudge.Material("SolidBlue", fudge.ShaderUniColor, new fudge.CoatColored(fudge.Color.CSS("Blue")));
        //Mesh
        let mesh = new fudge.MeshQuad();
        quad1.addComponent(new fudge.ComponentMaterial(mtrSolidRed));
        quad2.addComponent(new fudge.ComponentMaterial(mtrSolidBlue));
        quad1.addComponent(new fudge.ComponentMesh(mesh));
        quad2.addComponent(new fudge.ComponentMesh(mesh));
        quad1.addComponent(new fudge.ComponentTransform());
        quad2.addComponent(new fudge.ComponentTransform());
        node.appendChild(quad1);
        node.appendChild(quad2);
        return node;
    }
})(L01_HelloWorld || (L01_HelloWorld = {}));
//# sourceMappingURL=Main.js.map