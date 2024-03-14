import { Checkbox, Menu, MenuItem, Paper, Select, TableCell, TableHead, TableRow, TableSortLabel, TextField, tableCellClasses } from "@mui/material";
import styled from '@emotion/styled';

export const CustomTextField =() => {
    return (
        styled(TextField, { shouldForwardProp: (prop:any) => prop !== 'error' })(
            ({error}: { error: any }) => ({
            color: "#E3E5E8",
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: error ? '#EF4444' : '#E3E5E8', 
            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: error ? '#EF4444 !important' : '#E3E5E8 !important',
                borderWidth: "1px",
            },
        }))
    );
}
export const handleonKeyDownForEmailId = (e: any) => {
    const notAllowedKeysRegex = /^[A-Z!#$%^&*()_+{}\[\]:;<>,?~\/\\-]+$/;
    if (notAllowedKeysRegex.test(e.key)) {
      e.preventDefault();
    }
  }
export const emailRegexPattern = /^(("[\w-\s]+")|([a-zA-Z]+[\w-]*(?:\.[\w-]+)*)|("[\w-\s]+")([a-zA-Z]+[\w-]*(?:\.[\w-]+)*))(@((?:[a-zA-Z-]+\.)*[a-zA-Z][a-zA-Z-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
export const passwordRegexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>.]{0,}$/;
export const InputPropsForAddAffiliates = {
    borderRadius: 0,
    fontFamily: "Glegoo",
    fontSize: "var(--body-b2-14-semibold-left-size)",
  }