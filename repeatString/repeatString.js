const repeatString = function(line,num) {
let newLine = ""
for (let i = 0;i < num;i++){
      newLine += line  
    }
return newLine
};

module.exports = repeatString;
