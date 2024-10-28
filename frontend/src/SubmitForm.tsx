import React, { useState } from "react";
import { csrfFetch, csrfFetchWithoutToken } from "./api/csrfService";

const SubmitForm: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await csrfFetch("/submit", {
        //   const response = await csrfFetchWithoutToken("/submit", {
        method: "POST",
        data: { data: "dados de exemplo" },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Erro ao enviar a requisição.");
      console.error("Erro:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Enviar</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SubmitForm;
