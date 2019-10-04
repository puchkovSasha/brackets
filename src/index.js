module.exports = function check(str, bracketsConfig) {
    
        let strMain = str.split(''), box = [], closeIndex, openIndex;

            
   

        let strBr = String(bracketsConfig);

        let arr = strBr.split(',');

        let open = [];

        let close=[];


    

        for (let i = 0; i < arr.length; i++) {
            if ((arr[i] === '{')|| (arr[i] === '[') || (arr[i] === '(')     ) {
                open.push(arr[i]);
                continue;
            } 
            
            
        }

        for (let i = 0; i < arr.length; i++) {
                if ((arr[i] === '}')|| (arr[i] === ']') || (arr[i] === ')')   ){
                    close.push(arr[i]);
                    continue;
                }
        }



    for (var i = 0; i <  strMain.length; i++) {
        openIndex = open.indexOf(strMain[i]);
        if (openIndex !== -1) {

            box.push(openIndex);
            continue;
        }

        closeIndex = close.indexOf(strMain[i]);
        if (closeIndex !== -1) {

            openIndex = box.pop();
            if (closeIndex !== openIndex) {
                return false;
            }
        }
    }


    if (box.length !== 0) {
        return false;
    } else{
        return true;
    }

    
};
