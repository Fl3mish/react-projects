import Box from "./components/Box";

export default function App() {
  return (
    <>
      {/* <div>
        <Box
          animal="cat"
          classes="flex justify-center h-64 p-4 m-4 border-2 border-blue-400"
        ></Box>
        <Box classes="flex justify-between h-64 p-4 m-4 border-2 border-red-400"></Box>
        <Box
          animal="cat"
          classes="flex justify-center h-64 p-4 m-4 border-2 border-green-400"
        ></Box>
        <Box classes="flex justify-around items-end h-64 p-4 m-4 border-2 border-purple-400"></Box>
        <Box
          animal="cat"
          classes="flex justify-between items-center h-64 p-4 m-4 border-2 border-orange-400"
        ></Box>
      </div> */}

      <div>
        <Box
          animal="dog"
          classes="flex justify-center items-center h-96 p-4 m-4 border-2 border-blue-400"
        />
        <Box
          animal="dog"
          classes="flex flex-col justify-between items-center h-96 p-4 m-4 border-2 border-red-400"
        />
        <Box
          animal="dog"
          classes="flex flex-col justify-end items-center h-96 p-4 m-4 border-2 border-green-400"
        />
        <Box
          animal="dog"
          classes="flex flex-col justify-around items-end  h-96 p-4 m-4 border-2 border-purple-400"
        />
        <Box
          animal="dog"
          classes="flex flex-col justify-center items-center h-96 p-4 m-4 border-2 border-orange-400"
        />
      </div>
    </>
  );
}
