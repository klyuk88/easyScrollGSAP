   function easyScroll() {
        const ancors = document.querySelectorAll('a[href*="#"]')

        ancors.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                const anc = item.getAttribute('href')

                gsap.to(window, {
                    duration: 0.5,
                    scrollTo: anc,
                    ease: 'power2'
                })
            })
        })

    }

    easyScroll()

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollToPlugin.min.js"></script>
