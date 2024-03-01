import IndividualUser from "./IndividualUser";

const ListOfUsers = ({ detailsOfUsersABC, nameABC, ageABC }) => {

    return <div>
        {detailsOfUsersABC.map((arr) => {
            return <IndividualUser
                key={arr.name}
                nameXYZ={arr.name}
                ageXYZ={arr.age}
            />
        })}

        {/* <IndividualUser nameXYZ={nameABC} ageXYZ={ageABC}></IndividualUser> */}

    </div>


}

export default ListOfUsers;