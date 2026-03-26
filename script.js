
function selectAnswer(el, isCorrect) {
  const options = el.closest('.options').querySelectorAll('li');
  options.forEach(o => { o.classList.remove('correct', 'wrong'); });
  el.classList.add(isCorrect ? 'correct' : 'wrong');
}
function toggleAnswer(btn) {
  const reveal = btn.nextElementSibling;
  if (reveal.style.display === 'block') {
    reveal.style.display = 'none';
    btn.textContent = btn.textContent.replace('Hide', 'Show');
  } else {
    reveal.style.display = 'block';
    btn.textContent = btn.textContent.replace('Show', 'Hide');
  }
}
// Smooth scroll for TOC links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
