

const slider = () =>{
    const slideRef = document.createElement("div");
    const loadingProgress = 0;

    const handleClickNext = () =>{
        let items = slideRef.querySelectorAll(".item");
        slideRef.appendChild(items[0]);
    };

    const handleClickPrev = () => {
        let items = slideRef.querySelectorAll(".item");
        slideRef.prepend(items[items.length - 1]);

    }

    const data = [
        {
            id: 1,
            imagUrl: "./Images/img1.jpg",
            desc: "Some beautiful moons cannot be created without getting creativity.",
            name: "GOOD MORNING EVERYONE",
        },
        {
            id: 2,
            imagUrl: "./Images/img2.jpg",
            desc: "Some beautiful moons cannot be created without getting creativity.",
            name: "GOOD EVENING EVERYONE",
        },
        {
            id: 3,
            imagUrl: "./Images/img3.jpg",
            desc: "Some beautiful moons cannot be created without getting creativity.",
            name: "PRO AMAZED",
        },
        {
            id: 4,
            imagUrl: "./Images/img4.jpg",
            desc: "Some beautiful moons cannot be created without getting creativity.",
            name: "GREAT SESSION",
        },
        {
            id: 5,
            imagUrl: "./Images/img5.jpg",
            desc: "Some beautiful moons cannot be created without getting creativity.",
            name: "EXPLORE CAR RACE",
        },
        {
            id: 6,
            imagUrl: "./Images/img6.jpg",
            desc: "Some beautiful moons cannot be created without getting creativity.",
            name: "EXPLORE CLIMATE",
        },
    ];

    // create a container div
    const container = document.createElement("div");
    container.classList.add('container');

    // create the Loadbar div
    const loadbar = document.createElement("div");
    loadbar.classList.add("loadbar");
    loadbar.style.width = `${loadingProgress}%`

    //Append loader to container
    container.appendChild(loadbar);
    //Append slider div to conatainer
    container.appendChild(slideRef);

    //Create and append items to slider div

    data.forEach((item)=>{
        const slideItem = document.createElement("div");

        slideItem.classList.add("item");
        slideItem.style.backgroundImage = `url(${item.imagUrl})`;

        const content = document.createElement("div");
        content.classList.add("content");

        const name = document.createElement("div");

        name.classList.add("name");
        name.textContent = item.name;

        const des = document.createElement("div");
        des.classList.add("desc");
        des.textContent = item.desc;


        const button = document.createElement("button");
        button.textContent = "See more";

        content.appendChild(name);
        content.appendChild(des);
        content.appendChild(button);
        slideItem.appendChild(content);
        slideRef.appendChild(slideItem);

        //Create the buttons div
        const buttons = document.createElement("div");

        button.classList.add(".buttons");

        // create a prev button
        const prevButton = document.createElement("button");
        prevButton.id = "prev";
        prevButton.addEventListener("click", handleClickPrev);

        const prevIcon = document.createElement("i");
        prevButton.className = "fa-solid fa-angle-left";
        prevButton.appendChild(prevIcon);

        // Create the next Button 
        const nextButton = document.createElement("button");
        nextButton.id = "next";
        nextButton.addEventListener("click", handleClickNext);

        const nextIcon = document.createElement("i");
        nextIcon.className = "fa-solid fa-angle-right";
        nextButton.appendChild(nextIcon);

        // Append button to tho button 
        buttons.appendChild(prevButton)
        buttons.appendChild(nextButton)
        container.appendChild(buttons);

    });

    document.getElementById("root").appendChild(container);

};
slider();