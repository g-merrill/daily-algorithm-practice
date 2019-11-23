class HashMap {
  constructor(size) {
    this.length = null;
    this.array = new Array(size);
    this.size = size;
  }

  hashFunction(num) { Math.floor(num % this.size);}

  add(key, value) {
    if (typeof key !== 'number') return 'key needs to be int';
    let indexNum = this.hashFunction(key);
    this.array[key] = value;
  }
}
 
let hash = new HashMap(15);
hash.add(6, 14);
console.log(hash)
