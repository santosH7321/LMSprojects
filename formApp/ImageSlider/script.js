

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
            imagUrl: "./Images/colorPhoto.jpeg",
            desc: "Some beautiful moons cannot be created without getting creativity.",
            name: "EXPLORE MOON ART",
        },
        {
            id: 2,
            imagUrl: "./Images/imaging.jpeg.jpeg",
            desc: "Some beautiful moons cannot be created without getting creativity.",
            name: "EXPLORE MOON ART",
        },
        {
            id: 3,
            imagUrl: "./Images/invertedImage.jpeg.jpeg",
            desc: "Some beautiful moons cannot be created without getting creativity.",
            name: "EXPLORE MOON ART",
        },
        {
            id: 4,
            imagUrl: "./Images/manyColor.jpeg.jpeg",
            desc: "Some beautiful moons cannot be created without getting creativity.",
            name: "EXPLORE MOON ART",
        },
        {
            id: 5,
            imagUrl: "./Images/simplePaint.jpeg.jpeg",
            desc: "Some beautiful moons cannot be created without getting creativity.",
            name: "EXPLORE MOON ART",
        },
        {
            id: 6,
            imagUrl: "./Images/withLaptop.jpeg.jpeg.jpeg",
            desc: "Some beautiful moons cannot be created without getting creativity.",
            name: "EXPLORE MOON ART",
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
        des.classList.add("des");
        des.textContent = item.desc;

    });

    document.getElementById("root").appendChild(container);

};
slider();