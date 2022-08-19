function getInputFieldValueById(inputFieldId){
    const inputFiled = document.getElementById(inputFieldId);
    const inputFiledValueString = inputFiled.value;
    const inputFiledValue = parseFloat(inputFiledValueString);
    inputFiled.value = '';
    return inputFiledValue;
   }
   
   function getElementValueById(elementId){
       const element = document.getElementById(elementId);
       const elementValueString = element.innerText;
       const elementValue = parseFloat(elementValueString);
       return elementValue;
   }

   
   function setTextElementValueById(elementId, newValue){
       const textElement = document.getElementById(elementId);
       textElement.innerText = newValue;
   }
