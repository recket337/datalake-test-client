export const ITEMS_PER_PAGE = 1;

// change taxId to existing one's taxId in DB with some users to avoid empty table
export const DEFAULT_TAX_ID = '942';

export const columns = [
  { field: 'user_id', headerName: 'ID', width: '20%' },
  { field: 'first_name', headerName: 'First Name', width: '20%' },
  { field: 'last_name', headerName: 'Last Name', width: '20%' },
  {
    field: 'phone_number',
    headerName: 'Phone Number',
    type: 'number',
    width: '20%',
  },
  {
    field: 'name',
    headerName: 'Enterprice',
    width: '20%',
  },
];