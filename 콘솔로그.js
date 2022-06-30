// cfonts사의 모듈 이용

client.on('ready', async () => {
    const cfonts = require('cfonts');
    const cb = cfonts.render((`Plto#3078 is ready`), {
        font: 'block',
        color: 'candy',
        align: 'left',
        gradient: ["red","magenta"],
        lineHeight: 3
    });
    console.log(cb.string); 
})
