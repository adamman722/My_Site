import React from "react";
import DashboardNavBar from "../components/NavBar";
import ToDoList from "../components/ToDoList";
import BuildGrid from "../components/GirdThings";
import Pokemon from "../components/Pokemon";
function ProjectPage() {
  const myName = "Adam";
  return (
    <div>
      {DashboardNavBar(
        <div id="StartOfGirds">
          <BuildGrid addedContent={<ToDoList />} />
          <BuildGrid addedContent={<Pokemon />} />
          <BuildGrid addedContent={"More stuff coming soooooonnnn"} />
        </div>
      )}
    </div>
  );
}
export default ProjectPage;
