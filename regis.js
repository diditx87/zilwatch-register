const fs = require('fs');
const readlineSync = require('readline-sync');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const {
    toBech32Address,
    getAddressFromPrivateKey,
} = require('@zilliqa-js/crypto');

async function regis(privkey) {
const zilliqa = new Zilliqa('https://ssn.zillet.io/');
    const CHAIN_ID = 1;
    const MSG_VERSION = 1;
    const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);
    zilliqa.wallet.addByPrivateKey(
        privkey
    );
	
	 const ftAddr = "fbb37de2dc0000210077ffe8ec0007b7acdeed13";
     const contract = zilliqa.contracts.at(ftAddr);
	  try {
     const callTx = await contract.call(
            'RegisterWallet',
            [],
			{
			version: VERSION,
              amount: new BN(0),
              gasPrice: units.toQa('2000', units.Units.Li),
              gasLimit: Long.fromNumber(500)
            }
          );  
	const txs = JSON.stringify(callTx.receipt, null, 4);
	if(txs.receipt.msg._tag=="RegisterSuccessCallback"){
		console.log(`berhasil regis zilwatch`)	
	}else{
		console.log(`gagal regis zilwatch`)
	}
} catch (err) {
        console.log(err);
    }
}

; (async () => {
const listPk = await fs.readFileSync('privatekey.txt', 'utf8');
    const listPkArray = listPk.toString()
        .replace(/\r\n|\r|\n/g, " ")
        .split(" ");
		
 for (let i = 0; i < listPkArray.length; i++) {
        const privkey = listPkArray[i];
		regis(privkey)
 }
 })();
