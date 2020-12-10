$(function() {
    $('.btn').click(function() {
        $('.pop').removeClass('active')
    })

    $('.logon').validate({
        rules: {
            username: {
                digits: true,
                minlength: 11,
                maxlength: 11
            },
            password1: {
                required: true,
                minlength: 6,
                maxlength: 15
            },
            password: {
                required: true,
                equalTo: "#password1"
            }

        },

        messages: {
            username: {
                digits: '请正确填写手机号',
                minlength: '请正确填写手机号',
                maxlength: '请正确填写手机号'
            },
            password1: {
                required: '请正确填写密码',
                minlength: '密码最少 6 个字符',
                maxlength: '密码最多 15 个字符'
            },
            password: {
                required: "请输入确认密码",
                equalTo: "两次输入密码不一致"

            },
        },

        submitHandler(form) {
            const info = $(form).serialize()
            $.post('../server/logon.php', info, null, 'json').then(res => {
                console.log(res)
                if (res === 1) {
                    setCookie('nickname', res.nickname)
                    window.location.href = '../html/login.html'
                }
            })
        }
    })


})