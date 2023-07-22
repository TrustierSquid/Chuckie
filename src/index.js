
import 'dotenv/config'
import fetch from "node-fetch"
import {Client, GuildMember, IntentsBitField} from 'discord.js'

// Discord API
// Client is the bot
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

// Fetching chuck norris jokes
let url = 'https://api.chucknorris.io/jokes/random';

// main 
const TrustierSquid = '349343589328879619'

// text channels
// channel ids
const general = '839630552990351411'
const botSpam = '1107806901233795212'


let callJoke = () => {

    // tells a joke every hour
    setInterval(()=> {
        let norris = fetch('https://api.chucknorris.io/jokes/random')
        .then((res)=> res.json())
        .then((data) => {
            const channel = client.channels.cache.get(general);
            channel.send(data.value)

        })
    
    }, 3600000)	
}
    
client.on('ready', (c)=> {
    console.log("I'm Ready! " + c.user.tag);
    callJoke()

});


client.login(process.env.TOKEN);
    
    
