
async function addProduct(id){
 let stored=localStorage.getItem("products");
 let products=stored?JSON.parse(stored):await (await fetch("../products.json")).json();
 let p=products.find(x=>x.id==id);
 let qty=parseInt(document.getElementById("qty").value);
 let cart=JSON.parse(localStorage.getItem("cart")||"[]");
 cart.push({...p,qty});localStorage.setItem("cart",JSON.stringify(cart));
 alert("Adicionado ao carrinho!");
}
