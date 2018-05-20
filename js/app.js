var initalCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://github.com/udacity/ud989-cat-clicker-ko-starter/tree/master/img',
        nickname: ["Cuco"],
    },
    {
        clickCount: 0,
        name: 'Johan',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'https://github.com/udacity/ud989-cat-clicker-ko-starter/tree/master/img',
        nickname: ["Tito"],
    },
    {
        clickCount: 0,
        name: 'Cricket',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttribution: 'https://github.com/udacity/ud989-cat-clicker-ko-starter/tree/master/img',
        nickname: ["Coco"],
    },
    {
        clickCount: 0,
        name: 'Kuchiki',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'https://github.com/udacity/ud989-cat-clicker-ko-starter/tree/master/img',
        nickname: ["Garabato"],
    },
    {
        clickCount: 0,
        name: 'Ichigo',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttribution: 'https://github.com/udacity/ud989-cat-clicker-ko-starter/tree/master/img',
        nickname: ["El Flecha"],
    },

];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickname = ko.observableArray(data.nickname);

    // this.testArray = ko.observableArray(["Cuco","Tato","Garabato"]);

    this.catLevel = ko.computed(function() {
        if (this.clickCount() <= 10) {
            return "Infant";
        }
        else if (this.clickCount() > 10 && this.clickCount() <= 50) {
            return "Teen";
        }
        else {
            return "Adult"
        }
    }, this);

};

var ViewModel = function() {

    var self = this;

    this.catList = ko.observable([]);

    initalCats.forEach(function(catItem){
        self.catList().push(new Cat(catItem));
    });

    this.currentCat = ko.observable( self.catList()[0] );

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.changeCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };

};


ko.applyBindings(new ViewModel());
