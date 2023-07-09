import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h1 className="common_heading">Contact Page</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15073.037988062873!2d72.8602717278347!3d19.183865042416315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b5ce2b93d7db%3A0x879a5e5cfe9bb7a8!2sMalad%2C%20Malad%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1667134157404!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

<div className="container">
  <div className="contact-form">
     <form action="https://formspree.io/f/mzbwjwvr" method="POST" className="contact-inputs">
      <input type='Text' placeholder="USERNAME" name="username" required autoComplete="off" />
      <input type='email' placeholder="EMAIL" name="email" required autoComplete="off" />
      <textarea name="MESSAGE" cols="30" rows='10' required autoComplete="off" placeholder="Enter your message"></textarea>
      <input type='Submit' value='SEND'/>
     </form>
  </div>
</div>

    </Wrapper>
  );
};

export default Contact;
