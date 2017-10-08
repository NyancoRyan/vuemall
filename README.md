# 2017年10月7日 星期六
## aliyun服务器部署
 连接阿里云服务器
- 服务器centos x64
- window环境下
    + 安装[putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/)--*aliyun文档推荐*
    + 配置参考:
        - [使用 SSH 密钥对连接 Linux 实例](https://help.aliyun.com/document_detail/51798.html?spm=5176.doc25433.6.611.PpGfY4)
        - [连接 Linux 实例](https://help.aliyun.com/document_detail/25434.html?spm=5176.doc51798.6.612.po430k)

配置aliyun服务器
- Node.js在Linux下安装和环境搭建

- 拉取nodejs
``` bash
#个人习惯存放在/usr/src/目录
wget https://npm.taobao.org/mirrors/node/v8.6.0/node-v8.6.0-linux-x64.tar.gz 
```
- 解压node.js安装包

``` bash
xz -d node-v8.6.0-linux-x64.tar.xz

#或者

tar -xzvf node-v8.6.0-linux-x64.tar.gz
```
解压后
```bash
#查看是否解压成功
ls -l

#进入到解压后bin目录
cd node/bin

#查看node版本
./node -v

#回到根目录
cd /

#建立软链接
ln -s /usr/src/node-v8.6.0-linux-x64/bin/node /usr/local/bin/node

ln -s /usr/src/node-v8.6.0-linux-x64/bin/npm /usr/local/bin/npm

#查看node、npm版本
node -v

npm -v

#安装最新版nvm
yum install git

git clone https://github.com/cnpm/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`

#激活nvm
echo ". ~/.nvm/nvm.sh" >> /etc/profile

source /etc/profile

#列出所有Node.js版本
nvm list-remote

#安装多个Node.js版本
nvm install v6.9.5
nvm install v7.4.0

#查看已安装版本
nvm ls

#切换nvm版本
nvm use v7.4.0

```
安装mongodb
```bash

```
# vuemall

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



    
    
