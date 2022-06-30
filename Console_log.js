/**
 * [ README ]
 * cfonts 모듈을 이용하였습니다. npm install cfonts 
 * https://www.npmjs.com/package/cfonts
 * © 2022. 라이트#3287 ALL RIGHTS RESERVED
 */


client.on('ready', async () => {
    const cfonts = require('cfonts');
    const cb = cfonts.render((`READY`), {
        font: 'block',
        color: 'candy',
        align: 'left',
        gradient: ["red","magenta"],
        lineHeight: 3
    });
    console.log(cb.string); 
})
