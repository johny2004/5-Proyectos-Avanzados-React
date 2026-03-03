import { useAppContext } from "../components/calculatorState";
export default function CalculatorScreen() {

    const calculator = useAppContext();
    return (
        <div className="calculatorScreen">
            <div>
               <span>Memory {calculator.memory}</span> 
               <span>Operation {calculator.operation}</span>
               <span>Decimal: {calculator.currentValue}{calculator.isDecimal ? "decimal" : "entero"}</span>

            </div>
            <div className="calculatorCurrentValue">  {calculator.currentValue}{calculator.isDecimal ? "." : ""}</div>
        </div>
    )
}