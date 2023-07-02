import React from "react";
import { Typography, Switch } from "@mui/material";

interface ColumnHeaderProps {
  name: string;
  description: string;
  date: string;
  type: string;
  isPartyOver: boolean;
  onTogglePartyStatus: () => void;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({
  name,
  description,
  date,
  type,
  isPartyOver,
  onTogglePartyStatus,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        {name}
      </Typography>
      <Switch
        checked={isPartyOver}
        onChange={onTogglePartyStatus}
        color="primary"
        inputProps={{ "aria-label": "Toggle party status" }}
      />
    </div>
    <Typography variant="body1">{description}</Typography>
    <Typography variant="subtitle1" style={{ marginBottom: "5px" }}>
      Fecha: {date}
    </Typography>
    <Typography variant="subtitle1" style={{ marginBottom: "5px" }}>
      Tipo: {type}
    </Typography>
    <Typography variant="subtitle1" style={{ marginBottom: "5px" }}>
      Estado: {isPartyOver ? "La fiesta ya pasó" : "La fiesta está por venir"}
    </Typography>
  );
};

export default ColumnHeader;
