$(function() {
    $('.tab-item').click(function() {
        $(this).addClass('active').siblings().removeClass('active')
        $('.tog').children().eq($(this).index()).addClass('active').siblings().removeClass('active')
    })
    $('.login1').validate({
        rules: {
            username: {
                required: true,
                minlength: 5,
                maxlength: 12
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 12
            }
        },
        // 提示信息配置
        messages: {
            username: {
                required: '请填写用户名信息',
                minlength: '账号最少 5 个字符',
                maxlength: '账号最多 10 个字符'
            },
            password: {
                required: '请正确填写密码',
                minlength: '密码最少 6 个字符',
                maxlength: '密码最多 12 个字符'
            }
        },
        submitHandler(form) {
            const info = $(form).serialize()
            $.post('../server/login.php', info, null, 'json').then(res => {
                console.log(res)
                if (res.code === 0) {
                    $('.usernameNot').removeClass('hide')
                } else if (res.code === 1) {
                    setCookie('nickname', res.nickname)
                    window.location.href = '../html/index1.html'
                }
            })
        }
    })
})