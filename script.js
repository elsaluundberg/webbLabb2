function showConfirmation() {
 
    const confirmBox = document.getElementById("confirmationBox");

    if (confirmBox) {
    
        confirmBox.style.display = "block";

        confirmBox.style.backgroundColor = "#e8f5e9"; 
        confirmBox.style.border = "2px solid #2e7d32";
        confirmBox.style.padding = "20px";
        confirmBox.style.borderRadius = "8px";
        confirmBox.style.color = "#1b5e20";
        
        confirmBox.scrollIntoView({ behavior: 'smooth' });
    }
}

// Funktion 1a: Ändrar utseendet
function expandButton() {
    const btn = document.getElementById("deal-fab");
    btn.style.transform = "scale(1.1)";      
    btn.style.backgroundColor = "#1b5e20";   
    btn.style.transition = "0.3s";           
}

// Funktion 1b: Återställer utseendet
function shrinkButton() {
    const btn = document.getElementById("deal-fab");
    btn.style.transform = "scale(1)";        
    btn.style.backgroundColor = "#2e7d32";   
}


// Funktion 2a: Skapar en effekt när användaren ska börja skriva
function focusEffect(element) {
    element.style.backgroundColor = "#353f37"; 
    element.style.border = "2px solid #2e7d32"; 
    element.style.outline = "none"; 
    element.style.transition = "0.4s"; 
}

// Funktion 2b: Återställer fältet när användaren klickar någon annanstans
function blurEffect(element) {
    element.style.backgroundColor = "";
    element.style.border = ""; 
}


$(window).on("scroll", function() {
    $(".scroll-animate").each(function() {
        var elementTop = $(this).offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > elementTop + 100) {
            
            $(this).animate({
                opacity: 1,    
                top: "0px"     
            }, 1500);          
        }
    });
});


$(document).ready(function() {

    $("#verksamhet-trigger").on("click", function(e) {
        e.preventDefault(); 
        
        $("#sub-menu-verksamhet").slideToggle("slow");
    });

});

