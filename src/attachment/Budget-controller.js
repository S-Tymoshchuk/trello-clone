import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ListTable from "../materialUI/ListTable";
import {connect} from "react-redux";

const Budget = (props) => {

    let income = props.total[0].totalIncome;
    let expenses = props.total[0].totalExpenses;
    return (
        <div>
            <div style={{
                textAlign: "center"
            }}>
                Добро пожаловать!
            </div>

            <div>
                <Button variant="contained" color="primary">
                    Ввод доходов и расходов
                </Button>
                <Button variant="contained" color="primary">
                    Отчет по доходам и расходам
                </Button>
            </div>
            <div>Финансовое состояние на:</div>
            <input type="text" value={"21.12.2019"}/>
            <div>
                <Card style={{backgroundColor: "#3F4E65", width: "300px", color: "#ffffff"}}>
                    <CardContent>
                        <Typography variant="body2" color="default" component="div">
                            Баланс {income - expenses} грн
                        </Typography>
                        <Typography variant="body2" color="default" component="div">
                            Свои счета 131 389грн
                        </Typography>
                    </CardContent>
                </Card>
                <ListTable/>
            </div>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        total: state.budget
    };
};

export default connect(mapStateToProps)(Budget);
