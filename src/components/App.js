import React, { useState } from 'react';
import Display from './components/Display';

// import ButtNum from './components/ButtNum';
// import ButtOpe from './components/ButtOpe';
// import ButtEqu from './components/ButtEqu';


function App() {
  const [values, setValues] = useState({
    'result' : '0',   // valor que va en el display
    'value' : '',     // número actual
    'value_aux' : 0,  // valor 1 de una operacion
    'operator' : '',  // operador tecleado
    'number' : 0      // bandera indica si empezamos un nuevo número
  });
  
  return (
    <div class="fondo">
      <p>Aqui van los componentes de la calculadora</p>
      
      {

      <Display values={values}/>
      //<ButtNum values={values} setValues={setValues}/>
      //<ButtEqu values={values} setValues={setValues}/>
      //<ButtOpe values={values} setValues={setValues}/> 
      
      }

    </div>
  );
}

export default App;