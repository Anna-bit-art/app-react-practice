import s from "./formsControl.module.css"

export const Textarea = ({meta, input, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : ' ')}>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
            <div>
                <textarea  {...input} {...props}/>
            </div>
        </div>
    )
}
export const Input = ({meta, input, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : ' ')}>
            <div><input  {...input} {...props}/></div>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    )
}
