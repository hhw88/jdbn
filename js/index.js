// 





let lis = document.querySelectorAll('.celebrate_content_title ul li');
let imgs = document.querySelectorAll('.celebrate_content_video img');
let celebrateBox = document.querySelector('.celebrate_content')


for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseenter', function() {
        document.querySelector('.celebrate_content_title .celebrate_content_activity').classList.remove('celebrate_content_activity')
        this.classList.add('celebrate_content_activity')

        document.querySelector('.celebrate_content_video .celebrate_content_img').classList.remove('celebrate_content_img')
        imgs[i].classList.add('celebrate_content_img')
    });

    celebrateBox.addEventListener('mouseleave', function() {
        lis[i].classList.remove('celebrate_content_activity')
        imgs[i].classList.remove('celebrate_content_img')
        initAvtive()
    });

}

// 页面初始化
function initAvtive() {
    for (let i = 0; i < lis.length; i++) {
        lis[0].classList.add('celebrate_content_activity')
        imgs[0].classList.add('celebrate_content_img')
    }
}
initAvtive()



//