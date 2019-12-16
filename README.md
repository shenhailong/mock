# mock

make data

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```
### 添加mock方法步骤

1、app/router      添加对应项目的router文件
2、app/controller  添加对应项目的controller文件夹
3、app/service     添加对应项目的service文件夹

### 使用步骤

1、router 设置namespace，添加接口，调用controller中对应方法
2、controller 添加controller方法，调用service中对应方法
3、service 设置mock数据，返回数据


oil_mini文件相关 是油卡发放小程序mock接口