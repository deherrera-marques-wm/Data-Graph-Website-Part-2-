function run1() {
    if (document.getElementById("pic1").src == "http://vignette2.wikia.nocookie.net/vsbattles/images/a/ae/Futurama-season-6-20100609103053811.jpg/revision/latest?cb=20141120105346") {
        document.getElementById("pic1").src = "http://orig06.deviantart.net/a78c/f/2014/110/8/1/dragon_3_by_vargasni-d7f8j8s.jpg"
    }
    else{
        document.getElementById("pic1").src = "http://vignette2.wikia.nocookie.net/vsbattles/images/a/ae/Futurama-season-6-20100609103053811.jpg/revision/latest?cb=20141120105346"
    }
}
function run2() {
    if (document.getElementById("pic2").src == "http://www.smashbros.com/images/og/pikachu.jpg") {
        document.getElementById("pic2").src = "http://i.imgur.com/1tAuNRp.png"
    }
    else{
        document.getElementById("pic2").src = "http://www.smashbros.com/images/og/pikachu.jpg"
    }
}
function run3() {
    if (document.getElementById("pic3").src == "https://upload.wikimedia.org/wikipedia/commons/8/86/Stephen_Curry_(16640524995).jpg") {
        document.getElementById("pic3").src = "http://ilovebeingchristian.com/wp-content/uploads/shark-attack-surfer-viehd-243576.jpg"
    }
    else{
        document.getElementById("pic3").src = "https://upload.wikimedia.org/wikipedia/commons/8/86/Stephen_Curry_(16640524995).jpg"
    }
}
function run4() {
    if (document.getElementById("pic4").src == "http://7-themes.com/data_images/out/76/7031875-colored-lightning-vains.jpg") {
        document.getElementById("pic4").src = "http://www.picgifs.com/glitter-gifs/d/dr-pepper/picgifs-dr-pepper-8288664.gif"
    }
    else{
        document.getElementById("pic4").src = "http://7-themes.com/data_images/out/76/7031875-colored-lightning-vains.jpg"
    }
}
function run5() {
    if (document.getElementById("pic5").src == "http://img07.deviantart.net/bb4a/i/2013/203/0/e/new_england_patriots_by_jinx1028-d6ep9q6.png") {
        document.getElementById("pic5").src = "http://i.imgur.com/DfQqM.gif"
    }
    else{
        document.getElementById("pic5").src = "http://img07.deviantart.net/bb4a/i/2013/203/0/e/new_england_patriots_by_jinx1028-d6ep9q6.png"
    }
}
function run6() {
    if (document.getElementById("pic6").src == "http://media2.giphy.com/media/Tq2tjn4NFIqxa/giphy.gif") {
        document.getElementById("pic6").src = "http://i1-news.softpedia-static.com/images/news2/Coca-Cola-Puma-and-Others-Are-Running-GIF-Ads-on-Tumblr-Where-Else-5.gif"
    }
    else{
        document.getElementById("pic6").src = "http://media2.giphy.com/media/Tq2tjn4NFIqxa/giphy.gif"
    }
}
function run7() {
    if (document.getElementById("pic7").src == "http://data.whicdn.com/images/83878068/superthumb.jpg") {
        document.getElementById("pic7").src = "http://www.michaelbransonsmith.net/blog/wp-content/uploads/2012/09/DS106-explodes-chicken.gif"
    }
    else{
        document.getElementById("pic7").src = "http://data.whicdn.com/images/83878068/superthumb.jpg"
    }
}
function run8() {
    if (document.getElementById("pic8").src == "http://vignette2.wikia.nocookie.net/icarly/images/1/18/Funny-gifs-when-no-ones-around_large.gif/revision/latest?cb=20120818131131") {
        document.getElementById("pic8").src = "http://funnystack.com/wp-content/uploads/2014/03/Funny-GIF-25.gif"
    }
    else{
        document.getElementById("pic8").src = "http://vignette2.wikia.nocookie.net/icarly/images/1/18/Funny-gifs-when-no-ones-around_large.gif/revision/latest?cb=20120818131131"
    }
}
function run9() {
    if (document.getElementById("pic9").src == "https://v.cdn.vine.co/r/avatars/BF7659E8091101425730857955328_21e0e678c21.1.2.jpg?versionId=y.C72aopwU_yRRwRmm4DNB8dfOz1m3zu") {
        document.getElementById("pic9").src = "http://funnystack.com/wp-content/uploads/2014/03/Funny-GIF-15.gif"
    }
    else{
        document.getElementById("pic9").src = "https://v.cdn.vine.co/r/avatars/BF7659E8091101425730857955328_21e0e678c21.1.2.jpg?versionId=y.C72aopwU_yRRwRmm4DNB8dfOz1m3zu"
    }
}

function prompt1(){
 var bio1 = prompt("Enter a new description for this image");
    document.getElementById("bio1").innerHTML = bio1;
}
function prompt2(){
    var bio2 = prompt("Enter a new description for this image");
    document.getElementById("bio2").innerHTML = bio2;
}
function prompt3(){
    var bio3 = prompt("Enter a new description for this image");
    document.getElementById("bio3").innerHTML = bio3;
}
function prompt4(){
    var bio4 = prompt("Enter a new description for this image");
    document.getElementById("bio4").innerHTML = bio4;
}
function prompt5(){
    var bio5 = prompt("Enter a new description for this image");
    document.getElementById("bio5").innerHTML = bio5;
}
function prompt6(){
    var bio6 = prompt("Enter a new description for this image");
    document.getElementById("bio6").innerHTML = bio6;
}
function prompt7(){
    var bio7 = prompt("Enter a new description for this image");
    document.getElementById("bio7").innerHTML = bio7;
}
function prompt8(){
    var bio8 = prompt("Enter a new description for this image");
    document.getElementById("bio8").innerHTML = bio8;
}
function prompt9(){
    var bio9 = prompt("Enter a new description for this image");
    document.getElementById("bio9").innerHTML = bio9;
}

google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Player', 'Freethrow Percentage',],
        ['Steve Nash', 0.904085],
        ['Mark Price', 0.903895],
        ['Rick Barry', 0.899835],
        ['Peja Stojakovic', 0.8948],
        ['Ray Allen', 0.894115]
    ]);

    var options = {
        title: 'Top 5 best freethrow percentages',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Freethrow Percentage',
            minValue: 0
        },
        vAxis: {
            title: 'Player'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}

google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic1);

function drawBasic1() {

    var data = google.visualization.arrayToDataTable([
        ['Player', '3 point Percentage',],
        ['Luke Babbitt', 0.513],
        ['Kyle Korver', 0.492],
        ['Eric Gordon', 0.448],
        ['Stephen Curry', 0.443],
        ['Klay Thompson', 0.439]
    ]);

    var options = {
        title: 'Top 5 best 3 point shooters',
        chartArea: {width: '50%'},
        hAxis: {
            title: '3 point percentage',
            minValue: 0
        },
        vAxis: {
            title: 'Player'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div1'));

    chart.draw(data, options);
}
$(document).ready(function(){
    $('imageDivName').click(function(){
        $("imageDivName").attributes('src',"ImageSr")
    });
});