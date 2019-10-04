fetch('/actor').then(r=>r.text()).then(text=>out.innerText=text);
//fetch('/play').then(r=>r.text()).then(text=>api.innerText=text);
fetch('/actor/romeo').then(r=>r.text()).then(text=>api.innerText=text);

