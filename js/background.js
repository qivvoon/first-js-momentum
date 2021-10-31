const backgroundButton = document.getElementById("background-button");
const imges = ["https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F270ED4485230106434" , "https://www.wallpapertip.com/wmimgs/42-421711_background-disney-castle-cartoon.jpg", "https://i.pinimg.com/originals/82/86/ae/8286ae293753a094d07d43d24b00735a.jpg", "https://mblogthumb-phinf.pstatic.net/MjAxODA2MTdfMjE2/MDAxNTI5MTc0MDkyNTg0.spHAuMhz5n9et46VzjKhFDV3usp93-BpNwSteobonDUg.V8wRMUpQIAY4N1T3vlnQWDmX6cI9Wqd_XkaXEebF684g.PNG.sinnam88/%EC%A7%80%EB%B8%8C%EB%A6%AC_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_%EA%B3%A0%ED%99%94%EC%A7%88__%2832%29.png?type=w800"];

function backgroundImgChange() {
    const chosenImg = imges[Math.floor(Math.random() * imges.length)];
    document.body.style.background = `url(${chosenImg})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}

backgroundImgChange()
backgroundButton.addEventListener("click", backgroundImgChange);


// const bgImg = document.createElement("img");

// bgImg.src = `img/${chosenImg}`;

// document.body.(bgImg);

