const fs = require('fs');
const readlineSync = require('readline-sync');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const {
    toBech32Address,
    getAddressFromPrivateKey,
} = require('@zilliqa-js/crypto');

const zilliqa = new Zilliqa('https://seed-zil.shardpool.io/');


; (async () => {
const listWallet = await fs.readFileSync('address.txt', 'utf8');
    const listWalletArray = listWallet.toString()
        .replace(/\r\n|\r|\n/g, " ")
        .split(" ");
		
 for (let i = 0; i < 515; i++) {
        const address = listWalletArray[i];
		let balanceState = await zilliqa.blockchain.getBalance(address);
		if(balanceState.result==undefined){
		
		console.log(`|${i}.| {${address} : gak ada saldo`);
		}else{
			if(balanceState.result.balance>900000000000){
				console.log(`|${i}.| {${address} : ${balanceState.result.balance}`)
			}else{
				console.log(`|${i}.| {${address} : saldo kurang`);
			}
		}
		
 }
 })();
