import { Loader } from 'pixi.js';
import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Loader.shared.add({url: "elephant.png", name: "myElephant"});
Loader.shared.add({url: "clampy.png", name: "clampy"});

Loader.shared.onComplete.add(()=>{
	const clampy: Sprite = Sprite.from("myElephant");

	console.log("hola mundo ",clampy.width, clampy.height);
	
	//clampy.anchor.set(0);
	
	clampy.x = 0;
	clampy.y = 0;
	
	app.stage.addChild(clampy);
});

Loader.shared.load();