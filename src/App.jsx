import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import SideBar from "./components/SideBar";
import UserGroupChart from "./components/UserGroupChart";
import PieChart from "./PieChart";

function App() {
  const [currentFrame, setCurrentFrame] = useState("Hourly");
  const updateFrame = (value) => {
    setCurrentFrame(value);
  };
  return (
    <div>
      <SideBar title="Analytics Dashboard">
        <LineChart updateFrame={updateFrame} currentFrame={currentFrame} />
        <div className="user-chart-container mt-20">
          <UserGroupChart />
          <PieChart />
        </div>
        <BarChart />
      </SideBar>
    </div>
  );
}

export default App;
