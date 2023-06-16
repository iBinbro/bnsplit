    // The code below is injected by flutter web optimizer, do not edit!!!!!!
    
    // window.assetBase
    var assetBase = "https://ibinbro.github.io/bnsplit/";
    
    // window.mainjsManifest
    var mainjsManifest = {
  "main.dart.js": "main.dart.10250ea1.js",
  "main.dart_0.js": "main.dart_0.33771b04.js",
  "main.dart_1.js": "main.dart_1.69fee445.js",
  "main.dart_2.js": "main.dart_2.b412a486.js",
  "main.dart_3.js": "main.dart_3.157f05bd.js",
  "main.dart_4.js": "main.dart_4.c13d1146.js",
  "main.dart_5.js": "main.dart_5.a6f10539.js"
};
    
    // window.hashFileManifest
    var hashFileManifest = {
  "assets/AssetManifest.json": "assets/AssetManifest.ad315d8c.json",
  "assets/FontManifest.json": "assets/FontManifest.d7517139.json",
  "assets/assets/b1.webp": "assets/assets/b1.24a6975b.webp",
  "assets/assets/b2.webp": "assets/assets/b2.213eeaa9.webp",
  "assets/assets/b3.webp": "assets/assets/b3.454d9ebb.webp",
  "assets/assets/b4.webp": "assets/assets/b4.ed224ac0.webp",
  "assets/assets/b5.webp": "assets/assets/b5.0af857fb.webp",
  "assets/assets/b6.webp": "assets/assets/b6.b5f42f16.webp",
  "assets/assets/buy_vip_back.webp": "assets/assets/buy_vip_back.32bdd754.webp",
  "assets/assets/buy_vip_card_top.webp": "assets/assets/buy_vip_card_top.be68e98a.webp",
  "assets/assets/cube_left.webp": "assets/assets/cube_left.9b9b8e84.webp",
  "assets/assets/cube_left_2.webp": "assets/assets/cube_left_2.741e1a47.webp",
  "assets/assets/cube_right.webp": "assets/assets/cube_right.6b79cf3d.webp",
  "assets/assets/cube_right_2.webp": "assets/assets/cube_right_2.4f20bca2.webp",
  "assets/assets/sssvip_back.webp": "assets/assets/sssvip_back.ecfc0656.webp",
  "assets/assets/sssvip_card.webp": "assets/assets/sssvip_card.e4fc27d9.webp",
  "assets/assets/sssvip_id.webp": "assets/assets/sssvip_id.2f5937c7.webp",
  "assets/assets/sssvip_top.webp": "assets/assets/sssvip_top.86e75e0a.webp",
  "assets/assets/ssvip_back.webp": "assets/assets/ssvip_back.c0acdfc2.webp",
  "assets/assets/ssvip_card.webp": "assets/assets/ssvip_card.0d3d9118.webp",
  "assets/assets/ssvip_card_back.webp": "assets/assets/ssvip_card_back.a4667697.webp",
  "assets/assets/ssvip_id.webp": "assets/assets/ssvip_id.682f3be2.webp",
  "assets/assets/ssvip_top.webp": "assets/assets/ssvip_top.a9fa5a6e.webp",
  "assets/assets/svip_back.webp": "assets/assets/svip_back.dc1d4995.webp",
  "assets/assets/svip_card.webp": "assets/assets/svip_card.180bc80c.webp",
  "assets/assets/svip_card_back.webp": "assets/assets/svip_card_back.d5760b66.webp",
  "assets/assets/svip_id.webp": "assets/assets/svip_id.cdb16d70.webp",
  "assets/assets/svip_top.webp": "assets/assets/svip_top.de4b5c1f.webp",
  "assets/assets/vip/sssvip.webp": "assets/assets/vip/sssvip.39a480d6.webp",
  "favicon.png": "favicon.5dcef449.png",
  "flutter.js": "flutter.822458aa.js",
  "main.dart.js": "main.dart.10250ea1.js",
  "main.dart_0.js": "main.dart_0.33771b04.js",
  "main.dart_1.js": "main.dart_1.69fee445.js",
  "main.dart_2.js": "main.dart_2.b412a486.js",
  "main.dart_3.js": "main.dart_3.157f05bd.js",
  "main.dart_4.js": "main.dart_4.c13d1146.js",
  "main.dart_5.js": "main.dart_5.a6f10539.js",
  "manifest.json": "manifest.0abe5cbd.json"
};
    
    // hook dynamic create element `src` `href` property
    (function(){
      var _defineProperty = function (element, property) {
        var value;
        Object.defineProperty(element, property, {
          get: function () {
            return value;
          },
          set: function (v) {
            value = v;
            if (typeof v === 'string') {
              if (v.startsWith('./')) {
                v = v.replace('./', '');
              }
              if (hashFileManifest[v]) {
                value = assetBase + hashFileManifest[v];
              }
            }
            element.setAttribute(property, value);
          }
        })
  
        var _setAttribute = element.setAttribute;
        element.setAttribute = function () {
          var args = Array.prototype.slice.call(arguments);
          // if (args[0] === 'src') {
          //   //do something here
          //   console.log('setAttribute', args[1])
          // }
          _setAttribute.apply(element, args);
        }
      }
  
      var _createElement = document.createElement;
      var _hookProperties = {'link': 'href', 'script': 'src', 'audio': 'src', 'video': 'src', 'map': 'src', 'img': 'src'};
      document.createElement = function (tagName) {
        var element = _createElement.call(document, tagName);
        var property = _hookProperties[tagName.toLowerCase()];
        if (property) {
          _defineProperty(element, property);
        }
        return element;
      }  
    })();

    // load main.dart.js_xxx.part js
    function dartDeferredLibraryLoader(uri, successCallback, errorCallback, loadId) {
      console.info('uri: ' + uri + ', loadId: '+ loadId);
      var src;
      try {
        var url = new URL(uri);
        var key = url.pathname.replaceAll(/(.*)(main\.dart\.(.+)\.js)/g, '$2');
        src = assetBase + mainjsManifest[key];
      } catch (e) {
        var key = uri.replaceAll(/(.*)(main\.dart\.(.+)\.js)/g, '$2');
        src = assetBase + mainjsManifest[key];
      }
    
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      script.addEventListener("load", successCallback, false);
      script.addEventListener("error", errorCallback, false);
      document.body.appendChild(script);
    }
    