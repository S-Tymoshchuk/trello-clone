import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import CheckIcon from "@material-ui/icons/Check";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import CancelIcon from "@material-ui/icons/Cancel";
import React from "react";
import {connect} from "react-redux";
import {addBudget, deleteItemAction} from "../reducers/reducer-budget";


const ListTable = (props) => {
    let array = props.budget[0].incomeFlow;
    const currencies = [
        {
            value: "Доход",
            label: "Доход",
        },
        {
            value: "Расход",
            label: "Расход",
        }
    ];
    const [currency, setCurrency] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [amount, setAmount] = React.useState(null);


    const handleChange = event => {
        setCurrency(event.target.value);
    };

    const handleDescription = e => {
        setDescription(e.target.value);

    };
    const handleAmount = e => {
        setAmount(e.target.value);
    };

    const addItems = () => {
        props.dispatch(addBudget(currency, description, amount));

    };
    const deleteItem = (id) => {
        props.dispatch(deleteItemAction(id));
    };


    return (
        <div style={{
            marginTop: "50px"
        }}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <TextField style={{
                                            width: "100px",
                                            marginRight: "10px"
                                        }}
                                                   id="outlined-select-currency"
                                                   select
                                                   label="Доход/Расход"
                                                   value={currency}
                                                   onChange={handleChange}
                                                   variant="outlined"
                                        >
                                            {currencies.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </TableCell>
                                    <TableCell align="right">
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Описание"
                                            defaultValue={description}
                                            onChange={handleDescription}
                                            variant="outlined"
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <TextField
                                            id="outlined-number"
                                            label="Сумма"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={handleAmount}
                                            variant="outlined"
                                            defaultValue={amount}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="primary" onClick={addItems}>
                                            <CheckIcon/>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {array.map(row => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.type}
                                        </TableCell>
                                        <TableCell align="center">{row.description}</TableCell>
                                        <TableCell align="center">{row.amount}</TableCell>
                                        <TableCell align="right">
                                            <CancelIcon style={{cursor: "pointer"}}
                                                        onClick={() => {
                                                            deleteItem(row.id);
                                                        }} color={"secondary"}/>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </ListItem>
            </List>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        budget: state.budget
    };
};

export default connect(mapStateToProps)(ListTable);
