
function load(){
 let products=JSON.parse(localStorage.getItem("products")||"[]");
 const ul=document.getElementById("list");ul.innerHTML="";
 products.forEach(p=>ul.innerHTML+=`<li>${p.name} - R$ ${p.price}</li>`);
}
function addProduct(){
 let products=JSON.parse(localStorage.getItem("products")||"[]");
 let id=Date.now();
 let obj={
  id,
  name:document.getElementById("name").value,
  price:parseFloat(document.getElementById("price").value),
  image:document.getElementById("image").value,
  kits:document.getElementById("kits").value.split(",").map(x=>parseInt(x))
 };
 products.push(obj);
 localStorage.setItem("products",JSON.stringify(products));
 alert("Produto cadastrado!");load();
}
load();
