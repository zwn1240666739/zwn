class Banner {
    constructor(ele) {
        this.ele = document.querySelector(ele)
        this.imgBox = this.ele.querySelector('.imgBox')
        this.pointBox = this.ele.querySelector('.porintBox')
        this.leftBox = this.ele.querySelector('.banner-left')
        this.rightBox = this.ele.querySelector('.banner-right')
        this.index = 0
        this.timer = 0
        this.init()

    }
    init() {
        this.setPoint()
        this.autoPlay()
        this.overOut()
        this.left()
        this.right()
        this.pointEvent()
        this.changePage()
    }
    setPoint() {
        const pointNum = this.imgBox.children.length
        const frg = document.createDocumentFragment()
        for (let i = 0; i < pointNum; i++) {
            const span = document.createElement('span')
            if (i === 0) span.className = 'active'
            span.setAttribute('i', i)
            frg.appendChild(span)
        }
        this.pointBox.appendChild(frg)
    }
    changeOne(type) {
        this.imgBox.children[this.index].classList.remove('active')
        this.pointBox.children[this.index].classList.remove('active')
        if (type === true) {
            this.index++
        } else if (type === false) {
            this.index--
        } else {
            this.index = type
        }
        if (this.index >= this.imgBox.children.length) this.index = 0
        if (this.index < 0) this.index = this.imgBox.children.length - 1
        this.imgBox.children[this.index].classList.add('active')
        this.pointBox.children[this.index].classList.add('active')
    }
    autoPlay() {
        this.timer = setInterval(() => {
            this.changeOne(true)
        }, 2000)
    }
    overOut() {
        this.ele.addEventListener('mouseover', () => clearInterval(this.timer))
        this.ele.addEventListener('mouseout', () => this.autoPlay())
    }
    left() {
        this.leftBox.addEventListener('click', () => {
            this.changeOne(false)
        })
    }
    right() {
        this.rightBox.addEventListener('click', () => {

            this.changeOne(true)

        })
    }
    pointEvent() {
        this.pointBox.addEventListener('click', e => {
            e = e || window.event
            const target = e.target || e.srcElement

            if (target.nodeName === 'SPAN') {
                const i = target.getAttribute('i') - 0
                this.changeOne(i)
            }
        })
    }
    changePage() {
        document.addEventListener('visibilitychange', () => {
            const state = document.visibilityState

            if (state === 'hidden') clearInterval(this.timer)
            if (state === 'visible') this.autoPlay()
        })
    }
}