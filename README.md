## 安装
$ git clone https://github.com/PiersZhang/reactVR.git
$ cd reactVR
$ npm install
$ npm start
$ 浏览器打开`http://localhost:8081/vr`
## 关于React 360
React 360是一个创建3D和VR用户交互的框架.构建在React的基础之上，React是一个简化复杂UI创建的库，React 360可以让你用相似的工具和概念在网页上创建沉浸式的360度的内容。
## React 360和React VR有啥区别？
早在2017年，Facebook和Oculus开源了一个叫React VR的js库，用来在浏览器上创建3D和VR内容的。与此同时，Oculus开始使用该框架的原生C ++版本来构建自己的第一方应用程序。随着时间的推移，两个项目的API在我们解决框架的不同需求时出现了分歧。 为了避免两个系统之间的混淆，开源框架已经更名为“React 360”，它更好地反映了它的用例：可以在PC，移动和VR设备上使用的沉浸式360体验。
如果您以前使用过React VR，那么您应该会发现React 360非常相似。 我们简化了许多更常见的工作流程，例如在3D空间中放置2D UI元素，以及优化这些用例的性能。 如果您要迁移旧版React VR应用程序以使用新工具, [参考本指南进行操作](http://www.vr-react.com/#/legacyreactvrapps);
## React 360和Three.js有啥区别？
Three.js是用于在Web浏览器中进行3D渲染的库。 它是比React 360更低级别的工具，需要控制原始3D网格和纹理。 除非需要，否则React 360旨在隐藏大部分内容，以便您可以专注于应用程序的行为和外观。
目前，React 360依赖于Three.js来完成一些渲染工作。 但是，我们正在打开相关的API，以便React 360开发人员可以很快使用他们选择的3D渲染库，包括原始WebGL调用。
## 构建生产版本的app
React 360包含一个命令，可以将所有内容打包到一个文件夹中。 从项目的根目录运行`npm run bundle`将创建JS的生成版本，创建指向生产JS的index.html文件的副本，并将其全部放在新的构建目录中。 要发布应用程序，请将此目录的内容复制到您的服务器。 如果您使用static_assets目录中的任何文件，则还应将此文件夹复制到服务器。


