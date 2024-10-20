document.getElementById('edit-about').onclick = function() {
    const aboutText = prompt('请输入关于我的内容：', document.getElementById('about-text').innerText);
    if (aboutText !== null) {
        document.getElementById('about-text').innerText = aboutText;
    }
};

document.getElementById('edit-skills').onclick = function() {
    const skillsText = prompt('请输入我的技能：', document.getElementById('skills-text').innerText);
    if (skillsText !== null) {
        document.getElementById('skills-text').innerText = skillsText;
    }
};

document.getElementById('edit-contact').onclick = function() {
    const contactText = prompt('请输入联系方式：', document.getElementById('contact-text').innerText);
    if (contactText !== null) {
        document.getElementById('contact-text').innerText = contactText;
    }
};
