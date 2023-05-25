import CorpoEngenharia from "@/src/components/Engenharia/CorpoEngenharia";
import CabecalhoEngenharia from "../../components/Engenharia/CabecalhoEngenharia";
import styles from "../../styles/engenharia.module.css"
export default function Engenharia() {
    return (
        <div className={styles.containerGlobal}>
            <CabecalhoEngenharia />
            <CorpoEngenharia />
        </div>
    )
}