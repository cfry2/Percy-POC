import { useState } from "react";
import ContactForm from "../components/ContactForm";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <ContactForm />
    </Container>
  );
}
