module.exports = function check(str, bracketsConfig) {
    
        var strMain = str.split(''), stack = [], closeIndex, openIndex;

            
        var sm = bracketsConfig;

        var strBr = String(sm);

        var arr = strBr.split(',');

        var open = [];

        var close=[];


    

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

            stack.push(openIndex);
            continue;
        }

        closeIndex = close.indexOf(strMain[i]);
        if (closeIndex !== -1) {

            openIndex = stack.pop();
            if (closeIndex !== openIndex) {
                return false;
            }
        }
    }


    if (stack.length !== 0) {
        return false;
    } else{
        return true;
    }

    
};
