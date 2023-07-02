import React from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Guest {
  id: string;
  name: string;
  age: number;
}

interface GuestListProps {
  guests: Guest[];
  deleteGuest: (guestId: string) => void;
}

const GuestList: React.FC<GuestListProps> = ({ guests, deleteGuest }) => {
  return (
    <List>
      {guests.map((guest) => (
        <ListItem key={guest.id} secondaryAction={<IconButton onClick={() => deleteGuest(guest.id)}><DeleteIcon /></IconButton>}>
          <ListItemText primary={guest.name} secondary={`Edad: ${guest.age}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default GuestList;
