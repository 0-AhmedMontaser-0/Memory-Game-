document.querySelector(".control-buttons span").onclick=function(){
	let yourName=prompt("What is your Name ?");
	if(yourName == null ||yourName==""){
		document.querySelector(".name span").innerHTML="Unknown";
	}else{
		document.querySelector(".name span").innerHTML=yourName;
	}
	document.querySelector(".control-buttons").remove();
	console.log(yourName)
};
let duration=500;
let blocksContainer=document.querySelector(".memory-game-blocks");
let blocks=Array.from(blocksContainer.children);
console.log(blocks);
let orderRange=[...blocks.keys()]

//add order
blocks.forEach((block,index)=>{
	
	block.style.order=Math.floor(Math.random() * blocks.length)
	block.addEventListener("click",function(){
		 flipBlock(block);
	});
});
//shuffle

function flipBlock(selectedBlock){
	
	selectedBlock.classList.add("is-flipped");
	let allFlippedBlocks=blocks.filter(flipedBlock =>flipedBlock.classList.contains("is-flipped"));
	console.log(allFlippedBlocks);
	if(allFlippedBlocks.length==2){

		stopClicking();
		checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1]);
		
	}
}
function stopClicking(){
	blocksContainer.classList.add("no-clicking");
	setTimeout(()=>{
		blocksContainer.classList.remove("no-clicking")
	},duration)
	
}
function checkMatchedBlocks(firstBlock,secoundBlock){
	let triesElement=document.querySelector(".tries span");
	if(firstBlock.dataset.technology == secoundBlock.dataset.technology){
		
		firstBlock.classList.remove("is-flipped");
		secoundBlock.classList.remove("is-flipped");
		
		firstBlock.classList.add("has-match");
		secoundBlock.classList.add("has-match");
		document.getElementById("success").play();
	}else{
		triesElement.innerHTML =parseInt(triesElement.innerHTML)+1
		setTimeout(()=>{
			firstBlock.classList.remove("is-flipped");
			secoundBlock.classList.remove("is-flipped");
		},duration)
		document.getElementById("fail").play();
	}
}






