import { ButtonNext } from "../ButtonNext/ButtonNext";
import { Passenger } from "../Passenger/Passenger";
import { ButtonAddPassenger } from "./ButtonAddPassenger/ButtonAddPassenger";

export const Passengers = () => {

    return(
        <div className="passengers__wrapper">
            <>
                <Passenger/>
                <ButtonAddPassenger/>
                <ButtonNext link={'/pay'}/>
            </>
        </div>
    )
}