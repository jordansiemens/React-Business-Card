const Header = () => {
  return (
    <div className="about-section">
      <h1>Jordan Siemens</h1>
      <p>COMPUTER SCIENCE STUDENT</p>
      <div className="about-buttons">
        <button
          onClick={() => (window.location = "mailto:jordnsiemens@gmail.com")}
        >
          ✉ Email
        </button>
        <form action="https://www.linkedin.com/in/jordan-siemens-7b9393208/">
          <button type="submit" id="blue-button">
            LinkedIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
