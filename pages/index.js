const HomePage = () => {
  return (
    <>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5"></textarea>
        </div>
        <div>
          <button>Send Feedback</button>
        </div>
      </form>
    </>
  );
};

export default HomePage;
