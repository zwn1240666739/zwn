# 苏宁项目

### 首页

1. 进入首页头部及分类划入显示二级菜单

2. 上方 input 框带有搜索引擎

3. 有上下切换轮播图和渐隐渐现轮播图

4. 左侧带有楼层导航菜单

5. 在为你推荐下方带有一级分类渲染

6. 主体部分是渲染页面, 可通过点击分类列表来切换主体部分的渲染数据

7. 点击列表数据进入详情页

   ​	

### 登录注册

1. 在列表最顶端带有`登录 ` 、`注册`按钮,渐隐渐现轮播图上方带有`登录`和`注册` 按钮
2. 点击注册按钮将跳转到注册页面
3. 填写` 手机号(账号)` `密码` `确认密码`点击注册, 注册成功, 将直接跳转到登陆页面
4. 输入`账号` `密码` 完成登录, 跳转到列表页
5. 在列表页头部及购物车渐隐渐现轮播图将显示用户名

### 详情页

1. 详情页是通过点击列表页的商品, 来获取每个商品的具体 id 信息, 来进行渲染页面
2. 左侧的图片带有放大镜效果, 将鼠标划入将触发放大镜效果
3. 右侧是一个渲染部分
4. 可通过点击 `+` `-` 符号来调整具体的商品数量, 然后点击加入购物车, 将商品数据添加到 `Local Storage` 中来达到跨页面传递数据的效果
5. 点击去结算跳转至购物车页面

### 购物车

1. 购物车中的数据是通过拿到存储在 `Local Storage` 中的数据, 来进行页面渲染
2. 不登录账号无法进入购物车页面
3. 在购物车的商品的左侧带有勾选按钮, 可通过点击勾选按钮来选择是否购买此商品, 点击 `全选按钮` 可改变下方所有商品的选中状态
4. 点击 `+` `-` 符号, 可在购物车中来改变购买商品的数量
5. 点击商品右侧的 `删除` 按钮, 可以删除本条商品数据
6. 在购物车底部的`购买总数量` 和 `购买总价格` 是通过商品是否被选中发生改变, 
7. 点击购物车底部的 `清空购物车` 可一次性清空购物车中的所有数据
8. 点击 `结算` 出现结算二维码
9. 清空购物车后显示去首页逛逛按钮
