const config = require('./config.json');
var principal = require("./main.js");
var Eris = require('eris');
var bot = new Eris(config.token);
 var Jimp = require("jimp");
 var fs = require("fs");
bot.on("ready", () =>{
    console.log("imagem.js inciado!");
});

bot.on("messageCreate", (msg) => {
	try {
if(msg.content.indexOf(config.prefix+"edit") == 0){
var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", ""]
var toki = letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)]+''+letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
var onde = toki+".png"
if(msg.mentions[0]){
		var rand = Math.floor(Math.random() * 10) + 1;
		switch(rand){
case 1:
Jimp.read(msg.mentions[0].avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .sepia()                
         .write(onde); 
});
break;
case 2:
Jimp.read(msg.mentions[0].avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .invert()                
         .write(onde); 
});
break;
case 3:
Jimp.read(msg.mentions[0].avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .contrast(-0.5)                
         .write(onde); 
});
break;
case 4:
Jimp.read(msg.mentions[0].avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .contrast(+0.5)                
         .write(onde); 
});
break;
case 5:
Jimp.read(msg.mentions[0].avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .flip(false,true)                
         .write(onde); 
});
break;
case 6:
Jimp.read(msg.mentions[0].avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .flip(true,false)                
         .write(onde); 
});
break;
case 7:
Jimp.read(msg.mentions[0].avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .mirror(false,true)                
         .write(onde); 
});
break;
case 8:
Jimp.read(msg.mentions[0].avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .mirror(true,false)                
         .write(onde); 
});
break;
case 9:
Jimp.read(msg.mentions[0].avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .greyscale()                
         .write(onde); 
});
break;
case 10:
Jimp.read(msg.mentions[0].avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .opaque()      
         .opaque()
         .write(onde); 
});
break;
}
}else {
		var rand = Math.floor(Math.random() * 10) + 1;
		switch(rand){
case 1:
Jimp.read(msg.author.avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .sepia()                
         .write(onde); 
});
break;
case 2:
Jimp.read(msg.author.avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .invert()                
         .write(onde); 
});
break;
case 3:
Jimp.read(msg.author.avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .contrast(-0.5)                
         .write(onde); 
});
break;
case 4:
Jimp.read(msg.author.avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .contrast(+0.5)                
         .write(onde); 
});
break;
case 5:
Jimp.read(msg.author.avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .flip(false,true)                
         .write(onde); 
});
break;
case 6:
Jimp.read(msg.author.avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .flip(true,false)                
         .write(onde); 
});
break;
case 7:
Jimp.read(msg.author.avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .mirror(false,true)                
         .write(onde); 
});
break;
case 8:
Jimp.read(msg.author.avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .mirror(true,false)                
         .write(onde); 
});
break;
case 9:
Jimp.read(msg.author.avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .greyscale()                
         .write(onde); 
});
break;
case 10:
Jimp.read(msg.author.avatarURL, function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)             
         .quality(60)                 
         .opaque()    
         .opaque()
         .write(onde); 
});
break;
}
}
bot.createMessage(msg.channel.id, msg.author.mention+" ok! só espere um pouco").then(msg => setTimeout(function(){msg.delete();}, 3500));
setTimeout(function() {
bot.createMessage(msg.channel.id, "_ _" ,{file: fs.readFileSync("./"+onde), name: onde}).then(msg => setTimeout(function(){msg.delete();}, 100));
}, 2000);
setTimeout(function() {
bot.createMessage(msg.channel.id, "_ _" ,{file: fs.readFileSync("./"+onde), name: onde})
setTimeout(function() {
 fs.unlinkSync(onde);
}, 1000);
}, 3000);
 }
 if(msg.content.indexOf(config.prefix+"texto") == 0){
	 if(msg.content.slice(config.prefix.length + 6).length < 200){
var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", ""]
var toki = letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)]+''+letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
var onde = toki+".png"
Jimp.read(msg.author.avatarURL, function (err, image) {
if (err) throw err;
image.resize(356, 356);
image.brightness(-0.4)
Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font) {
image.print(font, 10, 20, msg.content.slice(config.prefix.length + 6), 400)
image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
image.write(onde);
})
})
})
bot.createMessage(msg.channel.id, msg.author.mention+" ok! só espere um pouco").then(msg => setTimeout(function(){msg.delete();}, 3500));
setTimeout(function() {
bot.createMessage(msg.channel.id, "_ _" ,{file: fs.readFileSync("./"+onde), name: onde}).then(msg => setTimeout(function(){msg.delete();}, 100));
}, 2000);
setTimeout(function() {
bot.createMessage(msg.channel.id, "_ _" ,{file: fs.readFileSync("./"+onde), name: onde})
setTimeout(function() {
 fs.unlinkSync(onde);
}, 2000);
}, 3000);
 }else {
bot.createMessage(msg.channel.id, msg.author.mention+" opa! o texto é muito grande").then(msg => setTimeout(function(){msg.delete();}, 3500));
 }
 }
var cargo = msg.content.split("|");
 if(msg.content.indexOf(config.prefix+"think") == 0){
if(msg.content.slice(config.prefix.length + 6).length < 200){
var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", ""]
var toki = letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)]+''+letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
var onde = toki+".png"
if(msg.content.includes("|")){
texto1 = cargo[0].slice(config.prefix.length + 6)
texto2 = cargo[1]
}else {
texto1 = msg.content.slice(config.prefix.length + 6)
texto2 = ""
}
Jimp.read("https://cdn.discordapp.com/attachments/280820602170769409/316349492649656320/yuhn.png", function (err, image) {
if (err) throw err;
Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font) {
image.print(font, 10, 10, texto1, 500)
image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
})
})
Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font) {
image.print(font, 10, 210, texto2, 500)
image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
image.write(onde);
})
})
})
bot.createMessage(msg.channel.id, msg.author.mention+" ok! só espere um pouco").then(msg => setTimeout(function(){msg.delete();}, 3500));
setTimeout(function() {
bot.createMessage(msg.channel.id, "_ _" ,{file: fs.readFileSync("./"+onde), name: onde}).then(msg => setTimeout(function(){msg.delete();}, 100));
}, 2000);
setTimeout(function() {
bot.createMessage(msg.channel.id, "_ _" ,{file: fs.readFileSync("./"+onde), name: onde})
setTimeout(function() {
 fs.unlinkSync(onde);
}, 2000);
}, 3000);
 }else {
bot.createMessage(msg.channel.id, msg.author.mention+" opa! o texto é muito grande").then(msg => setTimeout(function(){msg.delete();}, 3500));
}
 }
        if((msg.content.indexOf("#imgeval") == 0) && (msg.author.id == config.devID)){
            var code = msg.content.slice(config.prefix.length + 6);
            var client = {
                token: ":shrug: | You tried!"
            }
        try{
            bot.createMessage(msg.channel.id, eval(code));
        }catch(err){
            msg.addReaction('❌')
            bot.createMessage(msg.channel.id, '```js\n' + err + '```');
        }};
 }catch(err){
console.log(err)
} 
});
bot.connect();