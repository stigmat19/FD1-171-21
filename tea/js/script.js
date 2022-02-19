var imgUrlInput = document.getElementById("imgUrl");
var titleInput = document.getElementById("title");
var titleSmallInput = document.getElementById("titleSmall");
var descrInput = document.getElementById("descr");
var weightInput = document.getElementById("weight");
var priceInput = document.getElementById("price");
var ratingInput = document.getElementById("rating");
var cardWrap = document.getElementById("card-wrap");
var card = [];

//function
function getData (){
	var obj = {};
	obj.rating = ratingInput.value;
	obj.imgUrl = imgUrlInput.value;
	obj.title = titleInput.value;
	obj.titleSmall = titleSmallInput.value;
	obj.descr = descrInput.value;
	obj.weight = weightInput.value;
	obj.price = priceInput.value;
	card.push(obj);
	console.log(card);
	render();
}



function render (){

	var str = "";
	for (let i = 0; i < card.length; i++) {
		var item = card[i];
		str += `<div class="card">
                    <div class="card-top">
                        <span>${item.rating}</span>
                        <img src="img/heart.svg" alt="">
                    </div>
                    <div>
                        <img src="${item.imgUrl}" alt="">
                    </div>
                    <h4>${item.title}</h4>
                    <h5>${item.titleSmall}</h5>
                    <p class="descr">${item.descr}</p>
                    <p class="price">${item.weight} / <span>${item.price}</span></p>
                    <button>В корзину</button>
                </div>`;
	}
	cardWrap.innerHTML = str;

}