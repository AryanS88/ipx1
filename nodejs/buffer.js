const buffer1 = Buffer.alloc(5);
buffer1.fill(55);

const array = [65, 66, 67, 68, 69];
const buffer2 = Buffer.from(array);

console.log("Is buffer1 a Buffer?", Buffer.isBuffer(buffer1));

const strBuffer = buffer2.toString();

console.log("buffer1:", buffer1);
console.log("buffer2:", buffer2);
console.log("strBuffer:", strBuffer);




// const buf1 = Buffer.alloc(15)

// const names=["ayesha","eve","adam","mamta","anas"]
// let offset = 0
// names.forEach((name) =>{
// const byteslen = buf1.write(name, 0, "utf-8")
// console.log(`length : ${byteslen}, name:${name}, offset:${offset} `)
// offset+=byteslen
// })


// const buf2 = Buffer.alloc(20)
// const bufferWritten = buf2.write("this is ayesha nagdawala", 0, "utf-8")
// console.log(`buffer written : ${bufferWritten}`)
// const bufferContent = buf2.toString("utf-8", 0, bufferWritten)
// console.log(bufferContent)
