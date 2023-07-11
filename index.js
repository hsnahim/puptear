const puppeteer = require('puppeteer');
const fs = require('fs/promises');

const url = "https://www.pucminas.br/Pos-Graduacao/IEC/Cursos/Paginas/Internet-das-Coisas.aspx?pageID=3954&moda=5&modaTipo=2&polo=40&curso=340&situ=1";

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    const dados = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('div.iec-descricao-info-especifica')).map(x => x.textContent)
    });

   // await fs.writeFile("dados.txt", dados.join("\r\n\n"));
    console.log(dados);

    await browser.close();
}

start();
