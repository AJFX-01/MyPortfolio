const overlay = document.querySelector('.js-overlay');
const detailsCon = document.querySelector('.js-details');
const seeMoreBtn = document.querySelector('.see-more');
const seeLessBtn = document.querySelector('.js-seeless');/*====================================tying animation==================================*/


seeMoreBtn.addEventListener('click', function() {
    seeMoreBtn.style.display = 'none';
    // overlay.style.display = 'block';
    detailsCon.style.display = 'block';
});

seeLessBtn.addEventListener('click', function () {
    seeMoreBtn.style.display = 'block';
    // overlay.style.display = 'none';
    detailsCon.style.display = 'none';
});

var typed = new Typed(".typing", {
    strings:['','Machine Learning Engineer', 'Software Engineer'],
    typeSpeed:80,
    BackSpeed:60,
    loop:true
});


/*========================================Aside===========================================*/
const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;

    for (let i = 0; i < totalNavList; i++) {

        const a = navList[i].querySelector('a');
        a.addEventListener('click', function() {
            
            removeBackSection();
            for (let j = 0; j < totalNavList; j++) {
                if(navList[j].querySelector('a').classList.contains('active')) {
                  addBackSection();
                    //allSection[j].classList.add('back-section');
                }
                navList[j].querySelector('a').classList.remove('active');
            }
            this.classList.add('active');
            showSection(this);
            if (window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
        });

    }
    function removeBackSection() {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove('back-section')
        }
    }

    function addBackSection() {
        for ( let num = 0; num < totalSection; num++) {
            allSection[num].classList.add('back-section');
        }
        //allSection[num].classList.add('back-section');
    }
    function showSection(element) {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove('active');
        }
        const target = element.getAttribute('href').split('#')[1];
        document.querySelector('#'+ target).classList.add('active');
    }
    function updateNav(element) {
        for( let j = 0; j < totalNavList; j++) {
            navList[j].querySelector('a').classList.remove('active');
            const target = element.getAttribute('href').split('#')[1];
            if(target === navList[j].querySelector('a').getAttribute('href').split('#')[1]) {
                navList[i].querySelector('a').classList.add('active');
            }
        }
    }
    document.querySelector('.hire-me').addEventListener('click', function() {
        const sectionIndex = this.getAttribute('data-action-index');
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    });
    const navTogglerBtn = document.querySelector('.nav-toggler'),
        aside = document.querySelector('.aside');
        navTogglerBtn.addEventListener('click', () => {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn() {
            aside.classList.toggle('open');
            navTogglerBtn.classList.toggle('open');

            for (let i = 0; i < totalSection; i++) {
               allSection[i].classList.toggle('open') 
            }
        }

//  <=======================================Const Overly page=========================================>
