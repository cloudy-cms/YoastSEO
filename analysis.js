import Blade from '../../blade.js';

var loadScript = () => {
    var script = document.createElement('script');
    script.src = '/main.js';
    script.defer = true;
    script.async = true;
    document.body.append(script);
};

if (document.readyState != 'loading') {
    loadScript();
} else {
    document.addEventListener('DOMContentLoaded', () => loadScript());
}

export default (menu, blade, app) =>
    menu.addItem(item =>
        item
            .setText('Yoast robots.txt report')
            .onClick(() => app.openAfter(new YoastBlade(), blade)));

class YoastBlade extends Blade {
    constructor() {
        super();

        this.setTitle('Yoast SEO report');

        this.setContent('Lorem ipsum dolor sit amet');

        const paper = new Yoast.Paper("Text to analyze", {
            keyword: "analyze",
            // keyword: "",
            // synonyms: "",
            // description: "",
            // title: "",
            // titleWidth: 0,
            // url: "",
            // locale: "en_US",
            // permalink: "",
        });
        const researcher = new Yoast.Researcher(paper);

        console.log(researcher);
    }
}