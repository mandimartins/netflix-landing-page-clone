import './assets/sass/base.scss';
import './assets/images/tv.png';

window.onload = () => {
  const faqNodeList = document.querySelectorAll('.faq-question');
  const faqButtons = Array.from(faqNodeList);

  const answerNodeList = document.querySelectorAll('.faq-answer');
  const faqAnswers = Array.from(answerNodeList);

  faqAnswers.map((faqAnswer) => {
    faqAnswer.style.display = 'none';
  });

  let toggleButton = false;

  faqButtons.map((faqButton) => {
    faqButton.addEventListener('click', (e) => {
      e.preventDefault();
      const faqAnswer = e.target.nextElementSibling;

      if (toggleButton) {
        faqAnswer.style.display = 'none';
        toggleButton = !toggleButton;
      } else {
        faqAnswer.style.display = 'block';
        toggleButton = !toggleButton;
      }
    });
  });
};
