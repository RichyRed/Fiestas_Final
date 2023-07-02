import React from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Supply {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface SupplyListProps {
  supplies: Supply[];
  deleteSupply: (supplyId: string) => void;
}

const SupplyList: React.FC<SupplyListProps> = ({ supplies, deleteSupply }) => {
  return (
    <List>
      {supplies.map((supply) => (
        <ListItem key={supply.id}>
          <ListItemText primary={supply.name} secondary={`Precio: ${supply.price}, Cantidad: ${supply.quantity}`} />
          <IconButton aria-label="delete" onClick={() => deleteSupply(supply.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SupplyList;
