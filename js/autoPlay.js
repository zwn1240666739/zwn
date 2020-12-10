class Auto {
    constructor(ele) {
        this.ele = document.querySelector(ele)
        this.imgBox = this.ele.querySelector('ul')
        this.banner_height = this.ele.clientHeight
        this.index = 1
        this.timer = 0
        this.init()
    }
    init() {
        this.copyEle()
        this.autoPlay()
        this.overOut()
        this.changePage()
    }
    copyEle() {
        const first = this.imgBox.firstElementChild.cloneNode(true)
        const last = this.imgBox.lastElementChild.cloneNode(true)
        this.imgBox.appendChild(first)
        this.imgBox.insertBefore(last, this.imgBox.firstElementChild)

        this.imgBox.style.height = this.imgBox.children.length * 100 + '%'

        this.imgBox.style.top = -this.banner_height + 'px'
    }
    autoPlay() {
        this.timer = setInterval(() => {
            this.index++

                move(this.imgBox, { top: -this.index * this.banner_height }, this.moveEnd.bind(this))
        }, 2000)
    }
    moveEnd() {
        if (this.index === this.imgBox.children.length - 1) {
            this.index = 1
            this.imgBox.style.top = -this.index * this.banner_height + 'px'
        }
        if (this.index === 0) {
            this.index = this.imgBox.children.length - 2
            this.imgBox.style.top = -this.index * this.banner_height + 'px'
        }


    }

    overOut() {
        this.ele.addEventListener('mouseover', () => clearInterval(this.timer))

        this.ele.addEventListener('mouseout', () => this.autoPlay())
    }
    changePage() {
        document.addEventListener('visibilitychange', () => {
            const state = document.visibilityState

            if (state === 'hidden') {
                clearInterval(this.timer)
            }

            if (state === 'visible') {
                this.autoPlay()
            }
        })
    }
}