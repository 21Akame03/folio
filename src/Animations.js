 // normal version 
 function normal() {
    let tl = anime.timeline({
        easing: "easeOutQuad",
        duration: 1000,
        loop: true,
        delay: 500,
        endDelay: 500,
        direction: "alternate"
    });

    tl.add({
        targets: '#main div',
        width: "95%",
        backgroundColor: "rgb(33, 33, 33)",
        borderRadius: "0px",
        direction: "alternate",
        delay: anime.stagger(100)
    });

    tl.add({
        targets: "#Hibutton",
        backgroundColor: "rgb(33, 33, 33)",
        color: "rgb(255, 255, 255)",
        duration: 500
    })

    tl.add({
        targets: '#main div',
        width: "85%",
        borderRadius: "3px",
        backgroundColor: "rgb(35, 20, 143)",
        delay: anime.stagger(100)
    });

    tl.add({
        targets: "#Hibutton",
        backgroundColor: "rgb(35, 20, 143)",
        color: "rgb(255, 255, 255)"
    })

    tl.add({
        targets: '#main div',
        width: "95%",
        borderRadius: "5px",
        backgroundColor: "rgb(60, 60, 60)",
        delay: anime.stagger(100)
    });

    tl.add({
        targets: "#Hibutton",
        backgroundColor: "rgb(60, 60, 60)",
        color: "rgb(255, 255, 255)"
    })

    tl.add({
        targets: '#main div',
        width: "85%",
        borderRadius: "5px",
        backgroundColor: "rgb(92, 10, 10)",
        delay: anime.stagger(100)
    });

    tl.add({
        targets: "#Hibutton",
        backgroundColor: "rgb(92, 10, 10)",
        color: "rgb(255, 255, 255)"
    })

    tl.add({
        targets: '#main div',
        width: "95%",
        borderRadius: "5px",
        backgroundColor: "rgb(24, 24, 24)",
        delay: anime.stagger(100)
    });

    tl.add({
        targets: "#Hibutton",
        backgroundColor: "rgb(24, 24, 24)",
        color: "rgb(255, 255, 255)"
    });

    
    // buttons and text
    anime({
        targets: 'h1, #name-intro, #Hibutton',
        easing: "easeInOutQuad",
        top: "20%",
        opacity: 1,
        duration: 2000
    }, "-1600");

    anime({
        targets: "#Hibutton",
        easing: "easeInOutSine",
        borderRadius: "20px",
        fontFamily: 'Gill Sans',
        fontStyle: "italic",
        backgroundColor: "rgb(196, 29, 46)"
    }, "-6");
}





// on click for projects
let rotateOnClick = anime({
    targets: 'section div',
    borderRadius: "25px",
    scaleY: "2",
    scaleX: "1",
    translateX: "40%",
    rotate: "45deg",
    duration: 5000,
    autoplay: false
},);


function showIntro () { 
    let tl = anime.timeline({
        easing: "easeInOutQuad",
        duration: 750,
    });

    tl.add({
        targets: "#Hibutton",
        opacity: 0,
    });

    tl.add({
        targets: "#intro",
        opacity: 1,
        endDelay: 5000
    });

    anime({
        targets: ".webgl",
        opacity: "50%",
        mixBlendMode: "none",
        easing: "easeInOutQuart",
        translateY: "105vh",

    })

    anime({
        targets: "#main > div",
        easing: "easeInOutSine",
        opacity: 0.1,
        duration: 5000
    })
}


let introbutton = document.getElementById("Hibutton")
introbutton.addEventListener("mousedown", () => {
    rotateOnClick.play();
    showIntro();
});
