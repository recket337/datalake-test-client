import React, { useState } from 'react';
import axios from 'axios';
import { ITEMS_PER_PAGE } from '../constants';
import { getItemsByPage } from '../utils';

export const useEnterprise = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUsers = async (taxId, page) => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:80/enterprise/users', {
        params: {
          taxId
        },
      });
      const { data } = response;
      const paginatedData = getItemsByPage(data, page, ITEMS_PER_PAGE);
      setLoading(false);
      return { data: paginatedData, total: data.length };
    } catch (error) {
      setError(error);
      setLoading(false);
      throw error;
    }
  };

  return { getUsers, loading, error };
};