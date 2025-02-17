// Definindo a classe para cada review
var Review = /** @class */ (function () {
    function Review() {
    }
    // Função para setar as classes de ativo, anterior e próxima
    Review.setActiveReview = function (index) {
        Review.reviews.forEach(function (review, i) {
            review.classList.remove('active', 'prev', 'next');
            if (i === index) {
                review.classList.add('active');
            }
            else if (i === (index - 1 + Review.totalReviews) % Review.totalReviews) {
                review.classList.add('prev');
            }
            else if (i === (index + 1) % Review.totalReviews) {
                review.classList.add('next');
            }
        });
    };
    // Inicializa as setas
    Review.setupArrows = function () {
        var leftArrow = document.querySelector('.leftArrow');
        var rightArrow = document.querySelector('.rightArrow');
        leftArrow.addEventListener('click', function () {
            Review.currentIndex = (Review.currentIndex - 1 + Review.totalReviews) % Review.totalReviews;
            Review.setActiveReview(Review.currentIndex);
        });
        rightArrow.addEventListener('click', function () {
            Review.currentIndex = (Review.currentIndex + 1) % Review.totalReviews;
            Review.setActiveReview(Review.currentIndex);
        });
    };
    // Função de inicialização
    Review.initialize = function () {
        Review.setActiveReview(Review.currentIndex);
        Review.setupArrows();
    };
    Review.currentIndex = 0;
    Review.reviews = document.querySelectorAll('.boxReview');
    Review.totalReviews = Review.reviews.length;
    return Review;
}());
// Inicializando a funcionalidade
document.addEventListener('DOMContentLoaded', function () {
    Review.initialize();
});
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
