/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let counterHash = {};

    for(let i = 0; i < cpdomains.length; i++){
        let countSplit = cpdomains[i].split(" ");
        let subDomains = calculateSubDomains(countSplit[1]);
        for(let j = 0; j < subDomains.length; j++){
            if (counterHash[subDomains[j]]){
                counterHash[subDomains[j]] += parseInt(countSplit[0]);
            }
            else{
                counterHash[subDomains[j]] = parseInt(countSplit[0]);
            }
        }
    }
    return hashToArray(counterHash);
};

var calculateSubDomains = function(domain){
    let subDomains = [];
    let domainSplit = domain.split(".");
    let domainBuilder = "";
    for (let i = domainSplit.length - 1; i >= 0; i--){
        domainBuilder = domainSplit[i] + domainBuilder;
        subDomains.push(domainBuilder);
        domainBuilder = "." + domainBuilder;
    }
    return subDomains;
};

var hashToArray = function(hash){
    let hashKeys = Object.keys(hash);
    let returnArray = [];
    for (let i = 0; i < hashKeys.length; i++){
        returnArray.push(hash[hashKeys[i]] + " " + hashKeys[i]);
    }
    return returnArray;
};

let test1 = ["9001 discuss.leetcode.com"];
console.log(subdomainVisits(test1));
