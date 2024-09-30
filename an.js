function changeMessage() {
    const surpriseMessage = document.getElementById('surprise-message');
    surpriseMessage.classList.toggle('hidden');
    
    // Trigger flashy fireworks
    createFireworks();
  }
  
  function createFireworks() {
    const background = document.querySelector('.fireworks-background');
    
    for (let i = 0; i < 10; i++) {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      
      // Set random position for each firework
      firework.style.top = `${Math.random() * 100}%`;
      firework.style.left = `${Math.random() * 100}%`;
      
      // Randomize size and color change
      firework.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`;
      firework.style.backgroundColor = getRandomColor();
      
      background.appendChild(firework);
      
      // Remove firework after animation ends
      setTimeout(() => {
        firework.remove();
      }, 1500);
    }
  }
  
  // Helper function to get random colors
  function getRandomColor() {
    const colors = ['#ff66b3', '#ffcc00', '#ff3300', '#66ffcc', '#3366ff'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  