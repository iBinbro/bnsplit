    // The code below is injected by flutter web optimizer, do not edit!!!!!!
    
    // window.assetBase
    var assetBase = "https://ibinbro.github.io/bnsplit/";
    
    // window.mainjsManifest
    var mainjsManifest = {
  "main.dart.js": "main.dart.084cc176.js",
  "main.dart_0.js": "main.dart_0.1ef1a9a4.js",
  "main.dart_1.js": "main.dart_1.37b95000.js",
  "main.dart_2.js": "main.dart_2.42ecf323.js",
  "main.dart_3.js": "main.dart_3.64b11986.js",
  "main.dart_4.js": "main.dart_4.e0a2a0da.js",
  "main.dart_5.js": "main.dart_5.bf23fa32.js"
};
    
    // window.hashFileManifest
    var hashFileManifest = {
  "assets/AssetManifest.json": "assets/AssetManifest.8f352fd6.json",
  "assets/FontManifest.json": "assets/FontManifest.d7517139.json",
  "assets/assets/b1.svg": "assets/assets/b1.d0dd6784.svg",
  "assets/assets/b2.svg": "assets/assets/b2.810bbc06.svg",
  "assets/assets/b3.svg": "assets/assets/b3.a2b2f830.svg",
  "assets/assets/b4.svg": "assets/assets/b4.4a92c80f.svg",
  "assets/assets/b5.svg": "assets/assets/b5.ccc4e4fe.svg",
  "assets/assets/b6.svg": "assets/assets/b6.9407945e.svg",
  "assets/assets/buy_vip_back.webp": "assets/assets/buy_vip_back.32bdd754.webp",
  "assets/assets/buy_vip_card_top.svg": "assets/assets/buy_vip_card_top.d12f201a.svg",
  "assets/assets/cube_left.svg": "assets/assets/cube_left.35f60302.svg",
  "assets/assets/cube_left_2.svg": "assets/assets/cube_left_2.a068950f.svg",
  "assets/assets/cube_right.svg": "assets/assets/cube_right.015235a9.svg",
  "assets/assets/cube_right_2.svg": "assets/assets/cube_right_2.c1631362.svg",
  "assets/assets/sssvip_back.webp": "assets/assets/sssvip_back.ecfc0656.webp",
  "assets/assets/sssvip_card.webp": "assets/assets/sssvip_card.e4fc27d9.webp",
  "assets/assets/sssvip_card_back.svg": "assets/assets/sssvip_card_back.46be0630.svg",
  "assets/assets/sssvip_id.webp": "assets/assets/sssvip_id.2f5937c7.webp",
  "assets/assets/sssvip_top.svg": "assets/assets/sssvip_top.fcd71966.svg",
  "assets/assets/ssvip_back.webp": "assets/assets/ssvip_back.c0acdfc2.webp",
  "assets/assets/ssvip_card.webp": "assets/assets/ssvip_card.0d3d9118.webp",
  "assets/assets/ssvip_card_back.svg": "assets/assets/ssvip_card_back.923568c6.svg",
  "assets/assets/ssvip_id.webp": "assets/assets/ssvip_id.682f3be2.webp",
  "assets/assets/ssvip_top.svg": "assets/assets/ssvip_top.636aed4b.svg",
  "assets/assets/svip_back.webp": "assets/assets/svip_back.dc1d4995.webp",
  "assets/assets/svip_card.webp": "assets/assets/svip_card.180bc80c.webp",
  "assets/assets/svip_card_back.svg": "assets/assets/svip_card_back.16bf55fe.svg",
  "assets/assets/svip_id.webp": "assets/assets/svip_id.cdb16d70.webp",
  "assets/assets/svip_top.svg": "assets/assets/svip_top.6b8266ed.svg",
  "assets/assets/vip/sssvip.webp": "assets/assets/vip/sssvip.39a480d6.webp",
  "favicon.png": "favicon.5dcef449.png",
  "flutter.js": "flutter.822458aa.js",
  "main.dart.js": "main.dart.084cc176.js",
  "main.dart_0.js": "main.dart_0.1ef1a9a4.js",
  "main.dart_1.js": "main.dart_1.37b95000.js",
  "main.dart_2.js": "main.dart_2.42ecf323.js",
  "main.dart_3.js": "main.dart_3.64b11986.js",
  "main.dart_4.js": "main.dart_4.e0a2a0da.js",
  "main.dart_5.js": "main.dart_5.bf23fa32.js",
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
    