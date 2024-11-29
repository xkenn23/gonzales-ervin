import React from "react";
import { useParams } from "react-router-dom";
import TEAMDATA from "../team-data/data";

const TeamDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  const teamMember = TEAMDATA.find((team) => team.id === parseInt(id)); // Find the team member by ID

  if (!teamMember) {
    return <div>Player not found</div>; // Handle the case if the player is not found
  }

  return (
    <div className="container mt-5">
      <h2>{teamMember.name}</h2>
      <p>
        <strong>Role:</strong> {teamMember.role}
      </p>
      <p>
        <strong>Email:</strong> {teamMember.email}
      </p>
    </div>
  );
};

export default TeamDetails;
