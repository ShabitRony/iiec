import styles from "./Activities.module.css";
const Activities = () => {
  return (
    <main className="container">
      <div className="content">
        <p>Activity Summary</p>

        <h1>Our Activity Summary Shown Here</h1>
      </div>
      <div className="box_content">
        <div className="box">
          <h1>60+</h1>
          <p>Permanent Staff</p>
        </div>
        <div className="box">
          <h1>10+</h1>
          <p>Funded Project</p>
        </div>
        <div className="box">
          <h1>500+</h1>
          <p>Funded Amount</p>
        </div>
        <div className="box">
          <h1>04</h1>
          <p>Years of Activity</p>
        </div>
      </div>
    </main>
  );
};
export default Activities;
