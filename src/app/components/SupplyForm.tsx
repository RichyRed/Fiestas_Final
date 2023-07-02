import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Modal, Box, Card, CardContent, Typography, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

interface SupplyFormProps {
  open: boolean;
  onClose: () => void;
  addSupply: (supply: { name: string; price: number; quantity: number }) => void;
}

const SupplyForm: React.FC<SupplyFormProps> = ({ open, onClose, addSupply }) => {
  const { register, handleSubmit, reset } = useForm<{ name: string; price: number; quantity: number }>();

  const onSubmit: SubmitHandler<{ name: string; price: number; quantity: number }> = (data) => {
    addSupply(data);
    reset();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Card>
          <CardContent>
            <Typography variant="h6">Añadir Insumo</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField {...register("name")} label="Nombre" fullWidth />
              <TextField {...register("price")} type="number" label="Precio" fullWidth />
              <TextField {...register("quantity")} type="number" label="Cantidad" fullWidth />
              <Button type="submit" variant="contained" size="large" sx={{ mt: 2 }}>
                Agregar Insumo
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default SupplyForm;
