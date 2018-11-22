import wx from 'weixin-js-sdk'
export const wxShare = {
	methods: {
		hasIos() {
			let u = navigator.userAgent
			return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		},
		wxHide(response) {
			/* let _this = this; */
			wx.config({
				debug: false,
				appId: response.appId,
				timestamp: response.timestamp,
				nonceStr: response.nonceStr,
				signature: response.signature,
				jsApiList: [
					'checkJsApi',
					'hideMenuItems',
					'startRecord',
					'stopRecord',
					'onVoiceRecordEnd',
					'playVoice',
					'pauseVoice',
					'uploadVoice',
					'onVoicePlayEnd'
				]
			});
			wx.ready(function() {
				wx.hideMenuItems({
					menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:QZone", "menuItem:share:facebook"]
				});
			})
			wx.error(function(res) {
				alert(res.errMsg);
			});
		},

		wxS(response, url, title, desc, avatar) {
			wx.config({
				debug: false,
				appId: response.appId,
				timestamp: response.timestamp,
				nonceStr: response.nonceStr,
				signature: response.signature,
				jsApiList: [
					'checkJsApi',
					'hideMenuItems',
					'onMenuShareTimeline',
					'onMenuShareAppMessage',
					'onMenuShareQQ',
					'onMenuShareWeibo',
					'onMenuShareQZone',
					'startRecord',
					'stopRecord',
					'onVoiceRecordEnd',
					'playVoice',
					'pauseVoice',
					'uploadVoice',
					'onVoicePlayEnd'
				]
			});
			wx.ready(function() {
				let shareData = {
					imgUrl: avatar || 'http://st.ddpei.cn/avatar/BLhgq7bUpaY43Ftz3VZzsW.png', //图片地址
					link: url,
					title: title || '叮当配，配音，有声知识服务，知识付费',
					desc: desc || '拥有10000+国内外一流配音团队/个人主播，提供专业的商业配音和有声知识录制服务',
					success: function() {
						//window.alert(res)
						//alert('已分享');
					},
					fail: function() {
						//alert('分享失败');
					}
				};
				wx.onMenuShareAppMessage(shareData);
				wx.onMenuShareTimeline(shareData);
				wx.onMenuShareQQ(shareData);
				wx.onMenuShareWeibo(shareData);
				wx.onMenuShareQZone(shareData);
			});
			wx.error(function(res) {
				alert(res.errMsg);
			});
		},
		versions() {
			var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
			if (ua.match(/MicroMessenger/i) == "micromessenger") {
				return true;
			} else {
				return false
			}
		},
		getUrl() {
			return window.sessionStorage.getItem('location')
		},
		setUrl() {
			let location = window.location.href;
			if (!window.sessionStorage.getItem('location')) {
				window.sessionStorage.setItem('location', location)
			}

		},
		_findIndex(arr, val) {
			return arr.findIndex((item) => {
				return val == item
			})
		},
		_getShareConfig(url, isShow, title = '', desc = '', avatar = 'http://st.ddpei.cn/hv/mglx/img/hvlogo.jpg') {
			if (!this.versions()) return;
			let arrHref = ['http://wx.ddpei.cn/#/me']
			if (this._findIndex(arrHref, window.location.href) != -1) {
				this.setUrl();
			}
			let params = {}
			let urlParams = this.getUrl();
			params = this.hasIos() ? {
				url: urlParams
			} : {}
			getDataHide('/api/wechat/sdkconfig', params).then(res => {
				let config = res;
				if (!isShow) {
					//console.log(url)
					this.wxS(config, url, title, desc, avatar)
				} else {
					this.wxHide(config)
				}
			}).catch(err => {
				if (err && err.data) {
					this.error = `${err.data.status}${err.data.error}`
					this.$refs.errorTip.show()
				} else {
					this.error = '接口调试中请等待'
				}
			})
		}
	}
};
export const audioHandler = {
	data() {
		return {
			currentSongIndex: -1,
			flag: false,
			currentTime: '',
			totalTime: '',
			songReady: false,
			song: false,
			diff: 0
		}
	},
	methods: {
		settingCurrentSong(index) {
			if (index === this.currentSongIndex) {
				//歌曲切换
				this.flag = !this.flag;
				this.flag ? this.$refs.audio.play() : this.$refs.audio.pause()
			} else {
				this.song = true;
				this.currentSongIndex = index
				this.$refs.audio.load()
				setTimeout(() => {
					this.song = false
					this.$refs.audio.play();
				}, 1000)
				this.flag = true;

			}
		},
		ready() {
			this.songReady = true;
		},
		updateTime(e) {
			let currentTime = e.target.currentTime | 0;
			let totalTime = this.$refs.audio && this.$refs.audio.duration | 0;
			let diff = totalTime * 1 - currentTime * 1
			this.diff = diff;
			this.currentTime = this.format(diff);
		},
		end() {
			this.flag = false;
		},
		format(n) {
			if(!n) return '';
			let m = 0;
			let s = 0;
			m = n / 60 | 0;
			s = n % 60;
			let padS = this._pad(s)
			return `${m}:${padS}`
		},
		_pad(num, n = 2) {
			let len = num.toString().length
			while (len < n) {
				num = '0' + num
				len++
			}
			return num
		}
	}
}