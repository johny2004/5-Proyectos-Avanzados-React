import CalculatorState from "./calculatorState";
import CalculatorScreen from "./calculatorScreen";
import Button from "./button";

import  "./calculator.css";
export default function Calculator() {
  return (
    <CalculatorState>
      <div className="calculatorContainer"> 

        <CalculatorScreen/>
       <div className ="container">
        <Button type="action" value="AC"/>
        <Button type="operation" value="%"/>
        <Button type="action" value="<=="/>
        <Button type="operation" value="/"/>
        <Button type="number" value="7"/>
        <Button type="number" value="8"/>
        <Button type="number" value="9"/>
        <Button type="operation" value="*"/>
        <Button type="number" value="4"/>
        <Button type="number" value="5"/>
        <Button type="number" value="6"/>
        <Button type="operation" value="-"/>
        <Button type="number" value="1"/>
        <Button type="number" value="2"/>
        <Button type="number" value="3"/>
        <Button type="operation" value="+"/>
        <Button type="action" value="+/-"/>
        <Button type="number" value="0"/>
        <Button type="number" value="."/>
        <Button type="operation" value="="/>
        </div>
      </div>
    </CalculatorState>
  );
}
