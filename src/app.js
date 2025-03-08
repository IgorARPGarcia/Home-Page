var emailInput = document.querySelector(".inputConfig");
var subscribeButton = document.querySelector(".buttonConfig");
var emailData = [];
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
subscribeButton.addEventListener("click", function () {
    var email = emailInput.value.trim();
    if (isValidEmail(email)) {
        emailData.push({ email: email });
        console.log("Email válido adicionado:", emailData);
        emailInput.value = "";
        alert("Email cadastrado com sucesso! ✅");
    }
    else {
        alert("Por favor, insira um email válido! ❌");
    }
});

var reviews = [
    {
        name: "John Yu.",
        reviewText: "I'm amazed by the quality and style of the clothes I received from Shop.co. The attention to detail and high-quality materials really make a difference. I’m definitely a loyal customer now!",
    },
    {
        name: "Sarah M.",
        reviewText: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
        name: "Alex K.",
        reviewText: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
        name: "James L.",
        reviewText: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
        name: "Agatha P.",
        reviewText: "Absolutely love the clothes I got from Shop.co! The quality is fantastic, and the pieces fit my style perfectly. I’ll definitely be coming back for more!",
    },
];

var reviewsCarousel = document.getElementById('reviewsCarousel');
var leftArrow = document.querySelector('.leftArrow');
var rightArrow = document.querySelector('.rightArrow');

function rotateReviews(direction) {
    if (direction === 'left') {
        var firstReview = reviewsCarousel.firstElementChild;
        reviewsCarousel.appendChild(firstReview);
    }
    else {
        var lastReview = reviewsCarousel.lastElementChild;
        reviewsCarousel.insertBefore(lastReview, reviewsCarousel.firstElementChild);
    }
}
leftArrow.addEventListener('click', function () { return rotateReviews('left'); });
rightArrow.addEventListener('click', function () { return rotateReviews('right'); });
