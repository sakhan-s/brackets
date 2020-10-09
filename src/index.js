module.exports = function check(str, bracketsConfig) {
    let firstStr = str;
    const isMatches = (bracketPair) => {
        return firstStr.includes(bracketPair.join(""));
    };
    while (bracketsConfig.some(isMatches)) {
        bracketsConfig.forEach((configPair) => {
            const secStr = configPair.join("");
            while (firstStr.includes(secStr)) {
                firstStr = firstStr.replace(secStr, "");
            }
        });
    }
    return firstStr.length === 0;
};
