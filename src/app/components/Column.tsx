import React, { memo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Card, CardContent, Typography, Button, IconButton, Modal, Box, Stack } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import DeleteIcon from "@mui/icons-material/Delete";
import Switch from "@mui/material/Switch";

import GuestList from "./GuestList";
import GuestForm from "./GuestForm";
import SupplyList from "./SupplyList";
import SupplyForm from "./SupplyForm";

interface TaskFormData {
  guests: { name: string; age: number }[];
  supplies: { name: string; price: number; quantity: number }[];
}

interface ColumnProps {
  column: { id: string; name: string; description: string; date: string; type: string };
  deleteColumn: () => void;
}

const Column: React.FC<ColumnProps> = ({ column, deleteColumn }) => {
  const { register, handleSubmit, reset } = useForm<TaskFormData>();
  const [guestFormOpen, setGuestFormOpen] = useState(false);
  const [supplyFormOpen, setSupplyFormOpen] = useState(false);
  const [guests, setGuests] = useState<{ id: string; name: string; age: number }[]>([]);
  const [supplies, setSupplies] = useState<{ id: string; name: string; price: number; quantity: number }[]>([]);
  const [isPartyOver, setIsPartyOver] = useState(false);

  const addGuest = (guest: { name: string; age: number }) => {
    setGuests((prevGuests) => [...prevGuests, { id: uuidv4(), ...guest }]);
  };

  const deleteGuest = (guestId: string) => {
    setGuests((prevGuests) => prevGuests.filter((guest) => guest.id !== guestId));
  };

  const addSupply = (supply: { name: string; price: number; quantity: number }) => {
    setSupplies((prevSupplies) => [...prevSupplies, { id: uuidv4(), ...supply }]);
  };

  const deleteSupply = (supplyId: string) => {
    setSupplies((prevSupplies) => prevSupplies.filter((supply) => supply.id !== supplyId));
  };

  const onSubmit: SubmitHandler<TaskFormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              {column.name}
            </Typography>
            <Switch checked={isPartyOver} onChange={() => setIsPartyOver(!isPartyOver)} color="primary" inputProps={{ "aria-label": "Toggle party status" }} />
          </div>

          <Typography variant="body1">{column.description}</Typography>
        </CardContent>

        <Stack direction="column" spacing={2} sx={{ px: 2 }}>
          <div>
            <Typography variant="subtitle1" style={{ marginBottom: "5px" }}>
              Fecha: {column.date}
            </Typography>
            <Typography variant="subtitle1" style={{ marginBottom: "5px" }}>
              Tipo: {column.type}
            </Typography>
            <Typography variant="subtitle1" style={{ marginBottom: "5px" }}>
              Estado: {isPartyOver ? "La fiesta ya pasó" : "La fiesta está por venir"}
            </Typography>

            <Typography variant="subtitle1">Lista de invitados:</Typography>
            <GuestList guests={guests} deleteGuest={deleteGuest} />

            <Button variant="contained" size="small" onClick={() => setGuestFormOpen(true)}>
              Añadir invitado
            </Button>
          </div>
        </Stack>

        <Stack direction="column" spacing={2} sx={{ px: 2 }}>
          <div>
            <Typography variant="subtitle1">Insumos necesarios:</Typography>
            <SupplyList supplies={supplies} deleteSupply={deleteSupply} />
          </div>
          <Button variant="contained" size="small" onClick={() => setSupplyFormOpen(true)}>
            Añadir insumo
          </Button>
        </Stack>
      </Card>

      <GuestForm open={guestFormOpen} onClose={() => setGuestFormOpen(false)} addGuest={addGuest} />
      <SupplyForm open={supplyFormOpen} onClose={() => setSupplyFormOpen(false)} addSupply={addSupply} />
    </div>
  );
};

export default memo(Column);
