class Quiz {
constructor(){

    this.accessCode1 = "ADA LOVENLECE";
    this.accessCode2 = "JAPAN";
    this.accessCode3 = "CHARLES BABBAGE";

    
    this.access1 = createInput("Code1")
    this.access1.position(100,90);
    this.access1.style('background', 'white');  

    this.button1 = createButton('Check');
    this.button1.position(100,120);
    this.button1.style('background', 'lightgrey');    

    this.access2 = createInput("Code1")
    this.access2.position(700,190);
    this.access2.style('background', 'white');  

    this.button2 = createButton('Check');
    this.button2.position(700,220);
    this.button2.style('background', 'lightgrey');

    this.access3 = createInput("Code1")
    this.access3.position(100,290);
    this.access3.style('background', 'white');  

     this.button3 = createButton('Check');
     this.button3.position(100,320);
     this.button3.style('background', 'lightgrey');

}

 clues() {
    
    fill("white")
    textSize(15)
    text("A D D L V O E L E E", 100,50)
    fill("lightblue")
    text("Question: Name the person who created coding !!", 100,70)

    fill("white")
    textSize(15)
    text("A J N A P", 700,150)
    fill("lightblue")
    text("Question: name the country which is known as land of rising Sun !!", 700,170)

    fill("white")
    textSize(15)
    text("C R H A E L S B B A B A G E", 100,250)
    fill("lightblue")
    text("Question: Who invented computer !!", 100,270)

}

display(){
    
    this.button1.mousePressed(() => {
        if(system.authenticate(accessCode1,this.access1.value())){
            this.button1.hide();
            this.access1.hide();
            score++;
        }
    });

    this.button2.mousePressed(() => {
        if(system.authenticate(accessCode2,this.access2.value())){
            this.button2.hide();
            this.access2.hide();
            score++;
        }
    });

    this.button3.mousePressed(() => {
        if(system.authenticate(accessCode3,this.access3.value())){
      
            this.button3.hide();
             this.access3.hide();
             score++;
            }
        });
    }

}