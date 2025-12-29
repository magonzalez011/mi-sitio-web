window.addEventListener("message", e => {
    const datos = e.data;
    Object.keys(datos).forEach(id=>{
        const el = document.getElementById(id);
        if(el) el.innerText = datos[id];
    });
});

