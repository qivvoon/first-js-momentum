const quotes = [
    {
        enQuote: "Experience never gets ole. Experience never goes out of fashion. - Movie <The intern>",
        krQuote: "경험은 결코 늙지 않아요. 경험은 결코 시대에 뒤떨어지지 않아요. - 영화 <인턴>",
    },
    {
        enQuote: "Prejudice prevents me from loving others, Pride makes no one else love me. - Movie <Pride & prejudice>",
        krQuote: "편견은 내가 다른사람을 사랑하지 못하게 하고, 오만은 다른 사람이 나를 사랑할 수 없게 만든다. - 영화 <오만과 편견>",
    },
    {
        enQuote: "Great things are done by a series of small thing brought together. - Vincent van Gogh",
        krQuote: "위대한 일들은 작은 일들로 이루어진다. - 빈센드 반 고흐",
    },
    {
        enQuote: "Even the darkest night will end and the sun will rise. - Vincent van Gogh",
        krQuote: "가장 어두운 밤도 언젠가는 끝이나고 해는 떠오를 것이다. - 빈센트 반 고흐",
    },
    {
        enQuote: "The shortest answer is doing the thing. - Ernest Miller Hemingway",
        krQuote: "가장 간결한 대답은 행동하는 것이다. - 어니스트 헤밍웨이",
    },
    {
        enQuote: "If I have lost confidence in myself, I have the universe against me. - Ralph Waldo Emerson",
        krQuote: "내 자신에 대한 자신감을 잃으면, 온 세상이 나의 적이 된다. - 랄프 왈도 에머슨",
    },
    {
        enQuote: "Most people are about as happy as they make up their minds to be. - Abraham Lincoln",
        krQuote: "대부분의 사람들은 자신이 마음먹은 만큼만 행복하다. - 에이브러햄 링컨",
    },
    {
        enQuote: "Courage is doing what you're afraid to do. There can be no courage unless you're scared. - Eddie Rickenbacher",
        krQuote: "용기란 두려워하는 것을 하는 것이다. 두렵지 않으면 용기도 없다. - 에디 리켄배커",
    },
    {
        enQuote: "May you live all the days of your life. - Jonathan Swift",
        krQuote: "생애 주어진 모든 날들이 알찬 삶이 되기를. - 조나단 스위프트",
    },
    {
        enQuote: "No one can make you feel inferior without your consent. - Eleanor Roosevelt",
        krQuote: "그 누구도 당신의 동의없이 당신을 열등하다고 느끼게 할 수 없다. - 엘리너 루스벨트",
    },
    {
        enQuote: "Kites rise highest against the wind - not with it. - Sir Winston Churchill",
        krQuote: "연은 순풍이 아니라 역풍에 가장 높이 난다. - 윈스턴 처칠",
    },
    {
        enQuote: "Respect yourself and others will respect you. - Confucius",
        krQuote: "스스로를 존경하면 다른 사람도 당신을 존경할 것이다. - 공자",
    },
]

const enQuote = document.querySelector("#quote span:first-child");
const krQuote = document.querySelector("#quote span:last-child");
const todayQuote =  quotes[Math.floor(Math.random() * quotes.length)];

enQuote.innerText = todayQuote.enQuote;
krQuote.innerText = todayQuote.krQuote;


