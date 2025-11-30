
const whatsappNumber="55SEUNUMERO";
async function loadProducts(){
 let stored=localStorage.getItem("products");
 let products=stored?JSON.parse(stored):await (await fetch("products.json")).json();
 const list=document.getElementById("productList");
 products.forEach(p=>{
  const c=document.createElement("div");c.className="product";
  c.innerHTML=`<a href="products/${p.id}.html"><img src="${p.image}"></a>
  <h3>${p.name}</h3><p class="price">R$ ${p.price.toFixed(2)}</p>`;
  list.appendChild(c);
 });
}
let cart=[];
function toggleCart(){document.getElementById("cart").classList.toggle("open")}
function updateCart(){
 document.getElementById("cartCount").innerText=cart.length;
 const ul=document.getElementById("cartItems");ul.innerHTML="";let t=0;
 cart.forEach(i=>{ul.innerHTML+=`<li>${i.name} - ${i.qty} un.</li>`;t+=i.price*i.qty;});
 document.getElementById("cartTotal").innerText=t.toFixed(2);
}
function sendWhatsApp(){
 let msg=cart.map(i=>`${i.name} - ${i.qty}`).join("%0A");
 let total=document.getElementById("cartTotal").innerText;
 window.open(`https://wa.me/${whatsappNumber}?text=Pedido:%0A${msg}%0ATotal: R$ ${total}`);
}
loadProducts();
