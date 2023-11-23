import { ClientRentals } from "@/types/ClientRentals";
import React, { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL + "/api/client_rentals/";

export const getClientRentals = async (id: string) => {
  try {
    const response = await fetch(`${apiUrl + id}/`);

    if (!response.ok) {
      throw new Error(`Error al realizar la solicitud: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const useGetClientRentals = (id: string) => {
  const [clientRentals, setClientsRentals] = useState<ClientRentals[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await getClientRentals(id);
        setClientsRentals(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, [id]);

  return clientRentals;
};
