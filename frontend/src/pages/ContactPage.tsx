export default function ContactPage() {
  return (
    <div className="contact-container">
      <h1>Contact Page</h1>
      <p>
        Contect us at <a href="mailto:sardor0968@gmail.com">Send email to us</a>
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" placeholder="Your name.." />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
        />

        <label htmlFor="subject">Message: </label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write your inquiry here.."
          style={{ height: "200px" }}
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
