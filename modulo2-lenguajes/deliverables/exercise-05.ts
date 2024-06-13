console.log("************** DELIVERABLE 05 *********************");

// 5. Slot Machine

// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que
// juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas
// que automáticamente se irá incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe
// generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado
// en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

// "Congratulations!!!. You won <número de monedas> coins!!";

// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso
// contrario deberá mostrar otro mensaje:

// "Good luck next time!!".

// Ejemplo de uso

const getRandomBoolean = () => {
  return Math.random() >= 0.5;
};

class SlothMachine {
  private coinsCount: number;

  constructor() {
    this.coinsCount = 0;
  }

  play(): void {
    this.coinsCount++;
    const boolean1 = getRandomBoolean();
    const boolean2 = getRandomBoolean();
    const boolean3 = getRandomBoolean();
    
    if (boolean1 && boolean2 && boolean3) {
      console.log(`Congratulations!!!. You won ${this.coinsCount} coins!!`);
      this.coinsCount = 0; // Reiniciar el contador de monedas
    } else {
      console.log("Good luck next time!!);
    }  
  }
}


const machine1 = new SlothMachine();
machine1.play(); // Puede ser "Good luck next time!!" o "Congratulations!!!. You won X coins!!"
machine1.play(); // Puede ser "Good luck next time!!" o "Congratulations!!!. You won X coins!!"
machine1.play(); // Puede ser "Good luck next time!!" o "Congratulations!!!. You won X coins!!"
machine1.play(); // Puede ser "Good luck next time!!" o "Congratulations!!!. You won X coins!!"
machine1.play(); // Puede ser "Good luck next time!!" o "Congratulations!!!. You won X coins!!"

