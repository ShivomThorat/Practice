import React from 'react'; 


function Box(props) {
  return (
   
    <div
     
      key={props.boxNumber}
      
      className="
        w-[80px] h-[80px] bg-black               
        sm:w-[96px] sm:h-[96px] sm:bg-red-500     
        md:w-[128px] md:h-[128px] md:bg-blue-500 
        rounded-lg                              
        flex items-center justify-center        
        text-black                              
        text-sm                                 
        font-semibold                           
        shadow-md                             
        shrink-0                               
      "
    >
     
      {`This is box ${props.boxNumber}`}
    </div>
  );
}


function App() {
  return (
   
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-sans">
     
      <div className="flex flex-wrap gap-4 p-6 bg-white rounded-xl shadow-lg max-w-6xl mx-auto">
       
        <Box boxNumber={1} />
        <Box boxNumber={2} />
        <Box boxNumber={3} />
        <Box boxNumber={4} />
        <Box boxNumber={5} />
        <Box boxNumber={6} />
        <Box boxNumber={7} />
        <Box boxNumber={8} />
        <Box boxNumber={9} />
        <Box boxNumber={10} />
        <Box boxNumber={11} />
        <Box boxNumber={12} />
        <Box boxNumber={13} />
        <Box boxNumber={14} />
        <Box boxNumber={15} />
        <Box boxNumber={16} />
        <Box boxNumber={17} />
        <Box boxNumber={18} />
        <Box boxNumber={19} />
        <Box boxNumber={20} />
      </div>
    </div>
  );
}


export default App;
