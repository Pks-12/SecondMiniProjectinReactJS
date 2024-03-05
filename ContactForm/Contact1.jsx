import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
function Contact1() {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA   SUPPORT CHAT"
            icons={<MdMessage fontSize="25px" />}
          />
          <Button
            text="VIA call Support"
            icons={<IoMdCall fontSize="25px" />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA call Support"
          icons={<MdEmail fontSize="25px" />}
        />

        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"/>
          </div>

          <div style={{display:"flex",
          justifyContent:"end",}}>
              <Button text="Submit"/>
          </div>
            <div className={styles.contact_image}>
                <img src="/images/contact.png" alt="Contact Image" />
            </div>
        </form>
      </div>
    </section>
  );
}
export default Contact1;
