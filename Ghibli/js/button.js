function random(){
    var myrandom=Math.round(Math.random()*11)
    var links=new Array()
    links[0]="onigiri.html"
    links[1]="aji-furai.html"
    links[2]="okayu.html"
    links[3]="breakfast.html"
    links[4]="herring.html"
    links[5]="ramen.html"
    links[6]="howl.html"
    links[7]="poppy.html"
    links[8]="princess.html"
    links[9]="ponyo.html"
    links[10]="spirited-away.html"
    links[11]="kiki.html"
 
    window.location=links[myrandom]
}