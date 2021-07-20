import React, { useState } from "react";

import { Grid, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface IBoardItem {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 12,
    borderRadius: 4,
    boxShadow: `rgba(50, 50, 93, 0.45) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`,
  },
  item: {
    minHeight: 200,
    border: `1px solid #001d3d`,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#ffd60a",
      // backgroundColor: "#dee2e6",
    },
  },
  text: {
    fontFamily: "cursive",
  },
  winRols: {
    color: "red",
    background: "black",
  },
}));

export default function BoardItem(props: IBoardItem) {
  const classes = useStyles();
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [payerTurn, setPlayerTurn] = useState("X");

  const handleClick = (i: number) => {
    let checkWin = null;
    const oldBoard = board;
    if (oldBoard[i] != "") return;
    oldBoard[i] = payerTurn;

    const winning_combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winning_combos.length; i++) {
      const winning_row = winning_combos[i];
      const p1 = winning_row[0];
      const p2 = winning_row[1];
      const p3 = winning_row[2];
      if (
        oldBoard[p1] != "" &&
        oldBoard[p1] == oldBoard[p2] &&
        oldBoard[p2] == oldBoard[p3]
      ) {
        checkWin = true;
        setTimeout(() => {
          alert(`WENNNNNNNNNNNNNNNNNNN! ${payerTurn}`);
          setBoard(["", "", "", "", "", "", "", "", ""]);
          return;
        }, 100);
      }
    }

    setPlayerTurn(payerTurn == "X" ? "O" : "X");
    setBoard(oldBoard);
    if (!checkWin && board.indexOf("") == -1) {
      setTimeout(() => {
        alert(`TIE !`);
        setBoard(["", "", "", "", "", "", "", "", ""]);
        return;
      }, 100);
    }
  };
  return (
    <Grid
      item
      xs={6}
      container
      direction="row"
      className={classes.root}
      // spacing={2}
    >
      {board?.map((item, index) => (
        <Grid key={index} item xs={4} onClick={() => handleClick(index)}>
          <Grid
            className={classes.item}
            id={`item-${index}`}
            container
            justify="center"
            alignItems="center"
          >
            <Typography variant="h1" className={classes.text}>
              {item}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
