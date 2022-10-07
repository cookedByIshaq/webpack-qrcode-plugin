const QRCode = require('qrcode');
const Ip = require('ip');

class WebpackQRCodePlugin {
    constructor(options={}){
        this.options = options
        this.apply = this.apply.bind(this)
    }

    apply(compiler){
        if(compiler.options.devServer){
            compiler.hooks.done.tap(
                'QRCode plugin',
                (stats) => console.log("QRCode")
            )
            const port = compiler.options.devServer.port || ''
            const systemIp = Ip.address()
            const address = `http://${systemIp}${port && `:${port}`}`;
            QRCode.toString(address,{ errorCorrectionLevel: 'M',
            type: 'terminal',scale:1,small:true,color:{dark:"#000"} }, (err, url)=> {
                console.log(url)
              })
        }

    }
}

module.exports = WebpackQRCodePlugin
