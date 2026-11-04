const SHA256 = require('crypto-js/sha256');

class Block{

    constructor(index,timestamp,data,previousHash=''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash;
}
calculateHash(){

return SHA256(this.index + this.timestamp + this.timestamp + JSON.stringify(this.data)).toString();

}
}

class BlockChain{
    constructor(){
this.chain = [this.createPaulBlock()];
    }
createPaulBlock(){
    return new Block(0,"30/10/2026","Paul block","0");
}

    getLatestBlock(){
     return this.chain[this.chain.length-1]
    }


 addBlock(newBlock){

      newBlock.previousHash = this.getLatestBlock().hash;
      newBlock.hash = newBlock.calculateHash();
      this.chain.push(newBlock);

    }
}

let paulCoin = new BlockChain();
paulCoin.addBlock(new Block(1,"10/30/2026",{amount : 4}));
paulCoin.addBlock(new Block(1,"11/1/2026",{amount : 4}));

console.log(JSON.stringify(paulCoin,null,4));