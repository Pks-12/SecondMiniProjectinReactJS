import styles from "./Button.module.css";
function Button(props,...rest){
    return(
        <button {...rest}className={props.isOutline ? styles.outline_btn: styles.primary_btn}>
           {props.icons}
           {props.text}
        </button>
    );
}

export default Button
