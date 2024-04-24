export const AboutUs = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#A3C1AD",
          color: "white",
          fontSize: "50px",
          textAlign: "center",
          padding: "50px",
          fontWeight: "bolder",
        }}
      >
        <p>About App</p>
      </div>
      <div className="border border-dark mt-2 p-2">
        <h6>
          This is a demo project built on React.js. The purpose of this
          app is to learn about hosting an application on AWS using a CI/CD code
          pipeline.
        </h6>
      </div>
    </div>
  );
};

export default AboutUs;
