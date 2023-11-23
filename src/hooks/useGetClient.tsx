import { Client } from "@/types/Client";
import React, { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL + "/api/clients/"

export const getUser = async (id:string) => {
  try {
    const response = await fetch(`${apiUrl + id}/`);

    if (!response.ok) {
      throw new Error(`Error al realizar la solicitud: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
        // throw error;
    return undefined;

  }
};

export const useGetClient = (id:string) => {
  const [user, setUser] = useState<Client>();

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await getUser(id);
        setUser(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setUser(undefined);
      }
    };

    fetchDataAsync();
  }, [id]);

  return user;
};
