import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as s}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",function(o){o.preventDefault();const t=Number(document.querySelector('input[name="delay"]').value),i=document.querySelector('input[name="state"]:checked').value;new Promise((e,r)=>{setTimeout(()=>{i==="fulfilled"?e(t):r(t)},t)}).then(e=>{s.success({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight",icon:!1,progressBar:!1,close:!1,timeout:e})}).catch(e=>{s.error({message:`❌ Rejected promise in ${e}ms`,position:"topRight",icon:!1,progressBar:!1,close:!1,timeout:e})})});
//# sourceMappingURL=2-snackbar.js.map
