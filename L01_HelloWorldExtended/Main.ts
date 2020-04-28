namespace L01_HelloWorld {
    import fudge = FudgeCore;

    window.addEventListener("load", hndLoad);
    let viewport: fudge.Viewport;

    let quad1: fudge.Node = new fudge.Node("Quad1");
    let quad2: fudge.Node = new fudge.Node("Quad2");
    
    function hndLoad(_event: Event): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        fudge.RenderManager.initialize();
        fudge.Debug.log(canvas);

        let node: fudge.Node = createQuads();

        quad1.cmpTransform.local.translateX(-1);
        quad2.cmpTransform.local.translateX(1);

        let cmpCamera: fudge.ComponentCamera = new fudge.ComponentCamera();
        cmpCamera.pivot.translateZ(10);
        cmpCamera.pivot.rotateY(180);

        viewport = new fudge.Viewport();
        viewport.initialize("Viewport", node, cmpCamera, canvas);
        fudge.Debug.log(viewport);

        viewport.draw();
    }

    function createQuads(): fudge.Node {
        let node: fudge.Node = new fudge.Node("Pong");

        //Farben
        let mtrSolidRed: fudge.Material = new fudge.Material("SolidRed", fudge.ShaderUniColor, new fudge.CoatColored(fudge.Color.CSS("Red")));
        let mtrSolidBlue: fudge.Material = new fudge.Material("SolidBlue", fudge.ShaderUniColor, new fudge.CoatColored(fudge.Color.CSS("Blue")));
        //Mesh
        let mesh: fudge.MeshQuad = new fudge.MeshQuad();

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
}