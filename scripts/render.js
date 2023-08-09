let educationsHTML = '';
let servicesHTML = '';
let skillsHTML = '';
let SeeMoreSkillsHTML = '';
let ExperienceHTML = '';
let portHTML = '';


renderEducation();
renderServices();
renderSkills();
renderSeeMoreSkills();
renderExperience();
renderPortFolio();

function renderEducation() {
    educations.forEach((education) => {
        educationsHTML += `
        <div class="timeline-item">
        <div class="circle-dot"></div>
        <h3 class="timeline-date">
            <i class="fa fa-calendar"></i>${education.dataData}
        </h3>
        <h4 class="timeline-title">${education.degree}</h4>
        <p class="timeline-text">${education.detailsInfo}</p>   
    </div>`
    });

    document.querySelector('.js-shadow').innerHTML = educationsHTML;
}

function renderExperience() {
    experience.forEach((expe) => {
        ExperienceHTML += `
        <div class="timeline-item">
            <div class="circle-dot"></div>
            <h3 class="timeline-date">
                <i class="fa fa-calendar"></i>${expe.dataData}
            </h3>
            <h4 class="timeline-title">${expe.degree}</h4>
            <p class="timeline-text">${expe.detailsInfo}</p>
        </div>`
    });

    document.querySelector('.js-expe').innerHTML = ExperienceHTML;
}

function renderServices() {
    services.forEach((service) => {
        servicesHTML += `
        <div class="service-item padd-15">
            <div class="service-item-inner">
                <div class="icon">
                    <i class="${service.icond}"></i>
                </div>
                <h4>${service.title}</h4>
                <p>${service.deets}</p>
            </div>
        </div>`;

        document.querySelector('.js-services').innerHTML = servicesHTML; 
    })
}

function renderSkills() {
    for (let i = 0; i < 4 && i < skills.length; i++) {
        skillsHTML += `
        <div class="skills-item padd-15">
            <h5>${skills[i].skillName}</h5>
            <div class="progress">
                <div class="progress-in" style="width:${skills[i].stylewidth}"></div>
                <div class="skill-percent">${skills[i].skillPercent}</div>
            </div>
        </div>`
    }

    document.querySelector('.js-skills').innerHTML = skillsHTML;
}

function renderSeeMoreSkills() {
    skills.forEach((skill) => {
        SeeMoreSkillsHTML += `
        <div class="skills-item padd-15">
            <h5>${skill.skillName}</h5>
            <div class="progress">
                <div class="progress-in" style="width:${skill.stylewidth}"></div>
                <div class="skill-percent">${skill.skillPercent}</div>
            </div>
        </div>`
    });

    document.querySelector('.js-seemoreskills').innerHTML = SeeMoreSkillsHTML;
}


function renderPortFolio() {
    portFolio.forEach((portf) => {
        portHTML += `
        <div class="portfolio-item padd-15">
            <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                    <img src="${portf.imageData}" alt="" srcset="">
                </div>
                <a href="${portf.linkBtn}">veiw</a>
            </div>
        </div>`
    });

    document.querySelector('.js-port').innerHTML = portHTML;
}
