import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { useEnterprise } from "../../hooks/useEnterprise";
import { DynamicTable } from "../../components/DynamicTable";
import { columns, ITEMS_PER_PAGE } from "../../constants";
import styles from "./UserPage.module.css";

export const UserPage = ({ taxId }) => {
  // const { t } = useTranslation();

  const { getUsers, isLoadingUsers, error } = useEnterprise();

  const [users, setUsers] = useState({
    data: [],
    total: 0,
  });

  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await getUsers(taxId, page);
      if (response) {
        setUsers(response);
      }
    })();
  }, [taxId, page]);

  const handlePageChange = (
    event,
    value
  ) => {
    setPage(value);
  };

  if (isLoadingUsers) return <>LOADING</>
  if (error) return <>Error: {error.message}</>;

  return (
    <div className={styles.pageContainer}>
      <DynamicTable
        rows={users.data}
        columns={columns}
      />
      <Pagination
        count={Math.ceil(users?.total / ITEMS_PER_PAGE)}
        page={page}
        onChange={handlePageChange}
        className={styles.paginator}
      />
    </div>
  );
}
