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
