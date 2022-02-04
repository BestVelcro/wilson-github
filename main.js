var Eris = require("eris");

const config = require("./config.json");
const img = require("./imagem.js");
const ai = require("./aiapi.js");
const moment = require("moment");
const aesthetics = require("aesthetics");
const fs = require("fs");

var bot = new Eris(config.token);
bot.on("ready", () => {
  bot.createMessage("651759745778057217", "main.js iniciado!");
  bot.createMessage(
    "651759745778057217",
    "Numero de servidores que seu bot está:"
  );
  bot.createMessage("651759745778057217", bot.guilds.size);
  bot.createMessage(
    "651759745778057217",
    "Nome dos servidores que seu bot está:"
  );
  bot.guilds.forEach(guild =>
    bot.createMessage(
      "651759745778057217",
      guild.name + " " + guild.memberCount
    )
  );
  bot.editStatus("dnd", {
    name:
      config.prefix +
      "help para ser feliz, Estou em " +
      bot.guilds.size +
      " Servers",
    type: 1,
    url: "https://www.twitch.tv/felps"
  });
  var actived = false;
  var pode = "sim";
});

bot.on("messageCreate", msg => {
  try {
    var cargo = msg.content.split(/[ ]+/);
	if (msg.author.id != bot.user.id) {
      
      function embaralhar(array) {
    var indice_atual = array.length, valor_temporario, indice_aleatorio;
 
    while (0 !== indice_atual) {
 
        indice_aleatorio = Math.floor(Math.random() * indice_atual);
        indice_atual -= 1;
 
        valor_temporario = array[indice_atual];
        array[indice_atual] = array[indice_aleatorio];
        array[indice_aleatorio] = valor_temporario;
    }
 
    return array;
}
      
      function botCheck() {
        var botChecking = msg.mentions[0].bot;
        if (botChecking == true) {
          return "Esta conta é um bot";
        } else {
          if (botChecking == false) {
            return "Esse usuário não é um bot";
          }
        }
      }

      function stats() {
        var status = bot.guilds
          .find(guild => guild.id == msg.channel.guild.id)
          .members.find(member => member.id == msg.mentions[0].id).status;
        if (status == "online") {
          return "Disponível";
        } else if (status == "offline") {
          return "Afk/Invisivel";
        } else if (status == "dnd") {
          return "Ocupado";
        } else if (status == "idle") {
          return "Ausente";
        }
      }

      function afks() {
        var afkTimeout = msg.channel.guild.afkTimeout;
        if (afkTimeout == "60") {
          return "1 minuto";
        } else if (afkTimeout == "300") {
          return "5 minutos";
        } else if (afkTimeout == "900") {
          return "15 minutos";
        } else if (afkTimeout == "1800") {
          return "30 minutos";
        } else if (afkTimeout == "3600") {
          return "1 hora";
        }
      }

      function verificationLevel() {
        var guildVerification = msg.channel.guild.verificationLevel;
        if (guildVerification == "0") {
          return "Nenhum";
        } else if (guildVerification == "1") {
          return "Baixo";
        } else if (guildVerification == "2") {
          return "Médio";
        } else if (guildVerification == "3") {
          return "Alto";
        } else if (guildVerification == "4") {
			return "Muito Alto"
		}
      }

      function role() {
        var roles = msg.channel.guild.members.get(msg.mentions[0].id).roles;
        if (roles && roles.length > 0) {
          return roles.map(r => msg.channel.guild.roles.get(r).name).join(", ");
        } else {
          return "o usuário não tem cargos";
        }
      }

      var prefix = msg.content.slice(config.prefix.length + 5);
      var arg = msg.content.split(" ");
      moment().format();
      moment.locale("pt-br");

      function playing() {
        var playings = bot.guilds
          .find(guild => guild.id == msg.channel.guild.id)
          .members.find(member => member.id == msg.mentions[0].id).game;
        if (playings != undefined) {
          return playings.name;
        } else {
          return "Nada";
        }
      }

      function merole() {
        var roles = msg.channel.guild.members.get(msg.member.id).roles;
        if (roles && roles.length > 0) {
          return roles.map(r => msg.channel.guild.roles.get(r).name).join(", ");
        } else {
          return "o usuário não tem cargos";
        }
      }

      function mestats() {
        var status = bot.guilds
          .find(guild => guild.id == msg.channel.guild.id)
          .members.find(member => member.id == msg.member.id).status;
        if (status == "online") {
          return "Disponível";
        } else if (status == "offline") {
          return "Afk/Invisivel";
        } else if (status == "dnd") {
          return "Ocupado";
        } else if (status == "idle") {
          return "Ausente";
        }
      }

      function meplaying() {
        var playings = bot.guilds
          .find(guild => guild.id == msg.channel.guild.id)
          .members.find(member => member.id == msg.author.id).game;
        if (playings != undefined) {
          return playings.name;
        } else {
          return "Nada";
        }
      }

      function mebotCheck() {
        var botChecking = msg.author.bot;
        if (botChecking == true) {
          return "Esta conta é um bot";
        } else {
          if (botChecking == false) {
            return "Esse usuário não é um bot";
          }
        }
      }

      var messe = msg.content.toLowerCase();
      var prfx = msg.content.slice(config.prefix.length + 4);
      if (messe.indexOf(config.prefix + "say") == 0 && prfx) {
        var argn = prfx.split("");
        var fmesse = "";
        var act = false,
          act2 = false,
          act3 = false;
        for (var i = 0; i < argn.length; i++) {
          if (argn[i] != " ") {
            var rand = Math.floor(Math.random() * 5) + 1;
            switch (rand) {
              case 1:
                if (act2 == false) {
                  fmesse += "__" + argn[i] + "__";
                  act2 = true;
                  act = false;
                  break;
                } else {
                  fmesse += argn[i];
                  act = true;
                  act2 = false;
                  act3 = false;
                  break;
                }
              case 2:
                if (act2 == false) {
                  fmesse += "~~" + argn[i] + "~~";
                  act = false;
                  act2 = true;
                  break;
                } else {
                  fmesse += argn[i];
                  act = true;
                  act2 = false;
                  break;
                }
              case 3:
                if (act == false) {
                  fmesse += argn[i];
                  act = true;
                  break;
                } else {
                  fmesse += "__" + argn[i] + "__";
                  act2 = true;
                  act = false;
                  break;
                }
              case 4:
                if (act == false) {
                  fmesse += "**" + argn[i] + "**";
                  act2 = false;
                  act = true;
                  break;
                } else {
                  if (act3 == false) {
                    fmesse += "`" + argn[i] + "`";
                    act3 = true;
                    break;
                  } else {
                    fmesse += argn[i];
                    act = true;
                    act2 = true;
                    act3 = false;
                    break;
                  }
                }
              case 5:
                if (act3 == false) {
                  fmesse += "`" + argn[i] + "`";
                  act3 = true;
                  break;
                } else {
                  fmesse += argn[i];
                  act = true;
                  act2 = true;
                  act3 = false;
                  break;
                }
            }
          } else {
            fmesse += "  ";
          }
        }
        bot.createMessage(msg.channel.id, fmesse).then(msg =>
          setTimeout(function() {
            msg.delete();
          }, 25000)
        );
        msg.delete();
      }

      if (msg.content.indexOf(config.prefix + "rd") == 0) {
        var rd = msg.content.slice(config.prefix.length + 3);
        bot.createMessage(msg.channel.id, Math.floor(Math.random() * rd) + 1);
      }

      if (msg.content.indexOf(config.prefix + "serverinfo") == 0) {
        bot
          .createMessage(msg.channel.id, {
            embed: {
              thumbnail: { url: msg.channel.guild.iconURL },
              footer: {
                text:
                  "A pedido dê " +
                  msg.author.username +
                  "#" +
                  msg.author.discriminator,
                icon_url: msg.author.avatarURL
              },
              color: Math.floor(Math.random() * 99999),
              fields: [
                {
                  name: "Nome do server:",
                  value: msg.channel.guild.name,
                  inline: true
                },
                {
                  name: "Id do servidor:",
                  value: msg.channel.guild.id,
                  inline: true
                },
                {
                  name: "Dono do servidor:",
                  value: "<@" + msg.channel.guild.ownerID + ">",
                  inline: true
                },
                {
                  name: "Quantas pessoas no servidor:",
                  value:
                    " :bust_in_silhouette:" +
                    msg.channel.guild.members.filter(m => !m.bot).length +
                    "    :robot:" +
                    msg.channel.guild.members.filter(m => m.bot).length,
                  inline: true
                },
                {
                  name: "Dia de criação do servidor:",
                  value: moment(msg.channel.guild.createdAt).format("LL"),
                  inline: true
                },
                {
                  name: "Região do servidor:",
                  value: msg.channel.guild.region,
                  inline: true
                },
                {
                  name: "Limite de ausência:",
                  value: afks(),
                  inline: true
                },
                {
                  name: "Nivel de verificação:",
                  value: verificationLevel(),
                  inline: true
                },
                {
                  name: "Data de quando entrei neste servidor:",
                  value: moment(
                    bot.guilds
                      .get(msg.channel.guild.id)
                      .members.get(bot.user.id).joinedAt
                  ).format("LL"),
                  inline: true
                }
              ]
            }
          })
      }

      if (msg.content.indexOf(config.prefix + "help") == 0) {
        bot
          .createMessage(msg.channel.id, {
            embed: {
			  title: "Estes são os comandos gerais do Wilson!",
              thumbnail: { url: bot.user.avatarURL},
              color: Math.floor(Math.random() * 99999),
              fields: [
                {
                  name: config.prefix+"help",
                  value: "Cria este exato texto que você está lendo agora",
                  inline: false
                },
				{
					name: config.prefix+"funcommands",
					value: "Comandos provavelmente inuteis, mas divertidos",
					inline: false
				},
				{
					name: config.prefix+"interações",
					value: "Comandos que interagem com outros usuários",
					inline: false
				},
				{
					name: config.prefix+"staff",
					value: "Comandos para facilitar a moderação da staff do servidor",
					inline: false
				},
				{
					name: config.prefix+"serverinfo",
					value: "Fornece diversas informações sobre o servidor em que foi usado",
					inline: false
				},
				{
					name: config.prefix+"profile",
					value: "Fornece diversas informações sobre um usuário marcado",
					inline: false
				},
              ]
            }
          })
      }

      if (msg.content.indexOf(config.prefix + "funcommands") == 0) {
        bot.getDMChannel(msg.author.id).then(dm => {
        bot
          .createMessage(msg.channel.id, {
            embed: {
			  title: "Estes são todos os comandos inuteis do Wilson!",
              thumbnail: { url: bot.user.avatarURL},
              color: Math.floor(Math.random() * 99999),
              fields: [
				{
					name: config.prefix+"roleta",
					value: "Teste sua sorte na roleta",
					inline: false
				},
				{
					name: config.prefix+"tempo",
					value: "Mostra a hora (GMT 0)",
					inline: false
				},
				{
					name: config.prefix+"say (texto)",
					value: "Wilson irá falar o texto escrito",
					inline: false
				},
				{
					name: config.prefix+"remember (tempo em minutos) (descrição)",
					value: "Wilson te enviará uma mensagem após o tempo definido com a descrição definida",
					inline: false
				},
				{
					name: config.prefix+"rd (número)",
					value: "Wilson irá fornecer um número aleatório de um até o número definido",
					inline: false
				},
				{
					name: config.prefix+"votação (texto)",
					value: "Wilson criará uma votação com título a partir do texto fornecido",
					inline: false
				},
				{
					name: config.prefix+"dicionário (palavra)",
					value: "Wilson fará uma pesquisa da palavra fornecida a partir do site dicio.com",
					inline: false
				},
				{
					name: config.prefix+"vp (texto)",
					value: "ｖａｐｏｒｗａｖｅ",
					inline: false
				}
              ]
            }
          })
        });
      }

      if (msg.content.indexOf(config.prefix + "beijo") == 0) {
		  if(msg.mentions[0] !== undefined){
		bot.createMessage(msg.channel.id, msg.author.username+" roubou um beijo de "+msg.mentions[0].username);
		  }else{
        bot.createMessage(msg.channel.id, "beijo " + msg.author.mention);
      }}

      if (
        msg.content.indexOf(config.prefix + "crush") == 0 &&
        msg.mentions[0]
      ) {
        bot.createMessage(
          msg.channel.id,
          "<@" + msg.author.id + "> ama <@" + msg.mentions[0].id + ">"
        );
      }

      if (
        msg.content.indexOf(config.prefix + "coice") == 0 &&
        msg.mentions[0]
      ) {
        bot
          .createMessage(
            msg.channel.id,
            "<@" +
              msg.author.id +
              "> deu um coice em <@" +
              msg.mentions[0].id +
              "> https://thumbs.gfycat.com/EnchantedLightheartedGerenuk-size_restricted.gif"
          )
      }

      if (msg.content.indexOf(config.prefix + "interações") == 0) {
        bot
          .createMessage(msg.channel.id, {
            embed: {
			  title: "Estes são todos os comandos interativos do Wilson!",
			  description: "Lembrando que todos estes comandos vão envolver a menção de um usuário!",
              thumbnail: { url: bot.user.avatarURL},
              color: Math.floor(Math.random() * 99999),
              fields: [
                {
                  name: config.prefix+"crush",
                  value: "Declare seu amor por alguém",
                  inline: false
                },
				{
					name: config.prefix+"coice",
					value: "Dê um coice em alguém!",
					inline: false
				},
				{
					name: config.prefix+"shoot",
					value: "Dê um tiro em outro usuário",
					inline: false
				},
				{
					name: config.prefix+"jogar",
					value: "Jogue objetos aleatórios em outras pessoas!",
					inline: false
				},
				{
					name: config.prefix+"beijo",
                  value: "De um beijo em alguém, ou no Wilson",
					inline: false
				},
				{
					name: config.prefix+"ship (mencionar uma pessoa) (mencionar outra pessoa)",
					value: "Wilson irá calcular o nível de relação entre duas pessoas marcadas",
					inline: false
				}
              ]
            }
          })
      }

      if (
        msg.content.indexOf(config.prefix + "shoot") == 0 &&
        msg.mentions[0]
      ) {
        bot.createMessage(
          msg.channel.id,
          "<@" +
            msg.author.id +
            "> deu um tiro em <@" +
            msg.mentions[0].id +
            "> https://giphy.com/gifs/chordoverstreet-chord-overstreet-l4JzgUo64J3DaxnI4 "
        );
      }
      if (
        msg.content.indexOf(config.prefix + "jogar") == 0 &&
        msg.mentions[0]
      ) {
        var rand = Math.floor(Math.random() * 21) + 1;
		var objects = [":high_heel:", ":eggplant:", ":apple:", ":pear:", ":hamburger:", ":scissors:", ":camera:", ":vhs:", ":iphone:", ":pick:", ":soccer:", ":basketball:", ":football:", ":baseball:", ":8ball:", ":medal:", ":tickets:", ":microphone:", ":game_die:", ":saxophone:", ":drum:"]

            bot
              .createMessage(
                msg.channel.id,
                "<@" +
                  msg.author.id +
                  "> jogou um "+objects[Math.floor(Math.random() * objects.length) + 1]+" em <@" +
                  msg.mentions[0].id +
                  ">"
              )

        }
      
      
            if (msg.content.indexOf("joaninha") == 0) {
        bot
          .createMessage(
            msg.channel.id,
            "https://cdn.glitch.com/0edaf8a6-cf74-455c-9958-e05601e331c5%2F500px-Coccinella_septempunctata_Kaldari.jpg?v=1598405728944"
          )
      }

if (msg.content.indexOf("gay") == 0) {
        bot
          .createMessage(
            msg.channel.id,
            msg.author.mention+" é gay"
          )
      }
      
      if (msg.content.indexOf(config.prefix + "profile") == 0) {
        if (msg.mentions[0] != undefined) {
          bot.createMessage(msg.channel.id, {
            embed: {
              thumbnail: { url: msg.mentions[0].avatarURL },
              footer: {
                text:
                  "A pedido de " +
                  msg.author.username +
                  "#" +
                  msg.author.discriminator,
                icon_url: msg.author.avatarURL
              },
              color: Math.floor(Math.random() * 99999),
              fields: [
                {
                  name: "Info de:",
                  value:
                    msg.mentions[0].username +
                    "#" +
                    msg.mentions[0].discriminator,
                  inline: true
                },
                {
                  name: "Jogo:",
                  value: playing(),
                  inline: true
                },
                {
                  name: "Bot:",
                  value: botCheck(),
                  inline: true
                },
                {
                  name: "Criação da conta:",
                  value:
                    "Dia " + moment(msg.mentions[0].createdAt).format("LL"),
                  inline: true
                },
                {
                  name: "Entrou no servidor:",
                  value:
                    "Dia " +
                    moment(
                      bot.guilds
                        .get(msg.channel.guild.id)
                        .members.get(msg.mentions[0].id).joinedAt
                    ).format("LL"),
                  inline: true
                },
                {
                  name: "Cargos:",
                  value: role(),
                  inline: true
                }
              ]
            }
          });
        } else {
          bot.createMessage(msg.channel.id, {
            embed: {
              thumbnail: { url: msg.author.avatarURL },
              footer: {
                text:
                  "A pedido de " +
                  msg.author.username +
                  "#" +
                  msg.author.discriminator,
                icon_url: msg.author.avatarURL
              },
              color: Math.floor(Math.random() * 99999),
              fields: [
                {
                  name: "Info de:",
                  value: msg.author.username + "#" + msg.author.discriminator,
                  inline: true
                },
                {
                  name: "Jogo:",
                  value: meplaying(),
                  inline: true
                },
                {
                  name: "Bot:",
                  value: mebotCheck(),
                  inline: true
                },
                {
                  name: "Criação da conta:",
                  value: "Dia " + moment(msg.author.createdAt).format("LL"),
                  inline: true
                },
                {
                  name: "Entrou no servidor:",
                  value:
                    "Dia " +
                    moment(
                      bot.guilds
                        .get(msg.channel.guild.id)
                        .members.get(msg.author.id).joinedAt
                    ).format("LL"),
                  inline: true
                },
                {
                  name: "Cargos:",
                  value: merole(),
                  inline: true
                }
              ]
            }
          });
        }
      }

      if (msg.content.indexOf(config.prefix + "tempo") == 0) {
        bot.createMessage(
          msg.channel.id,
          "**Data:** Dia `" +
            moment().format("LL") +
            "` \n **Dia da semana:** `" +
            moment().format("dddd") +
            "` \n **Hora:** `" +
            moment().format("LTS") +
            "` \n **Dia começou a** `" +
            moment()
              .startOf("day")
              .fromNow() +
            "` \n **Dia vai terminar** `" +
            moment()
              .endOf("day")
              .fromNow() +
            "`"
        );
      }
	
      if (msg.content.indexOf(config.prefix + "staff") == 0) {
        bot
          .createMessage(msg.channel.id, {
            embed: {
			  title: "Estes são todos os comandos para moderação do Wilson!",
			  description: "Lembrando que, para o uso destes comandos será necessário permissões especificas no servidor",
              thumbnail: { url: bot.user.avatarURL},
              color: Math.floor(Math.random() * 99999),
              fields: [
                {
                  name: config.prefix+"clear (número)",
                  value: "Delete uma quantidade de mensagens baseada no número definido",
                  inline: false
                },
				{
					name: config.prefix+"kick (mencionar usuário)",
					value: "Kicka o usuário mencionado",
					inline: false
				},
				{
					name: config.prefix+"ban (mencionar usuário)",
					value: "Bane o usuário mencionado",
					inline: false
				},
				{
					name: config.prefix+"addcarg (nome) (mencionar pessoa)",
					value: "Adiciona um cargo para a pessoa mencionada baseado no nome fornecido",
					inline: false
				},
				{
					name: config.prefix+"revcarg (nome) (mencionar pessoa)",
                  value: "Remove um cargo para a pessoa mencionada baseado no nome fornecido",
					inline: false
				},
				{
					name: config.prefix+"timemute (mencionar pessoa) (tempo)",
					value: "Revoga a permissão de mandar mensagens no servidor da pessoa mencionada pelo tempo em minutos determinado",
					inline: false
				},
				{
					name: config.prefix+"mute (mencionar pessoa)",
					value: "Revoga a permissão de mandar mensagens no servidor da pessoa mencionada",
					inline: false
				},
				{
					name: config.prefix+"unmute (mencionar pessoa)",
					value: "Concederá novamente as permissões de mandar mensagens no servidor da pessoa mencionada",
					inline: false
				}
              ]
            }
          })
      }

      if (
        msg.content.indexOf(config.prefix + "remember") == 0 &&
        cargo[1] <= 1440 &&
        cargo[1] >= 1
      ) {
        bot.createMessage(
          "651759745778057217",
          "o " +
            msg.author.username +
            " usou o comando " +
            config.prefix +
            " remember"
        );
        bot.createMessage(msg.channel.id, "Ok irei lembrar!")
        setTimeout(function() {
          bot.getDMChannel(msg.author.id).then(dm => {
            bot.createMessage(
              dm.id,
              "O remember para '" +
                cargo[2] +
                "' de " +
                cargo[1] +
                " minutos acabou " +
                msg.author.username
            );
          });
        }, cargo[1] * 60000);
      }
      if (
        msg.content.indexOf(config.prefix + "remember") == 0 &&
        cargo[1] > 1440
      ) {
        bot.createMessage(
          msg.channel.id,
          "Defina um número de 1 até 1440 (24h)"
        );
      }
      if (
        msg.content.indexOf(config.prefix + "remember") == 0 &&
        cargo[1] < 1
      ) {
        bot.createMessage(
          msg.channel.id,
          "Defina um número de 1 até 1440 (24h)"
        );
      }

      if (msg.content.indexOf(config.prefix + "kick") == 0) {
        if (
          msg.member.permission.has("kickMembers") &&
          msg.mentions[0] != undefined
        ) {
          var ment = msg.mentions;
          bot.kickGuildMember(msg.channel.guild.id, ment[0].id, 0);
          bot.createMessage(
            msg.channel.id,
            "**" +
              msg.mentions[0].username +
              "** foi kickado com sucesso!"
          );
        } else if (
          !msg.member.permission.has("kickMembers") &&
          msg.content.indexOf(prefix + "kick") == 0
        ) {
          bot.createMessage(
            msg.channel.id,
            "Não foi possivel kickar **" + msg.mentions[0].username + "**"
          );
        }
      }

      if (msg.content.indexOf(config.prefix + "ban") == 0) {
        if (
          msg.member.permission.has("banMembers") &&
          msg.mentions[0] != undefined
        ) {
          var ment = msg.mentions;
          bot.banGuildMember(msg.channel.guild.id, ment[0].id, 0);
          bot.createMessage(
            msg.channel.id,
            "**" +
              msg.mentions[0].username +
              "** foi banido com sucesso!"
          );
        } else if (
          !msg.member.permission.has("banMembers") &&
          msg.content.indexOf(prefix + "kick") == 0
        ) {
          bot.createMessage(
            msg.channel.id,
            "Não foi possivel banir **" + msg.mentions[0].username + "**"
          );
        }
      }

      if (
        msg.content.indexOf(config.prefix + "meus servidores") == 0 &&
        msg.author.id == config.devID
      ) {
        bot.guilds.forEach(guild =>
          bot
            .createMessage(msg.channel.id, guild.name + " " + guild.memberCount)
        );
      }

      if (
        msg.content.indexOf(config.prefix + "reverse") == 0 &&
        msg.author.id != bot.user.id
      ) {
        var contrario = msg.content.slice(config.prefix.length + 8);
        var recontrario = contrario
          .split("")
          .reverse()
          .join("");
        bot.createMessage(msg.channel.id, recontrario);
      }

      if (
        msg.content.indexOf(config.prefix + "clear") == 0 &&
        msg.member.permission.has("manageMessages") &&
        msg.content.slice(config.prefix.length + 6) > 0 &&
        msg.content.slice(config.prefix.length + 6) <= 1500
      ) {
        msg.delete();
        if (msg.content.slice(config.prefix.length + 6) > 1) {
          bot.purgeChannel(
            msg.channel.id,
            msg.content.slice(config.prefix.length + 6)
          );
          bot
            .createMessage(msg.channel.id, {
              embed: {
                author: {
                  name:
                    "Deletado " +
                    msg.content.slice(config.prefix.length + 6) +
                    " mensagens!"
                },
                color: Math.floor(Math.random() * 999999)
              }
            })
            .then(msg =>
              setTimeout(function() {
                msg.delete();
              }, 5000)
            );
        }
        if (msg.content.slice(config.prefix.length + 6) <= 1) {
          bot.purgeChannel(
            msg.channel.id,
            msg.content.slice(config.prefix.length + 6)
          );
          bot
            .createMessage(msg.channel.id, {
              embed: {
                author: {
                  name:
                    "Deletado " +
                    msg.content.slice(config.prefix.length + 6) +
                    " mensagem!"
                },
                color: Math.floor(Math.random() * 999999)
              }
            })
            .then(msg =>
              setTimeout(function() {
                msg.delete();
              }, 5000)
            );
        }
      } else if (
        msg.content.indexOf(config.prefix + "clear") == 0 &&
        !msg.member.permission.has("manageMessages")
      ) {
        bot
          .createMessage(msg.channel.id, {
            embed: {
              author: { name: "Você não tem permissões para isto 😕" },
              color: Math.floor(Math.random() * 999999)
            }
          })
          .then(msg =>
            setTimeout(function() {
              msg.delete();
            }, 5000)
          );
      } else if (
        msg.content.indexOf(config.prefix + "clear") == 0 &&
        msg.member.permission.has("manageMessages") &&
        msg.content.slice(config.prefix.length + 6) > 0 &&
        msg.content.slice(config.prefix.length + 6) > 1500
      ) {
        bot
          .createMessage(msg.channel.id, {
            embed: {
              author: { name: "O max de clear é 1500 mensagens 😕" },
              color: Math.floor(Math.random() * 999999)
            }
          })
          .then(msg =>
            setTimeout(function() {
              msg.delete();
            }, 5000)
          );
      }
      
      if(msg.content.indexOf(config.prefix+"roleta") == 0){
      var tiro = Math.floor(Math.random() * 6)+1;
      msg.channel.sendTyping(1);
      setTimeout(function() { 
      bot.createMessage(msg.channel.id, "Você pega a arma");
      setTimeout(function() {
      bot.createMessage(msg.channel.id, "Gira o tambor");
      setTimeout(function() {
      bot.createMessage(msg.channel.id, "Aponta para a sua cabeça e...");
      setTimeout(function() {
      if(msg.author.id == config.devID){
      bot.createMessage(msg.channel.id, "Você vive mais um dia")
      }else if(tiro == 1){
        if(msg.channel.guild.id == "573279887025111053"){
          bot.getDMChannel(msg.author.id).then(dm => {
          bot.createMessage(
            dm.id, "https://discord.gg/Sub7HJeeZN")});
        }
    setTimeout(function() {
      bot.kickGuildMember(msg.channel.guild.id, msg.author.id, "Loser");
    }, 1000)
      bot.createMessage(msg.channel.id, "Parece que "+msg.author.username+" não teve sorte dessa vez")
      }else{
      bot.createMessage(msg.channel.id, "Você vive mais um dia")
      }
      },2500)
      }, 1000)
      }, 1000)
      }, 1000)
      
      }
      
      if ((msg.content.indexOf(config.prefix + "votação") == 0) && (msg.content.length > config.prefix.length + 8)){
        var ataBeleza = msg.content.slice(config.prefix.length + 8);
        bot
          .createMessage(msg.channel.id, {
            embed: {
              author: {
                name: "Votação iniciada por " + msg.author.username,
                icon_url: msg.author.avatarURL
              },
              fields: [
                {
                  name: "_ _",
                  value: ataBeleza
                }
              ]
            }
          })
          .then(m =>
            m
              .addReaction("👍")
              .then(m.addReaction("👎").then(m.addReaction("🤷")))
          );
      } else if(msg.content.indexOf(config.prefix + "votação") == 0){
        bot.createMessage(
          msg.channel.id,
          "``Você precisa definir um titulo para a votação``"
        );
      }

      if (msg.content.indexOf(config.prefix + "dicionário") == 0) {
        var dic = msg.content.slice(config.prefix.length + 11);
        var parsed = dic.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        var palavrafinal = parsed.toLowerCase();
        bot.createMessage(msg.channel.id, {
          embed: {
            image: {
              url: "https://s.dicio.com.br/" + encodeURI(palavrafinal) + ".jpg"
            }
          }
        });
      }

      if (msg.content.indexOf(config.prefix + "wikipedia") == 0) {
        var dic = msg.content.slice(config.prefix.length + 10);
        bot.createMessage(
          msg.channel.id,
          "https://pt.wikipedia.org/wiki/" + encodeURI(dic)
        );
      }

      if (msg.content.indexOf(config.prefix + "rate") == 0) {
        var rat = msg.content.slice(config.prefix.length + 5);
        bot.createMessage(
          msg.channel.id,
          ":thinking: " + rat + " " + Math.floor(Math.random() * 10) + "/10"
        );
      }


      if (
        msg.content.indexOf(config.prefix + "ship") == 0 &&
        msg.mentions[1] != undefined
      ) {
        var teste = msg.mentions[0].username;
        var ata = teste
          .split("")
          .reverse()
          .join("");
        var ultimo = ata.slice(ata.length / 2);
        var trollei = ultimo
          .split("")
          .reverse()
          .join("");
        var trollei2 = msg.mentions[1].username.slice(
          msg.mentions[1].username.length / 2
        );
        var potatofinal = trollei + trollei2;
        var random = [
          ":heart: **HMM será que temos um casal aqui?** :heart: \n         `" +
            msg.mentions[0].username +
            "`\n         `" +
            msg.mentions[1].username +
            "`\n :broken_heart: **" +
            potatofinal +
            " Parece que o amor deles não é tão grande =/** :broken_heart:",
          ":heart: **HMM será que temos um casal aqui?** :heart: \n`" +
            msg.mentions[0].username +
            "`\n`" +
            msg.mentions[1].username +
            "`\n :neutral_face:  **" +
            potatofinal +
            " Parece que eles são só conhecidos** :neutral_face:",
          ":heart: **HMM será que temos um casal aqui?** :heart: \n`" +
            msg.mentions[0].username +
            "`\n`" +
            msg.mentions[1].username +
            "`\n :shrug:  **" +
            potatofinal +
            " Parece que eles são colegas de classe/amigos** :shrug:",
          ":heart: **HMM será que temos um casal aqui?** :heart: \n`" +
            msg.mentions[0].username +
            "`\n`" +
            msg.mentions[1].username +
            "`\n :smile: **" +
            potatofinal +
            " Parece que eles são bons e velhos amigos** :smile:",
          ":heart: **HMM será que temos um casal aqui?** :heart: \n`" +
            msg.mentions[0].username +
            "`\n`" +
            msg.mentions[1].username +
            "`\n :heart_eyes: **" +
            potatofinal +
            " Parece que eles são um bom casal** :heart_eyes:",
          ":heart: **HMM será que temos um casal aqui?** :heart: \n`" +
            msg.mentions[0].username +
            "`\n`" +
            msg.mentions[1].username +
            "`\n :heartpulse: **" +
            potatofinal +
            " Parece que eles são o casal perfeito** :heartpulse:"
        ];
        var theRandom = function() {
          return random[Math.floor(Math.random() * random.length)];
        };
        var randomizeTheRandom = theRandom();
        bot.createMessage(msg.channel.id, randomizeTheRandom)
      }

      if (
        msg.content.indexOf(config.prefix + "addcarg") == 0 &&
        msg.member.permission.has("manageRoles") &&
        msg.mentions[0] != undefined
      ) {
        var ment = bot.guilds
          .get(msg.channel.guild.id)
          .roles.find(
            name => name.name.toLowerCase() == cargo[2].toLowerCase()
          );
        if (ment != undefined) {
          bot.guilds
            .find(guild => guild.id == msg.channel.guild.id)
            .members.find(member => member.id == msg.mentions[0].id)
            .addRole(ment.id);
          bot.createMessage(msg.channel.id, "Feito :wink: ").then(msg =>
            setTimeout(function() {
              msg.delete();
            }, 75000)
          );
        } else {
          bot
            .createMessage(msg.channel.id, "Acho que este role não existe")
            .then(msg =>
              setTimeout(function() {
                msg.delete();
              }, 75000)
            );
        }
      }

      if (
        msg.content.indexOf(config.prefix + "revcarg") == 0 &&
        msg.member.permission.has("manageRoles") &&
        msg.mentions[0] != undefined
      ) {
        var ment = bot.guilds
          .get(msg.channel.guild.id)
          .roles.find(
            name => name.name.toLowerCase() == cargo[2].toLowerCase()
          );
        if (ment != undefined) {
          bot.guilds
            .find(guild => guild.id == msg.channel.guild.id)
            .members.find(member => member.id == msg.mentions[0].id)
            .removeRole(ment.id);
          bot.createMessage(msg.channel.id, "Feito :wink: ").then(msg =>
            setTimeout(function() {
              msg.delete();
            }, 75000)
          );
        } else {
          bot
            .createMessage(msg.channel.id, "Acho que este role não existe")
            .then(msg =>
              setTimeout(function() {
                msg.delete();
              }, 75000)
            );
        }
      }

      if (
        msg.content.indexOf(config.prefix + "timemute") == 0 &&
        msg.member.permission.has("manageMessages") &&
        msg.mentions[0] != undefined
      ) {
        msg.channel.guild.channels.forEach(c => {
          c.editPermission(msg.mentions[0].id, 0, 2048, "member");
        });
        bot.createMessage(
          msg.channel.id,
          msg.mentions[0].username + " foi mutado por " + cargo[2] + " minutos!"
        );
        setTimeout(function() {
          msg.channel.guild.channels.forEach(c => {
            c.editPermission(msg.mentions[0].id, 0, 0, "member");
          });
          bot.createMessage(
            msg.channel.id,
            msg.mentions[0].username +
              " foi desmutado depois de se passar " +
              cargo[2] +
              " minutos!"
          );
        }, cargo[2] * 60000);
      }

      if (
        msg.content.indexOf(config.prefix + "mute") == 0 &&
        msg.member.permission.has("manageMessages") &&
        msg.mentions[0] != undefined
      ) {
        msg.channel.guild.channels.forEach(c => {
          c.editPermission(msg.mentions[0].id, 0, 2048, "member");
        });
        bot.createMessage(
          msg.channel.id,
          msg.mentions[0].username + " foi mutado em todos os canais de texto!"
        );
      }

      if (
        msg.content.indexOf(config.prefix + "unmute") == 0 &&
        msg.member.permission.has("manageMessages") &&
        msg.mentions[0] != undefined
      ) {
        msg.channel.guild.channels.forEach(c => {
          c.editPermission(msg.mentions[0].id, 0, 0, "member");
        });
        bot.createMessage(
          msg.channel.id,
          msg.mentions[0].username + " foi desmutado!"
        );
      }

      if (msg.content.indexOf(config.prefix + "uptime") == 0) {
        var tempo = moment(bot.uptime).format("LTS");
        var timeup = tempo.split(":");
        var horas = timeup[0] + " horas, ";
        var minutos = timeup[1] + " minutos, ";
        var segundos = timeup[2] + " segundos";
        if (horas == "00 horas, ") {
          var horas = "";
        }
        if (minutos == "00 minutos, ") {
          var minutos = "";
        }
        if (segundos == "00 segundos") {
          var segundos = "";
        }
        bot.createMessage(
          msg.channel.id,
          "eu fui ligado a " + horas + minutos + segundos
        );
      }

      if (
        msg.content.indexOf(config.prefix + "msg") == 0 &&
        msg.author.id == config.devID
      ) {
        bot.createMessage(
          "651574661162991617",
          msg.content.slice(config.prefix.length + 4)
        );
      }

      if (
        msg.content.indexOf(config.prefix + "msg") == 0 &&
        msg.author.id == "288385937510105088"
      ) {
        bot.createMessage(
          "714668864301957131",
          msg.content.slice(config.prefix.length + 4)
        );
      }

      if (msg.content.indexOf(config.prefix + "vp") == 0) {
        var ata = msg.content.slice(config.prefix.length + 3);
        var oto = ata.split("`").join("");
        var oto = oto.split("*").join("");
        var oto = oto.split("~").join("");
        var oto = oto.split("_").join("");
        var ete = oto.split(":").join("");
        bot.createMessage(msg.channel.id, aesthetics(ete));
      }
	 
      if (msg.content.indexOf(config.prefix + "eldenring") == 0) {
	  var time_test = moment(20220224,"YYYYMMDD").format("X");
	var time_test_now = moment().format("X");
	var calc = time_test-time_test_now;
	var time_day = moment.unix(calc).format("D");
	var time_hour = moment.unix(calc).format("HH");
	var time_min = moment.unix(calc).format("mm");
	var time_sec = moment.unix(calc).format("ss");
	var time_text = "Elden Ring é (Suposto) lançar em "+time_day+":"+time_hour+":"+time_min+":"+time_sec
	bot.createMessage(msg.channel.id, time_text);
	}

      var prefix = msg.content.slice(config.prefix.length + 7);
      if (msg.content.indexOf(config.prefix + "cargid") == 0) {
        var ment = bot.guilds
          .get(msg.channel.guild.id)
          .roles.find(name => name.name.toLowerCase() == prefix.toLowerCase());
        if (ment != undefined) {
          bot.createMessage(msg.channel.id, ment.id);
        } else {
          bot.createMessage(msg.channel.id, "Digite o cargo corretamente");
        }
      }
      if (
        msg.content.indexOf(config.prefix + "execute") == 0 &&
        msg.author.id == config.devID
      ) {
        var code = msg.content.slice(config.prefix.length + 8);
        var client = {
          token: ":shrug: | You tried!"
        };
        try {
          bot.createMessage(msg.channel.id, eval(code));
        } catch (err) {
          msg.addReaction("❌");
          bot.createMessage(msg.channel.id, "```js\n" + err + "```");
        }
      }
    if(msg.content.indexOf(config.prefix+"tierlisttopic") == 0){
    var topico1 = ["Os mais", "Os menos"];
	var topico2 = ["Bonitos", "Gostosos", "Fortes", "Estranhos", "Feios", "Debochados", "Divertidos", "Honestos", "Simpáticos", "Calmos", "Malvados", "Ricos", "Brasileiros", "Espanhois", "Felizes", "Pobres", "Responsáveis", "Melhores", "Obedientes"];
	bot.createMessage(msg.channel.id, topico1[Math.floor(Math.random() * topico1.length)]+" "+topico2[Math.floor(Math.random() * topico2.length)]);
	}  
	
	//b
    var scpnumero = Math.floor(Math.random()*4999)
if(scpnumero < 10){
var scpnumero = "00"+scpnumero
}
if((scpnumero < 100) && (scpnumero >= 10)){
var scpnumero = "0"+scpnumero
}
if(msg.content.indexOf(config.prefix+"randomscp") == 0){
bot.createMessage(msg.channel.id, 'http://www.scp-wiki.net/scp-'+scpnumero);
console.log("\n\nComando usado por: "+msg.author.username+"#"+msg.author.discriminator+"\n e o scp dado foi: scp-"+scpnumero)
}
    
    

    if (msg.content.indexOf(config.prefix+"ping") == 0) {
      const startTime = Date.now();
      bot.createMessage(msg.channel.id, "Pinging...").then(m => {
        m.edit(
          `PONG! :ping_pong:  **${Math.round(
            Date.now() - startTime
          )}**ms e **${Math.round(
            process.memoryUsage().heapUsed / 1024 / 1024
          )}MB\u200B** de RAM`
        );
      });
    }
    
    }
  } catch (err) {
    console.log(err);
  }
});
/*
setInterval(function(){
	var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var palavra = "";
var tamanho = Math.floor(Math.random()*10+3);
for(var i = 0; i < tamanho; i++){
var palavra = palavra + alfabeto[Math.floor(Math.random() * alfabeto.length)];
}
bot.createMessage("893030981521510420", palavra);
}, 10800000);
*/

bot.connect();
