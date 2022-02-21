const { Telegraf } = require('telegraf')
const bot = new Telegraf('5253582347:AAFv9sxL1-AxHQ5BtusuiRGVELNVe2TnMRQ')


bot.command('start', ctx => {
    console.log(ctx.from)
    console.log(ctx.message)
    bot.telegram.sendMessage(ctx.chat.id, 'Привет инклюзивные!', {})
})
// я получу пиздюлей функция
bot.hears('я получу пиздюлей?', ctx => {
    let randomNumber = Math.floor(Math.random() * 100)


    if (ctx.from.username === 'TanyaRud') {
        ctx.reply(`${ctx.from.first_name} получит пиздюлей с вероятностью 100%`)
    } else {
        ctx.reply(`${ctx.from.first_name} получит пиздюлей с вероятностью ${randomNumber}%`)

    }
})
// Дежурства
const whosOnDuty = (date) => {
    let dutyToday = ''
    switch (date) {
        case 22:
            dutyToday = 'Вододюк и Варабина'
            break;
        case 23:
            dutyToday = 'Демидчик и Грушецкая'
            break;
        case 24:
            dutyToday = 'Пирогов и Слабченко'
            break;
        case 25:
            dutyToday = 'Четвериков и Фильваркив'
            break;
        case 26:
            dutyToday = 'Сухин и Закарян'
            break;
        case 27:
            dutyToday = 'Чистяков'
            break
        case 28:
            dutyToday = 'Рябоконь и Янева'
            break
        default:




    }
    return dutyToday
}
bot.hears('Кто сегодня дежурит?', (ctx) => {
    let todayDate = new Date(Date.now());
    todayDate = todayDate.getDate();
    let dutyToday = whosOnDuty(todayDate);
    ctx.reply(`${dutyToday}`)
})
bot.hears('Кто завтра дежурит?', (ctx) => {
    let todayDate = new Date(Date.now());
    todayDate = todayDate.getDate() ;
    let tomorrowDate = Number(todayDate) + 1
    let dutyToday = whosOnDuty(tomorrowDate);
    ctx.reply(`${dutyToday}`)
})
//переключатель
let goodMood = false
bot.command('goodmood', (ctx) => {
    if (goodMood) {
        goodMood = false
        console.log(goodMood)
    } else {
        goodMood = true
        console.log(goodMood)
    }
})
// хорошее настроение
bot.on('text',(ctx) => {
    if (goodMood) {
        let randomNumber = Math.floor(Math.random() * 5)
        switch (randomNumber) {
            case 1:
                ctx.reply(ctx.message.text + ', и хорошего настроения');
                break;
            case 2:
                ctx.reply(ctx.message.text + ', и хороших выходных');
                break;
            case 3:
                ctx.reply(ctx.message.text + ', и всех благ');
                break;
            case 4:
                ctx.reply(ctx.message.text + ', и лоскуты');
                break;
            case 5:
                ctx.reply(ctx.message.text + ', и я люблю работать');
                break;
            default:

        }
    }


})



bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))