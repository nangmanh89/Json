var path = require('path'),
    fs = require('fs');

// Object Input
let objectData = {
    name: 'Manh',
    Age: 18,
    address: 'Hoai Duc Province'
}

function Handlefile() {
    let fileName1
    let fileName2
    let path2 = __dirname
    let returnCode = {
        saveSuccessfully: 1,
        saveErr: 2,
        fileNotExisted: 3,
        readSuccessfully: 4
    }

    this.setName1 = (name) => {
        fileName1 = name
    }

    this.setName2= (name) => {
        fileName2 = name
    }

    this.readFile= () => {
        try{
            let data = fs.readFileSync(path2 + `\\${fileName1}`,{encoding:'utf8'})
            data = JSON.parse
            return {
                code: returnCode.readSuccessfully,
                data: data,
                message: null
            }
        }catch(err){
            return {
                code: returnCode.fileNotExisted,
                data: null,
                message: err
            };
        }
    }

    this.saveFile= (objecInput) => {
        let objStr = JSON.stringify(objecInput)
        try{
            fs.writeFileSync(path2 + `\\${fileName2}`, objStr)
            return {
                code: returnCode.saveSuccessfully,
                data: null,
                message: null
            };
        }catch(err){
            return {
                code: returnCode.saveErr,
                data: null,
                message: err
            };
        }
    }
}



let handle = new Handlefile()
handle.setName1('BaitapJson.json')
// handle.setName2('BaitapJson.json')
// handle.saveFile(objectData)
let checkReadfile = handle.readFile()
// let checkWriteFile = handle.saveFile(objectData)
// console.log (checkWriteFile)
console.log(checkReadfile)
