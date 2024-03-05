import styles from './Contact.module.css';
function Contact(){
    return(
        <div className={`container ${styles.contact_section}`}>
            <h1>Contact Me!!</h1>
            <p>
            If you have any additional questions or comments, we would love to hear from you! Submit your query using any of the methods below.
            </p>
        </div>
    );
}
export default Contact