const emailInput = document.querySelector(".inputConfig") as HTMLInputElement;
const subscribeButton = document.querySelector(".buttonConfig") as HTMLButtonElement;

const emailData: { email: string }[] = [];

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

subscribeButton.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (isValidEmail(email)) {
        emailData.push({ email });
        console.log("Email válido adicionado:", emailData);
        emailInput.value = "";
        alert("Email cadastrado com sucesso! ✅");
    } else {
        alert("Por favor, insira um email válido! ❌");
    }
});

interface ReviewData {
    name: string;
    reviewText: string;
  }
  
  const reviews: ReviewData[] = [
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
  
  const reviewsCarousel = document.getElementById('reviewsCarousel') as HTMLElement;
  const leftArrow = document.querySelector('.leftArrow') as HTMLButtonElement;
  const rightArrow = document.querySelector('.rightArrow') as HTMLButtonElement;
  
  function rotateReviews(direction: 'left' | 'right') {
    if (direction === 'left') {
      const firstReview = reviewsCarousel.firstElementChild!;
      reviewsCarousel.appendChild(firstReview);
    } else {
      const lastReview = reviewsCarousel.lastElementChild!;
      reviewsCarousel.insertBefore(lastReview, reviewsCarousel.firstElementChild);
    }
  }
  
  leftArrow.addEventListener('click', () => rotateReviews('left'));
  rightArrow.addEventListener('click', () => rotateReviews('right'));
