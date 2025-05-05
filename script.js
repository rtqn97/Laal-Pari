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
    }

    // Intro section
    function createIntroSection() {
        const section = document.createElement('div');
        section.id = 'intro-section';
        section.className = 'section';
        section.innerHTML = `
            <p id="intro-text">"Before you leave forever, just give me a few moments of your time..."<br>—zeroZERO</p>
            <div class="intro-buttons">
                <button id="begin-btn" class="intro-btn">Begin</button>
                <button id="later-btn" class="intro-btn">Later</button>
            </div>
        `;
        
        section.querySelector('#begin-btn').addEventListener('click', () => {
            showSection('story');
            startStory();
        });
        
        section.querySelector('#later-btn').addEventListener('click', () => {
            section.querySelector('#intro-text').innerHTML = 
                'Okey No Worries Dear, Feel Free to Reach Out Again Whenever You Are Ready';
            section.querySelector('.intro-buttons').style.display = 'none';
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
                setTimeout(() => showSection('letter'), 1500);
                startLetterAnimation();
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
            <div id="letter-container">
                <div id="letter-content">
                    <p>Dear Laal Pari,</p>
                    <p>I know I'm the last person you want to hear from.<br>
                    But if this letter ever reaches your heart, even for a second,<br>
                    just know—I'm truly sorry.</p>
                    <p>I wasn't enough.<br>
                    Not strong enough to understand you,<br>
                    not wise enough to protect what we had,<br>
                    and not calm enough to hold you when I should have.</p>
                    <p>You didn't deserve the silence.<br>
                    You didn't deserve the carelessness.<br>
                    And yet, you gave me kindness anyway.<br>
                    That's what hurts the most.</p>
                    <p>I remember the way you searched for me<br>
                    like the world was Only Me For You<br>
                    And I remember the day it stopped—<br>
                    because of me.</p>
                    <p>If I could go back,<br>
                    I would fix every moment I failed.<br>
                    But time doesn't rewind...<br>
                    So here I am, hoping my words mean something now.</p>
                    <p>Don't forgive me because I asked.<br>
                    Forgive me only if your heart ever tells you it's okay to heal. And Move On.</p>
                    <p>I was never ungrateful.<br>
                    Make your future bright and take care.</p>
                    <p>—zeroZERO*</p>
                </div>
            </div>
        `;
        return section;
    }

    function startLetterAnimation() {
        createPetals();
        setTimeout(() => showSection('bottle'), 30000);
        setTimeout(startBottleAnimation, 31000);
    }

    function createPetals() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const petal = document.createElement('div');
                petal.className = 'petal';
                petal.style.left = Math.random() * 100 + 'vw';
                petal.style.top = '-20px';
                petal.style.opacity = Math.random() * 0.7 + 0.3;
                petal.style.transform = `rotate(${Math.random() * 360}deg)`;
                
                document.getElementById('letter-section').appendChild(petal);
                
                animatePetal(petal);
            }, i * 800);
        }
    }

    function animatePetal(petal) {
        const duration = Math.random() * 10000 + 5000;
        const xMovement = (Math.random() - 0.5) * 200;
        
        petal.style.transition = `all ${duration/1000}s linear`;
        petal.style.left = `calc(${petal.style.left} + ${xMovement}px)`;
        petal.style.top = '100vh';
        
        setTimeout(() => {
            petal.remove();
        }, duration);
    }

    // Bottle section
    function createBottleSection() {
        const section = document.createElement('div');
        section.id = 'bottle-section';
        section.className = 'section';
        section.innerHTML = `
            <div id="bottle-container">
                <div id="bottle"></div>
                <div id="scroll">If I could send one last message to your heart... this would be it.</div>
            </div>
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
            document.getElementById('bottle').style.animation = 'float 2s ease-in-out forwards';
            document.getElementById('bottle').style.top = '-100px';
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
            <div id="roses-container">
                <div id="rose-red" class="rose"></div>
                <div id="rose-blue" class="rose"></div>
            </div>
            <div id="roses-message">Even if you never pick it, this once...</div>
        `;
        return section;
    }

    function startRosesAnimation() {
        setTimeout(() => showSection('goodbye'), 10000);
        setTimeout(startGoodbyeAnimation, 11000);
    }

    // Goodbye section
    function createGoodbyeSection() {
        const section = document.createElement('div');
        section.id = 'goodbye-section';
        section.className = 'section';
        section.innerHTML = `
            <div id="goodbye-container">
                <div class="goodbye-message">This was never to ask you to return...</div>
                <div class="goodbye-message">It was to leave a piece of my heart with you...</div>
                <div class="goodbye-message">So if you ever wonder—yes, it mattered.</div>
                <div class="goodbye-message">And yes... you were loved.</div>
                <div id="final-signature" class="goodbye-message">—zeroZERO</div>
            </div>
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
        
        setTimeout(() => {
            showSection('intro');
            document.getElementById('intro-text').innerHTML = 
                '"Before you leave forever, just give me a few moments of your time..."<br>—zeroZERO';
            document.querySelector('.intro-buttons').style.display = 'flex';
        }, 20000);
    }
});
