$(function() {
    $('.top-btn').click(function() {
        $('.top').removeClass('hide')
    })
    $('.nav1').mouseenter(() => {
        $('.downBox').stop().slideDown(200, 'linear')
        $('.nav1').css({
            borderRright: '1px solid #ddd',
            borderLeft: '1px solid #ddd',
        })
        $('.nav1 > .icon').css({
            transform: 'rotateX(180deg)',
        })
    })
    $('.nav1').mouseleave(function() {
        $('.downBox').stop().slideUp(200, 'linear')
        $('.nav1').css({
            background: '#f5f5f5',
            border: 'none'
        })
        $('.nav1 > .icon').css({
            transform: 'rotateX(0deg)'
        })
    })
    $('.nav2').mouseenter(() => {
        $('.downBox2').stop().slideDown(200, 'linear')
        $('.nav2').css({
            borderRright: '1px solid #ddd',
            borderLeft: '1px solid #ddd',
        })
        $('.nav2 > .icon').css({
            transform: 'rotateX(180deg)',
        })
    })
    $('.nav2').mouseleave(function() {
        $('.downBox2').stop().slideUp(200, 'linear')
        $('.nav2').css({
            background: '#f5f5f5',
            border: 'none'
        })
        $('.nav2 > .icon').css({
            transform: 'rotateX(0deg)'
        })
    })
    $('.nav3').mouseenter(() => {
        $('.downBox3').stop().slideDown(200, 'linear')
        $('.nav3').css({
            borderRright: '1px solid #ddd',
            borderLeft: '1px solid #ddd',
        })
        $('.nav3 > .icon').css({
            transform: 'rotateX(180deg)',
        })
    })
    $('.nav3').mouseleave(function() {
        $('.downBox3').stop().slideUp(200, 'linear')
        $('.nav3').css({
            background: '#f5f5f5',
            border: 'none'
        })
        $('.nav3 > .icon').css({
            transform: 'rotateX(0deg)'
        })
    })
    $('.Rnav').mouseenter(() => {
        $('.RdownBox').stop().slideDown(200, 'linear')
        $('.Rnav').css({
            background: 'white',
            borderRright: '1px solid #ddd',
            borderLeft: '1px solid #ddd',
        })
        $('.Rnav > .icon3').css({
            transform: 'rotateX(180deg)',
        })
    })
    $('.Rnav').mouseleave(function() {
        $('.RdownBox').stop().slideUp(200, 'linear')
        $('.Rnav').css({
            background: '#f5f5f5',
            border: 'none'
        })
        $('.Rnav > .icon3').css({
            transform: 'rotateX(0deg)'
        })
    })
    $('.Rnav1').mouseenter(() => {
        $('.RdownBox1').stop().slideDown(200, 'linear')
        $('.Rnav1').css({
            background: 'white',
            borderRright: '1px solid #ddd',
            borderLeft: '1px solid #ddd',
        })
        $('.Rnav1 > .icon3').css({
            transform: 'rotateX(180deg)',
        })
    })
    $('.Rnav1').mouseleave(function() {
        $('.RdownBox1').stop().slideUp(200, 'linear')
        $('.Rnav1').css({
            background: '#f5f5f5',
            border: 'none'
        })
        $('.Rnav1 > .icon3').css({
            transform: 'rotateX(0deg)'
        })
    })
    $('.Rnav2').mouseenter(() => {
        $('.shopping').stop().slideDown(100, 'linear')
        $('.Rnav2').css({
            background: 'white',
            borderRright: '1px solid #ddd',
            borderLeft: '1px solid #ddd',
        })
        $('.Rnav1 > .icon3').css({
            transform: 'rotateX(180deg)',
        })
    })
    $('.Rnav2').mouseleave(function() {
        $('.shopping').stop().slideUp(200, 'linear')
        $('.Rnav2').css({
            background: '#f5f5f5',
            border: 'none'
        })
        $('.Rnav2 > .icon3').css({
            transform: 'rotateX(0deg)'
        })
    })
    $('.Rnav3').mouseenter(() => {
        $('.phone').stop().slideDown(100, 'linear')
        $('.Rnav3').css({
            background: 'white',
            borderRright: '1px solid #ddd',
            borderLeft: '1px solid #ddd',
        })
        $('.Rnav3 > .icon3').css({
            transform: 'rotateX(180deg)',
        })
    })
    $('.Rnav3').mouseleave(function() {
        $('.phone').stop().slideUp(200, 'linear')
        $('.Rnav3').css({
            background: '#f5f5f5',
            border: 'none'
        })
        $('.Rnav3 > .icon3').css({
            transform: 'rotateX(0deg)'
        })
    })
    $('.list-ul > li').mouseenter(function() {

        $('.list-ol > li').eq($(this).index()).stop().slideDown(200, 'linear')
    })
    $('.list-ul > li').mouseleave(function() {

        $('.list-ol > li').eq($(this).index()).stop().slideUp(200, 'linear')
    })
    $('.tenten > li').mouseenter(function() {
        $(this).addClass('active').siblings().removeClass('active')
            // console.log($(this.index()))
        $('.ol > ol').eq($(this).index()).addClass('active').siblings().removeClass('active')
    })
    let list = null
    const list_info = {
        cat_one: '大家电',

    }
    getCateOne()
    async function getCateOne() {
        const cat_one_list = await $.get('../server/getCateOne.php', list_info, null, 'json')
        let str = `
        <li data-type="大家电" class="active">
                    <p class="test" class="active">精选</p>
                    <p><span class="sub-text">猜你喜欢</span></p>
                </li>
        `
        for (let i = 0; i < 6; i++) {
            str += `
            <li data-type=${ cat_one_list.list[i].cat_one_id }>
                  <p class="test">${cat_one_list.list[i].cat_one_id}</p>
                  <p><span class="sub-text">${cat_one_list.list[i].cat_two_id}</span></p>
            </li>
            `
        }
        $('.shoppingList > ul').html(str)
    }
    getGoodsList()
    async function getGoodsList() {
        const goodsList = await $.get('../server/getGoodsList.php', list_info, null, 'json')
        list = goodsList.list
        let str = ''
        goodsList.list.forEach(item => {
            str += `
            <li data-id=${ item.goods_id }>

                        <a href="javascript:;">
                            <img src="${ item.goods_big_logo }" alt="">
                            <p class="title "><i class="zyIcon"></i>${ item.goods_name }</p>
                            <p class="price-box"><span class="price"><i>¥</i><em>${ item.goods_price }</em></span><span class="refprice"><i>¥</i><em>${ item.is_promote }</em></span></p>
                            <p class="cxIcon"><span>满${item.goods_number}用10</span></p>
                        </a>
                    </li>
            `
        })
        $('.tab-content > ul').html(str)
    }
    $('.shoppingList').on('click', '.shop-ul  li', function() {
        const type = $(this).data('type')
        list_info.cat_one = type
        getGoodsList()
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.shoppingList').on('click', '.tab-content  li', function() {
        const id = $(this).data('id')
        setCookie('goods_id', id)
        window.location.href = '../html/detail.html'
    })

    const nickname = getCookie('nickname')
    if (nickname) {
        $('.nologin').addClass('hide')
        $('.login').removeClass('hide').text(`${nickname}`)
        $('.shopping > .shop-sp1').css({ 'display': 'none' })
        $('.shopping > a').css({ 'display': 'none' })
            // 才制作购物车联动
            // setCartNum()
        $('.not-login').addClass('hide')
        $('.off-login').removeClass('hide')
        $('.off-login > .btn-group > a > p > em').text(`${nickname}`)

    } else {
        $('.onlogin').removeClass('hide')
        $('.login').addClass('hide')
        $('.shopping > .shop-sp1').css({ 'display': 'block' })
        $('.shopping > a').css({ 'display': 'block' })
        $('.not-login').removeClass('hide')
        $('.off-login').addClass('hide')
    }
    $('.trigger').mouseover(function() {
        $(this).children().eq(0).addClass('hide').siblings().removeClass('hide')
        $('.trigger-big').css({ 'display': 'block' })
    })
    $('.trigger').mouseout(function() {
        $('.trigger-big').css({ 'display': 'none' })
        $(this).children().eq(1).addClass('hide').siblings().removeClass('hide')

    })
    $('.lou > ul > li').click(function() {

        $('html').animate({ scrollTop: $('.louceng').eq($(this).index()).offset().top })


        $(this).addClass('active').siblings().removeClass('active')
    })
    $(window).scroll(function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        const window_height = document.documentElement.clientHeight

        const lis = $('.louceng')
        for (let i = 0; i < lis.length; i++) {
            const li_top = $(lis[i]).offset().top
            const li_height = $(lis[i]).outerHeight()
            if (li_top + li_height <= scrollTop + window_height) {
                $('.lou > ul > li').removeClass('active').eq(i).addClass('active')
            }
        }
    })
})