// Object Input
objectData = {
    name: 'Manh',
    Age: 18,
    address: 'Hoai Duc Province'
}
let jsonContent = JSON.stringify(objectData)

var path = require('path'),
    fs = require('fs');


let getfile = () => {
    let fileName1
    let fileName2
    let path2 = __dirname
    const fs = require('fs');

    let editFile = {
        getname: () => {
            return fileName1
        },
        // name for read file
        setName1: (name1) => {
            fileName1 = name1
        },
        // name for write file
        setName2: (name2) => {
            fileName2 = name2
        },

        readFile: () => {
            fs.readFile(path2 + `\\${fileName1}`, 'utf8', function (err, data) {
                if (err) {
                    console.log('fileName ERR, reenter');
                } else { console.log(data) }
            })
        },
        saveFile: () => {
            fs.writeFile(path2 + `\\${fileName2}`, jsonContent, 'utf8', function (err) {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                }
                console.log("JSON file has been saved.");
            });
        }
    }
    return editFile
};

let a = getfile()
a.setName1('output.json')
a.readFile()
a.setName2('BaitapJson.json')
a.saveFile()

