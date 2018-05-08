const prefixfile = require("./prefixfile.json");
const tokenfile = require("./tokenfile.json")
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Nothing much, just being Coded by Swagns666!");
});

bot.on("message", async message =>{
if(message.author.bot) return;
if(message.channel.type === "dm") return;

let prefix = prefixfile.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

if(cmd === `${prefix}hello`){
return message.channel.send("Hello!")
}

if(cmd === `${prefix}ping`){
return message.channel.send("Pong!")
}

if(cmd === `${prefix}pong`){
return message.channel.send("Ping!")
}

if(cmd === `${prefix}creator`){
return message.channel.send("Swagns666 and with help from RyanLimYT!")
}  

if(cmd === `${prefix}commands`){
return message.channel.send("/pong, /ping, /hello, /creator and /prefix.")
} 
                
if(cmd === `${prefix}prefix`){
return message.channel.send("/")
}

if(cmd === `${prefix}pegasis`){
return message.channel.send("FINE I LOVE HER OK!!!!1!!111")
}
                                           
if(cmd === `${prefix}ldrago`){
return message.channel.send("EWW!!!1!1!11!1!1! IM A BOY AND LDRAGO IS A BOY SO I NOT GAY!!1!!!1111!")
}

if(cmd === `${prefix}fuck`){
return message.channel.send("Yes, Fuck you!")
}

if(cmd === `${prefix}savage`){
return message.channel.send("Yo mama is, I agree!")
}

if(cmd === `${prefix}shutup`){
return message.channel.send("Hmm, let me think. Yea your but should to much crap coming out!")
}

if(cmd === `${prefix}phoniex`){
return message.channel.send("... is when pegasis and ldrago give birth!")
}

if(cmd === `${prefix}pleb`){
return message.channel.send("Here's a story: I made a pleb cannon that shot plebs at ammo then you came out!")
}

if(cmd === `${prefix}sorry`){
return message.channel.send("Sorry, NOT SORRY!!!!111!")
}

if(cmd === `${prefix}infomation`){
return message.channel.send("Usage: finds info about a member, AS SOON AS MY LAZY CREATOR CODES IT!!!111!!")
}
     
if(cmd === `${prefix}infomation_swagns666`){
return message.channel.send("Name: Mahdi shah, owner of massmakers and awesome and persistent coder!")
}

if(cmd === `${prefix}infomation_ryanlimyt`){
return message.channel.send("Name: TacoX, owner of Progamers and awesome and persistent guy!")
}

if(cmd === `${prefix}mcpegroups`){
  return message.channel.send("All registered Minecraft Pocket Edition Massmakers Groups: Guest, Admin, Owner, OP, CoOwner, PrimeOwner, MainOwner, ConsoleOwner, Trainee, Staff, YouTube, YT, Donator, Banned, Kicked, Songs, Bots, Tacocat, VIP, Vip, HeadStaff, HeadAdmin, Member, Player, Partners, Muted.")
  }

  if(cmd === `${prefix}dscroles`){
    return message.channel.send("All discord roles Massmakers Official Discord:  CoOwner, PrimeOwner, MainOwner, ConsoleOwner, Trainee, Staff, YouTube, YT, Donator, ")
    }

if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }


  if(cmd === `${prefix}report`){

    //!report @ned this is the reason

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }




  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }



  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

});

bot.login(tokenfile.token);

