export const AboutUs = () => {
  return (
    <>
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
      <div className="border border-color mt-2 p-2">
        <h6>
          This is a demo project built on React.js with integration of third party APIs. 
          The purpose of this app is to learn about hosting an application on AWS using a CI/CD code pipeline.
        </h6>
      </div>
    </>
  );
};

export default AboutUs;
