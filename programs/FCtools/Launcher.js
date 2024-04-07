/*!
Project: ByteNest WebOS
Liscense: MIT
Author: rmellis | tallulah95
Date: 10/11/20
*/
new explorer.window()
.title('Minecraft Tools Launcher')
.resize(570, 361)
.center()
.icon('programs/BNtools/icons/BNTools.png')
.controls(['min'])
.callback(function() {
	var butts = [
		{
			text: 'Armor',
			icon: 'programs/BNtools/icons/ArmorCraftingRecipe.png',
			callback: function() {
				system.loader('programs/BNtools/ArmorCraftingRecipe.js');
			}
		}, {
			text: 'Banner',
			icon: 'programs/BNtools/icons/BannerCrafting.png',
			callback: function() {
				system.loader('programs/BNtools/BannerCrafting.js');
			}
		}, {
			text: 'Becon',
			icon: 'programs/BNtools/icons/BeconCrafting.png',
			callback: function() {
				system.loader('programs/BNtools/BeconCrafting.js');
			}
		}, {
			text: 'BlockEdit',
			icon: 'programs/BNtools/icons/BookEditor.png',
			callback: function() {
				system.loader('programs/BNtools/BookEditor.js');
			}
		}, {
			text: 'Colors',
			icon: 'programs/BNtools/icons/ColorCodes.png',
			callback: function() {
				system.loader('programs/BNtools/ColorCodes.js');
			}
		}, {
			text: 'CordCalc',
			icon: 'programs/BNtools/icons/CoordinateCalculator.png',
			callback: function() {
				system.loader('programs/BNtools/CoordinateCalculator.js');
			}
		}, {
			text: 'Crafting',
			icon: 'programs/BNtools/icons/Crafting.png',
			callback: function() {
				system.loader('programs/BNtools/Crafting.js');
			}
		}, {
			text: 'Presets',
			icon: 'programs/BNtools/icons/CustomizedWorldPresetGenerator.png',
			callback: function() {
				system.loader('programs/BNtools/CustomizedWorldPresetGenerator.js');
			}
		}, {
			text: 'Potion',
			icon: 'programs/BNtools/icons/CustomPotions.png',
			callback: function() {
				system.loader('programs/BNtools/CustomPotions.js');
			}
		}, {
			text: 'SignGen',
			icon: 'programs/BNtools/icons/CustomSignGenerator.png',
			callback: function() {
				system.loader('programs/BNtools/CustomSignGenerator.js');
			}
		}, {
			text: 'Enchant',
			icon: 'programs/BNtools/icons/EnchantCalculator.png',
			callback: function() {
				system.loader('programs/BNtools/EnchantCalculator.js');
			}
		}, {
			text: 'Firework',
			icon: 'programs/BNtools/icons/FireworkCrafting.png',
			callback: function() {
				system.loader('programs/BNtools/FireworkCrafting.js');
			}
		}, {
			text: 'SeedGen',
			icon: 'programs/BNtools/icons/FlatWorldSeedGen.png',
			callback: function() {
				system.loader('programs/BNtools/FlatWorldSeedGen.js');
			}
		}, {
			text: 'JSONgen',
			icon: 'programs/BNtools/icons/JSONTextGenerator.png',
			callback: function() {
				system.loader('programs/BNtools/JSONTextGenerator.js');
			}
		}, {
			text: 'Loot',
			icon: 'programs/BNtools/icons/LootTableGenerator.png',
			callback: function() {
				system.loader('programs/BNtools/LootTableGenerator.js');
			}
		}, {
			text: 'Summon',
			icon: 'programs/BNtools/icons/MobSpawnerAndSummonCommandGenerator.png',
			callback: function() {
				system.loader('programs/BNtools/MobSpawnerAndSummonCommandGenerator.js');
			}
		}, {
			text: 'MOTDs',
			icon: 'programs/BNtools/icons/MOTDedit.png',
			callback: function() {
				system.loader('programs/BNtools/MOTDedit.js');
			}
		}, {
			text: 'Shields',
			icon: 'programs/BNtools/icons/ShieldCrafting.png',
			callback: function() {
				system.loader('programs/BNtools/ShieldCrafting.js');
			}
		}, {
			text: 'SkinSteal',
			icon: 'programs/BNtools/icons/SkinStealer.png',
			callback: function() {
				system.loader('programs/BNtools/SkinStealer.js');
			}
		}, {
			text: 'StyleText',
			icon: 'programs/BNtools/icons/StyledText.png',
			callback: function() {
				system.loader('programs/BNtools/StyledText.js');
			}
		}, {
			text: 'Target',
			icon: 'programs/BNtools/icons/TargetSelector.png',
			callback: function() {
				system.loader('programs/BNtools/TargetSelector.js');
			}
		}, {
			text: '/tellraw',
			icon: 'programs/BNtools/icons/TellRawEditor.png',
			callback: function() {
				system.loader('programs/BNtools/TellRawEditor.js');
			}
		}, {
			text: 'TitleGen',
			icon: 'programs/BNtools/icons/TitleGenerator.png',
			callback: function() {
				system.loader('programs/BNtools/TitleGenerator.js');
			}
		}, {
			text: 'Help',
			icon: 'webdows/resources/icons/ques.ico',
			callback: function() {
				system.loader('programs/Help/help.js');
			}
		}, {
			text: 'About',
			icon: 'webdows/resources/icons/info.ico',
			callback: function() {
				system.loader('webdows/webver.js');
			}
		}
	];
	var body = this.body;
	body.css({'padding-top':'100px','text-align':'center','overflow-x':'hidden'});
	body.html('<div class="topframe"><div class="welc">Minecraft Tools</div><div class="stat">MineCraft Tools<br>'+platform.name+' '+platform.version+'<br>'+platform.layout+'<br>'+platform.os+'<br>'+location.hostname+'</div></div>');
	$.each(butts, function() {
		var buttID = system.guid();
		body.append('<button buttID="'+buttID+'" class="butt"><span style="background-image:url(\''+this.icon+'\');" class="icon"></span>'+this.text+'</button>');
		body.find('button[buttID='+buttID+']').click(this.callback);
	});
	body.find('.topframe').attr('style', 'top:0px;left:0px;background-repeat:no-repeat;background-size:100px 100px, 100% 100%;position:absolute;height:100px;width:100%;background-image:url(\'programs/BNtools/2.png\'), url(\'programs/BNtools/1.png\');');
	body.find('.welc').attr('style', 'color:rgba(255,255,255,0.5);font-size:40px;position:absolute;bottom:0px;right:10px;');
	body.find('.stat').attr('style', 'white-space:nowrap;text-align:left;font-size:12px;margin-top:5px;margin-left:110px;color:white;text-shadow:1px 1px 3px black;');
	body.find('.butt').attr('style', 'line-height:32px;margin:5px;height:35px;width:100px;');
	body.find('.icon').css({'width':'30px','height':'30px','float':'left'});
});
