//Sat Jul 06 2024 10:02:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function llgInit() {
  var _0x492c80 = "<div id=\"llg-dialog-content\" style=\"visibility: hidden;z-index:9999;position: fixed;top:0;left:0;width: 100%;height: 100vh;background-color: rgba(0,0,0,0.5);display: flex;align-items: center;justify-content: center;flex-direction: column\">\n  <img id=\"llg-loading\" src=\"https://static.wi-fi.cn/omc/202211/2845838dcb634823afa6044f0ae184f0348b43a4.gif\" style=\"display:none;width: 80px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);z-index: 9\"/>\n  <div id=\"llg-dialog-box\" style=\"position:relative;width: 90%;max-width:415px\">\n    <img id=\"llg-dialog-title\" style=\"width: 100%;\" alt=\"\" src=\"\">\n    <img id=\"llg-dialog-bg\" style=\"width: 100%;\" src=\"https://static.wi-fi.cn/omc/202211/45cd16563c2af7703b12225359ad898efea4ae3a.png\" alt=\"\">\n    <div style=\"position: absolute;bottom: 5%;left: 50%;transform: translate(-50%);width: 90%;display: flex;align-items: center;justify-content: space-around\">\n      <img id=\"llg-dialog-cancel\" src=\"https://static.wi-fi.cn/omc/202211/114d2da233a580c163a3dd783a0df912488e3e29.png\" style=\"display:none;width: 40%\">\n      <img id=\"llg-dialog-confirm\" src=\"https://static.wi-fi.cn/omc/202211/114d2da233a580c163a3dd783a0df912488e3e29.png\" style=\"display:none;width: 40%\">\n    </div>\n  </div>\n  <img id=\"llg-dialog-close\" src=\"https://static.wi-fi.cn/omc/202207/fb8bff3c272d494efe8c4971e15909f884bd3d48.png\" style=\"width: 15px;height: 15px;margin-top:30px\">\n</div>";
  var _0x440643 = "<div id=\"llg-dialog-content\" style=\"visibility: hidden;z-index:9999;position: fixed;top:0;left:0;width: 100%;height: 100vh;background-color: rgba(0,0,0,0.5);display: flex;align-items: center;justify-content: center;flex-direction: column\">\n  <img id=\"llg-loading\" src=\"https://static.wi-fi.cn/omc/202211/2845838dcb634823afa6044f0ae184f0348b43a4.gif\" style=\"display:none;width: 80px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);z-index: 9\"/>\n  <div id=\"llg-dialog-box\" style=\"position:relative;width: 90%;max-width:415px;background-color:#ffffff;border-radius:8px;padding:10px\">\n    <img id=\"llg-dialog-close\" style=\"display:none;position: absolute;right:10px;top: 10px;width: 15px;height: 15px;\" src=\"\">\n    <div id=\"llg-dialog-title\" style=\"font-size:20px;line-height:50px;font-weight:bold;text-align:center;color:#ff7900\">温馨提示</div>\n    <div id=\"llg-dialog-text\" style=\"padding:0 10px 80px;font-size: 17px;line-height: 30px;text-align: center\"></div>\n    <div style=\"position: absolute;bottom: 10%;left: 0;width: 100%;display: flex;align-items: center;justify-content: space-around\">\n      <div id=\"llg-dialog-cancel\" style=\"display:none;border-radius:50px;background-color:#ff7900;width:120px;height:40px;line-height:40px;text-align:center;color:#ffffff\">取消</div>\n      <div id=\"llg-dialog-confirm\" style=\"font-size:18px;border-radius:50px;background-color:#ff7900;width:120px;height:40px;line-height:40px;text-align:center;color:#ffffff\">确定</div>\n    </div>\n  </div>\n</div>";
  var _0x399d0f = "<div id=\"llg-dialog-content\" style=\"visibility: hidden;z-index:9999;position: fixed;top:0;left:0;width: 100%;height: 100vh;display: flex;align-items: center;justify-content: center;flex-direction: column\">\n  <div id=\"llg-dialog-box\" style=\"background-color: rgba(0,0,0,0.8);border-radius:8px;padding:10px 30px;color:#ffffff;max-width: 80%\"></div>\n</div>";
  var _0x30b95c = "<div id=\"llg-dialog-content\" style=\"visibility: hidden;z-index:9999;position: fixed;top:0;left:0;width: 100%;height: 100vh;background-color: rgba(0,0,0,0.5);display: flex;align-items: center;justify-content: center;flex-direction: column\">  <img id=\"llg-loading\" src=\"https://static.wi-fi.cn/omc/202211/2845838dcb634823afa6044f0ae184f0348b43a4.gif\" style=\"display:none;width: 80px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);z-index: 9\"/>  <div id=\"llg-dialog-box\" style=\"position:relative;width: 90%;max-width:415px;background-color:#ffffff;border-radius:8px;padding:10px\">    <img id=\"llg-dialog-close\" style=\"position: absolute;right:10px;top: 10px;width: 15px;height: 15px;\" src=\"https://static.wi-fi.cn/omc/202305/5463183a750a2ebfcdc421e835039d5d8a733531.png\">    <div id=\"llg-dialog-title\" style=\"font-size:20px;line-height:50px;font-weight:bold;text-align:center;color:#ff7900\">温馨提示</div>    <div id=\"llg-dialog-text\" style=\"padding:10px;font-size: 17px;line-height: 30px;text-align: center\"></div>    <div style=\"position: relative;border-radius: 8px;overflow: hidden\">       <video id=\"llg-dialog-video\" playsinline=\"true\" x5-video-player-type=\"h5-page\" src=\"\" extraInfo:{poster:`noposter`} style=\"position: relative;z-index:1;width: 100%;display: none;\"></video>       <img id=\"llg-dialog-preview\" src=\"\" alt=\"\" style=\"width: 100%;display: block;\">       <div id=\"llg-dialog-mask\" style=\"position:absolute;top:0;left: 0;z-index:2;width: 100%;height:100%;background-color: rgba(0,0,0,.3)\">           <div id=\"llg-dialog-btnbox\" style=\"display: none;position: absolute;top: 50%;left: 0;width:100%;height:40px;transform: translate(0,-50%);\">               <div id=\"llg-dialog-continue\" style=\"display:none;position: absolute;top: 0;left: 8%;font-size:18px;border-radius:50px;background-color:#ffffff;width:120px;height:40px;line-height:40px;text-align:center;color:#222222\">继续播放</div>               <div id=\"llg-dialog-replay\" style=\"position: absolute;top: 0;left: 8%;font-size:18px;border-radius:50px;background-color:#ffffff;width:120px;height:40px;line-height:40px;text-align:center;color:#222222\">重播</div>               <div id=\"llg-dialog-confirm\" style=\"position: absolute;top: 0;right: 8%;font-size:18px;border-radius:50px;background-color:#ff7900;width:120px;height:40px;line-height:40px;text-align:center;color:#ffffff\">查看下集</div>           </div>           <img id=\"llg-dialog-play\" src=\"https://static.wi-fi.cn/omc/202404/21eb50560f7ef5f0c4812c4b99a68d78afbdb201.png\" alt=\"\" style=\"width: 60px;height:60px;display: block;position: absolute;top: 50%;left:50%;transform: translate(-50%,-50%)\">       </div>    </div>    <div id=\"llg-dialog-open-all\" hidden style=\"font-size:18px;border-radius:50px;background-color:#ff7900;height:40px;line-height:40px;text-align:center;color:#ffffff;margin: 0.7rem 0;\">点击查看全集</div>";
  "  </div></div>";
  this.app_key = "";
  this.app_secret = "";
  this.seller_id = "";
  this.phone = "";
  var _0x12c70c = this;
  var _0x108eb7 = "";
  var _0x2d61cd = "";
  var _0x3a2b26 = "";
  var _0x97372b = "https://api.liuliangguo.com";
  var _0x42443d = 0;
  var _0x59b968 = null;
  var _0x3777ae = null;
  var _0x1fbf2f = !!(_0x39857b("hasRedirect") && sessionStorage.getItem("redirect_opions"));
  var _0x568b0a = false;
  this.openDev = function () {
    console.log("开启测试调试");
    _0x97372b = "https://llg-api.zonelian.com";
  };
  this.setSellerId = function (_0x1f4bf0) {
    this.seller_id = _0x1f4bf0;
  };
  this.setPhone = function (_0x2dcb30) {
    this.phone = _0x2dcb30;
  };
  this.getAdAndShow = function (_0x26fa10, _0x34d022) {
    var _0x162367 = null;
    if (!_0x26fa10.app_key || !_0x26fa10.app_secret || !_0x26fa10.ad_position_id) {
      console.log("获取广告失败");
      _0x162367 = {
        "is_success": false,
        "message": "缺少必填参数(app_key/app_secret/ad_position_id)"
      };
      _0x34d022 && _0x34d022(_0x162367);
      return;
    }
    this.app_key = _0x26fa10.app_key;
    this.app_secret = _0x26fa10.app_secret;
    var _0x4bb70f = {
      "browser_unique_id": _0xdd27de,
      "package_name": _0x108eb7 || "",
      "referer_url": location.href
    };
    if (_0x26fa10.type === "goBack" || _0x26fa10.type === "forwardBack") {
      if (_0x26fa10.type === "forwardBack" && _0x59b968 < 2) {
        _0x4bb70f.request_number = 2;
        _0x59b968 = 2;
      } else {
        _0x4bb70f.request_number = _0x59b968;
      }
    } else {
      _0x4bb70f.request_number = null;
    }
    _0x4bb70f = Object.assign(_0x26fa10, _0x4bb70f);
    if (this.seller_id && _0x4bb70f.referer_url.indexOf("seller_id") == -1) {
      _0x4bb70f.referer_url = location.search ? location.origin + location.pathname + location.search + "&seller_id=" + this.seller_id : location.origin + location.pathname + "?seller_id=" + this.seller_id;
    }
    var _0x4cca1d = {
      "request": _0x4bb70f,
      "url": _0x97372b + "/adx/ad/info.json"
    };
    _0x381865(_0x4cca1d, function (_0x4d9308) {
      _0x162367 = {
        "is_success": _0x4d9308.code + "" !== "0" || _0x4d9308.data === [] ? false : true,
        "message": _0x4d9308.msg
      };
      var _0x4cca1d = _0x4d9308.data;
      if (!_0x162367.is_success) {
        _0x34d022 && _0x34d022(_0x162367);
        return;
      }
      var _0x53a517 = _0x4cca1d.creative_type;
      var _0x2db10f = _0x4cca1d.material || "";
      _0x3a2b26 = _0x4cca1d.url;
      _0x2d61cd = _0x4cca1d.click_id;
      _0x42443d = _0x4cca1d.is_candidate_ad;
      if (_0x4cca1d.is_candidate_ad) {
        ++_0x59b968;
        window.history.pushState({
          "title": "title",
          "url": "#"
        }, "title", location.href);
      } else {
        console.log("无后续引流");
        _0x59b968 = null;
        _0x568b0a = true;
      }
      if (!!(+_0x39857b("hasRedirect") && sessionStorage.getItem("redirect_opions"))) {
        if (_0x53a517 == 2) {
          _0x2db10f.close_btn_img = "http://static.wi-fi.cn/omc/202305/ab9ca486a98f542ed789b614ac3f401dc1d59e19.png";
        }
      }
      sessionStorage.removeItem("redirect_opions");
      _0x36253a("hasRedirect", "0");
      _0x2db9a9(_0x53a517, _0x4cca1d, _0x4d9308.data.ad_position_id);
      _0x12c70c.showTrack(_0x34d022);
      if (_0x53a517 == 3) {
        _0x47df70.bind(_0x12c70c)(_0x26fa10, _0x2db10f.auto_redirect_ms || 2500);
      } else {
        if (_0x53a517 == 1) {
          document.getElementById("llg-dialog-bg").onclick = function () {
            _0x47df70.bind(_0x12c70c)(_0x26fa10);
          };
          document.getElementById("llg-dialog-title").onclick = function () {
            _0x47df70.bind(_0x12c70c)(_0x26fa10);
          };
        }
        if (_0x53a517 == 2) {
          document.getElementById("llg-dialog-box").onclick = function () {
            _0x47df70.bind(_0x12c70c)(_0x26fa10);
          };
        }
        if (_0x53a517 == 5) {
          var _0x165f86 = false;
          var _0x4c11b1 = navigator.userAgent.indexOf("MiuiBrowser") != -1 || navigator.userAgent.indexOf("HuaweiBrowser") != -1;
          _0x2f265d("llg-dialog-play").onclick = function (_0x27d128) {
            _0x27d128.stopPropagation();
            _0x27d128.preventDefault();
            var _0x708db8 = function () {
              _0x427b4f("llg-dialog-video");
              _0x3e17fe("llg-dialog-preview");
              _0x3e17fe("llg-dialog-play");
              _0x3e17fe("llg-dialog-mask");
              _0x3e17fe("llg-dialog-btnbox");
              _0x2f265d("llg-dialog-video").play();
            };
            var _0x38b7e9 = function () {
              _0x2f265d("llg-dialog-video").pause();
              _0x3e17fe("llg-dialog-replay");
              _0x427b4f("llg-dialog-continue");
              _0x427b4f("llg-dialog-btnbox");
              _0x427b4f("llg-dialog-mask");
              if (_0x4c11b1) {
                _0x3e17fe("llg-dialog-video");
                _0x427b4f("llg-dialog-preview");
              }
            };
            _0x708db8();
            _0x2f265d("llg-dialog-video").onerror = function () {
              _0x47df70.bind(_0x12c70c)(_0x26fa10);
            };
            _0x2f265d("llg-dialog-video").onclick = function () {
              _0x2f265d("llg-dialog-video").pause();
            };
            _0x2f265d("llg-dialog-video").onpause = function () {
              if (_0x165f86 && _0x4c11b1) {
                _0x165f86 = false;
                return;
              }
              _0x38b7e9();
            };
            _0x2f265d("llg-dialog-video").onended = function () {
              _0x2f265d("llg-dialog-video").pause();
              _0x3e17fe("llg-dialog-continue");
              _0x427b4f("llg-dialog-replay");
              if (_0x4cca1d.material.finish_auto_jump && _0x4cca1d.material.finish_auto_jump == "1") {
                _0x47df70.bind(_0x12c70c)(_0x26fa10);
              }
              _0x165f86 = true;
            };
            _0x2f265d("llg-dialog-continue").onclick = function (_0x27d128) {
              _0x27d128.stopPropagation();
              _0x27d128.preventDefault();
              _0x708db8();
            };
            _0x2f265d("llg-dialog-replay").onclick = function (_0x27d128) {
              _0x27d128.stopPropagation();
              _0x27d128.preventDefault();
              _0x708db8();
            };
          };
          document.getElementById("llg-dialog-open-all").onclick = function (_0x5025e0) {
            _0x5025e0.stopPropagation();
            _0x5025e0.preventDefault();
            _0x47df70.bind(_0x12c70c)(_0x26fa10);
          };
        }
        document.getElementById("llg-dialog-confirm").onclick = function (_0x5dd290) {
          _0x5dd290.stopPropagation();
          _0x5dd290.preventDefault();
          _0x47df70.bind(_0x12c70c)(_0x26fa10);
        };
        if (_0x2f265d("llg-dialog-cancel")) {
          _0x2f265d("llg-dialog-cancel").onclick = function (_0x55f8dd) {
            _0x55f8dd.stopPropagation();
            _0x55f8dd.preventDefault();
            if (_0x3777ae) {
              clearTimeout(_0x3777ae);
              _0x3777ae = null;
            }
            _0x28f311();
          };
        }
        if (_0x53a517 == 1 || _0x53a517 == 5 || _0x2db10f.close_btn_img) {
          document.getElementById("llg-dialog-close").onclick = function (_0x35c77b) {
            _0x35c77b.stopPropagation();
            _0x35c77b.preventDefault();
            if (_0x3777ae) {
              clearTimeout(_0x3777ae);
              _0x3777ae = null;
            }
            _0x28f311();
            if (_0x2f265d("llg-dialog-video")) {
              _0x2f265d("llg-dialog-video").pause();
            }
            if (_0x26fa10.type === "forwardBack") {
              _0x59b968 = null;
              _0x26fa10.type = "";
              return;
            }
            if (_0x4cca1d.is_candidate_ad) {
              _0x26fa10.type = "goBack";
              _0x12c70c.getAdAndShow(_0x26fa10, _0x34d022);
            }
          };
        }
        if (_0x2db10f.auto_redirect) {
          _0x47df70.bind(_0x12c70c)(_0x26fa10, _0x2db10f.auto_redirect_ms || 2500);
        }
      }
      _0x34d022 && _0x34d022(_0x162367, _0x4cca1d && _0x4cca1d.is_callback_data ? _0x4cca1d : undefined);
    }, function (_0x3ed026) {
      _0x34d022 && _0x34d022({
        "is_success": _0x3ed026.code + "" === "0" ? true : false,
        "message": _0x3ed026.msg
      });
    });
  };
  this.showTrack = function (_0x595a27) {
    var _0x191b9e = {
      "app_key": this.app_key,
      "app_secret": this.app_secret,
      "click_id": _0x2d61cd
    };
    var _0xb66dcf = {
      "request": _0x191b9e,
      "url": _0x97372b + "/api/v1/trace/show"
    };
    _0x381865(_0xb66dcf, function (_0x4d392f) {
      console.log("曝光上报完成");
    }, function (_0x27bd57) {
      console.log("曝光上报失败");
      var _0x18e3f9 = {
        "is_success": _0x27bd57.code + "" === "0" ? true : false,
        "message": _0x27bd57.msg
      };
      _0x595a27 && _0x595a27(_0x18e3f9);
    });
  };
  this.clickTrack = function (_0x28051c) {
    var _0x3bba10 = {
      "app_key": this.app_key,
      "app_secret": this.app_secret,
      "click_id": _0x2d61cd
    };
    var _0x449643 = {
      "request": _0x3bba10,
      "url": _0x97372b + "/api/v1/trace/click"
    };
    _0x381865(_0x449643, function (_0x183673) {
      console.log("点击上报完成");
      _0x28051c && _0x28051c();
    }, function (_0x9ea783) {
      console.log("点击上报失败");
      var _0x4d73a5 = {
        "is_success": _0x9ea783.code + "" === "0" ? true : false,
        "message": _0x9ea783.msg
      };
      _0x28051c && _0x28051c(_0x4d73a5);
    });
  };
  this.enableGobackAd = function (_0x5535a4, _0x2c5efb) {
    var _0x12c70c = this;
    window.addEventListener("popstate", _0x5ab336, false);
    window.history.pushState({
      "title": "title",
      "url": "#"
    }, "title", location.href);
    function _0x5ab336() {
      if (sessionStorage.getItem("redirect_opions")) return;
      if (document.getElementById("llg-dialog-content")) {
        _0x28f311();
      }
      if (!_0x42443d && _0x59b968) {
        window.removeEventListener("popstate", _0x5ab336);
        history.go(-1);
        return;
      }
      _0x59b968 = _0x59b968 || 1;
      _0x5535a4.type = "goBack";
      _0x5535a4.phone = _0x12c70c.phone || _0x5535a4.phone;
      _0x12c70c.getAdAndShow(_0x5535a4, _0x2c5efb);
    }
  };
  function _0x47df70(_0x3b0122, _0x407696) {
    if (_0x3b0122.type !== "goBack" && window.productDetail && !_0x568b0a) {
      _0x36253a("hasRedirect", 1);
      _0x1fbf2f = true;
      sessionStorage.setItem("redirect_opions", JSON.stringify(_0x3b0122));
    }
    if (_0x407696) {
      _0x3777ae = setTimeout(function () {
        _0x28f311();
        _0x12c70c.clickTrack(function () {
          location.href = _0x3a2b26;
        });
      }, _0x407696);
    } else {
      _0x28f311();
      _0x12c70c.clickTrack(function () {
        location.href = _0x3a2b26;
      });
    }
  }
  function _0x36253a(_0x40675a, _0x9b2144) {
    var _0x24e507 = location.href.toString();
    if (_0x40675a && _0x9b2144) {
      if (_0x24e507.indexOf(_0x40675a + "=" + _0x9b2144) > 1) {
        return;
      }
    }
    if (_0x24e507.indexOf("&" + _0x40675a + "=") > 0) {
      var _0x8b2e1d = eval("/(&" + _0x40675a + "=)([^&]*)/gi");
      var _0x549281 = _0x24e507.replace(_0x8b2e1d, "&" + _0x40675a + "=" + _0x9b2144);
    } else {
      if (_0x24e507.indexOf("?") > 0) {
        var _0x549281 = location.origin + location.pathname + location.search + "&" + _0x40675a + "=" + _0x9b2144;
      } else {
        var _0x549281 = location.origin + location.pathname + location.search + "?" + _0x40675a + "=" + _0x9b2144;
      }
    }
    var _0x46fde6 = {
      "id": ""
    };
    var _0x2c3c2d = "";
    history.replaceState(_0x46fde6, _0x2c3c2d, _0x549281);
  }
  function _0x39857b(_0x4255dd) {
    var _0x1a0025 = new RegExp("(^|&)" + _0x4255dd + "=([^&]*)(&|$)", "i");
    var _0xb6afc9 = window.location.search.substr(1).match(_0x1a0025);
    if (_0xb6afc9 != null) {
      return unescape(_0xb6afc9[2]);
    }
    return null;
  }
  var _0x2003ec = document.createElement("div");
  function _0x2db9a9(_0x1625c7, _0x259012, _0x2a72dd) {
    var _0x831467 = _0x259012.material || "";
    if (!_0x831467) return;
    document.querySelector("body").appendChild(_0x2003ec);
    if (_0x1625c7 == 1) {
      _0x2003ec.innerHTML = _0x492c80;
      document.getElementById("llg-dialog-bg").setAttribute("src", _0x831467.content_image_url);
      _0x831467.guide_image_url && document.getElementById("llg-dialog-title").setAttribute("src", _0x831467.guide_image_url);
      if (_0x831467.active_button == 1) {
        document.getElementById("llg-dialog-confirm").setAttribute("src", _0x831467.confirm_button_image_url);
        _0x427b4f("llg-dialog-confirm");
        if (_0x831467.cancel_button_image_url) {
          document.getElementById("llg-dialog-cancel").setAttribute("src", _0x831467.cancel_button_image_url);
          _0x427b4f("llg-dialog-cancel");
        } else {
          document.getElementById("llg-dialog-confirm").style.width = "70%";
        }
      }
      _0x49b149();
    } else if (_0x1625c7 == 2) {
      _0x2003ec.innerHTML = _0x440643;
      document.getElementById("llg-dialog-confirm").textContent = _0x831467.confirm_button_text || "确定";
      if (_0x2a72dd == 4) {
        document.getElementById("llg-dialog-title").innerHTML = _0x831467.guide_text;
        document.getElementById("llg-dialog-text").innerHTML = _0x831467.content_text;
      } else {
        document.getElementById("llg-dialog-title").innerHTML = "温馨提示";
        document.getElementById("llg-dialog-text").innerHTML = _0x831467.guide_text ? _0x831467.guide_text + _0x831467.content_text : _0x831467.content_text;
      }
      if (_0x831467.cancel_button_text) {
        document.getElementById("llg-dialog-cancel").textContent = _0x831467.cancel_button_text;
        _0x427b4f("llg-dialog-cancel");
      }
      if (_0x831467.close_btn_img) {
        document.getElementById("llg-dialog-close").setAttribute("src", _0x831467.close_btn_img);
        _0x427b4f("llg-dialog-close");
      }
      _0x49b149();
    } else if (_0x1625c7 == 3) {
      if (_0x831467.content_text) {
        _0x2003ec.innerHTML = _0x399d0f;
        document.getElementById("llg-dialog-box").innerHTML = _0x831467.content_text;
        _0x49b149();
      }
    } else if (_0x1625c7 == 5) {
      _0x2003ec.innerHTML = _0x30b95c;
      _0x2f265d("llg-dialog-box").style.maxHeight = window.screen.availHeight + "px";
      _0x2f265d("llg-dialog-text").innerHTML = _0x831467.content_text;
      _0x2f265d("llg-dialog-preview").setAttribute("src", _0x831467.video_cover);
      _0x2f265d("llg-dialog-video").setAttribute("src", _0x831467.video_url);
      _0x2f265d("llg-dialog-confirm").textContent = _0x831467.confirm_button_text || "查看下集";
      if (_0x831467.popup_button_text) {
        _0x427b4f("llg-dialog-open-all");
        _0x2f265d("llg-dialog-open-all").textContent = _0x831467.popup_button_text;
      }
      _0x49b149();
    }
  }
  function _0x49b149() {
    var _0x458d52 = document.getElementById("llg-dialog-content");
    if (!_0x458d52) return;
    _0x458d52.style.visibility = "visible";
  }
  function _0x28f311() {
    var _0x3fcc6e = document.getElementById("llg-dialog-content");
    if (!_0x3fcc6e) return;
    _0x3fcc6e.style.visibility = "hidden";
  }
  function _0x427b4f(_0x4db711) {
    document.getElementById(_0x4db711).style.display = "block";
  }
  function _0x3e17fe(_0x5d01b1) {
    document.getElementById(_0x5d01b1).style.display = "none";
  }
  function _0x2f265d(_0x2875f3) {
    return document.getElementById(_0x2875f3);
  }
  var _0xdd27de = _0x1b016a();
  function _0x1b016a() {
    var _0xdd27de = localStorage.llguuid || "";
    if (!_0xdd27de) {
      _0xdd27de = _0x2c57c9();
      localStorage.setItem("llguuid", _0xdd27de);
    }
    return _0xdd27de;
  }
  function _0x2c57c9() {
    var _0x48a8de = new Date().getTime();
    var _0xdd27de = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (_0x163abd) {
      var _0x5c5c2a = (_0x48a8de + Math.random() * 16) % 16 | 0;
      _0x48a8de = Math.floor(_0x48a8de / 16);
      return (_0x163abd == "x" ? _0x5c5c2a : _0x5c5c2a & 3 | 8).toString(16);
    });
    return _0xdd27de;
  }
  function _0x381865(_0x254605, _0x5e3c73 = function () {}, _0x34c544 = function () {}) {
    var _0x4d917c = _0x25a264(_0x254605.request);
    var _0x2ea981 = JSON.stringify(_0x4d917c);
    _0x12c4e5({
      "url": _0x254605.url,
      "data": _0x2ea981,
      "callback": function (_0x2393b0) {
        var _0x4d917c = _0x2f2890(_0x2393b0);
        if (_0x4d917c.code == 0) {
          _0x5e3c73(_0x4d917c);
        } else {
          _0x34c544({
            "code": 500,
            "msg": _0x4d917c.msg || "抱歉，没有匹配到广告"
          });
        }
      }
    });
    function _0x12c4e5({
      url,
      data,
      callback
    }) {
      var _0x756f7f = "jsonp_" + new Date().getTime();
      var _0x4a2f06 = document.createElement("script");
      _0x4a2f06.src = url + "?data=" + data + "&callback=" + _0x756f7f;
      _0x4a2f06.type = "text/javascript";
      document.body.appendChild(_0x4a2f06);
      window[_0x756f7f] = function (_0x33794d) {
        callback && callback(_0x33794d);
        document.body.removeChild(_0x4a2f06);
        delete window[_0x756f7f];
      };
      _0x4a2f06.onerror = function () {
        window[_0x756f7f] = function () {
          callback && callback("抱歉，没有匹配到广告");
          document.body.removeChild(_0x4a2f06);
          delete window[_0x756f7f];
        };
        _0x34c544({
          "code": 500,
          "msg": "抱歉，没有匹配到广告"
        });
      };
    }
  }
  var _0x337461 = "yZM2mn0akhcq4VQK";
  var _0xb88bc4 = "KEYTphIWNO1D9LfMsHoi0by3AZcR5tvu";
  function _0x25a264(_0x22adc0) {
    var _0x589fa3 = Object.keys(_0x22adc0).map(function (_0x2c45de) {
      return encodeURIComponent(_0x2c45de) + "=" + encodeURIComponent(_0x22adc0[_0x2c45de]);
    }).join("&");
    var _0xf2fc8f = _0x433180.AES.encrypt(_0x589fa3, _0x433180.enc.Utf8.parse(_0xb88bc4), {
      "iv": _0x433180.enc.Utf8.parse(_0x337461),
      "mode": _0x433180.mode.CBC,
      "padding": _0x433180.pad.Pkcs7
    });
    return _0xf2fc8f + "";
  }
  function _0x2f2890(_0x2ce11f) {
    if (_0x2ce11f === null) return "";
    var _0x50cf95 = _0x433180.AES.decrypt(_0x2ce11f, _0x433180.enc.Utf8.parse(_0xb88bc4), {
      "iv": _0x433180.enc.Utf8.parse(_0x337461),
      "mode": _0x433180.mode.CBC,
      "padding": _0x433180.pad.Pkcs7
    }).toString(_0x433180.enc.Utf8);
    return JSON.parse(_0x50cf95);
  }
  var _0x433180 = _0x433180 || function (_0x2f1f4d, _0x562978) {
    var _0x536075 = {},
      _0x119b55 = _0x536075.lib = {},
      _0x172b39 = function () {},
      _0x9431ad = _0x119b55.Base = {
        "extend": function (_0x581aed) {
          _0x172b39.prototype = this;
          var _0xd684c3 = new _0x172b39();
          _0x581aed && _0xd684c3.mixIn(_0x581aed);
          _0xd684c3.hasOwnProperty("init") || (_0xd684c3.init = function () {
            _0xd684c3.$super.init.apply(this, arguments);
          });
          _0xd684c3.init.prototype = _0xd684c3;
          _0xd684c3.$super = this;
          return _0xd684c3;
        },
        "create": function () {
          var _0x18799d = this.extend();
          _0x18799d.init.apply(_0x18799d, arguments);
          return _0x18799d;
        },
        "init": function () {},
        "mixIn": function (_0x17ad64) {
          for (var _0x5b3211 in _0x17ad64) _0x17ad64.hasOwnProperty(_0x5b3211) && (this[_0x5b3211] = _0x17ad64[_0x5b3211]);
          _0x17ad64.hasOwnProperty("toString") && (this.toString = _0x17ad64.toString);
        },
        "clone": function () {
          return this.init.prototype.extend(this);
        }
      },
      _0x510593 = _0x119b55.WordArray = _0x9431ad.extend({
        "init": function (_0x6fa79d, _0x3fe8bc) {
          _0x6fa79d = this.words = _0x6fa79d || [];
          this.sigBytes = _0x3fe8bc != _0x562978 ? _0x3fe8bc : 4 * _0x6fa79d.length;
        },
        "toString": function (_0x34a8a6) {
          return (_0x34a8a6 || _0x2d4e23).stringify(this);
        },
        "concat": function (_0x4fb9d9) {
          var _0x2eeceb = this.words,
            _0x4a2eed = _0x4fb9d9.words,
            _0x1d33a2 = this.sigBytes;
          _0x4fb9d9 = _0x4fb9d9.sigBytes;
          this.clamp();
          if (_0x1d33a2 % 4) for (var _0x1d877d = 0; _0x1d877d < _0x4fb9d9; _0x1d877d++) _0x2eeceb[_0x1d33a2 + _0x1d877d >>> 2] |= (_0x4a2eed[_0x1d877d >>> 2] >>> 24 - 8 * (_0x1d877d % 4) & 255) << 24 - 8 * ((_0x1d33a2 + _0x1d877d) % 4);else if (65535 < _0x4a2eed.length) for (_0x1d877d = 0; _0x1d877d < _0x4fb9d9; _0x1d877d += 4) _0x2eeceb[_0x1d33a2 + _0x1d877d >>> 2] = _0x4a2eed[_0x1d877d >>> 2];else _0x2eeceb.push.apply(_0x2eeceb, _0x4a2eed);
          this.sigBytes += _0x4fb9d9;
          return this;
        },
        "clamp": function () {
          var _0x7e6232 = this.words,
            _0x2d55ce = this.sigBytes;
          _0x7e6232[_0x2d55ce >>> 2] &= 4294967295 << 32 - 8 * (_0x2d55ce % 4);
          _0x7e6232.length = _0x2f1f4d.ceil(_0x2d55ce / 4);
        },
        "clone": function () {
          var _0x378d4f = _0x9431ad.clone.call(this);
          _0x378d4f.words = this.words.slice(0);
          return _0x378d4f;
        },
        "random": function (_0x41fccf) {
          for (var _0x2ec0f5 = [], _0x5ac4da = 0; _0x5ac4da < _0x41fccf; _0x5ac4da += 4) _0x2ec0f5.push(4294967296 * _0x2f1f4d.random() | 0);
          return new _0x510593.init(_0x2ec0f5, _0x41fccf);
        }
      }),
      _0x119e15 = _0x536075.enc = {},
      _0x2d4e23 = _0x119e15.Hex = {
        "stringify": function (_0x320007) {
          var _0x148c49 = _0x320007.words;
          _0x320007 = _0x320007.sigBytes;
          for (var _0x57853c = [], _0x1c98dc = 0; _0x1c98dc < _0x320007; _0x1c98dc++) {
            var _0x30c619 = _0x148c49[_0x1c98dc >>> 2] >>> 24 - 8 * (_0x1c98dc % 4) & 255;
            _0x57853c.push((_0x30c619 >>> 4).toString(16));
            _0x57853c.push((_0x30c619 & 15).toString(16));
          }
          return _0x57853c.join("");
        },
        "parse": function (_0x39d213) {
          for (var _0x45a562 = _0x39d213.length, _0x13b8c5 = [], _0x51d13f = 0; _0x51d13f < _0x45a562; _0x51d13f += 2) _0x13b8c5[_0x51d13f >>> 3] |= parseInt(_0x39d213.substr(_0x51d13f, 2), 16) << 24 - 4 * (_0x51d13f % 8);
          return new _0x510593.init(_0x13b8c5, _0x45a562 / 2);
        }
      },
      _0x6ef497 = _0x119e15.Latin1 = {
        "stringify": function (_0x498ccf) {
          var _0x2a2fa9 = _0x498ccf.words;
          _0x498ccf = _0x498ccf.sigBytes;
          for (var _0xc18717 = [], _0x13645a = 0; _0x13645a < _0x498ccf; _0x13645a++) _0xc18717.push(String.fromCharCode(_0x2a2fa9[_0x13645a >>> 2] >>> 24 - 8 * (_0x13645a % 4) & 255));
          return _0xc18717.join("");
        },
        "parse": function (_0x4baf2f) {
          for (var _0x296535 = _0x4baf2f.length, _0x54270e = [], _0x5e547e = 0; _0x5e547e < _0x296535; _0x5e547e++) _0x54270e[_0x5e547e >>> 2] |= (_0x4baf2f.charCodeAt(_0x5e547e) & 255) << 24 - 8 * (_0x5e547e % 4);
          return new _0x510593.init(_0x54270e, _0x296535);
        }
      },
      _0x3ce7d5 = _0x119e15.Utf8 = {
        "stringify": function (_0x556717) {
          try {
            return decodeURIComponent(escape(_0x6ef497.stringify(_0x556717)));
          } catch (_0x400b15) {
            throw Error("Malformed UTF-8 data");
          }
        },
        "parse": function (_0xf8ca1) {
          return _0x6ef497.parse(unescape(encodeURIComponent(_0xf8ca1)));
        }
      },
      _0x4a388e = _0x119b55.BufferedBlockAlgorithm = _0x9431ad.extend({
        "reset": function () {
          this._data = new _0x510593.init();
          this._nDataBytes = 0;
        },
        "_append": function (_0x3709df) {
          "string" == typeof _0x3709df && (_0x3709df = _0x3ce7d5.parse(_0x3709df));
          this._data.concat(_0x3709df);
          this._nDataBytes += _0x3709df.sigBytes;
        },
        "_process": function (_0x56669d) {
          var _0x4b6882 = this._data,
            _0x347d96 = _0x4b6882.words,
            _0x177160 = _0x4b6882.sigBytes,
            _0x23c3fa = this.blockSize,
            _0x6ef497 = _0x177160 / (4 * _0x23c3fa),
            _0x6ef497 = _0x56669d ? _0x2f1f4d.ceil(_0x6ef497) : _0x2f1f4d.max((_0x6ef497 | 0) - this._minBufferSize, 0);
          _0x56669d = _0x6ef497 * _0x23c3fa;
          _0x177160 = _0x2f1f4d.min(4 * _0x56669d, _0x177160);
          if (_0x56669d) {
            for (var _0x4a388e = 0; _0x4a388e < _0x56669d; _0x4a388e += _0x23c3fa) this._doProcessBlock(_0x347d96, _0x4a388e);
            _0x4a388e = _0x347d96.splice(0, _0x56669d);
            _0x4b6882.sigBytes -= _0x177160;
          }
          return new _0x510593.init(_0x4a388e, _0x177160);
        },
        "clone": function () {
          var _0x565517 = _0x9431ad.clone.call(this);
          _0x565517._data = this._data.clone();
          return _0x565517;
        },
        "_minBufferSize": 0
      });
    _0x119b55.Hasher = _0x4a388e.extend({
      "cfg": _0x9431ad.extend(),
      "init": function (_0x224f87) {
        this.cfg = this.cfg.extend(_0x224f87);
        this.reset();
      },
      "reset": function () {
        _0x4a388e.reset.call(this);
        this._doReset();
      },
      "update": function (_0x2aeebd) {
        this._append(_0x2aeebd);
        this._process();
        return this;
      },
      "finalize": function (_0x54132a) {
        _0x54132a && this._append(_0x54132a);
        return this._doFinalize();
      },
      "blockSize": 16,
      "_createHelper": function (_0x5c9f32) {
        return function (_0x6ef497, _0x1cf7d5) {
          return new _0x5c9f32.init(_0x1cf7d5).finalize(_0x6ef497);
        };
      },
      "_createHmacHelper": function (_0x54df8b) {
        return function (_0x6ef497, _0xe4b03d) {
          return new _0x4c0e53.HMAC.init(_0x54df8b, _0xe4b03d).finalize(_0x6ef497);
        };
      }
    });
    var _0x4c0e53 = _0x536075.algo = {};
    return _0x536075;
  }(Math);
  (function () {
    var _0x3773a9 = _0x433180,
      _0x199de8 = _0x3773a9.lib.WordArray;
    _0x3773a9.enc.Base64 = {
      "stringify": function (_0x303b5e) {
        var _0x505351 = _0x303b5e.words,
          _0x199de8 = _0x303b5e.sigBytes,
          _0x991d7 = this._map;
        _0x303b5e.clamp();
        _0x303b5e = [];
        for (var _0x2255b8 = 0; _0x2255b8 < _0x199de8; _0x2255b8 += 3) for (var _0xc3cca9 = (_0x505351[_0x2255b8 >>> 2] >>> 24 - 8 * (_0x2255b8 % 4) & 255) << 16 | (_0x505351[_0x2255b8 + 1 >>> 2] >>> 24 - 8 * ((_0x2255b8 + 1) % 4) & 255) << 8 | _0x505351[_0x2255b8 + 2 >>> 2] >>> 24 - 8 * ((_0x2255b8 + 2) % 4) & 255, _0x14a381 = 0; 4 > _0x14a381 && _0x2255b8 + 0.75 * _0x14a381 < _0x199de8; _0x14a381++) _0x303b5e.push(_0x991d7.charAt(_0xc3cca9 >>> 6 * (3 - _0x14a381) & 63));
        if (_0x505351 = _0x991d7.charAt(64)) for (; _0x303b5e.length % 4;) _0x303b5e.push(_0x505351);
        return _0x303b5e.join("");
      },
      "parse": function (_0x3886d6) {
        var _0x204676 = _0x3886d6.length,
          _0x590f21 = this._map,
          _0x366875 = _0x590f21.charAt(64);
        _0x366875 && (_0x366875 = _0x3886d6.indexOf(_0x366875), -1 != _0x366875 && (_0x204676 = _0x366875));
        for (var _0x366875 = [], _0x3c493a = 0, _0xab69c0 = 0; _0xab69c0 < _0x204676; _0xab69c0++) if (_0xab69c0 % 4) {
          var _0x1d9762 = _0x590f21.indexOf(_0x3886d6.charAt(_0xab69c0 - 1)) << 2 * (_0xab69c0 % 4),
            _0x57e828 = _0x590f21.indexOf(_0x3886d6.charAt(_0xab69c0)) >>> 6 - 2 * (_0xab69c0 % 4);
          _0x366875[_0x3c493a >>> 2] |= (_0x1d9762 | _0x57e828) << 24 - 8 * (_0x3c493a % 4);
          _0x3c493a++;
        }
        return _0x199de8.create(_0x366875, _0x3c493a);
      },
      "_map": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
  })();
  (function (_0x27959e) {
    function _0x1b3eb3(_0x11d922, _0x3bee75, _0x133e0b, _0x461df6, _0x4ac04f, _0xde9e41, _0x541c5e) {
      _0x11d922 = _0x11d922 + (_0x3bee75 & _0x133e0b | ~_0x3bee75 & _0x461df6) + _0x4ac04f + _0x541c5e;
      return (_0x11d922 << _0xde9e41 | _0x11d922 >>> 32 - _0xde9e41) + _0x3bee75;
    }
    function _0x13a967(_0x271033, _0x136a04, _0x304bf8, _0x5373ba, _0x4b0f0c, _0x54da98, _0x396c20) {
      _0x271033 = _0x271033 + (_0x136a04 & _0x5373ba | _0x304bf8 & ~_0x5373ba) + _0x4b0f0c + _0x396c20;
      return (_0x271033 << _0x54da98 | _0x271033 >>> 32 - _0x54da98) + _0x136a04;
    }
    function _0x7cf728(_0x5cf75f, _0x5890c5, _0x3cf52c, _0x4fe73d, _0x4d63ff, _0x725f8c, _0x363fd2) {
      _0x5cf75f = _0x5cf75f + (_0x5890c5 ^ _0x3cf52c ^ _0x4fe73d) + _0x4d63ff + _0x363fd2;
      return (_0x5cf75f << _0x725f8c | _0x5cf75f >>> 32 - _0x725f8c) + _0x5890c5;
    }
    function _0x34cb3e(_0x2f1406, _0x428cac, _0xc68f47, _0x2b5316, _0x563869, _0x1f0401, _0x10ce52) {
      _0x2f1406 = _0x2f1406 + (_0xc68f47 ^ (_0x428cac | ~_0x2b5316)) + _0x563869 + _0x10ce52;
      return (_0x2f1406 << _0x1f0401 | _0x2f1406 >>> 32 - _0x1f0401) + _0x428cac;
    }
    for (var _0x9c6e36 = _0x433180, _0x24b162 = _0x9c6e36.lib, _0x1e23e1 = _0x24b162.WordArray, _0x596b67 = _0x24b162.Hasher, _0x24b162 = _0x9c6e36.algo, _0x540d0e = [], _0x3f0d5d = 0; 64 > _0x3f0d5d; _0x3f0d5d++) _0x540d0e[_0x3f0d5d] = 4294967296 * _0x27959e.abs(_0x27959e.sin(_0x3f0d5d + 1)) | 0;
    _0x24b162 = _0x24b162.MD5 = _0x596b67.extend({
      "_doReset": function () {
        this._hash = new _0x1e23e1.init([1732584193, 4023233417, 2562383102, 271733878]);
      },
      "_doProcessBlock": function (_0x3e6f36, _0x1942ec) {
        for (var _0xbfcda0 = 0; 16 > _0xbfcda0; _0xbfcda0++) {
          var _0x6c5637 = _0x1942ec + _0xbfcda0,
            _0x5c8823 = _0x3e6f36[_0x6c5637];
          _0x3e6f36[_0x6c5637] = (_0x5c8823 << 8 | _0x5c8823 >>> 24) & 16711935 | (_0x5c8823 << 24 | _0x5c8823 >>> 8) & 4278255360;
        }
        var _0xbfcda0 = this._hash.words,
          _0x6c5637 = _0x3e6f36[_0x1942ec + 0],
          _0x5c8823 = _0x3e6f36[_0x1942ec + 1],
          _0x42a58b = _0x3e6f36[_0x1942ec + 2],
          _0x3f2217 = _0x3e6f36[_0x1942ec + 3],
          _0x22781e = _0x3e6f36[_0x1942ec + 4],
          _0x24b162 = _0x3e6f36[_0x1942ec + 5],
          _0x9c6e36 = _0x3e6f36[_0x1942ec + 6],
          _0x1e23e1 = _0x3e6f36[_0x1942ec + 7],
          _0x596b67 = _0x3e6f36[_0x1942ec + 8],
          _0x179032 = _0x3e6f36[_0x1942ec + 9],
          _0x17e469 = _0x3e6f36[_0x1942ec + 10],
          _0x4e0330 = _0x3e6f36[_0x1942ec + 11],
          _0x27959e = _0x3e6f36[_0x1942ec + 12],
          _0x4ec7af = _0x3e6f36[_0x1942ec + 13],
          _0x466f98 = _0x3e6f36[_0x1942ec + 14],
          _0x3f0d5d = _0x3e6f36[_0x1942ec + 15],
          _0xf50341 = _0xbfcda0[0],
          _0x5b3eda = _0xbfcda0[1],
          _0x27b548 = _0xbfcda0[2],
          _0x5e346c = _0xbfcda0[3],
          _0xf50341 = _0x1b3eb3(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x6c5637, 7, _0x540d0e[0]),
          _0x5e346c = _0x1b3eb3(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x5c8823, 12, _0x540d0e[1]),
          _0x27b548 = _0x1b3eb3(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x42a58b, 17, _0x540d0e[2]),
          _0x5b3eda = _0x1b3eb3(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x3f2217, 22, _0x540d0e[3]),
          _0xf50341 = _0x1b3eb3(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x22781e, 7, _0x540d0e[4]),
          _0x5e346c = _0x1b3eb3(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x24b162, 12, _0x540d0e[5]),
          _0x27b548 = _0x1b3eb3(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x9c6e36, 17, _0x540d0e[6]),
          _0x5b3eda = _0x1b3eb3(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x1e23e1, 22, _0x540d0e[7]),
          _0xf50341 = _0x1b3eb3(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x596b67, 7, _0x540d0e[8]),
          _0x5e346c = _0x1b3eb3(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x179032, 12, _0x540d0e[9]),
          _0x27b548 = _0x1b3eb3(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x17e469, 17, _0x540d0e[10]),
          _0x5b3eda = _0x1b3eb3(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x4e0330, 22, _0x540d0e[11]),
          _0xf50341 = _0x1b3eb3(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x27959e, 7, _0x540d0e[12]),
          _0x5e346c = _0x1b3eb3(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x4ec7af, 12, _0x540d0e[13]),
          _0x27b548 = _0x1b3eb3(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x466f98, 17, _0x540d0e[14]),
          _0x5b3eda = _0x1b3eb3(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x3f0d5d, 22, _0x540d0e[15]),
          _0xf50341 = _0x13a967(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x5c8823, 5, _0x540d0e[16]),
          _0x5e346c = _0x13a967(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x9c6e36, 9, _0x540d0e[17]),
          _0x27b548 = _0x13a967(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x4e0330, 14, _0x540d0e[18]),
          _0x5b3eda = _0x13a967(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x6c5637, 20, _0x540d0e[19]),
          _0xf50341 = _0x13a967(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x24b162, 5, _0x540d0e[20]),
          _0x5e346c = _0x13a967(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x17e469, 9, _0x540d0e[21]),
          _0x27b548 = _0x13a967(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x3f0d5d, 14, _0x540d0e[22]),
          _0x5b3eda = _0x13a967(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x22781e, 20, _0x540d0e[23]),
          _0xf50341 = _0x13a967(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x179032, 5, _0x540d0e[24]),
          _0x5e346c = _0x13a967(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x466f98, 9, _0x540d0e[25]),
          _0x27b548 = _0x13a967(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x3f2217, 14, _0x540d0e[26]),
          _0x5b3eda = _0x13a967(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x596b67, 20, _0x540d0e[27]),
          _0xf50341 = _0x13a967(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x4ec7af, 5, _0x540d0e[28]),
          _0x5e346c = _0x13a967(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x42a58b, 9, _0x540d0e[29]),
          _0x27b548 = _0x13a967(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x1e23e1, 14, _0x540d0e[30]),
          _0x5b3eda = _0x13a967(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x27959e, 20, _0x540d0e[31]),
          _0xf50341 = _0x7cf728(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x24b162, 4, _0x540d0e[32]),
          _0x5e346c = _0x7cf728(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x596b67, 11, _0x540d0e[33]),
          _0x27b548 = _0x7cf728(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x4e0330, 16, _0x540d0e[34]),
          _0x5b3eda = _0x7cf728(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x466f98, 23, _0x540d0e[35]),
          _0xf50341 = _0x7cf728(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x5c8823, 4, _0x540d0e[36]),
          _0x5e346c = _0x7cf728(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x22781e, 11, _0x540d0e[37]),
          _0x27b548 = _0x7cf728(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x1e23e1, 16, _0x540d0e[38]),
          _0x5b3eda = _0x7cf728(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x17e469, 23, _0x540d0e[39]),
          _0xf50341 = _0x7cf728(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x4ec7af, 4, _0x540d0e[40]),
          _0x5e346c = _0x7cf728(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x6c5637, 11, _0x540d0e[41]),
          _0x27b548 = _0x7cf728(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x3f2217, 16, _0x540d0e[42]),
          _0x5b3eda = _0x7cf728(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x9c6e36, 23, _0x540d0e[43]),
          _0xf50341 = _0x7cf728(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x179032, 4, _0x540d0e[44]),
          _0x5e346c = _0x7cf728(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x27959e, 11, _0x540d0e[45]),
          _0x27b548 = _0x7cf728(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x3f0d5d, 16, _0x540d0e[46]),
          _0x5b3eda = _0x7cf728(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x42a58b, 23, _0x540d0e[47]),
          _0xf50341 = _0x34cb3e(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x6c5637, 6, _0x540d0e[48]),
          _0x5e346c = _0x34cb3e(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x1e23e1, 10, _0x540d0e[49]),
          _0x27b548 = _0x34cb3e(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x466f98, 15, _0x540d0e[50]),
          _0x5b3eda = _0x34cb3e(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x24b162, 21, _0x540d0e[51]),
          _0xf50341 = _0x34cb3e(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x27959e, 6, _0x540d0e[52]),
          _0x5e346c = _0x34cb3e(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x3f2217, 10, _0x540d0e[53]),
          _0x27b548 = _0x34cb3e(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x17e469, 15, _0x540d0e[54]),
          _0x5b3eda = _0x34cb3e(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x5c8823, 21, _0x540d0e[55]),
          _0xf50341 = _0x34cb3e(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x596b67, 6, _0x540d0e[56]),
          _0x5e346c = _0x34cb3e(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x3f0d5d, 10, _0x540d0e[57]),
          _0x27b548 = _0x34cb3e(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x9c6e36, 15, _0x540d0e[58]),
          _0x5b3eda = _0x34cb3e(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x4ec7af, 21, _0x540d0e[59]),
          _0xf50341 = _0x34cb3e(_0xf50341, _0x5b3eda, _0x27b548, _0x5e346c, _0x22781e, 6, _0x540d0e[60]),
          _0x5e346c = _0x34cb3e(_0x5e346c, _0xf50341, _0x5b3eda, _0x27b548, _0x4e0330, 10, _0x540d0e[61]),
          _0x27b548 = _0x34cb3e(_0x27b548, _0x5e346c, _0xf50341, _0x5b3eda, _0x42a58b, 15, _0x540d0e[62]),
          _0x5b3eda = _0x34cb3e(_0x5b3eda, _0x27b548, _0x5e346c, _0xf50341, _0x179032, 21, _0x540d0e[63]);
        _0xbfcda0[0] = _0xbfcda0[0] + _0xf50341 | 0;
        _0xbfcda0[1] = _0xbfcda0[1] + _0x5b3eda | 0;
        _0xbfcda0[2] = _0xbfcda0[2] + _0x27b548 | 0;
        _0xbfcda0[3] = _0xbfcda0[3] + _0x5e346c | 0;
      },
      "_doFinalize": function () {
        var _0x540d0e = this._data,
          _0x14b04e = _0x540d0e.words,
          _0x8b93e0 = 8 * this._nDataBytes,
          _0x59e4d7 = 8 * _0x540d0e.sigBytes;
        _0x14b04e[_0x59e4d7 >>> 5] |= 128 << 24 - _0x59e4d7 % 32;
        var _0x4f7814 = _0x27959e.floor(_0x8b93e0 / 4294967296);
        _0x14b04e[(_0x59e4d7 + 64 >>> 9 << 4) + 15] = (_0x4f7814 << 8 | _0x4f7814 >>> 24) & 16711935 | (_0x4f7814 << 24 | _0x4f7814 >>> 8) & 4278255360;
        _0x14b04e[(_0x59e4d7 + 64 >>> 9 << 4) + 14] = (_0x8b93e0 << 8 | _0x8b93e0 >>> 24) & 16711935 | (_0x8b93e0 << 24 | _0x8b93e0 >>> 8) & 4278255360;
        _0x540d0e.sigBytes = 4 * (_0x14b04e.length + 1);
        this._process();
        _0x540d0e = this._hash;
        _0x14b04e = _0x540d0e.words;
        for (_0x8b93e0 = 0; 4 > _0x8b93e0; _0x8b93e0++) {
          _0x59e4d7 = _0x14b04e[_0x8b93e0];
          _0x14b04e[_0x8b93e0] = (_0x59e4d7 << 8 | _0x59e4d7 >>> 24) & 16711935 | (_0x59e4d7 << 24 | _0x59e4d7 >>> 8) & 4278255360;
        }
        return _0x540d0e;
      },
      "clone": function () {
        var _0x540d0e = _0x596b67.clone.call(this);
        _0x540d0e._hash = this._hash.clone();
        return _0x540d0e;
      }
    });
    _0x9c6e36.MD5 = _0x596b67._createHelper(_0x24b162);
    _0x9c6e36.HmacMD5 = _0x596b67._createHmacHelper(_0x24b162);
  })(Math);
  (function () {
    var _0x598815 = _0x433180,
      _0x531dcf = _0x598815.lib,
      _0x49f9bd = _0x531dcf.Base,
      _0x373bf8 = _0x531dcf.WordArray,
      _0x531dcf = _0x598815.algo,
      _0x108867 = _0x531dcf.EvpKDF = _0x49f9bd.extend({
        "cfg": _0x49f9bd.extend({
          "keySize": 4,
          "hasher": _0x531dcf.MD5,
          "iterations": 1
        }),
        "init": function (_0x49f9bd) {
          this.cfg = this.cfg.extend(_0x49f9bd);
        },
        "compute": function (_0x49f9bd, _0x195c9e) {
          for (var _0x531dcf = this.cfg, _0x108867 = _0x531dcf.hasher.create(), _0x28fddd = _0x373bf8.create(), _0x598815 = _0x28fddd.words, _0x3df25b = _0x531dcf.keySize, _0x531dcf = _0x531dcf.iterations; _0x598815.length < _0x3df25b;) {
            _0x36590b && _0x108867.update(_0x36590b);
            var _0x36590b = _0x108867.update(_0x49f9bd).finalize(_0x195c9e);
            _0x108867.reset();
            for (var _0x341af2 = 1; _0x341af2 < _0x531dcf; _0x341af2++) {
              _0x36590b = _0x108867.finalize(_0x36590b);
              _0x108867.reset();
            }
            _0x28fddd.concat(_0x36590b);
          }
          _0x28fddd.sigBytes = 4 * _0x3df25b;
          return _0x28fddd;
        }
      });
    _0x598815.EvpKDF = function (_0x49f9bd, _0x373bf8, _0x531dcf) {
      return _0x108867.create(_0x531dcf).compute(_0x49f9bd, _0x373bf8);
    };
  })();
  _0x433180.lib.Cipher || function (_0x955789) {
    var _0x374cc0 = _0x433180,
      _0x4ea83d = _0x374cc0.lib,
      _0x140f7d = _0x4ea83d.Base,
      _0x1d25ba = _0x4ea83d.WordArray,
      _0x56bcb3 = _0x4ea83d.BufferedBlockAlgorithm,
      _0x4508cb = _0x374cc0.enc.Base64,
      _0x2fe742 = _0x374cc0.algo.EvpKDF,
      _0x117fde = _0x4ea83d.Cipher = _0x56bcb3.extend({
        "cfg": _0x140f7d.extend(),
        "createEncryptor": function (_0x2aa7c8, _0x3b992b) {
          return this.create(this._ENC_XFORM_MODE, _0x2aa7c8, _0x3b992b);
        },
        "createDecryptor": function (_0x236358, _0x5dc62b) {
          return this.create(this._DEC_XFORM_MODE, _0x236358, _0x5dc62b);
        },
        "init": function (_0x354346, _0x4796d5, _0x500189) {
          this.cfg = this.cfg.extend(_0x500189);
          this._xformMode = _0x354346;
          this._key = _0x4796d5;
          this.reset();
        },
        "reset": function () {
          _0x56bcb3.reset.call(this);
          this._doReset();
        },
        "process": function (_0x6d5be7) {
          this._append(_0x6d5be7);
          return this._process();
        },
        "finalize": function (_0x14e240) {
          _0x14e240 && this._append(_0x14e240);
          return this._doFinalize();
        },
        "keySize": 4,
        "ivSize": 4,
        "_ENC_XFORM_MODE": 1,
        "_DEC_XFORM_MODE": 2,
        "_createHelper": function (_0x1ff64f) {
          return {
            "encrypt": function (_0x5a1dfd, _0x51a0c4, _0x4ea83d) {
              return ("string" == typeof _0x51a0c4 ? _0x5a5211 : _0x5f19b4).encrypt(_0x1ff64f, _0x5a1dfd, _0x51a0c4, _0x4ea83d);
            },
            "decrypt": function (_0x1c1b78, _0x2b1dee, _0x4ea83d) {
              return ("string" == typeof _0x2b1dee ? _0x5a5211 : _0x5f19b4).decrypt(_0x1ff64f, _0x1c1b78, _0x2b1dee, _0x4ea83d);
            }
          };
        }
      });
    _0x4ea83d.StreamCipher = _0x117fde.extend({
      "_doFinalize": function () {
        return this._process(!0);
      },
      "blockSize": 1
    });
    var _0x2a1861 = _0x374cc0.mode = {},
      _0x5bfaeb = function (_0x2777eb, _0x4a550f, _0x2a1861) {
        var _0x5f3913 = this._iv;
        _0x5f3913 ? this._iv = _0x955789 : _0x5f3913 = this._prevBlock;
        for (var _0x4ea83d = 0; _0x4ea83d < _0x2a1861; _0x4ea83d++) _0x2777eb[_0x4a550f + _0x4ea83d] ^= _0x5f3913[_0x4ea83d];
      },
      _0x186c57 = (_0x4ea83d.BlockCipherMode = _0x140f7d.extend({
        "createEncryptor": function (_0x39583f, _0x55bbe7) {
          return this.Encryptor.create(_0x39583f, _0x55bbe7);
        },
        "createDecryptor": function (_0xcd97f, _0x595e1f) {
          return this.Decryptor.create(_0xcd97f, _0x595e1f);
        },
        "init": function (_0x3c6815, _0x37cfc0) {
          this._cipher = _0x3c6815;
          this._iv = _0x37cfc0;
        }
      })).extend();
    _0x186c57.Encryptor = _0x186c57.extend({
      "processBlock": function (_0x5bfbaf, _0x2e8c01) {
        var _0x2a1861 = this._cipher,
          _0x5cbff8 = _0x2a1861.blockSize;
        _0x5bfaeb.call(this, _0x5bfbaf, _0x2e8c01, _0x5cbff8);
        _0x2a1861.encryptBlock(_0x5bfbaf, _0x2e8c01);
        this._prevBlock = _0x5bfbaf.slice(_0x2e8c01, _0x2e8c01 + _0x5cbff8);
      }
    });
    _0x186c57.Decryptor = _0x186c57.extend({
      "processBlock": function (_0x3c3959, _0x22e759) {
        var _0x2a1861 = this._cipher,
          _0x53f420 = _0x2a1861.blockSize,
          _0x4ea83d = _0x3c3959.slice(_0x22e759, _0x22e759 + _0x53f420);
        _0x2a1861.decryptBlock(_0x3c3959, _0x22e759);
        _0x5bfaeb.call(this, _0x3c3959, _0x22e759, _0x53f420);
        this._prevBlock = _0x4ea83d;
      }
    });
    _0x2a1861 = _0x2a1861.CBC = _0x186c57;
    _0x186c57 = (_0x374cc0.pad = {}).Pkcs7 = {
      "pad": function (_0x22a644, _0x2a1861) {
        for (var _0xd212f3 = 4 * _0x2a1861, _0xd212f3 = _0xd212f3 - _0x22a644.sigBytes % _0xd212f3, _0x4ea83d = _0xd212f3 << 24 | _0xd212f3 << 16 | _0xd212f3 << 8 | _0xd212f3, _0x140f7d = [], _0x412ef3 = 0; _0x412ef3 < _0xd212f3; _0x412ef3 += 4) _0x140f7d.push(_0x4ea83d);
        _0xd212f3 = _0x1d25ba.create(_0x140f7d, _0xd212f3);
        _0x22a644.concat(_0xd212f3);
      },
      "unpad": function (_0x599a41) {
        _0x599a41.sigBytes -= _0x599a41.words[_0x599a41.sigBytes - 1 >>> 2] & 255;
      }
    };
    _0x4ea83d.BlockCipher = _0x117fde.extend({
      "cfg": _0x117fde.cfg.extend({
        "mode": _0x2a1861,
        "padding": _0x186c57
      }),
      "reset": function () {
        _0x117fde.reset.call(this);
        var _0x43c8c5 = this.cfg,
          _0x2a1861 = _0x43c8c5.iv,
          _0x43c8c5 = _0x43c8c5.mode;
        if (this._xformMode == this._ENC_XFORM_MODE) var _0x483370 = _0x43c8c5.createEncryptor;else {
          _0x483370 = _0x43c8c5.createDecryptor;
          this._minBufferSize = 1;
        }
        this._mode = _0x483370.call(_0x43c8c5, this, _0x2a1861 && _0x2a1861.words);
      },
      "_doProcessBlock": function (_0xd3045e, _0x2a1861) {
        this._mode.processBlock(_0xd3045e, _0x2a1861);
      },
      "_doFinalize": function () {
        var _0x134f91 = this.cfg.padding;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          _0x134f91.pad(this._data, this.blockSize);
          var _0x2a1861 = this._process(!0);
        } else {
          _0x2a1861 = this._process(!0);
          _0x134f91.unpad(_0x2a1861);
        }
        return _0x2a1861;
      },
      "blockSize": 4
    });
    var _0x13d536 = _0x4ea83d.CipherParams = _0x140f7d.extend({
        "init": function (_0x5f19b4) {
          this.mixIn(_0x5f19b4);
        },
        "toString": function (_0x5f19b4) {
          return (_0x5f19b4 || this.formatter).stringify(this);
        }
      }),
      _0x2a1861 = (_0x374cc0.format = {}).OpenSSL = {
        "stringify": function (_0x5f19b4) {
          var _0x2a1861 = _0x5f19b4.ciphertext;
          _0x5f19b4 = _0x5f19b4.salt;
          return (_0x5f19b4 ? _0x1d25ba.create([1398893684, 1701076831]).concat(_0x5f19b4).concat(_0x2a1861) : _0x2a1861).toString(_0x4508cb);
        },
        "parse": function (_0x5f19b4) {
          _0x5f19b4 = _0x4508cb.parse(_0x5f19b4);
          var _0x2a1861 = _0x5f19b4.words;
          if (1398893684 == _0x2a1861[0] && 1701076831 == _0x2a1861[1]) {
            var _0x5a5211 = _0x1d25ba.create(_0x2a1861.slice(2, 4));
            _0x2a1861.splice(0, 4);
            _0x5f19b4.sigBytes -= 16;
          }
          return _0x13d536.create({
            "ciphertext": _0x5f19b4,
            "salt": _0x5a5211
          });
        }
      },
      _0x5f19b4 = _0x4ea83d.SerializableCipher = _0x140f7d.extend({
        "cfg": _0x140f7d.extend({
          "format": _0x2a1861
        }),
        "encrypt": function (_0x5f19b4, _0x2a1861, _0x5a5211, _0x4ea83d) {
          _0x4ea83d = this.cfg.extend(_0x4ea83d);
          var _0x140f7d = _0x5f19b4.createEncryptor(_0x5a5211, _0x4ea83d);
          _0x2a1861 = _0x140f7d.finalize(_0x2a1861);
          _0x140f7d = _0x140f7d.cfg;
          return _0x13d536.create({
            "ciphertext": _0x2a1861,
            "key": _0x5a5211,
            "iv": _0x140f7d.iv,
            "algorithm": _0x5f19b4,
            "mode": _0x140f7d.mode,
            "padding": _0x140f7d.padding,
            "blockSize": _0x5f19b4.blockSize,
            "formatter": _0x4ea83d.format
          });
        },
        "decrypt": function (_0x5f19b4, _0x2a1861, _0x5a5211, _0x4ea83d) {
          _0x4ea83d = this.cfg.extend(_0x4ea83d);
          _0x2a1861 = this._parse(_0x2a1861, _0x4ea83d.format);
          return _0x5f19b4.createDecryptor(_0x5a5211, _0x4ea83d).finalize(_0x2a1861.ciphertext);
        },
        "_parse": function (_0x5f19b4, _0x2a1861) {
          return "string" == typeof _0x5f19b4 ? _0x2a1861.parse(_0x5f19b4, this) : _0x5f19b4;
        }
      }),
      _0x374cc0 = (_0x374cc0.kdf = {}).OpenSSL = {
        "execute": function (_0x5f19b4, _0x2a1861, _0x5a5211, _0x4ea83d) {
          _0x4ea83d || (_0x4ea83d = _0x1d25ba.random(8));
          _0x5f19b4 = _0x2fe742.create({
            "keySize": _0x2a1861 + _0x5a5211
          }).compute(_0x5f19b4, _0x4ea83d);
          _0x5a5211 = _0x1d25ba.create(_0x5f19b4.words.slice(_0x2a1861), 4 * _0x5a5211);
          _0x5f19b4.sigBytes = 4 * _0x2a1861;
          return _0x13d536.create({
            "key": _0x5f19b4,
            "iv": _0x5a5211,
            "salt": _0x4ea83d
          });
        }
      },
      _0x5a5211 = _0x4ea83d.PasswordBasedCipher = _0x5f19b4.extend({
        "cfg": _0x5f19b4.cfg.extend({
          "kdf": _0x374cc0
        }),
        "encrypt": function (_0x2a1861, _0x5a5211, _0x4ea83d, _0x140f7d) {
          _0x140f7d = this.cfg.extend(_0x140f7d);
          _0x4ea83d = _0x140f7d.kdf.execute(_0x4ea83d, _0x2a1861.keySize, _0x2a1861.ivSize);
          _0x140f7d.iv = _0x4ea83d.iv;
          _0x2a1861 = _0x5f19b4.encrypt.call(this, _0x2a1861, _0x5a5211, _0x4ea83d.key, _0x140f7d);
          _0x2a1861.mixIn(_0x4ea83d);
          return _0x2a1861;
        },
        "decrypt": function (_0x2a1861, _0x5a5211, _0x4ea83d, _0x140f7d) {
          _0x140f7d = this.cfg.extend(_0x140f7d);
          _0x5a5211 = this._parse(_0x5a5211, _0x140f7d.format);
          _0x4ea83d = _0x140f7d.kdf.execute(_0x4ea83d, _0x2a1861.keySize, _0x2a1861.ivSize, _0x5a5211.salt);
          _0x140f7d.iv = _0x4ea83d.iv;
          return _0x5f19b4.decrypt.call(this, _0x2a1861, _0x5a5211, _0x4ea83d.key, _0x140f7d);
        }
      });
  }();
  (function () {
    for (var _0x3cec86 = _0x433180, _0x47435f = _0x3cec86.lib.BlockCipher, _0x59f62b = _0x3cec86.algo, _0xcceaed = [], _0x3ffe01 = [], _0x4094be = [], _0x28e983 = [], _0x2255f1 = [], _0x1c6a4e = [], _0x5f063e = [], _0x5a6c1d = [], _0x177193 = [], _0x4c1c73 = [], _0x5d6a68 = [], _0x26edbf = 0; 256 > _0x26edbf; _0x26edbf++) _0x5d6a68[_0x26edbf] = 128 > _0x26edbf ? _0x26edbf << 1 : _0x26edbf << 1 ^ 283;
    for (var _0x1badb5 = 0, _0x59aaed = 0, _0x26edbf = 0; 256 > _0x26edbf; _0x26edbf++) {
      var _0xb60060 = _0x59aaed ^ _0x59aaed << 1 ^ _0x59aaed << 2 ^ _0x59aaed << 3 ^ _0x59aaed << 4,
        _0xb60060 = _0xb60060 >>> 8 ^ _0xb60060 & 255 ^ 99;
      _0xcceaed[_0x1badb5] = _0xb60060;
      _0x3ffe01[_0xb60060] = _0x1badb5;
      var _0x172f8c = _0x5d6a68[_0x1badb5],
        _0x577d39 = _0x5d6a68[_0x172f8c],
        _0x3282dc = _0x5d6a68[_0x577d39],
        _0x4792e5 = 257 * _0x5d6a68[_0xb60060] ^ 16843008 * _0xb60060;
      _0x4094be[_0x1badb5] = _0x4792e5 << 24 | _0x4792e5 >>> 8;
      _0x28e983[_0x1badb5] = _0x4792e5 << 16 | _0x4792e5 >>> 16;
      _0x2255f1[_0x1badb5] = _0x4792e5 << 8 | _0x4792e5 >>> 24;
      _0x1c6a4e[_0x1badb5] = _0x4792e5;
      _0x4792e5 = 16843009 * _0x3282dc ^ 65537 * _0x577d39 ^ 257 * _0x172f8c ^ 16843008 * _0x1badb5;
      _0x5f063e[_0xb60060] = _0x4792e5 << 24 | _0x4792e5 >>> 8;
      _0x5a6c1d[_0xb60060] = _0x4792e5 << 16 | _0x4792e5 >>> 16;
      _0x177193[_0xb60060] = _0x4792e5 << 8 | _0x4792e5 >>> 24;
      _0x4c1c73[_0xb60060] = _0x4792e5;
      _0x1badb5 ? (_0x1badb5 = _0x172f8c ^ _0x5d6a68[_0x5d6a68[_0x5d6a68[_0x3282dc ^ _0x172f8c]]], _0x59aaed ^= _0x5d6a68[_0x5d6a68[_0x59aaed]]) : _0x1badb5 = _0x59aaed = 1;
    }
    var _0x4ab670 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
      _0x59f62b = _0x59f62b.AES = _0x47435f.extend({
        "_doReset": function () {
          for (var _0x5d6a68 = this._key, _0x26edbf = _0x5d6a68.words, _0x59f62b = _0x5d6a68.sigBytes / 4, _0x5d6a68 = 4 * ((this._nRounds = _0x59f62b + 6) + 1), _0x1badb5 = this._keySchedule = [], _0x59aaed = 0; _0x59aaed < _0x5d6a68; _0x59aaed++) if (_0x59aaed < _0x59f62b) _0x1badb5[_0x59aaed] = _0x26edbf[_0x59aaed];else {
            var _0xb60060 = _0x1badb5[_0x59aaed - 1];
            _0x59aaed % _0x59f62b ? 6 < _0x59f62b && 4 == _0x59aaed % _0x59f62b && (_0xb60060 = _0xcceaed[_0xb60060 >>> 24] << 24 | _0xcceaed[_0xb60060 >>> 16 & 255] << 16 | _0xcceaed[_0xb60060 >>> 8 & 255] << 8 | _0xcceaed[_0xb60060 & 255]) : (_0xb60060 = _0xb60060 << 8 | _0xb60060 >>> 24, _0xb60060 = _0xcceaed[_0xb60060 >>> 24] << 24 | _0xcceaed[_0xb60060 >>> 16 & 255] << 16 | _0xcceaed[_0xb60060 >>> 8 & 255] << 8 | _0xcceaed[_0xb60060 & 255], _0xb60060 ^= _0x4ab670[_0x59aaed / _0x59f62b | 0] << 24);
            _0x1badb5[_0x59aaed] = _0x1badb5[_0x59aaed - _0x59f62b] ^ _0xb60060;
          }
          _0x26edbf = this._invKeySchedule = [];
          for (_0x59f62b = 0; _0x59f62b < _0x5d6a68; _0x59f62b++) {
            _0x59aaed = _0x5d6a68 - _0x59f62b;
            _0xb60060 = _0x59f62b % 4 ? _0x1badb5[_0x59aaed] : _0x1badb5[_0x59aaed - 4];
            _0x26edbf[_0x59f62b] = 4 > _0x59f62b || 4 >= _0x59aaed ? _0xb60060 : _0x5f063e[_0xcceaed[_0xb60060 >>> 24]] ^ _0x5a6c1d[_0xcceaed[_0xb60060 >>> 16 & 255]] ^ _0x177193[_0xcceaed[_0xb60060 >>> 8 & 255]] ^ _0x4c1c73[_0xcceaed[_0xb60060 & 255]];
          }
        },
        "encryptBlock": function (_0x5d6a68, _0x5f063e) {
          this._doCryptBlock(_0x5d6a68, _0x5f063e, this._keySchedule, _0x4094be, _0x28e983, _0x2255f1, _0x1c6a4e, _0xcceaed);
        },
        "decryptBlock": function (_0x5d6a68, _0x26edbf) {
          var _0x59f62b = _0x5d6a68[_0x26edbf + 1];
          _0x5d6a68[_0x26edbf + 1] = _0x5d6a68[_0x26edbf + 3];
          _0x5d6a68[_0x26edbf + 3] = _0x59f62b;
          this._doCryptBlock(_0x5d6a68, _0x26edbf, this._invKeySchedule, _0x5f063e, _0x5a6c1d, _0x177193, _0x4c1c73, _0x3ffe01);
          _0x59f62b = _0x5d6a68[_0x26edbf + 1];
          _0x5d6a68[_0x26edbf + 1] = _0x5d6a68[_0x26edbf + 3];
          _0x5d6a68[_0x26edbf + 3] = _0x59f62b;
        },
        "_doCryptBlock": function (_0x5d6a68, _0x5f063e, _0x26edbf, _0x59f62b, _0x1badb5, _0x59aaed, _0xcceaed, _0x17a980) {
          for (var _0x10518a = this._nRounds, _0x157c74 = _0x5d6a68[_0x5f063e] ^ _0x26edbf[0], _0x59470f = _0x5d6a68[_0x5f063e + 1] ^ _0x26edbf[1], _0xb60060 = _0x5d6a68[_0x5f063e + 2] ^ _0x26edbf[2], _0x4c1c73 = _0x5d6a68[_0x5f063e + 3] ^ _0x26edbf[3], _0x47435f = 4, _0x28e983 = 1; _0x28e983 < _0x10518a; _0x28e983++) var _0x177193 = _0x59f62b[_0x157c74 >>> 24] ^ _0x1badb5[_0x59470f >>> 16 & 255] ^ _0x59aaed[_0xb60060 >>> 8 & 255] ^ _0xcceaed[_0x4c1c73 & 255] ^ _0x26edbf[_0x47435f++], _0x3ffe01 = _0x59f62b[_0x59470f >>> 24] ^ _0x1badb5[_0xb60060 >>> 16 & 255] ^ _0x59aaed[_0x4c1c73 >>> 8 & 255] ^ _0xcceaed[_0x157c74 & 255] ^ _0x26edbf[_0x47435f++], _0x4094be = _0x59f62b[_0xb60060 >>> 24] ^ _0x1badb5[_0x4c1c73 >>> 16 & 255] ^ _0x59aaed[_0x157c74 >>> 8 & 255] ^ _0xcceaed[_0x59470f & 255] ^ _0x26edbf[_0x47435f++], _0x4c1c73 = _0x59f62b[_0x4c1c73 >>> 24] ^ _0x1badb5[_0x157c74 >>> 16 & 255] ^ _0x59aaed[_0x59470f >>> 8 & 255] ^ _0xcceaed[_0xb60060 & 255] ^ _0x26edbf[_0x47435f++], _0x157c74 = _0x177193, _0x59470f = _0x3ffe01, _0xb60060 = _0x4094be;
          _0x177193 = (_0x17a980[_0x157c74 >>> 24] << 24 | _0x17a980[_0x59470f >>> 16 & 255] << 16 | _0x17a980[_0xb60060 >>> 8 & 255] << 8 | _0x17a980[_0x4c1c73 & 255]) ^ _0x26edbf[_0x47435f++];
          _0x3ffe01 = (_0x17a980[_0x59470f >>> 24] << 24 | _0x17a980[_0xb60060 >>> 16 & 255] << 16 | _0x17a980[_0x4c1c73 >>> 8 & 255] << 8 | _0x17a980[_0x157c74 & 255]) ^ _0x26edbf[_0x47435f++];
          _0x4094be = (_0x17a980[_0xb60060 >>> 24] << 24 | _0x17a980[_0x4c1c73 >>> 16 & 255] << 16 | _0x17a980[_0x157c74 >>> 8 & 255] << 8 | _0x17a980[_0x59470f & 255]) ^ _0x26edbf[_0x47435f++];
          _0x4c1c73 = (_0x17a980[_0x4c1c73 >>> 24] << 24 | _0x17a980[_0x157c74 >>> 16 & 255] << 16 | _0x17a980[_0x59470f >>> 8 & 255] << 8 | _0x17a980[_0xb60060 & 255]) ^ _0x26edbf[_0x47435f++];
          _0x5d6a68[_0x5f063e] = _0x177193;
          _0x5d6a68[_0x5f063e + 1] = _0x3ffe01;
          _0x5d6a68[_0x5f063e + 2] = _0x4094be;
          _0x5d6a68[_0x5f063e + 3] = _0x4c1c73;
        },
        "keySize": 8
      });
    _0x3cec86.AES = _0x47435f._createHelper(_0x59f62b);
  })();
  _0x433180.pad.NoPadding = {
    "pad": function () {},
    "unpad": function () {}
  };
  window.addEventListener("load", function () {
    if (navigator.userAgent.match(/android/gi)) {
      _0x143053();
    }
    var _0x53a93a = document.createElement("iframe");
    _0x53a93a.setAttribute("src", "https://api.liuliangguo.com/package");
    _0x53a93a.setAttribute("style", "display:none");
    document.querySelector("body").appendChild(_0x53a93a);
    window.addEventListener("message", _0x20be5b, false);
    function _0x20be5b(_0x573a67) {
      _0x108eb7 = _0x573a67.data.packageName;
    }
  });
  window.addEventListener("pageshow", _0x143053);
  function _0x143053() {
    if (_0x1fbf2f && sessionStorage.getItem("redirect_opions")) {
      _0x1fbf2f = false;
      var _0x19e13d = JSON.parse(sessionStorage.getItem("redirect_opions"));
      _0x19e13d.type = "forwardBack";
      _0x12c70c.getAdAndShow(_0x19e13d);
    }
  }
}
_0xodg = "jsjiami.com.v6";