import classes from "./ListOfUsers.module.css";
import Card from "../UI/Card";
import IndividualUser from "./IndividualUser";

const ListOfUsers = ({ detailsOfUsersABC }) => {

    return <Card className={classes.list_of_users}>
        <ul>
            {detailsOfUsersABC.map((arr) => {
                return <IndividualUser
                    key={arr.name}
                    nameXYZ={arr.name}
                    ageXYZ={arr.age}
                    collegeXYZ={arr.college}
                />
            })}

            {/* <IndividualUser nameXYZ={nameABC} ageXYZ={ageABC}></IndividualUser> */}

        </ul>
    </Card>


}

export default ListOfUsers;