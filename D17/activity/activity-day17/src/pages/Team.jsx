import React from "react";
import { Link, Outlet } from "react-router-dom";
import TEAMDATA from "../team-data/data";

const Team = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Team</h2>

      {/* List of team members */}
      <div className="list-group">
        {TEAMDATA.map((team) => (
          <Link
            key={team.id}
            to={`/team/${team.id}`} // Dynamic routing based on player id
            className="list-group-item list-group-item-action"
          >
            {team.name}
          </Link>
        ))}
      </div>

      {/* This is where the nested TeamDetails will render */}
      <Outlet />
    </div>
  );
};

export default Team;
