// import { red } from "_ansi-colors@3.2.4@ansi-colors";
let res = 0;
function count(m){
    for(var i =0; i <= m; i++){
        res += i;
    }
    return res;
}
let result = count(5);
document.write(result);