# NovaFlare Online - Server
This is a source code of the game server and website for Psych Online.
The code is based on the Colyseus and ExpressJS for the backend. And React for the frontend.

# Contributing
Feel free to make changes or add your own features to the server! <br>
But please read the [CONTRIBUTING](https://github.com/NovaFlare-Engine-Concentration/Funkin-Psych-Online/blob/main/CONTRIBUTING.md) page first!

# Compiling
Install NodeJS and run `npm i` in the project root directory. <br>
Then run `npm test` to test the server locally.

这里是MaoPou
我很想吐槽一下他这个教程不完善hhh

以下是我摸索出来的awa
# 非Docker
1. 安装NodeJS--21.6.2   自己去找适合自己的安装方法

2. 安装依赖，你可以用 `npm install`，也可以用 `npm ci` (建议用npm ci)

3. 测试是否运行正常 `npm test` (此步骤一般情况不需要做)

4. 一切正常了想办法把这个测试进程关掉，然后运行 `npm start`

# Docker
1. 运行构建镜像 `docker build -t online-server .`

2. 运行容器(2567端口) `docker run -d --name online-server -p 2567:2567 online-server`

3. 如果此时服务器没有启动就运行 `docker exec -it online-server /bin/bash` 然后运行 `npm start`

#配置类
项目里有个 `.env.example`，这个文件里面告诉了你一些配置信息，你得在项目根目录创建一个 `.env` 并把配置信息粘贴进去

--其他的我还没研究出来hhh By MaoPou
