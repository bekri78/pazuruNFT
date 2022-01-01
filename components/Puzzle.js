import React, { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import ModalePuzzle from "./ModalePuzzle";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

export default function Puzzle() {
  const [modaleSuccess, setModaleSuccess] = useState(false);
  return (
    <>
      <JigsawPuzzle
        imageSrc="https://journalducoin-com.exactdn.com/app/uploads/2021/10/singe-record.png?strip=all&lossy=1&quality=66&resize=631%2C631&ssl=1"
        rows={2}
        columns={3}
        onSolved={() => setModaleSuccess(true)}
      />
      <ModalePuzzle
        modaleSuccess={modaleSuccess}
        modaleInfo={(modaleInfo) => {
          setModaleSuccess(modaleInfo);
        }}
      />
    </>
  );
}
