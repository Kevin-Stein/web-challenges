import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: '🍌 Banana',
      color: 'yellow',
    },
    {
      id: 1338,
      name: '🍎 Apple',
      color: 'red',
    },
    {
      id: 1339,
      name: '🍉 Melon',
      color: 'green',
    },
    {
      id: 1340,
      name: '🍋 Lemon',
      color: 'yellow',
    },
    {
      id: 1341,
      name: '🍍 Pineapple',
      color: 'brown',
    }
  ];

  return (
    <div className="app">
      {fruits.map((fruit)=>{
        return(
          <div key={fruit.id}>
            <Card
              id={fruit.id}
              name={fruit.name}
              color={fruit.color}
              />
          </div>
        );
      })}
    </div>  
      
  );
}
      

          

      
      
      
      
