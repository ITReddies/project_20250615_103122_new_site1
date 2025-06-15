console.log(window.innerWidth);

window.addEventListener('resize', () => {
  console.log(`Viewport: ${window.innerWidth}px × ${window.innerHeight}px`);
});