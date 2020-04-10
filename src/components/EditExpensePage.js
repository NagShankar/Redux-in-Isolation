import React from "react";

const EditExpensePage = (props) => {
    console.log(props);
return (
 <div>
    Editing Expense from {props.match.params.id}
    </div>
);
}
export default EditExpensePage;