function displayValue(value) {
    let output = ""
    output += value
    return output
}

export function displayObject(object, regexArray) {
    if (object == null) return displayValue('null');
    if (getTypeName(object) === 'Array' && !regexArray) {
        let appendedArrayValues = object.reduce((acc, cur) => acc+=cur+',', '')
        if (appendedArrayValues.length > 0)
            appendedArrayValues = appendedArrayValues.substr(0, appendedArrayValues.length - 1)
        displayValue('[' + appendedArrayValues  + ']')
        if (Object.keys(object).length > object.length) {
            displayValue('&nbsp;')
            displayValue('Additional array properties:')
        }
        for (let propertyName in object)
        {
            if (!Number.isInteger(+propertyName) && object[propertyName] !== undefined)
                displayValue('&nbsp;&nbsp;' + propertyName + ": " + object[propertyName])
            else if (typeof object[propertyName] === 'object', false) {
                return displayObject()
            }
        }
        return
    }

    displayValue(getTypeName(object) + ' {');
    for (var propertyName in object) {
        if (typeof object[propertyName] === 'object', false)
            displayObject(object[propertyName])
        else if (propertyName !== 'constructor' && (!regexArray || object[propertyName] !== undefined)) {
            let prefix = Number.isInteger(+propertyName) && regexArray ? '[' : ''
            let suffix = Number.isInteger(+propertyName) && regexArray ? ']' : ''
            displayValue(prefix + propertyName + suffix + ': ' + object[propertyName], false, true);
        }
    }
    displayValue('}', true);
}

function getTypeName(object) {
    return object.constructor.name;
}
