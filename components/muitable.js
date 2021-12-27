import * as React from "react";
import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow className="tableRowMui">
              <TableCell align="left" className="tableCell nameAndImage">
                <div className="conteneurLogo">
                  <div style={{ paddingRight: "5%" }}>
                    <Image src={image} alt="crypto" width="20" height="20" />
                  </div>
                  {name}{" "}
                </div>
              </TableCell>
              <TableCell align="left" className="tableCell">
                {price}
              </TableCell>
              <TableCell align="left" className="tableCell">
                {volume}
              </TableCell>
              <TableCell align="left" className="tableCell">
                {priceChange < 0 && priceChange ? (
                  <p className="red">{priceChange}%</p>
                ) : (
                  <p className="green">{priceChange}%</p>
                )}
              </TableCell>
              <TableCell align="left" className="tableCell">
                {marketcap}
              </TableCell>
              <TableCell align="left" className="tableCell">
                {symbol}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
