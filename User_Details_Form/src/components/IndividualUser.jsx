// import styles from "./IndividualUser.module.css";

const IndividualUser = ({ nameXYZ, ageXYZ, collegeXYZ }) => {
    // return <div className={styles.individual}>

    //     {/* <div> {nameXYZ} </div>
    //     <div> {ageXYZ} </div> */}

    //     <div> {nameXYZ} {ageXYZ} </div>

    // </div>

    return <li> {nameXYZ} {ageXYZ} years old and studies in {collegeXYZ}. </li>
}

export default IndividualUser;