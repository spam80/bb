const Discord = require("discord.js");
const client = new Discord.Client();

const cleverbot = require("cleverbot.io");
const bot = new cleverbot('TVkb6Nku8BhfUhDN','WAEdUEtIYSJbkdbWUIVruvKefR0N9rMS');

client.on("ready", function() {
  client.user.setActivity("Sléép zZ²");
});

bot.create(function (err, session) {
  bot.setNick(session);
  client.on("message", function(message) {
    var { mentions, content, author, guild, channel, reply} = message
    if (author.bot) return;
      if (guild) {
      let users = mentions.users;
      if (!users) return;
      let first = users.first();
      if(!first) return;
      if (first.id != client.user.id) return;
      message.channel.startTyping();
      content = content.replace(/<@.*?>/g, "")
      bot.ask(content, function(err, res) {
        message.channel.stopTyping();
        message.reply(res)
      })
    } else {
      channel.startTyping();
      bot.ask(content.replace(/<@.*?>/g, ""), function(err, res) {
        message.channel.send(res)
        message.channel.stopTyping();
      })
    }
  });
});

client.login(process.env.TOKEN);