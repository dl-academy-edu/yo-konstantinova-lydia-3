const developers = [
    {
        index:0,
        name:"Брендан Эйх",
        work: "специалист в области информатики, программист, технический директор"
    },
    {
        index:2,
        name: "Джеймс Гослинг",
        work: "специалист в области информационных технологий"
    },
    {
        index:3,
        name: "Бьёрн Страуструп",
        work: "программист"
    }
]

const data = [
    {
        name:"JavaScript",
        year: 1995,
        filenameExtensions: "js, mjs",
        influencedBy: ["AWK", "C", "HyperTalk", "Java", "Lua", "Perl", "Python", "Scheme", "Self"],
        affectedBy: ["ActionScript", "AtScript", "CoffeeScript", "Dart", "JScript .NET", "LiveScript", "Objective-J", "Opa", "QML", "Raku", "TypeScript"],
        developerIndex:0,
    },
    {
        name:"Java",
        year: 1995,
        filenameExtensions: "java, class, jar, jad, jmod",
        influencedBy: ["C++", "Си", "Ада", "Simula 67", "Smalltalk", "Objective-C", "Object Pascal", "Оберон", "Eiffel", "Модула-3", "Mesa", "Симула", "C#", "UCSD Pascal"],
        affectedBy: ["Ada 2005", "BeanShell", "C#", "Chapel", "Clojure", "ECMAScript", "Fantom", "Gambas", "Groovy", "Hack", "Haxe", "J#", "Kotlin", "PHP", "Python", "Scala", "Seed7", "Vala"],
        developerIndex: 2,
    },
    {
        name:"C++",
        year: 1983,
        filenameExtensions: "cc, cpp, cxx, c, c++, h, hpp, hh, hxx, h++",
        influencedBy: ["C++", "Си", "Ада", "Simula 67", "Smalltalk", "Objective-C", "Object Pascal", "Оберон", "Eiffel", "Модула-3", "Mesa", "Симула", "C#", "UCSD Pascal"],
        affectedBy: ["Ada", "C", "Modula-2", "Simula"],
        developerIndex: 3,
    },
];

let startCounter = 10;

function showPreloadText () {
    console.log("Через 10 секунд будет выведена информация.")
}

function runCounter () {
    const timer = setInterval(function() {
        startCounter--;
        console.log(`${startCounter} Ожидание...`);
        if (startCounter === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function showJsText () {
    var programmingLanguage = data[0].name;
    var yearOfCreation = data[0].year;
    var developer = developers[0].name;
    var developerWork = developers[0].work;
    var fileNames = Object.values(data[0])[2];
    var firstFileExtantion = fileNames.split(' ')[0];
    var secondFileExtantion = fileNames.split(' ')[1];
    var influencedByList = Object.values(data[0])[3];
    var lengthOfInfluencedByList = influencedByList.length;
    var influencedByListJoined = influencedByList.join(', ');
    var affectedByList = Object.values(data[0])[4].slice(0, 4);
    var affectedByListJoined = affectedByList.join(', ');
    console.log(`${programmingLanguage} - язык программирования, выпущенный в ${yearOfCreation} году. Автором языка стал ${developer} - ${developerWork}. Файлы программ, написанных на ${programmingLanguage}, могут иметь расширения .${firstFileExtantion} .${secondFileExtantion}. ${programmingLanguage} испытал влияние ${lengthOfInfluencedByList} языков программирования: ${influencedByListJoined}. ${programmingLanguage} повлиял на ${affectedByListJoined}.`);
}

function showJavaText () {
    var programmingLanguage = data[1].name;
    var yearOfCreation = data[1].year;
    var developer = developers[1].name;
    var developerWork = developers[1].work;
    var fileNames = Object.values(data[1])[2];
    var firstFileExtantion = fileNames.split(' ')[0];
    var secondFileExtantion = fileNames.split(' ')[1];
    var thirdFileExtantion = fileNames.split(' ')[2];
    var fourthFileExtantion = fileNames.split(' ')[3];
    var fifthFileExtantion = fileNames.split(' ')[4];
    var influencedByList = Object.values(data[1])[3];
    var lengthOfInfluencedByList = influencedByList.length;
    var influencedByListJoined = influencedByList.join(', ');
    var affectedByList = Object.values(data[1])[4].slice(0,4);
    var affectedByListJoined = affectedByList.join(', ');
    console.log(`${programmingLanguage} - язык программирования, выпущенный в ${yearOfCreation} году. Автором языка стал ${developer} - ${developerWork}. Файлы программ, написанных на ${programmingLanguage}, могут иметь расширения .${firstFileExtantion} .${secondFileExtantion} .${thirdFileExtantion} .${fourthFileExtantion} .${fifthFileExtantion}. ${programmingLanguage} испытал влияние ${lengthOfInfluencedByList} языков программирования: ${influencedByListJoined}. ${programmingLanguage} повлиял на ${affectedByListJoined}.`);
}

function showCplusplusText () {
    var programmingLanguage = data[2].name;
    var yearOfCreation = data[2].year;
    var developer = developers[2].name;
    var developerWork = developers[2].work;
    var fileNames = Object.values(data[2])[2];
    var firstFileExtantion = fileNames.split(' ')[0];
    var secondFileExtantion = fileNames.split(' ')[1];
    var thirdFileExtantion = fileNames.split(' ')[2];
    var fourthFileExtantion = fileNames.split(' ')[3];
    var fifthFileExtantion = fileNames.split(' ')[4];
    var sixthFileExtantion = fileNames.split(' ')[5];
    var seventhFileExtantion = fileNames.split(' ')[6];
    var eightFileExtantion = fileNames.split(' ')[7];
    var ninethFileExtantion = fileNames.split(' ')[8];
    var tenthFileExtantion = fileNames.split(' ')[9];
    var influencedByList = Object.values(data[2])[3];
    var lengthOfInfluencedByList = influencedByList.length;
    var influencedByListJoined = influencedByList.join(', ');
    var affectedByList = Object.values(data[2])[4].slice(0,4);
    var affectedByListJoined = affectedByList.join(', ');
    console.log(`${programmingLanguage} - язык программирования, выпущенный в ${yearOfCreation} году. Автором языка стал ${developer} - ${developerWork}. Файлы программ, написанных на ${programmingLanguage}, могут иметь расширения .${firstFileExtantion} .${secondFileExtantion} .${thirdFileExtantion} .${fourthFileExtantion} .${fifthFileExtantion} .${sixthFileExtantion} .${seventhFileExtantion} .${eightFileExtantion} .${ninethFileExtantion} .${tenthFileExtantion}. ${programmingLanguage} испытал влияние ${lengthOfInfluencedByList} языков программирования: ${influencedByListJoined}. ${programmingLanguage} повлиял на ${affectedByListJoined}.`);
}

showPreloadText();
runCounter();
setTimeout(showJsText, 11000);
setTimeout(showJavaText, 11000);
setTimeout(showCplusplusText, 11000);