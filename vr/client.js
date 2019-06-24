// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
// 这个是连接浏览器到你的react应用的代码，也就是运行时Runtime.
// 这个文件做了三件事：
// 1、创建一个React 360的实例，加载而react代码，同时依附在DOM的一个特殊地方（节点div等）.
// 2、这个文件还将你的React代码放置到场景(scece)中,在index.js中声明的挂载点被依附在你的app的默认表面上，这个表面是一个圆柱型的曲面，可以放2D的ui
// 3、启动项目会立即家在一个360度的背景图，这部分是可选的，如果设置了背景图，可以在你的React代码还在加载中的时候就显示这个图片，让用户可以立即看到一些东西，不至于出现白屏等情况。
import {VRInstance} from 'react-vr-web';

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'EarthMoonVR', parent, {
    // Add custom options here
    ...options,
  });
  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};
