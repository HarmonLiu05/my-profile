// scripts.js

// 1. 简单的交互：点击按钮改变标题颜色
function changeHeaderColor() {
    const header = document.querySelector('.header');
    // 生成随机的 HSL 颜色，保持饱和度和亮度，只改变色调
    const randomHue = Math.floor(Math.random() * 360);
    header.style.background = `linear-gradient(135deg, hsl(${randomHue}, 70%, 40%), hsl(${(randomHue + 120) % 360}, 70%, 40%), hsl(${(randomHue + 240) % 360}, 70%, 40%))`;
    // 重置动画以触发重新播放
    header.style.animation = 'none';
    // 触发重排 (reflow)
    header.offsetHeight; 
    header.style.animation = null; 
}

// 2. 简单的表单交互：添加技能
function addSkill() {
    const skillInput = document.getElementById('new-skill');
    const skillList = document.querySelector('.skills-list');
    
    if (skillInput.value.trim() !== '') {
        const newSkillItem = document.createElement('li');
        newSkillItem.textContent = skillInput.value.trim();
        // 添加一个简单的进入动画类 (需要在CSS中定义)
        newSkillItem.classList.add('skill-enter');
        skillList.appendChild(newSkillItem);
        skillInput.value = ''; // 清空输入框

        // 可选：使用 setTimeout 来触发 CSS 过渡动画
        // 由于 DOM 操作是同步的，直接添加类可能不会触发动画
        // 需要下一帧再添加动画类
        setTimeout(() => {
             // 这里可以添加更复杂的动画逻辑，或者依赖CSS动画
             // 目前我们依靠CSS的 .skill-enter 类来定义初始状态和过渡
        }, 0);

    } else {
        alert('请输入一个技能名称！');
    }
}

// 3. 页面加载完成后执行的初始化代码
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面已加载，JavaScript 初始化完成。');

    // 为“改变头部颜色”按钮添加点击事件监听器
    const colorButton = document.getElementById('change-color-btn');
    if (colorButton) {
        colorButton.addEventListener('click', changeHeaderColor);
    }

    // 为“添加技能”按钮添加点击事件监听器
    const addSkillButton = document.getElementById('add-skill-btn');
    if (addSkillButton) {
        addSkillButton.addEventListener('click', addSkill);
    }

    // 为技能输入框添加回车键监听
    const skillInput = document.getElementById('new-skill');
    if (skillInput) {
        skillInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addSkill();
            }
        });
    }

    // 4. 简单的鼠标悬停动效 (为项目卡片添加)
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        // 鼠标进入
        card.addEventListener('mouseenter', function() {
            // 增强阴影和轻微放大
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        // 鼠标离开
        card.addEventListener('mouseleave', function() {
            // 恢复原状
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
    });
});