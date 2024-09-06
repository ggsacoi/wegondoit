addEventListener("DOMContentLoaded", ()=>{
    const navbar = document.getElementById('Navbar');

    if(navbar) {
        const child = document.createElement("div");
        child.className = "navchild";
        navbar.appendChild(child);
        const research = document.createElement("div");
        research.className = "boxresearch";
        child.appendChild(research);
        const search = document.createElement("input");
        search.type="search";
        search.className = "research";
        research.appendChild(search);
        const logo = document.createElement("i");
        logo.className = "fa-solid fa-magnifying-glass";
        research.appendChild(logo);
        const userbox = document.createElement("span");
        userbox.className = "boxuser";
        child.appendChild(userbox);
        const logoU = document.createElement("i");
        logoU.className = "fa-solid fa-user";
        userbox.appendChild(logoU)
        const boxul = document.createElement("div");
        boxul.className = "boxnav";
        navbar.appendChild(boxul);
        const ulelement = document.createElement("ul");
        ulelement.className = "categorie";
        boxul.appendChild(ulelement);
        const lielement = [
            {name:'popular', url:"index.html"},
            {name:'family',url:"indexf.html"},
            {name:'comedy', url:"indexc.html"},
            {name:'adult',url:"indexa.html"},
            {name:'seduction',url:"indexs.html"},
        ];

        lielement.forEach(({name, url}) => {
            if(name) {
                const list = document.createElement("li");
                list.textContent = name;
                list.addEventListener('click', () =>{
                    window.open(url, '_top');
                })
                ulelement.appendChild(list);
            }
        })
    };
})