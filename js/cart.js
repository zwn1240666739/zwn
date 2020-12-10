$(function() {
    const nickname = getCookie('nickname')
    if (!nickname) return window.location.href = '../html/login.html'
    const cart = JSON.parse(window.localStorage.getItem('cart')) || []
    if (!cart.length) {
        // 表示购物车没有数据
        // 购物车列表添加 hide 类名, 进行隐藏
        $('.cart').addClass('hide')
        $('.cart2').removeClass('hide')
        return
    }
    $('.cart2').addClass('hide')
    $('.cart').removeClass('hide')
    bindHtml()

    function bindHtml() {
        const selectAll = cart.every(item => item.is_select === '1')
        let total = 0
        let totalMoney = 0
        cart.forEach(item => {
            if (item.is_select === '1') {
                total += item.cart_number - 0
                totalMoney += item.cart_number * item.goods_price
            }
        })
        let str = `
        <div class="cart">
        <div class="cart-cen">
            <div class="cart-header">
                <div class="cart-table-header">
                    <div class="innerBox">
                        <div class="th th-chk form th-chk-chkd">
                            <div class="cart-checkbox cart-checkbox-checked">
                                <input class="seleAll" type="checkbox" ${ selectAll ? 'checked' : '' }>

                            </div>
                            全选
                        </div>
                        <div class="th th-item">商品信息</div>
                        <div class="th th-specs">规格</div>
                        <div class="th th-price">单价（元）</div>
                        <div class="th th-amount">数量</div>
                        <div class="th th-sum">小计（元）</div>
                        <div class="th th-op">操作</div>

                    </div>
                </div>
                <div class="cart-list">
                    <div class="cart-list-item">
                        <span class="line-this"></span>
                        <span class="line-this2"></span>
                        <span class="line-this3"></span>
                        `
        cart.forEach(item => {
            str += `
                    <div class="item-main">
                    <span class="ccas"><input data-id="${ item.goods_id }" class="check" type="checkbox" ${ item.is_select === '0' ? '' : 'checked'}></span>
                    <div class="item-pic">
                        <img src="${ item.goods_small_logo }" alt="">
                    </div>
                    <div class="item-text">

                    ${ item.goods_name }
                    </div>
                    <div class="td td-specs">
                        <div class="specs-line">
                            <p>${ item.cat_three_id }</p>
                        </div>


                    </div>
                    <div class="price-line">
                        <span class="price-now sn-price">
                                <i>¥</i><em>${ item.goods_price }</em>
                        </span>
                    </div>
                    <div class="item-num">
                        <a class="addn" href="javascript:void(0);" data-id="${ item.goods_id }">-</a>
                        <input type="text" value="${ item.cart_number }">
                        <a class="subn" href="javascript:void(0);" data-id="${ item.goods_id }">+</a>
                    </div>
                    <div class="item-mone">
                        <b class="sn-price">
                            <i>¥</i><em>${ (item.goods_price * item.cart_number).toFixed(2) }</em>

                    </b>
                    </div>
                    <div class="btn del" data-id="${ item.goods_id }">删除</div>
                </div>`
        })
        str += `
                       
                    </div>

                </div>
                <div class="cart-foot">
                <p class="col-sm-4 buyNum">
              购买总数量: <span class="text-danger cartNum">${ total }</span> 件商品
            </p>
            <p class="col-sm-4 buyMoney">
              购买总价格: <span class="text-danger total">${ totalMoney.toFixed(2) }</span> 元
            </p>
                    <div class="buy" ${ totalMoney === 0 ? 'disabled' : '' }>结算</div>
                    <div class="btns">全部删除</div>
                </div>
            </div>
        </div>
    </div>
 `
        $('.cart').html(str)
    }
    $('.cart').on('click', '.item-main .check', function() {
        const type = this.checked
        const id = $(this).data('id')
        const info = cart.filter(item => item.goods_id == id)[0]
        info.is_select = type ? '1' : '0'
        bindHtml()
        window.localStorage.setItem('cart', JSON.stringify(cart))
    })
    $('.cart').on('click', '.subn', function() {
        const id = $(this).data('id')
        const info = cart.filter(item => item.goods_id == id)[0]
        info.cart_number = info.cart_number - 0 + 1
        bindHtml()
        window.localStorage.setItem('cart', JSON.stringify(cart))
    })

    $('.cart').on('click', '.addn', function() {
        const id = $(this).data('id')
        const info = cart.filter(item => item.goods_id == id)[0]
        if (info.cart_number === 1) return
        info.cart_number = info.cart_number - 0 - 1
        bindHtml()
        window.localStorage.setItem('cart', JSON.stringify(cart))
    })
    $('.cart').on('click', '.del', function() {
        const id = $(this).data('id')
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].goods_id == id) {
                cart.splice(i, 1)
                break
            }
        }
        bindHtml()
        window.localStorage.setItem('cart', JSON.stringify(cart))
        if (!cart.length) return window.location.reload()
    })

       $('.cart').on('click',  '.seleAll',  function()  {
        if (this.checked  ===  true)  {      
            for ( let  i  =  0; i  <  $('.ccas > .check').length; i++) {               cart[i].is_select  =  '1'              };      
            $('.ccas > .check').attr('checked',  this.checked);      
            bindHtml();      
            window.localStorage.setItem('cart', JSON.stringify(cart));   
        } 
        else  {     
            for (let  i  =  0; i  <  $('.ccas > .check').length;  i++) {        cart[i].is_select  =  '0'      };     
            $('.ccas > .check').attr('checked',  this.checked);     
            bindHtml();   
            window.localStorage.setItem('cart', JSON.stringify(cart));  
        }  
    })
    $('.cart').on('click', '.cart-foot > .btns',  function()  {  
        cart.splice(0, cart.length)
        window.localStorage.setItem('cart', JSON.stringify(cart))
        bindHtml();  

        if (!cart.length)  { 
            $('.cart').addClass('hide')
            $('.cart2').removeClass('hide')
            return
        }

    })
    $('.cart').on('click', '.cart-foot > .buy',  function()  {  
        $('.goMoney').css({
            'display': 'block'
        })
    })

})