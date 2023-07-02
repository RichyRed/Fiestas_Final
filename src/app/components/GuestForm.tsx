import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Modal, Box, Card, CardContent, Typography, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

interface GuestFormProps {
  open: boolean;
  onClose: () => void;
  addGuest: (guest: { name: string; age: number }) => void;
}

const GuestForm: React.FC<GuestFormProps> = ({ open, onClose, addGuest }) => {
  const { register, handleSubmit, reset } = useForm<{ name: string; age: number }>();

  const onSubmit: SubmitHandler<{ name: string; age: number }> = (data) => {
    addGuest(data);
    reset();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Card>
          <CardContent>
            <Typography variant="h6">Añadir Invitado</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField {...register("name")} label="Nombre" fullWidth />
              <TextField {...register("age")} type="number" label="Edad" fullWidth />
              <Button type="submit" variant="contained" size="small" sx={{ mt: 2 }}>
                Agregar Invitado
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default GuestForm;
