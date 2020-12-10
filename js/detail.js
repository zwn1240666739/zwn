$(function() {
    let info = null
    const id = getCookie('goods_id')
    getGoodsInfo()
    async function getGoodsInfo() {
        const goodsInfo = await $.get('../server/getGoodsInfo.php', { goods_id: id }, null, 'json')

        bindHtml(goodsInfo.info)


        info = goodsInfo.info
    }

    function bindHtml(info) {
        $('.enlargeBox').html(`
        <div class="imgBox">
        <a href="">
            <img src="${ info.goods_big_logo }" alt="">
        </a>
        <div class="shade"></div>
    </div>
    <div class="imgBox1">
        <div class="smBox">
            <ul>
                <li>
                    <img src="${ info.goods_big_logo }" alt="">
                </li>
            </ul>
        </div>
    </div>
    <div class="botImg">
        <div class="goodsDesc">
            <div class="z-item"> <a href="javascript:;"><i></i>对比</a> </div>
        </div>
    </div>
   
        `)
        $('.asdasd').html(`<div class="imgbig" style="background: url(${ info.goods_big_logo }) no-repeat 800px 800px"></div>`)
            // $('.goodsDetail').children().eq(index(1)).next().html(`<div class="imgbig"></div>`)
        $('.goodsInfo').html(`
    <div class="proinfo-title">
                    <h1 id="itemDisplayName"><span class="cs"><i>苏宁超市</i><i class="cs-zy">自营</i></span>${ info.goods_name }</h1>
                    <h2 id="promotionDesc" style="display: block;">${ info.cat_two_id }&nbsp;&nbsp;<a href="" class="btn-prom-point">${ info.cat_three_id }169减30,猛戳立享&gt;&gt;</a></h2>
                </div>
                <div class="money1">
                    <dl>
                        <dt class="mon-dt">
                          <span>易购价</span>
                        </dt>
                        <dd class="mon-dd">
                            <span>
                            <i>¥</i>
                            ${ info.goods_price }
                            <span></span>
                            </span>
                        </dd>
                    </dl>
                    <div class="money-img">
                        <img src="https://image2.suning.cn/uimg/cms/img/159883890888854112.gif" alt="">
                        <img src="http://code.suning.cn/img/1_5B72D01D5C5DC925191C371AB34AEAB8.jpg?bizCode=k72jFN" alt="">
                    </div>

                </div>
                <dl class="money-dl">
                    <dt><span class="w2">数量</span></dt>
                    <dd>
                        <a class="subNum" href="javascript:void(0);"></a>
                        <input class="cartNum" type="text" value="1">
                        <a class="addNum" href="javascript:void(0);"></a>
                    </dd>
                </dl>
                <div>
                    <button class="btn btn-success addCart">加入购物车</button>
                    <button class="btn btn-warning continue"><a href="../html/cart.html">去结算</a></button>
                </div>
                
    `)
        $('.goodsDescsc').html(info.goods_introduce)
    }
    $('.enlargeBox').on('mousemove',  '.imgBox',  function(ev)  { 
        // console.log(this) 
        $('.imgbig').css({ 'display': 'block' });
        $('.shade').css({ 'display': 'block' });
        let  mLeft  =  ev.offsetX - 100
        let  mTop  = ev.offsetY - 100  
        if (mLeft  <=  0) {     mLeft  =  0   }
        if (mLeft  >= 200) {  
            mLeft  =  200
        }
        if (mTop  <= 0) {  
            mTop  =  0
        }
        if (mTop  >=  200) {  
            mTop  =  200
        }  
        $('.shade').css({     left: mLeft,     top: mTop   });
        $('.imgbig').css({ 
            backgroundPosition: `${ -2 * mLeft }px ${ -2 * mTop }px`
        })
    })
    $('.enlargeBox').on('mouseout',  '.imgBox',  function()  { 
        // console.log(this) 
        $('.imgbig').css({ 'display': 'none' });
        $('.shade').css({ 'display': 'none' });
    })
    $('.goodsInfo').on('click', '.addCart', function() {
        const cart = JSON.parse(window.localStorage.getItem('cart')) || []
        const flag = cart.some(item => item.goods_id === id)
        if (flag) {
            const cart_goods = cart.filter(item => item.goods_id === id)[0]
            cart_goods.cart_number = cart_goods.cart_number - 0 + ($('.cartNum').val() - 0)
        } else {
            info.cart_number = $('.cartNum').val() - 0
            cart.push(info)
        }
        window.localStorage.setItem('cart', JSON.stringify(cart))
    })
    $('.goodsInfo')
        .on('click', '.subNum', function() {
            let num = $('.cartNum').val() - 0
            if (num === 1) return
            $('.cartNum').val(num - 1)
        })
        .on('click', '.addNum', function() {
            let num = $('.cartNum').val() - 0
            $('.cartNum').val(num + 1)
        })
})