export const required = value => (value ? undefined : 'Field is required')
export const maxValue = max => value => (value && value.length > max ? 'Max length is '+ max + ' symbols' : undefined)
export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)





