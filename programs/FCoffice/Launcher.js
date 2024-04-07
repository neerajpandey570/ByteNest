/*!
Project: ByteNest WebOS
Liscense: MIT
Author: rmellis | tallulah95
Date: 10/11/20
*/
// new explorer.window()
// .title('ByteNest Office Launcher')
// .resize(570, 230)
// .center()
// .icon('programs/BNoffice/office.ico')
// .controls(['min'])
// .callback(function() {
// 	var butts = [
// 		{
// 			text: 'BN Word',
// 			icon: 'programs/BNoffice/word.ico',
// 			callback: function() {
// 				system.loader('programs/BNoffice/word.js');
// 			}
// 		}, {
// 			text: 'BN Power oh yeah Point',
// 			icon: 'programs/BNoffice/powerpoint.ico',
// 			callback: function() {
// 				system.loader('programs/BNoffice/powerpoint.js');
// 			}
// 		}, {
// 			text: 'BN Excel',
// 			icon: 'programs/BNoffice/excel.ico',
// 			callback: function() {
// 				system.loader('programs/BNoffice/excel.js');
// 			}
// 		}, {
// 			text: 'VS Code',
// 			icon: 'programs/BNoffice/code.png',
// 			callback: function() {
// 				system.loader('programs/BNoffice/code.js');
// 			}
// 		}
// 	];
// 	var body = this.body;
// 	body.css({'padding-top':'100px','text-align':'center','overflow-x':'hidden'});
// 	body.html('<div class="topframe"><div class="welc"> </div><div class="stat"> <br><br><br><br></div></div>');
// 	$.each(butts, function() {
// 		var buttID = system.guid();
// 		body.append('<button buttID="'+buttID+'" class="butt"><span style="background-image:url(\''+this.icon+'\');" class="icon"></span>'+this.text+'</button>');
// 		body.find('button[buttID='+buttID+']').click(this.callback);
// 	});
// 	body.find('.topframe').attr('style', 'top:0px;left:0px;background-repeat:no-repeat;background-size:100px 100px, 100% 100%;position:absolute;height:100px;width:100%;background-image:url(\'programs/BNoffice/2.png\'), url(\'programs/BNoffice/1.png\');');
// 	body.find('.welc').attr('style', 'color:rgba(255,255,255,0.5);font-size:40px;position:absolute;bottom:0px;right:10px;');
// 	body.find('.stat').attr('style', 'white-space:nowrap;text-align:left;font-size:12px;margin-top:5px;margin-left:110px;color:white;text-shadow:1px 1px 3px black;');
// 	body.find('.butt').attr('style', 'line-height:32px;margin:5px;height:35px;width:200px;');
// 	body.find('.icon').css({'width':'30px','height':'30px','float':'left'});
// });
