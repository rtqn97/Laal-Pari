document.addEventListener('DOMContentLoaded', () => {
  // Initialize elements
  const app = document.getElementById('app');
  const bgMusic = new Audio('Sambodhan.mp3');
  bgMusic.volume = 0.3;
  bgMusic.loop = true;

  // Create all sections
  const sections = [
    createIntroSection(),
    ...createStoryPages(),
    createLetterSection(),
    createBottleSection(),
    createRosesSection(),
    createGoodbyeSection()
  ];

  // Add to DOM
  sections.forEach(section => app.appendChild(section));

  // Start music on interaction
  document.addEventListener('click', () => {
    bgMusic.play().catch(e => console.log("Audio error:", e));
  }, { once: true });

  // Helper functions
  function createIntroSection() {
    const section = document.createElement('div');
    section.className = 'section';
    section.id = 'intro-section';
    section.innerHTML = `
      <p>"Before you leave forever, just give me a few moments of your time..."</p>
      <p>—zeroZERO</p>
      <div style="margin-top: 40px;">
        <button id="begin-btn" class="intro-btn">Begin</button>
        <button id="later-btn" class="intro-btn">Later</button>
      </div>
    `;
    
    document.getElementById('begin-btn').addEventListener('click', () => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    });
    
    document.getElementById('later-btn').addEventListener('click', () => {
      document.querySelector('#intro-section p').textContent = 
        'Okey No Worries Dear, Feel Free to Reach Out Again Whenever You Are Ready';
      document.querySelector('.intro-buttons').style.display = 'none';
    });
    
    return section;
  }

  function createStoryPages() {
    const texts = [
      "I wasn't perfect... I never was.",
      "But the moment I met you, I wanted to be better.",
      "Then I failed you... and I hate that I did.",
      "I didn't lose you... I pushed you away.",
      "And now I'm standing here—asking for one chance to say sorry.",
      "Not to erase the past, but to tell you it was real to me.",
      "If you've made it this far... thank you for still caring.",
      "Sorry I couldn't meet your expectations. I just want you to stay happy, keep progressing, and be wise while taking decisions in the future."
    ];

    return texts.map(text => {
      const page = document.createElement('div');
      page.className = 'section story-page';
      page.textContent = text;
      return page;
    });
  }

  function createLetterSection() {
    const section = document.createElement('div');
    section.className = 'section';
    section.id = 'letter-section';
    section.innerHTML = '<div id="letter-content"></div>';
    
    // Typewriter effect
    const content = `Dear Laal Pari,

I know I'm the last person you want to hear from.

But if this letter ever reaches your heart, even for a second, just know—I'm truly sorry. I wasn't enough. Not strong enough to understand you, not wise enough to protect what we had, and not calm enough to hold you when I should have. You didn't deserve the silence. You didn't deserve the carelessness. And yet, you gave me kindness anyway. That's what hurts the most.

I remember the way you searched for me like the world was Only Me For You. And I remember the day it stopped—because of me.

If I could go back, I would fix every moment I failed. But time doesn't rewind... So here I am, hoping my words mean something now.

Don't forgive me because I asked. Forgive me only if your heart ever tells you it's okay to heal. And Move On.

I was never ungrateful. Make your future bright and take care.

—zeroZERO*`;

    let i = 0;
    const speed = 60;
    
    function typeWriter() {
      if (i < content.length) {
        document.getElementById('letter-content').innerHTML += content.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    
    // Start when section is visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        typeWriter();
        observer.disconnect();
      }
    });
    observer.observe(section);
    
    return section;
  }

  function createBottleSection() {
    const section = document.createElement('div');
    section.className = 'section';
    section.id = 'bottle-section';
    section.innerHTML = `
      <div style="position:relative; height:100%;">
        <div style="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
          width:100px; height:200px; background:rgba(255,255,255,0.3); border-radius:10px 10px 50px 50px;">
          <div style="position:absolute; left:50%; top:30%; transform:translate(-50%,-50%);
            width:80px; height:120px; background:#f5f5dc; padding:10px; font-size:12px;">
            If I could send one last message to your heart... this would be it.
          </div>
        </div>
      </div>
    `;
    return section;
  }

  function createRosesSection() {
    const section = document.createElement('div');
    section.className = 'section';
    section.id = 'roses-section';
    section.innerHTML = `
      <div style="display:flex; gap:50px; margin:40px 0;">
        <div style="width:100px; height:100px; background:#e74c3c; 
          clip-path:polygon(50% 0%,60% 20%,80% 30%,70% 40%,80% 60%,60% 70%,50% 90%,40% 70%,20% 60%,30% 40%,20% 30%,40% 20%)">
        </div>
        <div style="width:100px; height:100px; background:#3498db;
          clip-path:polygon(50% 0%,60% 20%,80% 30%,70% 40%,80% 60%,60% 70%,50% 90%,40% 70%,20% 60%,30% 40%,20% 30%,40% 20%)">
        </div>
      </div>
      <p>Even if you never pick it, this once...</p>
    `;
    return section;
  }

  function createGoodbyeSection() {
    const section = document.createElement('div');
    section.className = 'section';
    section.id = 'goodbye-section';
    section.innerHTML = `
      <p>This was never to ask you to return...</p>
      <p>It was to leave a piece of my heart with you...</p>
      <p>So if you ever wonder—yes, it mattered.</p>
      <p>And yes... you were loved.</p>
      <p style="margin-top:40px; font-style:italic;">—zeroZERO</p>
    `;
    return section;
  }
});
