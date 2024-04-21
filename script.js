

let slideIndex = 0;
        showSlide();
        function currentSlide(num){
            let slide = document.getElementsByClassName("mySlide");
            for(i=0;i<slide.length;i++){
                slide[i].style.display = "none";
            }
            slide[num].style.display="block";
            slideIndex=num;
        }
        function plusSlides(num){
            // alert("yes");
            var number = slideIndex+num;
            // console.log(number);
            let slidee = document.getElementsByClassName("mySlide");
            for(i=0;i<slidee.length;i++){
                slidee[i].style.display = "none";
            }
            if(num==-1 && slideIndex==1){
                slidee[2].style.display="block";
                slideIndex+=2;
                // console.log("left");
            }
            else if(num==1 && slideIndex==3){
                slidee[0].style.display="block";
                slideIndex=1;
                // console.log("right");
            }
            else{
                // console.log("ohh noo");
                slidee[number-1].style.display="block";
                slideIndex=number;
            }
        }
        
        function showSlide(){
            let i=0;
            let slides = document.getElementsByClassName("mySlide");
            let dots = document.getElementsByClassName("dot");
            for(i=0;i<slides.length;i++){
                slides[i].style.display = "none";
            }
            slideIndex++;
            if(slideIndex>slides.length){
                slideIndex=1;
            }
            for(i=0;i<dots.length;i++){
                dots[i].className=dots[i].className.replace("active","");
            }
            slides[slideIndex-1].style.display="block";
            dots[slideIndex-1].className+= " active";
            setTimeout(showSlide,5000);
        }