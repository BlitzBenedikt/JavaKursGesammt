// JavaScript für die Java Kurs Website
document.addEventListener('DOMContentLoaded', function() {
    console.log('Java Kurs Übersichtsseite geladen');
    
    // Animation für die Themenkarten
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach((card, index) => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.opacity = '1';
        }, 100 * index);
    });
});