/*!
Project: ByteNest WebOS
Liscense: MIT
Author: rmellis | tallulah95
Date: 07/11/20
*/
new explorer.window()
.title('Notepad - credits.txt')
.icon('webdows/resources/icons/note.ico')
.resize(700, 500)
.center()
.callback(function() {
	var bod = this.body;
	var win = this;
	var bar = [
		{
			title: 'File',
			context: [
				{
					title: 'New'
				}, {
					title: 'Open...'
				}, {
					title: 'Save'
				}, {}, {
					title: 'Print...',
					callback: function() {
						var text = bod.find('textarea').val();
						var pre = $('<pre></pre>').html(text).attr('style', 'margin:0;display:block;background-color:white;position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:1010').appendTo('#desktop.explorer');
						window.print();
						pre.remove();
					}
				}, {}, {
					title: 'Exit',
					callback: function() { win.close(); }
				}
			]
		}, {
			title: 'Edit',
			context: [
				{
					title: 'Undo'
				}, {}, {
					title: 'Cut'
				}, {
					title: 'Copy'
				}, {
					title: 'Paste'
				}, {
					title: 'Delete'
				}, {}, {
					title: 'Find...'
				}, {}, {
					title: 'Select All'
				}, {
					title: 'Time/Date'
				}
			]
		}, {
			title: 'Format',
			context: [
				{
					title: 'Word Wrap'
				}
			]
		}, {
			title: 'Help',
			context: [
				{
					title: 'About Notepad',
					callback: function() { system.loader('webdows/webver.js'); }
				}
			]
		}
	];
	this.menuBar(bar);
	// bod.html('
	bod.find('textarea').attr('style', 'overflow:scroll;top:0px;left:0px;position:absolute;border:0;margin:0;width:100%;height:100%;margin:0;padding:0;resize:none;');
});