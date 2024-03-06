import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
function Contact1() {
  const [name,setName]=useState("");
  const [email, setEmail]=useState("");
  const [text, setText] = useState("");


  const onSubmit = (event) =>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log("name",event.target[0].value);
    console.log("email",event.target[1].value);
    console.log("text",event.target[2].value)
  }

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

        <form onSubmit={onSubmit}>
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

            <div>
              {
                name + " "+ email + " " + text
              }
            </div>
        </form>
      </div>
    </section>
  );
}
export default Contact1;
