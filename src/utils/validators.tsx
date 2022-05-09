

export const requiredField = (value: string) =>{
    if(value) return undefined
    return 'Обязательное поле!'
}

export const maxLengthCreator = (maxLength: number) => (values: string) => {
    if(values.length > maxLength) return console.log(`max length ${maxLength}`)
    return undefined
}

export const minLengthCreator = (minLength: number) => (values: string) =>{
    if(values.length < minLength) return `min length ${minLength}`
    return undefined
}
