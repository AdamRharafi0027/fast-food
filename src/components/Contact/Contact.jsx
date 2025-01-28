import "./Contact.css";
import HeaderText from "../HeaderText/HeaderText";
const Contact = ({id}) => {
  return (
    <>
      <section id={id} className="contact">
        <HeaderText className='headline'>get in touch</HeaderText>
        <form className="d-flex justify-content-start  flex-column">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button className="p-2">Send</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
