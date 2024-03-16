![image](https://github.com/recket337/datalake-test-client/assets/24693696/bab4a77e-5f43-4143-bf00-f25648f6fddf)

```
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { IEntepriseUsersResponse } from "../../../interfaces/users.interface";
import useEnterprise from "../../../hooks/useEnterprise;
import DynamicTable from "../../../components/builders/DynamicTable";
import { columns, ITEMS_PER_PAGE } from "../../../utils/constants";

type Props {
    taxId: number;
}
export default function UserPage({ taxId }: Props) {
    const { t } = useTranslation();
    const { getUsers } = useEnterprise();
    const [users, setUsers] = useState<IEntepriseUsersResponse>({
        data: [],
        total: 0,
    });
    const [isLoading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState(1);
    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number,
    ) => {
        setPage(value);
    };
    return (
        <DynamicTable
            data={users.data}
            columns={columns}
        />
        <Pagination
            count={Math.ceil(users.total / ITEMS_PER_PAGE)}
            page={page}
            onChange={handlePageChange}
        />
    );
}
```
