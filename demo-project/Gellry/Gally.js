const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        // active button change
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        items.forEach(item => {

            if(filter === "all"){
                item.style.display = "block";
            }
            else{
                if(item.classList.contains(filter)){
                    item.style.display = "block";
                }else{
                    item.style.display = "none";
                }
            }

        });

    });

});