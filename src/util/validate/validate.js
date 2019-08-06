export let validate = (rules,value) => {
    let isValid = true;
    if(!rules){
        return true;
    }
    if(value === null || value === undefined){
        return false
    }
    if(rules.required){
        isValid = value.trim() !== '' && isValid;
    }
    if(rules.minLenght){
        isValid = value.length >= rules.minLenght && isValid;
    }
    if(rules.maxLenght){
        isValid = value.length <= rules.maxLenght && isValid;
    }
    return isValid;
};

