const fs = require('fs');
const readlineSync = require('readline-sync');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const {
    toBech32Address,
    getAddressFromPrivateKey,
} = require('@zilliqa-js/crypto');

const zilliqa = new Zilliqa('https://api.zilliqa.com/');
const CHAIN_ID = 1;
const MSG_VERSION = 1;
const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);
const privkey = ''; //isi sama privatekeymu
zilliqa.wallet.addByPrivateKey(
        privkey
    );

async function send(address) {
	//console.log("Sending a payment transaction to the network...");
    const tx = await zilliqa.blockchain.createTransaction(
      zilliqa.transactions.new({
        version: VERSION,
        toAddr: `${address}`,
        amount: new BN(units.toQa("1", units.Units.Zil)), // Sending an amount in Zil (1) and converting the amount to Qa
        gasPrice: units.toQa('2000', units.Units.Li),
        gasLimit: Long.fromNumber(50)
      })
    );
	if(tx.receipt.success==true){
	console.log(`zil berhasil dikirim`)	
	}else{
		console.log(`zil gagal dikirim`)
	}
	
}

; (async () => {
const listWallet = await fs.readFileSync('address.txt', 'utf8');
    const listWalletArray = listWallet.toString()
        .replace(/\r\n|\r|\n/g, " ")
        .split(" ");
		
 for (let i = 0; i < listWalletArray.length; i++) {
        const address = listWalletArray[i];
		let balanceState = await zilliqa.blockchain.getBalance(address);
		if(balanceState.result==undefined){
		send(address);
		}else{
			if(balanceState.result.balance<900000000000){
				send(address);
			}else{
				console.log(`sudah ada zil`)
			}
		}
		
 }
 })();
