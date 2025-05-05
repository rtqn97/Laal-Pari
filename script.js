document.addEventListener('DOMContentLoaded', () => {
    // Initialize app
    const app = document.getElementById('app');
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.3;

    // Create all sections
    const sections = {
        intro: createIntroSection(),
        story: createStorySection(),
        letter: createLetterSection(),
        bottle: createBottleSection(),
        roses: createRosesSection(),
        goodbye: createGoodbyeSection()
    };

    // Add sections to app
    Object.values(sections).forEach(section => {
        app.appendChild(section);
    });

    // Show intro section first
    showSection('intro');

    // Music play on interaction
    const startMusic = () => {
        bgMusic.play().catch(e => console.log("Audio play prevented:", e));
        document.body.removeEventListener('click', startMusic);
    };
    document.body.addEventListener('click', startMusic);

    // Section management
    function showSection(sectionName) {
        Object.values(sections).forEach(section => {
            section.classList.remove('active');
        });
        sections[sectionName].classList.add('active');
        window.scrollTo(0, 0);
    }

    // Intro section
    function createIntroSection() {
        const section = document.createElement('div');
        section.id = 'intro-section';
        section.className = 'section active';
        section.innerHTML = `
            <p>"Before you leave forever, just give me a few moments of your time..."</p>
            <p>—zeroZERO</p>
            <div style="margin-top: 40px;">
                <button id="begin-btn" class="intro-btn">Begin</button>
                <button id="later-btn" class="intro-btn">Later</button>
            </div>
        `;
        
        section.querySelector('#begin-btn').addEventListener('click', () => {
            showSection('story');
            startStory();
        });
        
        section.querySelector('#later-btn').addEventListener('click', () => {
            section.querySelector('p').textContent = 
                'Okey No Worries Dear, Feel Free to Reach Out Again Whenever You Are Ready';
            section.querySelector('div').style.display = 'none';
        });
        
        return section;
    }

    // Story section
    function createStorySection() {
        const section = document.createElement('div');
        section.id = 'story-section';
        section.className = 'section';
        
        const pages = [
            "I wasn't perfect... I never was.",
            "But the moment I met you, I wanted to be better.",
            "Then I failed you... and I hate that I did.",
            "I didn't lose you... I pushed you away.",
            "And now I'm standing here—asking for one chance to say sorry.",
            "Not to erase the past, but to tell you it was real to me.",
            "If you've made it this far... thank you for still caring.",
            "Sorry I couldn't meet your expectations. I just want you to stay happy, keep progressing, and be wise while taking decisions in the future."
        ];
        
        pages.forEach(text => {
            const page = document.createElement('div');
            page.className = 'story-page';
            page.textContent = text;
            section.appendChild(page);
        });
        
        return section;
    }

    function startStory() {
        const pages = document.querySelectorAll('.story-page');
        let currentPage = 0;
        
        function showNextPage() {
            if (currentPage > 0) {
                pages[currentPage - 1].classList.remove('active');
            }
            
            if (currentPage < pages.length) {
                pages[currentPage].classList.add('active');
                currentPage++;
                setTimeout(showNextPage, 10000);
            } else {
                setTimeout(() => {
                    showSection('letter');
                    startLetterAnimation();
                }, 1500);
            }
        }
        
        showNextPage();
    }

    // Letter section
    function createLetterSection() {
        const section = document.createElement('div');
        section.id = 'letter-section';
        section.className = 'section';
        section.innerHTML = `
            <div id="letter-content"></div>
        `;
        return section;
    }

    function startLetterAnimation() {
        const letterContent = document.getElementById('letter-content');
        const fullText = `Dear Laal Pari,

I know I'm the last person you want to hear from.

But if this letter ever reaches your heart, even for a second, just know—I'm truly sorry. I wasn't enough. Not strong enough to understand you, not wise enough to protect what we had, and not calm enough to hold you when I should have. You didn't deserve the silence. You didn't deserve the carelessness. And yet, you gave me kindness anyway. That's what hurts the most.

I remember the way you searched for me like the world was Only Me For You. And I remember the day it stopped—because of me.

If I could go back, I would fix every moment I failed. But time doesn't rewind... So here I am, hoping my words mean something now.

Don't forgive me because I asked. Forgive me only if your heart ever tells you it's okay to heal. And Move On.

I was never ungrateful. Make your future bright and take care.

—zeroZERO*`;

        let i = 0;
        const speed = 60; // typing speed in ms
        
        function typeWriter() {
            if (i < fullText.length) {
                letterContent.innerHTML += fullText.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                setTimeout(() => {
                    showSection('bottle');
                    startBottleAnimation();
                }, 5000);
            }
        }
        
        typeWriter();
    }

    // Bottle section
    function createBottleSection() {
        const section = document.createElement('div');
        section.id = 'bottle-section';
        section.className = 'section';
        section.innerHTML = `
            <div id="bottle"></div>
            <div id="scroll">If I could send one last message to your heart... this would be it.</div>
        `;
        return section;
    }

    function startBottleAnimation() {
        const scroll = document.getElementById('scroll');
        setTimeout(() => {
            scroll.style.opacity = '1';
            scroll.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 1000);
        
        setTimeout(() => {
            scroll.style.opacity = '0';
            scroll.style.transform = 'translate(-50%, -50%) scale(0.8)';
        }, 9000);
        
        setTimeout(() => {
            document.getElementById('bottle').style.animation = 'float 4s ease-in-out infinite';
        }, 10000);
        
        setTimeout(() => {
            showSection('roses');
            startRosesAnimation();
        }, 15000);
    }

    // Roses section
    function createRosesSection() {
        const section = document.createElement('div');
        section.id = 'roses-section';
        section.className = 'section';
        section.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; gap: 50px; margin: 40px 0;">
                <div id="rose-red" class="rose"></div>
                <div id="rose-blue" class="rose"></div>
            </div>
            <p>Even if you never pick it, this once...</p>
        `;
        return section;
    }

    function startRosesAnimation() {
        setTimeout(() => {
            showSection('goodbye');
            startGoodbyeAnimation();
        }, 10000);
    }

    // Goodbye section
    function createGoodbyeSection() {
        const section = document.createElement('div');
        section.id = 'goodbye-section';
        section.className = 'section';
        section.innerHTML = `
            <div class="goodbye-message">This was never to ask you to return...</div>
            <div class="goodbye-message">It was to leave a piece of my heart with you...</div>
            <div class="goodbye-message">So if you ever wonder—yes, it mattered.</div>
            <div class="goodbye-message">And yes... you were loved.</div>
            <div class="goodbye-message" style="margin-top: 40px; font-style: italic;">—zeroZERO</div>
        `;
        return section;
    }

    function startGoodbyeAnimation() {
        const messages = document.querySelectorAll('.goodbye-message');
        messages.forEach((msg, index) => {
            setTimeout(() => {
                msg.classList.add('show');
            }, index * 3000);
        });
    }
});
