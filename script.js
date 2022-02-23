document.querySelectorAll('.accordion__question').forEach((item) => {
    item.addEventListener('click', (event) => {
        item.classList.toggle('open');
        let answer = item.nextElementSibling;

        // Open accordion item
        if (item.classList.contains('open')) {

            answer.style.display = 'block';
            let accHeight = answer.clientHeight;
            setTimeout(() => {
                answer.style.height = accHeight + 'px';
                answer.style.display = '';
            }, 1)

            answer.classList = 'accordion__answer collapsing';

            setTimeout(() => {
                answer.classList = 'accordion__answer collapse open';
            }, 200);
        }
        // Close accrdion item 
        else {
            answer.classList = 'accordion__answer collapsing';

            setTimeout(() => {
                answer.style.height = '0px';
            }, 1)

            setTimeout(() => {
                answer.classList = 'accordion__answer collapse';
                answer.style.height = '';
            }, 200);
        }

    })
})