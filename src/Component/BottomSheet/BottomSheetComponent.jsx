import { useRef, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import React from "react";

function BottomSheetComponent({ snapPoints, children }) {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef()
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet
        ref={sheetRef}
        onSpringStart={() => {
          console.log("Transition from:", sheetRef.current.height);
          requestAnimationFrame(() =>
            console.log("Transition to:", sheetRef.current.height)
          );
        }}
        onSpringEnd={() =>
          console.log("Finished transition to:", sheetRef.current.height)
        }
        open={open}
      >
        My awesome content here
      </BottomSheet>
    </>
  );
}

export default BottomSheetComponent;
