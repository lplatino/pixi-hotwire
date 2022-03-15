import { Application, Container, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize",()=>{
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);
	
	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical +  "px";
	app.view.style.marginBottom = marginVertical +  "px";
});

window.dispatchEvent(new Event("resize"));

Loader.shared.add({url: "elephant.png", name: "Elephant"});
Loader.shared.add({url: "hat.png", name: "Hat"});
Loader.shared.add({url: "agumon.png", name: "Agumon"});
Loader.shared.add({url: "glasses.png", name: "Glasses"});

Loader.shared.onComplete.add(()=>{
	const elephant: Sprite = Sprite.from("Elephant");
	const hat: Sprite = Sprite.from("Hat");

	hat.scale.set(0.2,0.2);
	hat.position.set(-8,65);
	hat.angle = -60;

	const elephantWithHat: Container = new Container();
	
	elephantWithHat.addChild(elephant);
	elephantWithHat.addChild(hat);

	elephantWithHat.scale.set(0.8);
	elephantWithHat.x = 1050;
	elephantWithHat.y = 50;

	//console.log(hat.toGlobal(new Point()));
	//console.log(hat.parent.toGlobal(hat.position));

	//const aux = hat.parent.toLocal(new Point(640,360));
	//hat.position.x = aux.x;
	//hat.position.y = aux.y;

	const agumon: Sprite = Sprite.from("Agumon");
	const glasses: Sprite = Sprite.from("Glasses");

	agumon.scale.set(0.58,0.58);
	glasses.position.set(65,12);
	glasses.angle = -1;

	const agumonWithGlasses: Container = new Container();
	agumonWithGlasses.addChild(agumon);
	agumonWithGlasses.addChild(glasses);

	agumonWithGlasses.scale.set(0.8);
	agumonWithGlasses.x = 400;
	agumonWithGlasses.y = 200;

	app.stage.addChild(elephantWithHat,agumonWithGlasses);
});

Loader.shared.load();