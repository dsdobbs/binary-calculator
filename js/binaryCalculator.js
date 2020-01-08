var res;

function binCalc(binExp) {
    let numMatch = /\d+/;
    binExp = binExp.split(" ");
    for(let i = 0; i < binExp.length; i++) {
        let binExpTest = numMatch.test(binExp[i]);
        if(binExpTest) {
            binExp[i] = parseInt(binExp[i], 2).toString(10);
        }
    }

    let decExp = binExp.join(" ");
    let expCalc = eval(decExp).toString();
    if(expCalc.includes("-")) {
        alert("This calculator cannot calculate negative operands");
        binExp = "error";
        return binExp;
    }
    expCalc = parseInt(expCalc);
    expCalc = (expCalc >>> 0).toString(2);
    binExp = expCalc;
    return binExp;
}


function btn0 () {
    if(res == null) {
        res = "0";
        document.getElementById("res").innerHTML = res;
    }
    else {
        res = res + "" + 0;
        document.getElementById("res").innerHTML = res;
    }
}

function btn1 () {
    if(res == null) {
        res = "1";
        document.getElementById("res").innerHTML = res;
    }
    else {
        res = res + "" + 1;
        document.getElementById("res").innerHTML = res;
    }
}

function btnClr() {
    res = null;
    document.getElementById("res").innerHTML = res;
}

function btnEql() {
    var signMatch = /[\+\-\*\/]/;
    var signTest = signMatch.test(res);
    if(signTest) {
        var sumMatch = /\+/; 
        var subMatch = /\-/;
        var mulMatch = /\*/; 
        var divMatch = /\//;
        var sumTest = sumMatch.test(res);
        var subTest = subMatch.test(res);
        var mulTest = mulMatch.test(res);
        var divTest = divMatch.test(res);
        
        if(mulTest) {
            let mulExp = /\d+\s\*\s\d+/;
            
            while(mulExp.test(res)) {
                let match = mulExp.exec(res);
                match = match.toString();
                res = res.replace(match, binCalc(match));
            }
        }

        if(divTest) {
            let divExp = /\d+\s\/\s\d+/;
            
            while(divExp.test(res)) {
                let match = divExp.exec(res);
                match = match.toString();
                res = res.replace(match, binCalc(match));
            }
        }

        if(sumTest) {
            let sumExp = /\d+\s\+\s\d+/;
            
            while(sumExp.test(res)) {
                let match = sumExp.exec(res);
                match = match.toString();
                res = res.replace(match, binCalc(match));
            }
        }

        if(subTest) {
            let subExp = /\d+\s\-\s\d+/;
            
            while(subExp.test(res)) {
                let match = subExp.exec(res);
                match = match.toString();
                res = res.replace(match, binCalc(match));
                if(res.includes("error")){
                    res = "";
                }
            }
        }

        document.getElementById("res").innerHTML = res;
    }
}

function btnSum() {
    if(res == null) {
        return;
    }
    else {
        res = res + " + ";
        document.getElementById("res").innerHTML = res;
    }
}

function btnSub() {
    if(res == null) {
        return;
    }
    else {
        res = res + " - ";
        document.getElementById("res").innerHTML = res;
    }
}

function btnMul() {
    if(res == null) {
        return;
    }
    else {
        res = res + " * ";
        document.getElementById("res").innerHTML = res;
    }
}

function btnDiv() {
    if(res == null) {
        return;
    }
    else {
        res = res + " / ";
        document.getElementById("res").innerHTML = res;
    }
}

document.getElementById("btn0").addEventListener("click", btn0);
document.getElementById("btn1").addEventListener("click", btn1);
document.getElementById("btnEql").addEventListener("click", btnEql);
document.getElementById("btnClr").addEventListener("click", btnClr);
document.getElementById("btnSum").addEventListener("click", btnSum);
document.getElementById("btnSub").addEventListener("click", btnSub);
document.getElementById("btnMul").addEventListener("click", btnMul);
document.getElementById("btnDiv").addEventListener("click", btnDiv);