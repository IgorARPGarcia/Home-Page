


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
