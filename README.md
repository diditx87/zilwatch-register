# ZilWatch Tools

1. Create Wallet (Private Key)
2. Send 1 Zil to Address
3. Regist Address to Zilwatch

## Installation

Use [nodejs](https://nodejs.org/en/) to Run Code.
Install Npm module
```bash
npm i
```

## Usage

```Nodejs

# Create Wallet
node create.js

# Fund 1 zil to Address after create
node send.js

# Regis wallet into Zilwatch
node regis.js

# Check wallet Success Fund or Not
node cek.js
```

## Alur
1. create address dulu
2. isi 1 zil ke setiap address dengan send.js , jangan regis dulu karena jaringan zil lemot. isi zil sampe semua address ke isi (sudah detek address yang sudah ada zilnya jadi tidak dobel)
3. untuk isi dan regis 10 10 aja dulu, karena jaringan zil lemot
4. regis jika semua address sudah terisi 1 Zil
